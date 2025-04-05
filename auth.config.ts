import { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const authConfig:NextAuthConfig = {
  providers: [GitHub, Google],
}

export default authConfig;