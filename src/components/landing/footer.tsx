'use client'

import { navigations, socialMedia } from '@/constants'
import footerData from '@/data/footerData'
import { CodeIcon, NavigationIcon, ShareIcon } from '@/icons'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const Footer = () => {
  return (
    <footer id="footer" className="flex flex-col gap-8 justify-between mb-12 mt-20 pt-6 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 className="flex items-center text-2xl font-bold mb-2 gap-2">
            <span className="text-black-default fill-black-default">
              <CodeIcon size={20} className="text-black-default dark:text-white" />
            </span>
            {footerData.brand.name}
          </h3>
          <p className="text-sm text-gray-800 dark:text-white">{footerData.brand.description}</p>
        </div>

        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
            <NavigationIcon size={20} />
            Navigation
          </h4>
          <ul className="flex flex-col gap-2 text-sm">
            {navigations.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
            <ShareIcon size={20} />
            Find Me Online
          </h4>
          <ul className="flex gap-4 items-center">
            {socialMedia.map((item) => (
              <Tooltip delayDuration={200} key={item.id}>
                <TooltipTrigger asChild>
                  <Link
                    className="block place-items-center place-content-center p-[10px] bg-black-100/80 dark:bg-white/15 rounded-md text-white"
                    href={item.link}
                  >
                    <item.icon className="w-5 h-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-800 text-white">
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </ul>
        </div>
      </div>
      <hr className="mt-8 border-gray-300 dark:border-gray-700 h-[1px] w-full" />
      <h3 className="text-sm text-center text-gray-800 dark:text-gray-300">
        &copy; {new Date().getFullYear()} TtPhongdev. All right reserved
      </h3>
    </footer>
  )
}

export default Footer
