import { useEffect, useState } from 'react'
import { Phone, MessageCircle, Menu } from 'lucide-react'
import Logo from './Logo'
import CTAButton from './CTAButton'
import MobileDrawer from './MobileDrawer'
import { NAV_LINKS } from '../data/nav'
import { BUSINESS } from '../data/business'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? 'border-b border-line bg-ink/90 backdrop-blur-md'
            : 'border-b border-transparent bg-gradient-to-b from-black/60 to-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-edge flex h-18 items-center justify-between py-4"
        >
          <a href="#home" aria-label="Superfix Auto Center — Home">
            <Logo />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold tracking-wide text-silver transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <CTAButton href={BUSINESS.phoneHref} variant="secondary" icon={Phone}>
              Call Now
            </CTAButton>
            <CTAButton href={BUSINESS.whatsappHref} variant="primary" icon={MessageCircle}>
              WhatsApp
            </CTAButton>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            className="flex size-11 items-center justify-center rounded-sm border border-white/15 text-white lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
