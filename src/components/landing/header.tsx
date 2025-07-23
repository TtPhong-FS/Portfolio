import { House } from '@/assets'
import { navItems } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import ThemeToggle from '../theme-toggle'

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 mt-4 px-4">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full">
          <h1 className="block text-center text-xl text-black-default dark:text-white font-bold">TtPhong.dev</h1>
          <nav className="hidden md:flex w-full z-50 justify-center lg:justify-center items-center">
            <ul className="flex h-full items-center shadow-sm gap-7 text-white lg:gap-8 bg-white dark:bg-slate-900 px-6 lg:px-8 py-4 dark:border-none border rounded-full">
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    'text-slate-50 items-center flex lg:flex-none flex-col gap-2 lg:gap-0 dark:hover:text-slate-400'
                  )}
                >
                  <span className="block text-black-default dark:text-white lg:hidden">
                    <navItem.icon />
                  </span>
                  <span className="block text-black-default dark:text-white text-xs lg:text-sm text-center">
                    {navItem.name}
                  </span>
                </Link>
              ))}
            </ul>
          </nav>
          <Link className="block md:hidden" href={'#home'}>
            <House className="w-5 h-5" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
