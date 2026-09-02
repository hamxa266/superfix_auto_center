import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { GALLERY_IMAGES } from '../data/images'

export default function Gallery() {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Inside The Workshop"
          heading="REAL JOBS. REAL TECHNICIANS."
          copy="A look at the day-to-day work that keeps Al Qusais drivers on the road."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {GALLERY_IMAGES.map(({ src, alt, label }, index) => (
            <Reveal key={src} delay={index * 0.08} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <span className="absolute bottom-3 left-3 font-display text-xs font-bold tracking-wide text-white uppercase sm:bottom-4 sm:left-4 sm:text-sm">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
