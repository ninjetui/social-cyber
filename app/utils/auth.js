import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from "./connect";


export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
        }),
        GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
      ],
      session: {
        jwt: true,
      },
      jwt: {
        secret: process.env.NEXTAUTH_SECRET,
      },
      secret: process.env.NEXTAUTH_SECRET,
}