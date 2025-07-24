'use client'
import { navigations } from '@/constants'
import { HomeIcon, PlusIcon } from '@/icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from '../theme-toggle'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
const Header = () => {
  const [activeId, setActiveId] = useState('home')

  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed w-full top-0 z-50 py-5 px-4 bg-white dark:bg-black-100">
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full">
            <h1 className="block text-center text-xl text-black-default dark:text-white font-bold">TtPhong.dev</h1>
            <nav className="hidden md:flex w-full z-50 justify-center lg:justify-center items-center">
              <ul className="flex h-full items-center shadow-sm bg-white dark:bg-slate-900 dark:border-none p-2 rounded-lg">
                {navigations.map((nav) => {
                  let isVisit = activeId === nav.key
                  return (
                    <Link
                      key={`link=${nav.key}`}
                      href={nav.link}
                      onClick={() => setActiveId(nav.key)}
                      className={cn(
                        'items-center flex lg:flex-none flex-col gap-2 lg:gap-0 dark:hover:text-slate-200 px-6 py-[10px] rounded-lg',
                        isVisit ? 'bg-white' : ''
                      )}
                    >
                      <span className="block lg:hidden">
                        <nav.icon />
                      </span>
                      <span className={cn('block text-xs lg:text-sm text-center', isVisit ? 'text-black-default' : '')}>
                        {nav.name}
                      </span>
                    </Link>
                  )
                })}
              </ul>
            </nav>
            <Link
              className={cn('block md:hidden p-[13px] rounded-lg', activeId === 'home' ? 'bg-purple' : '')}
              href={'#home'}
              onClick={() => setActiveId('home')}
            >
              <HomeIcon className="w-5 h-5" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="block md:hidden fixed bottom-12 right-4 z-50">
        <div
          onMouseLeave={() => setOpen(false)}
          className=" fixed bottom-12 right-6 md:hidden flex flex-col items-center space-y-4"
        >
          <div
            className={`flex flex-col items-center space-y-2 transition-all duration-300 ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            {navigations
              .map((nav) => {
                let isVisit = activeId === nav.key
                return (
                  <Link
                    href={nav.link}
                    key={nav.name}
                    onClick={() => setActiveId(nav.key)}
                    className={cn(
                      'p-[13px] rounded-lg dark:shadow-lg shadow-md dark:shadow-gray-400 shadow-gray-500 text-xs',
                      isVisit ? 'bg-purple' : 'bg-white dark:bg-black-default'
                    )}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <nav.icon className="w-4 h-4" />
                      </TooltipTrigger>
                      <TooltipContent>{nav.name}</TooltipContent>
                    </Tooltip>
                  </Link>
                )
              })
              .splice(1, 3)}
            <div className="bg-white dark:bg-black-100 p-[11px] rounded-lg dark:shadow-lg shadow-md dark:shadow-gray-400 shadow-gray-500 text-xs">
              <ThemeToggle />
            </div>
          </div>
          <button
            onMouseEnter={() => setOpen(true)}
            className="bg-slate-800 dark:bg-white text-white p-[13px] rounded-lg shadow-lg hover:bg-slate-900 transition"
          >
            <PlusIcon className="w-5 h-5 dark:text-black-default" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
