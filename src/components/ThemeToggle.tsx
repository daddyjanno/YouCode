'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    console.log(theme)

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            <Sun className="h-6 w-[1.3rem] dark:hidden"></Sun>
            <Moon className="hidden size-5 dark:block"></Moon>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
