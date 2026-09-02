import {
  Wind,
  Disc,
  BatteryCharging,
  CircleDot,
  Droplet,
  ScanLine,
  Wrench,
  Zap,
  SprayCan,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

export const SERVICES: Service[] = [
  {
    number: '01',
    icon: Wind,
    title: 'AC Service',
    description: 'Cooling system inspection, repair and gas refill.',
  },
  {
    number: '02',
    icon: Disc,
    title: 'Brake Service',
    description: 'Brake inspection, pads, rotors and replacement.',
  },
  {
    number: '03',
    icon: BatteryCharging,
    title: 'Battery Service',
    description: 'Battery testing, replacement and electrical checks.',
  },
  {
    number: '04',
    icon: CircleDot,
    title: 'Tyres & Wheel Alignment',
    description: 'Tyre replacement, puncture repair and wheel alignment.',
  },
  {
    number: '05',
    icon: Droplet,
    title: 'Oil & Maintenance',
    description: 'Oil changes and preventative vehicle maintenance.',
  },
  {
    number: '06',
    icon: ScanLine,
    title: 'Diagnostics',
    description: 'Modern diagnostic equipment to identify vehicle problems accurately.',
  },
  {
    number: '07',
    icon: Wrench,
    title: 'Mechanical Repair',
    description: 'Professional repair for major and minor mechanical issues.',
  },
  {
    number: '08',
    icon: Zap,
    title: 'Electrical Repair',
    description: 'Electrical diagnosis and repair for modern vehicles.',
  },
  {
    number: '09',
    icon: SprayCan,
    title: 'Body Repair',
    description: 'Professional vehicle body repair and restoration.',
  },
]
