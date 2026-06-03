import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import TwitchProvider from "next-auth/providers/twitch";
import { prisma } from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID || 'mock_id',
      clientSecret: process.env.TWITCH_CLIENT_SECRET || 'mock_secret',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'mock_id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'mock_secret',
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        // @ts-expect-error
        session.user.id = token.sub
      }
      return session
    },
  },
}
