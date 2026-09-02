import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Phone, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import CTAButton from './CTAButton'
import { NAV_LINKS } from '../data/nav'
import { BUSINESS } from '../data/business'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col justify-between bg-charcoal p-6 lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="flex size-11 items-center justify-center rounded-sm border border-white/15 text-white"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-10 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="block border-b border-line py-4 text-lg font-semibold text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <CTAButton href={BUSINESS.phoneHref} variant="secondary" icon={Phone} size="lg">
                Call Now
              </CTAButton>
              <CTAButton href={BUSINESS.whatsappHref} variant="primary" icon={MessageCircle} size="lg">
                WhatsApp
              </CTAButton>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
