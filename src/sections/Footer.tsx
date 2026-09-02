import { Phone, MapPin } from 'lucide-react'
import Logo from '../components/Logo'
import { NAV_LINKS } from '../data/nav'
import { BUSINESS } from '../data/business'

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-10 border-b border-line pb-12 sm:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-metal">
              Professional auto repair &amp; maintenance in Al Qusais, Dubai.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-display text-xs font-bold tracking-[0.2em] text-metal uppercase">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/80 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-xs font-bold tracking-[0.2em] text-metal uppercase">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-2 text-sm text-white/80 hover:text-white"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
                Al Nahda St, Al Qusais, Dubai
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-8 text-center text-xs text-metal">
          © 2026 Superfix Auto Center. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
