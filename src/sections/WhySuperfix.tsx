import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { WHY_SUPERFIX } from '../data/whySuperfix'

export default function WhySuperfix() {
  return (
    <section id="why-superfix" className="border-y border-line bg-ink py-20 sm:py-28">
      <div className="container-edge">
        <SectionHeading eyebrow="Why Superfix" heading="WHY DRIVERS CHOOSE SUPERFIX" tone="light" />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {WHY_SUPERFIX.map(({ number, title, description }, index) => (
            <Reveal
              key={number}
              delay={index * 0.08}
              className="flex flex-col gap-4 border-t border-line pt-6"
            >
              <span className="font-display text-4xl font-extrabold text-red/80">{number}</span>
              <h3 className="font-display text-lg font-bold tracking-tight text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-metal">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
