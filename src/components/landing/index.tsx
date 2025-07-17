import Contact from './contact'
import Footer from './footer'
import Header from './header'
import Hero from './hero'
import Project from './project'

export default function Landing() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-5">
      <div className="max-w-7xl w-full">
        <Header />
        <Hero />
        <Project />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
