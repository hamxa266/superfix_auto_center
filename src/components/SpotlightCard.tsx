import { useRef, type MouseEvent, type ReactNode } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
}

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative isolate overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(220px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(226,31,43,0.22), transparent 70%)',
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}
