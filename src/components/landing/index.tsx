import About from './about'
import Footer from './footer'
import Header from './header'
import Hero from './hero'
import Project from './project'

export default function Landing() {
  return (
    <>
      <Header />
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
          <About />
          {/* <Work /> */}
        <Project />
          {/* <Contact /> */}
        <Footer />
      </div>
    </main>
    </>
  )
}
