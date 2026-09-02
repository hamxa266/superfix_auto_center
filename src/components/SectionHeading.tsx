import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  heading: ReactNode
  copy?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  heading,
  copy,
  align = 'left',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const copyColor = tone === 'light' ? 'text-white/70' : 'text-metal'

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="font-display text-xs font-bold tracking-[0.3em] text-red uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {copy && <p className={`text-base leading-relaxed sm:text-lg ${copyColor}`}>{copy}</p>}
    </Reveal>
  )
}
