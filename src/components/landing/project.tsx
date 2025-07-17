import { projects } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosSend } from 'react-icons/io'
import { PinContainer } from '../ui/pin'

const Project = () => {
  return (
    <section id="projects" className="relative z-20 py-20">
      <h1 className="heading text-white mb-10">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex items-center justify-center lg:flex-row flex-col gap-4">
        {projects.map(({ des, id, img, link, technicals, title }) => (
          <div className="h-[25rem] flex flex-col items-center justify-center ">
            <PinContainer key={id} title={link} href={link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">{title}</h3>
                <div className="text-base !p-0 font-normal">
                  <span className="text-slate-500 ">{des}</span>
                </div>
                <Image src={img} width={600} height={600} alt="des" className="h-full rounded-md flex flex-1 mt-4" />
              </div>
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center justify-center">
                  {technicals.map((tech, index) => (
                    <div
                      key={index}
                      className="h-7 w-7 lg:h-8 lg:w-8 place-items-center place-content-center border-slate-600 border rounded-full"
                    >
                      <Image
                        width={600}
                        height={600}
                        alt={`Tech ${index}`}
                        src={tech}
                        className="h-4 w-4 lg:h-5 lg:w-5"
                      />
                    </div>
                  ))}
                </div>
                <Link className="flex items-center gap-1 text-purple " href={link}>
                  Check <IoIosSend className="text-lg" />
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project
