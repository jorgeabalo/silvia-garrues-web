import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { useI18n } from '../i18n'
import { site } from '../content/site'
import { Logo } from './Logo'
import { LanguageSelector } from './LanguageSelector'

/**
 * Cabecera fija (inspirada en Arnold & Itkin): logo, navegación, teléfono visible,
 * idioma y CTA destacado. Transparente sobre el hero oscuro de la home; sólida al hacer scroll.
 * En móvil: menú a pantalla completa + barra inferior de acciones (llamar / consulta).
 */
export function Header() {
  const { t, to, routeKey } = useI18n()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const overDark = routeKey === 'home' && !scrolled && !open

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open])

  const links = [
    { href: to('services'), label: t.ui.specialties },
    { href: to('silvia'), label: t.ui.silvia },
    { href: to('articles'), label: t.ui.articles },
    { href: to('home', 'preguntas'), label: t.ui.faq, hash: true },
    { href: to('contact'), label: t.ui.contact },
  ]

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,color] duration-500 ${
          overDark ? 'bg-transparent text-white' : 'bg-paper/90 text-ink shadow-[0_1px_0_rgba(23,34,56,.08)] backdrop-blur-xl'
        }`}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
          {t.ui.skip}
        </a>
        <div className="page-x flex h-[72px] items-center justify-between gap-4 lg:h-20">
          <Link to={to('home')} aria-label={t.ui.home} className="flex items-center gap-3">
            <Logo height={overDark ? 36 : 42} tile={overDark} />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
            {links.map((l) =>
              l.hash ? (
                <a key={l.label} href={l.href} className={`rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${overDark ? 'text-white/80 hover:text-white' : 'text-ink/70 hover:text-ink'}`}>
                  {l.label}
                </a>
              ) : (
                <NavLink
                  key={l.label}
                  to={l.href}
                  className={({ isActive }) =>
                    `rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                      isActive ? (overDark ? 'text-white' : 'text-intense') : overDark ? 'text-white/80 hover:text-white' : 'text-ink/70 hover:text-ink'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href={site.phones[0].href} className={`hidden items-center gap-2 text-[14.5px] font-semibold xl:flex ${overDark ? 'text-white' : 'text-ink'}`}>
              <Phone className="h-4 w-4 text-sky" strokeWidth={2} /> {site.phones[0].label}
            </a>
            <LanguageSelector tone={overDark ? 'light' : 'dark'} className="hidden sm:flex" />
            <Link to={to('contact')} className="hidden min-h-[44px] items-center rounded-full bg-sky px-5 text-[14px] font-semibold text-night shadow-[0_10px_30px_-12px_rgba(111,168,255,.8)] transition-colors hover:bg-[#8FBBFF] md:inline-flex">
              {t.ui.book}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu-overlay"
              aria-label={open ? t.ui.close : t.ui.menu}
              className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${overDark ? 'bg-white/10 text-white' : 'bg-mist text-ink'}`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil a pantalla completa */}
      <div
        id="menu-overlay"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-night px-6 pb-28 pt-24 text-white transition-[opacity,visibility] duration-500 lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <nav className="flex flex-col">
          {[{ href: to('home'), label: t.ui.home }, ...links].map((l, i) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-[2rem] font-medium tracking-[-0.03em] transition-transform duration-700"
              style={{ transform: open ? 'none' : 'translateY(16px)', transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-4">
          {site.phones.map((p) => (
            <a key={p.href} href={p.href} className="flex items-center gap-3 text-lg font-medium">
              <Phone className="h-5 w-5 text-sky" /> {p.label}
            </a>
          ))}
          <LanguageSelector tone="light" />
        </div>
      </div>

      {/* Barra de acciones móvil */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink/10 bg-paper/95 p-2 pb-[max(8px,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
        <a href={site.phones[0].href} className="flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-mist text-[15px] font-semibold text-ink">
          <Phone className="h-4 w-4" /> {t.cine.call}
        </a>
        <Link to={to('contact')} className="flex min-h-[50px] items-center justify-center rounded-2xl bg-abyss text-[15px] font-semibold text-white">
          {t.ui.book}
        </Link>
      </div>
    </>
  )
}
