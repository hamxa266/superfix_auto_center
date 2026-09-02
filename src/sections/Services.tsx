import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import SpotlightCard from '../components/SpotlightCard'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="bg-ink py-20 sm:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="What We Do"
          heading="EVERYTHING YOUR CAR NEEDS."
          copy="From routine maintenance to complex repairs, our technicians handle the job with the right tools and expertise."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ number, icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.08}>
              <SpotlightCard className="h-full bg-charcoal transition-colors duration-300 hover:bg-graphite">
                <div className="flex h-full flex-col gap-5 p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-metal">{number}</span>
                    <Icon
                      className="size-6 text-red transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                      aria-hidden="true"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-metal">{description}</p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
