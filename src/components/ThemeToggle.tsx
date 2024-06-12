'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'ligth')}
        >
            <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden"></Sun>
            <Moon className="hidden h-5 w-5 dark:block"></Moon>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
