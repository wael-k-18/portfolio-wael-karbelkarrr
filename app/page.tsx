import { Metadata } from 'next'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Wael Karbelkar | Home',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Publications />
      <Contact />
      <Footer />
    </main>
  )
}