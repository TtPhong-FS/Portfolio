'use client'

import { navigations } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [activeId, setactiveId] = useState('home')

  return (
    <nav className="flex w-full z-50 justify-center lg:justify-center items-center">
      <ul className="flex h-full items-center shadow-sm bg-white dark:bg-slate-900 dark:border-none p-2 rounded-lg">
        {navigations.map((nav) => {
          let isVisit = activeId === nav.key
          return (
            <Link
              key={`link=${nav.key}`}
              href={nav.link}
              onClick={() => setactiveId(nav.key)}
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
  )
}

export default Navbar
