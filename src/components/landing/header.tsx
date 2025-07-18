'use client'

import { Moon } from '@/assets'
import { navItems } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

const Header = () => {
  const changeTheme = () => {
    toast.info('Tính đang được phát triển. Vui lòng thử lại sau!')
  }

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="w-full max-w-7xl mx-auto z-50 py-4 flex justify-between items-center">
        <h1 className="hidden lg:block text-center md:text-xl text-white font-semibold">TtPhong.dev</h1>
        <ul className="flex h-full items-center shadow-sm gap-8 text-white lg:gap-8 bg-slate-900 px-6 lg:px-8 py-4 border-white/[0.2] rounded-full">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'text-slate-50 items-center flex lg:flex-none flex-col gap-2 lg:gap-0 dark:hover:text-slate-400'
              )}
            >
              <span className="block lg:hidden">
                <navItem.icon />
              </span>
              <span className="block text-xs lg:text-sm">{navItem.name}</span>
            </Link>
          ))}
        </ul>
        <button onClick={changeTheme} className="hidden lg:block">
          <Image src={Moon.src} alt="" width={500} height={500} className="w-7 h-7" />
        </button>
      </nav>
    </header>
  )
}

export default Header
