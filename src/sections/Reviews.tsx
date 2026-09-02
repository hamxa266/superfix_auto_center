import { Star, Quote } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTAButton from '../components/CTAButton'
import CountUp from '../components/CountUp'
import { BUSINESS } from '../data/business'
import { TESTIMONIALS } from '../data/testimonials'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ink py-20 sm:py-28">
      <div className="container-edge">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading align="center" heading="TRUSTED BY DUBAI DRIVERS." className="mx-auto" />

          <div className="flex items-center gap-1.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-red text-red" />
            ))}
          </div>
          <p className="text-sm font-semibold text-white">
            <span className="text-lg">
              <CountUp target={parseFloat(BUSINESS.rating)} decimals={1} /> / 5
            </span>{' '}
            · <CountUp target={parseInt(BUSINESS.reviewCount.replace(/\D/g, ''), 10)} suffix="+" />{' '}
            Google Reviews
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, author }, index) => (
            <Reveal
              key={quote}
              delay={index * 0.1}
              className="flex flex-col gap-5 rounded-md border border-line bg-charcoal p-7"
            >
              <Quote className="size-6 text-red/70" aria-hidden="true" />
              <p className="grow text-base leading-relaxed text-white/90">&ldquo;{quote}&rdquo;</p>
              <span className="text-sm font-semibold text-metal">{author}</span>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer" variant="secondary" size="lg">
            Read More Reviews
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
