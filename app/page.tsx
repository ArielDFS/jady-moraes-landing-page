import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { HowItWorks } from '@/sections/HowItWorks'
import { Services } from '@/sections/Services'
import { Portfolio } from '@/sections/Portfolio'
import { Testimonials } from '@/sections/Testimonials'
import { FAQ } from '@/sections/FAQ'
import { Contact } from '@/sections/Contact'
import { FinalCTA } from '@/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
