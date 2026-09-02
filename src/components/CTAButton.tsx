import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  icon?: LucideIcon
  children: ReactNode
  className?: string
}

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type CTAButtonProps = AnchorProps | ButtonProps

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    'bg-red text-white hover:bg-red-bright active:bg-red-dim shadow-[0_8px_24px_-8px_rgba(226,31,43,0.6)]',
  secondary:
    'bg-transparent text-white border border-white/25 hover:border-white/60 hover:bg-white/5',
  ghost: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm',
}

const SIZE_STYLES: Record<Size, string> = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-sm sm:text-base',
}

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  href,
  ...rest
}: CTAButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm font-display font-bold tracking-wide uppercase transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {Icon && <Icon className="size-4 shrink-0" aria-hidden="true" strokeWidth={2.25} />}
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {Icon && <Icon className="size-4 shrink-0" aria-hidden="true" strokeWidth={2.25} />}
      {children}
    </button>
  )
}
