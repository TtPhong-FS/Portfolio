'use client'

import { Plus } from '@/assets'
import { navItems } from '@/constants'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './theme-toggle'

export function FloatingMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div onMouseLeave={() => setOpen(false)} className="fixed bottom-12 right-6 flex flex-col items-center space-y-4">
      <div
        className={`flex flex-col items-center space-y-2 transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {navItems
          .map((n) => (
            <Link
              href={n.link}
              key={n.name}
              className="bg-white dark:bg-black-100 p-[13px] rounded-lg dark:shadow-lg shadow-md dark:shadow-gray-400 shadow-gray-500 text-xs"
            >
              <n.icon className="w-4 h-4" />
            </Link>
          ))
          .splice(1, 3)}
        <div className="bg-white dark:bg-black-100 p-[3px] rounded-lg dark:shadow-lg shadow-md dark:shadow-gray-400 shadow-gray-500 text-xs">
          <ThemeToggle />
        </div>
      </div>

      <button
        onMouseEnter={() => setOpen(true)}
        className="bg-slate-800 dark:bg-white text-white p-[13px] rounded-lg shadow-lg hover:bg-slate-900 transition"
      >
        <Plus className="w-5 h-5 dark:text-black-default" />
      </button>
    </div>
  )
}
