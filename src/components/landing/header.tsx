'use client'

import { navItems } from '@/constants'
import { FloatingNavbar } from '../ui/floating-navbar'

const Header = () => {
  return (
    <header className="flex items-center relative z-30">
      <FloatingNavbar navItems={navItems} />
    </header>
  )
}

export default Header
