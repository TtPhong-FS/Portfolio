'use client'

import { MonitorIcon, MoonIcon, SunIcon } from '@/icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const THEME_LABEL = {
  system: 'System mode',
  dark: 'Dark mode',
  ligth: 'Light mode'
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  if (!mounted) return null

  const renderIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className="h-5 w-5" />
      case 'dark':
        return <MoonIcon className="h-5 w-5" />
      case 'system':
      default:
        return <MonitorIcon className="h-5 w-5" />
    }
  }

  const renderLabel = () => {
    switch (theme) {
      case 'light':
        return THEME_LABEL['ligth']
      case 'dark':
        return THEME_LABEL['dark']
      case 'system':
      default:
        return THEME_LABEL['system']
    }
  }

  return (
    <button onClick={toggleTheme} className="place-items-start place-content-start flex">
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>{renderIcon()}</TooltipTrigger>
        <TooltipContent className="bg-slate-800 text-white">{renderLabel()}</TooltipContent>
      </Tooltip>
    </button>
  )
}

export default ThemeToggle
