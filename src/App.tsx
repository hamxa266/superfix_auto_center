import { useState } from 'react'
import Navbar from './components/Navbar'
import StickyMobileCTA from './components/StickyMobileCTA'
import BookServiceModal from './components/BookServiceModal'
import Marquee from './components/Marquee'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import Services from './sections/Services'
import Diagnostics from './sections/Diagnostics'
import Gallery from './sections/Gallery'
import WhySuperfix from './sections/WhySuperfix'
import Process from './sections/Process'
import Reviews from './sections/Reviews'
import Contact from './sections/Contact'
import EmergencyCTA from './sections/EmergencyCTA'
import Footer from './sections/Footer'

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-sm bg-red px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="pb-16 lg:pb-0">
        <Hero onBookService={() => setBookingOpen(true)} />
        <Marquee />
        <TrustBar />
        <Services />
        <Diagnostics />
        <Gallery />
        <WhySuperfix />
        <Process />
        <Reviews />
        <Contact />
        <EmergencyCTA />
      </main>

      <Footer />

      <StickyMobileCTA />
      <BookServiceModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  )
}
