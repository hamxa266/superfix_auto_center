import { Check, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import CTAButton from '../components/CTAButton'
import { BUSINESS } from '../data/business'
import { IMAGES } from '../data/images'

const FEATURES = [
  'Professional vehicle diagnostics',
  'Experienced technicians',
  'Modern equipment',
  'Clear repair recommendations',
]

export default function Diagnostics() {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="container-edge grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="overflow-hidden rounded-md">
          <div className="aspect-[4/3] overflow-hidden rounded-md">
            <img
              src={IMAGES.diagnostics.src}
              alt={IMAGES.diagnostics.alt}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-start gap-5">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-red uppercase">
            Smart Diagnostics
          </span>
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            FIND THE PROBLEM.
            <br />
            FIX IT RIGHT.
          </h2>
          <p className="text-base leading-relaxed text-metal sm:text-lg">
            Modern diagnostic equipment helps our technicians identify vehicle problems
            accurately before recommending the right repair.
          </p>

          <ul className="flex flex-col gap-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm font-medium text-white/90 sm:text-base">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red/15">
                  <Check className="size-3.5 text-red" aria-hidden="true" strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <CTAButton href={BUSINESS.phoneHref} variant="primary" size="lg" icon={Phone} className="mt-2">
            Talk to a Technician
          </CTAButton>
        </Reveal>
      </div>
    </section>
  )
}
