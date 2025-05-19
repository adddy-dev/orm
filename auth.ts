import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import UserModel from "./models/User"
import bcrypt from "bcryptjs"
import authConfig from "./auth.config"
import connectDB from "./lib/db"

// Extend NextAuth types to include 'role'
import { Session, User as NextAuthUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
    }
  }
  interface User {
    role?: string;
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

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
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        const { email, password, role } = credentials;

        const db = await connectDB();

        const userExists = await UserModel.findOne({ email });
        if (!userExists)
          throw new customError("There's no user with this email");
        else if (userExists.oauthProvider != 'credentials')
          throw new customError(`User uses authentication using ${userExists.oauthProvider}`);

        if (typeof password != 'string')
          throw new customError("Invalid password format");

        const validPassword = await bcrypt.compare(password, userExists.password);
        if (!validPassword)
          throw new customError("Invalid credentials");

        // Role-based check: only allow login if role matches
        if (role && userExists.role && userExists.role !== role) {
          throw new customError(`You are not authorized as ${role}`);
        }

        const { password: _, ...user } = userExists.toObject();
        return user;
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
          let existingUser = await UserModel.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new UserModel({
              email: user.email,
              name: user.name,
              profileImg: user.image,
              oauthProvider: account?.provider,
              role: user.role, // Ensure default role
            });
            await newUser.save();
            existingUser = newUser;
          }
          else if (existingUser.oauthProvider != account?.provider) {
            existingUser.name = user.name;
            existingUser.profileImg = user.image;
            existingUser.oauthProvider = account?.provider;
            // Ensure role is set
            if (!existingUser.role) existingUser.role = 'user';
            await existingUser.save();
          }
          // Attach role to user object for session/jwt
          (user as any).role = existingUser.role || 'user';
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
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.email) {
        await connectDB();
        const user = await UserModel.findOne({ email: token.email }).select("-password");
        if (user) {
          session.user.id = user._id.toString();
          session.user.email = user.email;
          session.user.name = user.name;
          session.user.role = user.role;
        }
      }
      return session;
    },

  },
  pages: {
    signIn: "/signin",
  }
})