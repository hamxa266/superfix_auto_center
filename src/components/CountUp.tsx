import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  target: number
  decimals?: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function CountUp({
  target,
  decimals = 0,
  duration = 1.4,
  prefix = '',
  suffix = '',
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start: number | null = null
    let frame: number

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(target * eased)
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}
