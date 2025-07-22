'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function FallbackTheme() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (theme !== 'dark' && theme !== 'light') {
      setTheme('dark')
    }
  }, [theme])

  return null
}
