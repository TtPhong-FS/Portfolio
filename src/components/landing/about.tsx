'use client'

import { ImageMe } from '@/assets'
import { aboutData } from '@/data/aboutData'
import Image from 'next/image'

const About = () => {
  return (
    <section className="relative z-10 mb-20 lg:mb-32" id="about">
      <div className="text-center mb-16 lg:mb-20">
        <h4 className="mb-2">Introduce</h4>
        <h2 className="h2">
          About <span className="text-purple">me</span>
        </h2>
      </div>
      <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src={ImageMe.src} alt="" width={600} height={600} className="w-full rounded-3xl" />
        </div>
        <div className="flex flex-col">
          <div className="flex-1">
            <p className="text-sm lg:text-base mb-10 max-w-2xl tracking-tighter text-black-100 dark:text-gray-300">
              {aboutData.des}
            </p>
            <ul className="grid min-[378px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-4xl">
              {aboutData.meItems.map((item) => {
                return (
                  <li
                    key={item.key}
                    className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-2 duration-300 hover:bg-slate-300/10 dark:hover:bg-slate-700/30 hover:shadow-slate-700 hover:shadow-xl "
                  >
                    <item.icon className="h-7 w-7" />
                    <h3 className="py-3 font-semibold text-gray-500 dark:text-gray-200">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex-1 lg:flex items-center justify-start gap-8">
            {aboutData.toolsAndTechnicals.map(({ id, logo, title, section }) => (
              <section key={id} id={section}>
                <p className="text-sm lg:text-base mt-8 mb-3 max-w-2xl tracking-tighter text-gray-600 dark:text-gray-300 text-start">
                  {title}
                </p>
                <ul className="flex lg:flex-nowrap flex-wrap items-center gap-2 lg:gap-4">
                  {logo.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:-translate-y-2 duration-300 hover:bg-slate-300/10 dark:hover:bg-slate-700/30 hover:shadow-slate-700 hover:shadow-xl "
                      >
                        <Image width={600} height={600} className="w-6 h-6 lg:w-7 lg:h-7" src={item} alt={item} />
                      </li>
                    )
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
