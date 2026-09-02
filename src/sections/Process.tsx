import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { PROCESS_STEPS } from '../data/process'

export default function Process() {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="container-edge">
        <SectionHeading align="center" heading="FROM PROBLEM TO ROAD READY." className="mx-auto" />

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-line lg:block"
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px origin-left bg-red lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />

          {PROCESS_STEPS.map(({ number, title, description }, index) => (
            <Reveal key={number} delay={index * 0.1} className="relative flex flex-col items-center gap-4 text-center">
              <span className="relative z-10 flex size-12 items-center justify-center rounded-full border-2 border-red bg-charcoal font-display text-lg font-extrabold text-white">
                {number}
              </span>
              <h3 className="font-display text-lg font-bold tracking-tight text-white">{title}</h3>
              <p className="max-w-[16rem] text-sm leading-relaxed text-metal">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
