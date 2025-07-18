'use client'

import { infoContact } from '@/constants'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const Footer = () => {
  return (
    <footer id="footer" className="mb-10 mt-20 border-t pt-6 border-gray-700">
      <div className="text-center">
        <ul className="flex items-center justify-center gap-3">
          {infoContact.map((item) => (
            <li className="flex gap-1 items-center justify-center text-gray-300 cursor-pointer" key={item.id}>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <span className="bg-slate-800 rounded-lg p-3">
                    <item.logo size={20} />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  {item.isLink ? (
                    <Link className="text-blue-600 hover:underline" target="_blank" href={item.des}>
                      {item.des}
                    </Link>
                  ) : (
                    <p>{item.des}</p>
                  )}
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="text-sm text-center text-gray-300 mt-6">
        &copy; {new Date().getFullYear()} TtPhongdev. All right reserved
      </h3>
    </footer>
  )
}

export default Footer
