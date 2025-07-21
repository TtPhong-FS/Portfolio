import { projects } from '@/constants'
import Image from 'next/image'
import { IoIosSend } from 'react-icons/io'
import { PinContainer } from '../ui/pin'

const Project = () => {
  return (
    <section id="projects" className="relative z-20 mb-20 lg:mb-32">
      <div className="text-center mb-16 lg:mb-20">
        <h4 className="mb-2">Some projects</h4>
        <h2 className="heading">
          Recent <span className="text-purple">my projects</span>
        </h2>
      </div>
      <div className="flex items-center justify-center lg:flex-row flex-col gap-6 lg:gap-10">
        {projects.map(({ des, id, img, link, technicals, title }) => (
          <div key={id} className="h-[23rem] flex flex-col items-center justify-center ">
            <PinContainer title={link} href={link}>
              <div className="flex basis-full flex-col pb-4 px-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-72 lg:w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-black-default dark:text-slate-100">
                  {title}
                </h3>
                <div className="text-sm lg:text-base !p-0 font-normal">
                  <span className="text-slate-500">{des}</span>
                </div>
                <Image src={img} width={600} height={600} alt="des" className="h-full rounded-md flex flex-1 mt-4" />
              </div>
              <div className="flex items-center justify-between px-2 lg:px-4">
                <div className="flex items-center justify-center">
                  {technicals.map((tech, index) => (
                    <div
                      key={index}
                      className="h-7 w-7 lg:h-8 lg:w-8 place-items-center place-content-center border-slate-600 border rounded-full bg-transparent"
                    >
                      <Image
                        width={600}
                        height={600}
                        alt={`Tech ${index}`}
                        src={tech}
                        className="h-4 w-4 lg:h-5 lg:w-5 bg-gray-600 dark:bg-transparent rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-purple">
                  Check <IoIosSend className="text-lg" />
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
