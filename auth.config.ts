import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const authConfig:NextAuthConfig = {
  providers: [Google, Credentials],
}

export default authConfig;