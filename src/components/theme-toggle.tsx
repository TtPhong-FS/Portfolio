'use client'

import { Moon, Sun } from '@/assets'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

const THEME_MAP = {
  dark: 'light',
  light: 'dark'
}

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    if (theme !== 'dark' && theme !== 'light') return
    setTheme(THEME_MAP[theme] ?? 'light')
  }
  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      <Sun className="h-[1.2rem] w-[1.2rem] lg:h-[1.6rem] lg:w-[1.6rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] lg:h-[1.6rem] lg:w-[1.6rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  )
}

export default ThemeToggle
