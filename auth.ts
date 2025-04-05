import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import User from "./models/User"
import bcrypt from "bcrypt"
import authConfig from "./auth.config"
import connectDB from "./lib/db"

class customError extends CredentialsSignin {
  constructor(code: string) {
    super(code);
    this.code = code;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const db = await connectDB();

        const userExists = await User.findOne({ email });
        if (!userExists)
          throw new customError("There's no user with this email");
        else if (userExists.oauthProvider != 'credentials')
          throw new customError(`User uses authentication using ${userExists.oauthProvider}`);

        if (typeof password != 'string')
          throw new customError("Invalid password format");

        const validPassword = await bcrypt.compare(password, userExists.password);
        if (!validPassword)
          throw new customError("Invalid credentials");

        const { password: _, ...user } = userExists.toObject();

        return user;
      },
    }),

    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        await connectDB();
        // If the user signs in using Google, check if they exist and create if not
        if (user?.email) {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
              name: user.name,
              profileImg: user.image,
              oauthProvider: account?.provider,
            });
            await newUser.save();
          }
          else if (existingUser.oauthProvider != account?.provider) {
            existingUser.name = user.name;
            existingUser.profileImg = user.image;
            existingUser.oauthProvider = account?.provider;
            await existingUser.save();
          }
        }
      } catch (error) {
        console.error("Error signing in user: ", error);
        return false;
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.email) {
        await connectDB();
        const user = await User.findOne({ email: token.email }).select("-password");
        if (user) {
          session.user.id = user._id.toString();
          session.user.email = user.email;
          session.user.name = user?.name;
        }
      }
      return session;
    },

  },
  pages: {
    signIn: "/signin",
  }
})