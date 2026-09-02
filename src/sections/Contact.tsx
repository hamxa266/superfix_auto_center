import { Phone, MessageCircle, MapPin, Globe, Clock, Navigation } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTAButton from '../components/CTAButton'
import { BUSINESS } from '../data/business'

const INFO_BLOCKS = [
  {
    icon: MapPin,
    label: 'Location',
    value: BUSINESS.address,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: BUSINESS.phoneDisplay,
  },
  {
    icon: Globe,
    label: 'Website',
    value: BUSINESS.website,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-20 sm:py-28">
      <div className="container-edge grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Visit Us"
            heading="NEED YOUR CAR FIXED?"
            copy="Visit Superfix Auto Center Al Qusais or contact our team today."
          />

          <div className="mt-10 flex flex-col gap-6">
            {INFO_BLOCKS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-line bg-graphite">
                  <Icon className="size-5 text-red" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xs font-bold tracking-[0.2em] text-metal uppercase">
                    {label}
                  </p>
                  <p className="mt-1 text-base font-medium text-white">{value}</p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-line bg-graphite">
                <Clock className="size-5 text-red" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-xs font-bold tracking-[0.2em] text-metal uppercase">
                  Hours
                </p>
                {BUSINESS.hours.map((h) => (
                  <p key={h.days} className="mt-1 text-base font-medium text-white">
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={BUSINESS.phoneHref} variant="primary" size="lg" icon={Phone}>
              Call Superfix
            </CTAButton>
            <CTAButton href={BUSINESS.whatsappHref} variant="secondary" size="lg" icon={MessageCircle}>
              WhatsApp Superfix
            </CTAButton>
          </div>
        </div>

        <Reveal delay={0.1} className="flex flex-col gap-4">
          <div className="aspect-[4/3] overflow-hidden rounded-md border border-line lg:aspect-auto lg:h-full">
            <iframe
              title="Superfix Auto Center Al Qusais location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${BUSINESS.fullName}, ${BUSINESS.address}`,
              )}&output=embed`}
              className="size-full grayscale-[40%] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <CTAButton
            href={BUSINESS.directionsUrl}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            icon={Navigation}
            className="self-start"
          >
            Get Directions
          </CTAButton>
        </Reveal>
      </div>
    </section>
  )
}
