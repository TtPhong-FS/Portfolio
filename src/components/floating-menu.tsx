'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './theme-toggle'

export function FloatingMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="fixed bottom-12 right-6 flex flex-col items-center space-y-4"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`flex flex-col items-end space-y-2 transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white dark:bg-black-100 p-[4px] rounded-lg dark:shadow-lg shadow-md dark:shadow-gray-400 shadow-gray-500 text-xs">
          <ThemeToggle />
        </div>
      </div>

      <button className="bg-slate-800 dark:bg-white text-white p-[12px] rounded-lg shadow-lg hover:bg-slate-900 transition">
        <Plus className="text-white w-5 h-5 dark:text-black-default" />
      </button>
    </div>
  )
}
