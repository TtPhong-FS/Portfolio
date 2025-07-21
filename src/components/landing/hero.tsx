import Link from 'next/link'
import { BiSolidNavigation } from 'react-icons/bi'
import ButtonMagic from '../ui/button-magic'
import { Spotlight } from '../ui/spot-light'
import { TextGenerateEffect } from '../ui/text-generate-effect'

const Hero = () => {
  return (
    <section id="hero" className="mb-20 lg:mb-32 mt-36">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      {/* <GridBackground /> */}

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="tracking-tighter text-sm text-center text-slate-800 dark:text-blue-100  max-w-80">
            Hi! I'm Tran Thanh Phong
          </h2>
          <TextGenerateEffect
            className="text-center text-3xl md:text-5xl lg:text-6xl text-black-100"
            words="Frontend web developer based in Vietnam."
          />
          <p className="text-center text-black-default dark:text-white md:tracking-tighter mb-4 mt-2 text-base lg:text-lg">
            I am <span className="text-purple"> frontend developer</span> from Hanoi, Vietnam.
          </p>

          <Link href="#projects">
            <ButtonMagic position="right" icon={<BiSolidNavigation />} title="Show my work" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
