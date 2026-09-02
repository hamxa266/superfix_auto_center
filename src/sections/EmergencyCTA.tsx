import { Phone, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal'
import CTAButton from '../components/CTAButton'
import { BUSINESS } from '../data/business'
import { IMAGES } from '../data/images'

export default function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src={IMAGES.emergency.src}
          alt={IMAGES.emergency.alt}
          loading="lazy"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/60" />
      </div>

      <Reveal className="container-edge relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl leading-[1.05] font-extrabold tracking-tight text-balance text-white sm:text-5xl">
          CAR TROUBLE CAN&apos;T WAIT.
        </h2>
        <p className="max-w-md text-base leading-relaxed text-silver sm:text-lg">
          Need help with your vehicle? Contact Superfix and speak with our team.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <CTAButton href={BUSINESS.phoneHref} variant="primary" size="lg" icon={Phone}>
            Call Now
          </CTAButton>
          <CTAButton href={BUSINESS.whatsappHref} variant="secondary" size="lg" icon={MessageCircle}>
            WhatsApp
          </CTAButton>
        </div>
      </Reveal>
    </section>
  )
}
