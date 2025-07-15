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
      <Services />
      <Process />
      <Benefits />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
