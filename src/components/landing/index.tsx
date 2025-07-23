import { FloatingMenu } from '../floating-menu'
import About from './about'
import Contact from './contact'
import Footer from './footer'
import Header from './header'
import Hero from './hero'
import Project from './project'

export default function Landing() {
  return (
    <div className="">
      <Header />
      <section id="home" />
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
          <About />
          {/* <Work /> */}
          <Project />
          <Contact />
          <Footer />
        </div>
        <div className="block md:hidden fixed bottom-12 right-4 z-50">
          <FloatingMenu />
        </div>
      </main>
    </div>
  )
}
