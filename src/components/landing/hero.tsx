import { cn } from '@/lib/utils'
import Link from 'next/link'
import { BiSolidNavigation } from 'react-icons/bi'
import ButtonMagic from '../ui/button-magic'
import { Spotlight } from '../ui/spot-light'
import { TextGenerateEffect } from '../ui/text-generate-effect'

const Hero = () => {
  return (
    <section id="hero" className="pb-20 pt-36">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:80px_80px]',
            '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
            'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-tighter text-xs text-center dark:text-blue-100 text-gray-500 max-w-80">
            Portfolio
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Welcome to my portfolio, nice to meet you."
          />
          <p className="text-center text-black-default dark:text-white md:tracking-tighter mb-4 mt-2 text-sm lg:text-base">
            Hi, <span className="text-purple">I&apos;m Phong </span>is a frontend developer.
          </p>

          <Link href="#about">
            <ButtonMagic position="right" icon={<BiSolidNavigation />} title="Show my work" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
