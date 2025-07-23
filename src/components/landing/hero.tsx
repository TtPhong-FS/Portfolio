import { Navigation } from '@/assets'
import Link from 'next/link'
import ButtonMagic from '../ui/button-magic'
import { Spotlight } from '../ui/spot-light'
import { TextGenerateEffect } from '../ui/text-generate-effect'

const Hero = () => {
  return (
    <section id="hero" className="mb-20 lg:mb-32 mt-32">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      {/* <GridBackground /> */}

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h4 className="tracking-tighter text-sm text-center text-slate-800 dark:text-blue-100  max-w-80">
            Hi! I'm Tran Thanh Phong
          </h4>
          <TextGenerateEffect
            className="text-center text-3xl md:text-5xl lg:text-6xl text-black-100"
            words="Frontend web developer based in Vietnam."
          />
          <p className="text-center text-black-default dark:text-white md:tracking-tighter mb-4 mt-2 text-base lg:text-lg">
            I am <span className="text-purple"> frontend developer</span> from Hanoi, Vietnam.
          </p>

          <Link href="#projects" className="mt-8 lg:mt-12">
            <ButtonMagic position="right" icon={<Navigation className="h-4 w-4" />} title="Show my projects" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
