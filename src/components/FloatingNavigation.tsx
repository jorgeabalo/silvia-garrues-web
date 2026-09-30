import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { useI18n } from '../i18n'
import { site } from '../content/site'
import { Logo } from './Logo'
import { LanguageSelector } from './LanguageSelector'

/** Píldora flotante inferior (inspirada en V Vortex). En móvil se simplifica a logo · menú · consulta. */
export function FloatingNavigation() {
  const { t, to } = useI18n()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const links = [
    { key: 'services' as const, label: t.ui.services },
    { key: 'silvia' as const, label: t.ui.silvia },
    { key: 'articles' as const, label: t.ui.articles },
  ]

  return (
    <>
      {/* Hoja de menú móvil */}
      <div
        className={`fixed inset-0 z-40 bg-abyss/30 backdrop-blur-[2px] transition-opacity duration-500 md:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div
        id="mobile-menu"
        className={`fixed inset-x-3 bottom-[88px] z-50 origin-bottom rounded-[28px] bg-white p-6 shadow-lift transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] md:hidden ${
          open ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none invisible translate-y-4 scale-[0.97] opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={t.ui.menu}
        aria-hidden={!open}
      >
        <nav className="flex flex-col">
          {[{ key: 'home' as const, label: t.ui.home }, ...links, { key: 'contact' as const, label: t.ui.contact }].map((l) => (
            <NavLink key={l.key} to={to(l.key)} end className={({ isActive }) => `border-b border-line py-3.5 text-[26px] font-medium tracking-[-0.03em] ${isActive ? 'text-intense' : 'text-ink'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            <a href={site.phones[0].href} className="grid h-11 w-11 place-items-center rounded-full bg-mist text-abyss" aria-label={t.contact.phone}>
              <Phone className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </a>
            <a href={`mailto:${site.email}`} className="grid h-11 w-11 place-items-center rounded-full bg-mist text-abyss" aria-label={t.contact.email}>
              <Mail className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </a>
          </div>
          <LanguageSelector />
        </div>
      </div>

      {/* Píldora */}
      <nav
        aria-label="Principal"
        className="nav-enter glass-dark fixed bottom-[max(14px,env(safe-area-inset-bottom))] left-1/2 z-50 flex w-[min(calc(100vw-24px),560px)] -translate-x-1/2 items-center justify-between gap-1 rounded-full p-1.5 text-white shadow-[0_20px_50px_-15px_rgba(5,15,34,.55)] ring-1 ring-white/10 md:w-auto md:gap-2"
      >
        <Link to={to('home')} aria-label={t.ui.home} className="rounded-full p-0.5 transition-transform hover:scale-105">
          <Logo size={38} />
        </Link>

        <div className="hidden items-center md:flex">
          {links.map((l) => (
            <NavLink
              key={l.key}
              to={to(l.key)}
              className={({ isActive }) =>
                `rounded-full px-4 py-2.5 text-[14px] font-medium tracking-[-0.01em] transition-colors ${isActive ? 'bg-white/12 text-white' : 'text-white/75 hover:text-white'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex min-h-[44px] items-center gap-2 rounded-full px-4 text-[14px] font-medium text-white/85 md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          {open ? t.ui.close : t.ui.menu}
        </button>

        <Link
          to={to('contact')}
          className="flex min-h-[44px] items-center rounded-full bg-white px-5 text-[14px] font-semibold tracking-[-0.01em] text-abyss transition-colors hover:bg-haze"
        >
          {t.ui.consult}
        </Link>
      </nav>
    </>
  )
}
