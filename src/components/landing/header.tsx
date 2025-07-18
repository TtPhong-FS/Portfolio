'use client'

import { Moon } from '@/assets'
import { navItems } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

const Header = () => {
  const changeTheme = () => {
    toast.info('Tính năng đang được phát triển. Vui lòng thử lại sau!')
  }

  return (
    <header className="fixed w-full top-0 z-50 mt-2 lg:mt-4">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <h1 className="hidden lg:block text-center md:text-xl text-white font-semibold">TtPhong.dev</h1>
        <nav className="w-full  z-50 flex justify-center lg:justify-center items-center">
          <ul className="flex h-full items-center shadow-sm gap-6 text-white lg:gap-8 bg-slate-900 px-6 lg:px-8 py-4 border-white/[0.2] rounded-full">
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
                <span className="block text-xs lg:text-sm text-center">{navItem.name}</span>
              </Link>
            ))}
          </ul>
        </nav>
        <button onClick={changeTheme} className="hidden lg:inline-block">
          <Image src={Moon.src} alt="" width={600} height={600} className="w-7 h-7" />
        </button>
      </div>
    </header>
  )
}

export default Header
