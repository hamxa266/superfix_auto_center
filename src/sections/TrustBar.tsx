import { Star, Users, ShieldCheck, ScanLine } from 'lucide-react'
import CountUp from '../components/CountUp'
import { BUSINESS } from '../data/business'

const ITEMS = [
  {
    icon: Star,
    content: (
      <>
        <CountUp target={parseFloat(BUSINESS.rating)} decimals={1} /> Google Rating
      </>
    ),
  },
  {
    icon: Users,
    content: (
      <>
        <CountUp target={parseInt(BUSINESS.reviewCount.replace(/\D/g, ''), 10)} suffix="+" /> Customer
        Reviews
      </>
    ),
  },
  { icon: ShieldCheck, content: 'Certified Technicians' },
  { icon: ScanLine, content: 'Professional Diagnostics' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-line bg-charcoal">
      <div className="container-edge grid grid-cols-2 gap-y-6 py-6 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:py-7">
        {ITEMS.map(({ icon: Icon, content }, index) => (
          <div key={index} className="flex items-center gap-2.5">
            <Icon className="size-4 shrink-0 text-red" aria-hidden="true" />
            <span className="text-sm font-semibold text-white/90">{content}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
