'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function FallbackTheme() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (theme !== 'dark' && theme !== 'light' && theme !== 'system') {
      setTheme('dark')
    }
  }, [theme, setTheme])
  

  return null
}
