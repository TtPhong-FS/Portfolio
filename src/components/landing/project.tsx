import { projects } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Badge } from '../ui/badge'

const Project = () => {
  return (
    <section id="projects" className="relative z-20 mb-20 lg:mb-32">
      <div className="text-center mb-16 lg:mb-20">
        <h4 className="mb-2">Some projects</h4>
        <h2 className="h2">
          Recent <span className="text-purple">my projects</span>
        </h2>
      </div>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p) => (
          <div
            className="max-w-[350px] w-full bg-card border dark:border-gray-800 group rounded-lg overflow-hidden shadow-sm"
            key={p.id}
          >
            <div className="h-48 lg:h-52 overflow-hidden mb-4">
              <Image
                className="h-full w-full transition-transform object-cover duration-500 hover:scale-110"
                src={p.image}
                height={500}
                width={500}
                alt={p.title}
              />
            </div>
            <div className="px-4 pb-4">
              <div className="flex gap-2 flex-wrap mb-4">
                {p.tags.map((t, index) => (
                  <Badge className="p-1 px-2 border-slate-600" variant={'secondary'} key={index}>
                    {t}
                  </Badge>
                ))}
              </div>

              <h3 className="text-lg lg:text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm lg:text-base dark:text-gray-400 text-gray-600 mb-6">{p.des}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <Link
                    className="dark:hover:text-slate-300 hover:text-slate-600 text-foreground/80 transition-colors duration-300"
                    href={p.demoUrl}
                  >
                    <FaExternalLinkAlt className="w-4 h-4 lg:h-5 lg:w-5" />
                  </Link>
                  <Link
                    className="dark:hover:text-slate-300 hover:text-slate-600 text-foreground/80"
                    href={p.githubUrl}
                  >
                    <FaGithub className="w-4 h-4 lg:h-5 lg:w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project
