import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

type Variant = 'primary' | 'ghost' | 'light' | 'outline-light' | 'link'

const base =
  'group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[4px] text-[15px] font-medium tracking-[-0.01em] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] focus-visible:outline-offset-4'

const variants: Record<Variant, string> = {
  primary: 'bg-ice px-6 font-semibold text-navy hover:bg-white',
  ghost: 'border border-line px-6 text-ink hover:border-ice hover:text-ice',
  light: 'bg-ice px-7 font-semibold text-navy hover:bg-white',
  'outline-light': 'border border-white/30 px-6 text-white hover:border-white hover:bg-white/10',
  link: 'min-h-0 gap-1.5 px-0 text-ink underline decoration-line underline-offset-8 hover:text-ice hover:decoration-ice',
}

interface Props {
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: Variant
  children: ReactNode
  icon?: boolean
  className?: string
  disabled?: boolean
  external?: boolean
}

export function Button({ to, href, onClick, type = 'button', variant = 'primary', children, icon = true, className = '', disabled, external }: Props) {
  const cls = `${base} ${variants[variant]} ${disabled ? 'pointer-events-none opacity-60' : ''} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.8}
        />
      )}
    </>
  )
  if (to) return <Link to={to} className={cls}>{content}</Link>
  if (href)
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {content}
      </a>
    )
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {content}
    </button>
  )
}
