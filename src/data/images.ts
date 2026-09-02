// Curated automotive workshop photography (Unsplash), used with dark overlays.
export const IMAGES = {
  hero: {
    src: 'https://images.unsplash.com/photo-1676018366904-c083ed678e60?w=1920&q=80&auto=format&fit=crop',
    alt: 'Automotive workshop with a vehicle raised on a lift, ready for service',
  },
  diagnostics: {
    src: 'https://images.unsplash.com/photo-1623682783900-fea916dcba74?w=1400&q=80&auto=format&fit=crop',
    alt: 'Technician using a professional diagnostic scanner on a vehicle',
  },
  emergency: {
    src: 'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?w=1920&q=80&auto=format&fit=crop',
    alt: 'Mechanic working on a vehicle engine with hand tools',
  },
} as const

// Service-specific photography for the workshop gallery strip.
export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1609682932589-5ef2bd85980d?w=900&q=80&auto=format&fit=crop',
    alt: 'Close-up of a brake disc and caliper during a brake service',
    label: 'Brake Service',
  },
  {
    src: 'https://images.unsplash.com/photo-1645445522156-9ac06bc7a767?w=900&q=80&auto=format&fit=crop',
    alt: 'Technician changing a tyre on a vehicle raised on a lift',
    label: 'Tyres & Alignment',
  },
  {
    src: 'https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=900&q=80&auto=format&fit=crop',
    alt: 'Battery jump-start clamps connected under the hood',
    label: 'Battery Service',
  },
  {
    src: 'https://images.unsplash.com/photo-1717068341263-33331ec8104c?w=900&q=80&auto=format&fit=crop',
    alt: 'Close-up of engine wiring during an electrical repair',
    label: 'Electrical Repair',
  },
] as const
