import { Phone, MessageCircle } from 'lucide-react'
import { BUSINESS } from '../data/business'

export default function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 flex gap-px border-t border-line bg-charcoal pb-[env(safe-area-inset-bottom)] lg:hidden"
      role="group"
      aria-label="Quick contact"
    >
      <a
        href={BUSINESS.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 bg-charcoal py-4 text-sm font-display font-bold tracking-wide text-white uppercase"
      >
        <Phone className="size-4" aria-hidden="true" />
        Call
      </a>
      <a
        href={BUSINESS.whatsappHref}
        className="flex flex-1 items-center justify-center gap-2 bg-red py-4 text-sm font-display font-bold tracking-wide text-white uppercase"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  )
}
