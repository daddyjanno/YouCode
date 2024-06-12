import { env } from '@/lib/env'
import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export const authOptions: AuthOptions = NextAuth({
    adapter: PrismaAdapter(prisma),
    theme: {
        logo: '/images/logo-text.png',
    },
    providers: [
        GitHubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        session({ session, user }) {
            session.user.id = user.id
            session.user.image = user.image
            return session
        },
    },
})

export default NextAuth(authOptions)
