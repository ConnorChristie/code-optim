import NextAuth, { DefaultSession, NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      isAdmin: boolean
      subscriptionStatus?: string
      subscriptionPlan?: string
      credits: number
    } & DefaultSession['user']
  }

  interface User {
    isAdmin: boolean
    subscriptionStatus?: string
    subscriptionPlan?: string
    credits: number
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        session.user.isAdmin = user.isAdmin
        session.user.subscriptionStatus = user.subscriptionStatus
        session.user.subscriptionPlan = user.subscriptionPlan
        session.user.credits = user.credits
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } 