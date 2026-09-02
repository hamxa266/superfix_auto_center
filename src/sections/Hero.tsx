import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, Star, ChevronDown } from 'lucide-react'
import CTAButton from '../components/CTAButton'
import CountUp from '../components/CountUp'
import { BUSINESS } from '../data/business'
import { IMAGES } from '../data/images'

interface HeroProps {
  onBookService: () => void
}

const EASE = [0.16, 1, 0.3, 1] as const
const STAGGER = 0.12
const BASE_DELAY = 0.1

function fadeUp(index: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay: BASE_DELAY + index * STAGGER },
  }
}

export default function Hero({ onBookService }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '14%'])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-ink pt-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          style={{ y: imageY }}
          className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      <div className="container-edge relative flex flex-col items-start gap-6">
        <motion.span
          {...fadeUp(0)}
          className="font-display text-xs font-bold tracking-[0.3em] text-red uppercase sm:text-sm"
        >
          Auto Repair &amp; Maintenance • Al Qusais, Dubai
        </motion.span>

        <motion.h1
          {...fadeUp(1)}
          className="max-w-3xl font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          KEEP YOUR CAR
          <br />
          RUNNING RIGHT.
        </motion.h1>

        <motion.p
          {...fadeUp(2)}
          className="max-w-xl text-base leading-relaxed text-silver sm:text-lg"
        >
          Professional auto repair, diagnostics and maintenance from experienced technicians in
          Al Qusais.
        </motion.p>

        <motion.div {...fadeUp(3)} className="mt-2 flex flex-col gap-3 sm:flex-row">
          <CTAButton variant="primary" size="lg" onClick={onBookService}>
            Book a Service
          </CTAButton>
          <CTAButton href={BUSINESS.whatsappHref} variant="secondary" size="lg" icon={MessageCircle}>
            WhatsApp Us
          </CTAButton>
        </motion.div>

        <motion.div
          {...fadeUp(4)}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80"
        >
          <span className="flex items-center gap-1.5 font-semibold text-white">
            <Star className="size-4 fill-red text-red" aria-hidden="true" />
            <CountUp target={parseFloat(BUSINESS.rating)} decimals={1} /> Google Rating
          </span>
          <span className="h-4 w-px bg-white/20" aria-hidden="true" />
          <span>
            <CountUp target={parseInt(BUSINESS.reviewCount.replace(/\D/g, ''), 10)} suffix="+" /> Reviews
          </span>
          <span className="h-4 w-px bg-white/20" aria-hidden="true" />
          <span>Professional Diagnostics</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
