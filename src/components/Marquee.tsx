import { Wrench } from 'lucide-react'

const ITEMS = [
  'AC Service',
  'Brake Service',
  'Battery Service',
  'Tyres & Alignment',
  'Oil & Maintenance',
  'Diagnostics',
  'Mechanical Repair',
  'Electrical Repair',
  'Body Repair',
]

export default function Marquee() {
  return (
    <div
      className="group overflow-hidden border-y border-line bg-charcoal py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-3 px-6">
                <span className="font-display text-sm font-bold tracking-[0.15em] text-white/70 uppercase">
                  {item}
                </span>
                <Wrench className="size-3.5 text-red" strokeWidth={2} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
