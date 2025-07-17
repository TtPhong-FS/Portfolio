'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

export const FloatingNavbar = ({
  navItems,
  className
}: {
  navItems: {
    name: string
    link: string
    icon?: React.ElementType
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)
  const previous = useRef(0)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const prev = previous.current
      const direction = current - prev

      previous.current = current

      if (direction > 0) {
        setVisible(false)
      } else if (direction < 0) {
        setVisible(true)
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -120
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className={cn('flex fixed top-10 inset-x-0 items-center justify-between', className)}
      >
        <h1 className="hidden lg:block text-center md:text-xl mx-auto dark:text-white text-black-default font-semibold">
          TtPhong.dev
        </h1>
        <div
          className={cn(
            'flex max-w-fit mx-auto border-transparent  dark:border-white/[0.2] rounded-full dark:bg-slate-900 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-4 px-8  items-center justify-center space-x-7 '
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn('relative dark:text-neutral-50 items-center flex text-gray-900 dark:hover:text-gray-300')}
            >
              <span className="block lg:hidden">
                <navItem.icon />
              </span>
              <span className="hidden lg:block text-sm">{navItem.name}</span>
            </Link>
          ))}
          {/* <ThemeToggle /> */}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
