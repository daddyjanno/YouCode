import { getAuthSession } from '@/lib/auth'
import { LoggedInButton } from './LoggedInButton'
import { LoginButton } from './LoginButton'
import { getSession } from 'next-auth/react'

export type AuthButtonProps = {}

export const AuthButton = async (props: AuthButtonProps) => {
    const session = await getAuthSession()
    console.log(session)
    return <LoginButton />

    // if (!user) {
    //     return <LoginButton />
    // }

    // return <LoggedInButton user={session} />
}
