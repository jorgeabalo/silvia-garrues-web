import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

type Variant = 'primary' | 'ghost' | 'light' | 'outline-light' | 'link'

const base =
  'group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full text-[15px] font-medium tracking-[-0.01em] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] focus-visible:outline-offset-4'

const variants: Record<Variant, string> = {
  primary: 'bg-abyss px-6 text-white shadow-[0_10px_30px_-10px_rgba(10,30,66,.6)] hover:bg-intense hover:shadow-[0_16px_40px_-12px_rgba(30,79,214,.7)]',
  ghost: 'border border-ink/15 bg-white/60 px-6 text-ink hover:border-ink/40 hover:bg-white',
  light: 'bg-white px-7 text-abyss hover:bg-mist',
  'outline-light': 'border border-white/30 px-6 text-white hover:border-white hover:bg-white/10',
  link: 'min-h-0 gap-1.5 px-0 text-ink underline-offset-4 hover:text-intense',
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
