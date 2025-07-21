'use client'

import { socialMedia } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer id="footer" className="flex flex-col lg:flex-row gap-8 justify-between mb-8 mt-20 pt-6 items-center">
      <h3 className="text-sm text-center text-gray-800 dark:text-gray-300">
        &copy; {new Date().getFullYear()} TtPhongdev. All right reserved
      </h3>
      <ul className="flex gap-4 items-center">
        {socialMedia.map((item) => (
          <Link
            key={item.id}
            className="block place-items-center place-content-center p-[10px] bg-black-100/80 dark:bg-white/15 rounded-md"
            href={item.link}
          >
            <Image src={item.iconDark.src} width={20} height={20} alt={item.link} />
          </Link>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
