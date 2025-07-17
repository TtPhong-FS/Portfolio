import { projects } from '@/constants'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'
import { PinContainer } from '../ui/pin'
import { Spotlight } from '../ui/spot-light'

const Project = () => {
  return (
    <section id="projects" className="relative z-20 py-20">
      <h1 className="heading text-black-default dark:text-white">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, des, link, img, title, technicals }) => (
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <PinContainer href={link} title={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                {!img ? (
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-black-100">
                    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="purple" />
                    <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="white" />
                    <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
                  </div>
                ) : (
                  <Image width={600} height={600} src={img} alt="cover" className="z-10 absolute bottom-0" />
                )}
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0'
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {technicals.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`
                      }}
                    >
                      <Image height={500} width={500} src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project
