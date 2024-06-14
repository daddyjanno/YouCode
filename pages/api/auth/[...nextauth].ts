import { env } from '@/lib/env'
import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

console.log('...nextauth')

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
        GoogleProvider({
            clientId: env.GOOGLE_ID,
            clientSecret: env.GOOGLE_SECRET,
        }),
        Credentials({
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'jsmith',
                },
                password: { label: 'Password', type: 'text' },
            },
            async authorize(credentials, req) {
                if (credentials?.username && credentials?.password) {
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.username,
                        },
                    })

                    return user
                } else {
                    return null
                }
            },
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
