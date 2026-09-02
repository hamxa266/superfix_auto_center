interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`flex flex-col leading-none font-display ${className}`}>
      <span className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
        SUPERFIX
      </span>
      <span className="text-[0.6rem] font-semibold tracking-[0.35em] text-red">
        AUTO CENTER
      </span>
    </span>
  )
}
