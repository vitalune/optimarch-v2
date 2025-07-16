import Navigation from '@/components/ui/Navigation'
import Hero from '@/components/ui/Hero'
import Services from '@/components/ui/Services'
import Process from '@/components/ui/Process'
import Benefits from '@/components/ui/Benefits'
import About from '@/components/ui/About'
import Contact from '@/components/ui/Contact'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="h-16"></div>
      <Services />
      <div className="h-16"></div>
      <Process />
      <div className="h-16"></div>
      <Benefits />
      <div className="h-16"></div>
      <About />
      <div className="h-16"></div>
      <Contact />
      <Footer />
    </div>
  )
}
