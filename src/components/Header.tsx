import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Phone } from 'lucide-react'
import { useI18n } from '../i18n'
import { site } from '../content/site'
import { practiceAreas } from '../content/practice'
import { Logo } from './Logo'
import { LanguageSelector } from './LanguageSelector'

/**
 * Cabecera estilo Leome: logo ADOS a la izquierda, teléfono + botón «Menú» a la derecha.
 * El menú se abre a pantalla completa con animación escalonada.
 * En móvil: barra inferior fija con «Llamar» y «Pedir cita».
 */
export function Header() {
  const { t, to, toArea, lang } = useI18n()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open])

  const links = [
    { href: to('home'), label: t.ui.home },
    { href: to('services'), label: t.ui.specialties },
    { href: to('silvia'), label: t.ui.silvia },
    { href: to('articles'), label: t.ui.articles },
    { href: to('home', 'preguntas'), label: t.ui.faq },
    { href: to('contact'), label: t.ui.contact },
  ]
  const main = practiceAreas.filter((a) => a.tier === 'main')

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
          scrolled && !open ? 'border-b border-line/60 bg-paper/80 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-ice focus:px-4 focus:py-2 focus:text-navy">
          {t.ui.skip}
        </a>
        <div className="flex h-[72px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[88px] lg:px-10">
          <Link to={to('home')} aria-label={t.ui.home} className="flex items-center">
            <Logo height={scrolled ? 38 : 46} className="transition-[height] duration-500" />
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            <a href={site.phones[0].href} className="hidden items-center gap-2 text-[14px] font-medium text-ink/85 transition-colors hover:text-ice md:flex">
              <Phone className="h-4 w-4 text-ice" strokeWidth={2} /> {site.phones[0].label}
            </a>
            <LanguageSelector tone="light" className="hidden sm:flex" />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu-overlay"
              className="group flex h-10 items-center gap-3 rounded-[4px] bg-ice pl-4 pr-3 text-[13px] font-semibold text-navy transition-colors hover:bg-white"
            >
              {open ? t.ui.close : t.ui.menu}
              <span aria-hidden className="relative block h-3 w-5">
                <span className={`absolute left-0 top-0 h-[1.5px] w-full bg-navy transition-transform duration-500 ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
                <span className={`absolute left-0 top-[5px] h-[1.5px] w-full bg-navy transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`absolute left-0 top-[10px] h-[1.5px] w-full bg-navy transition-transform duration-500 ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menú a pantalla completa */}
      <div
        id="menu-overlay"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 overflow-y-auto bg-night text-ink transition-[clip-path,visibility] duration-[900ms] ease-[cubic-bezier(.76,0,.24,1)] ${
          open ? 'visible [clip-path:inset(0_0_0_0)]' : 'invisible [clip-path:inset(0_0_100%_0)]'
        }`}
      >
        <div className="grid min-h-full gap-12 px-5 pb-32 pt-28 sm:px-8 lg:grid-cols-12 lg:px-10 lg:pb-16 lg:pt-36">
          <nav className="flex flex-col lg:col-span-7" aria-label="Principal">
            {links.map((l, i) => (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-5 border-b border-line py-3 text-[2.3rem] font-medium leading-tight tracking-[-0.03em] transition-[transform,opacity,color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:text-ice sm:text-[3.4rem] lg:text-[4rem]"
                style={{ transform: open ? 'none' : 'translateY(40px)', opacity: open ? 1 : 0, transitionDelay: open ? `${250 + i * 60}ms` : '0ms' }}
              >
                <span className="w-8 text-[12px] font-medium tracking-normal text-atlantic">0{i + 1}</span>
                {l.label}
              </Link>
            ))}
          </nav>
          <div
            className="flex flex-col gap-10 transition-opacity duration-700 lg:col-span-4 lg:col-start-9"
            style={{ opacity: open ? 1 : 0, transitionDelay: open ? '600ms' : '0ms' }}
          >
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-atlantic">{t.ui.specialties}</p>
              <ul className="mt-4 space-y-2">
                {main.map((a) => (
                  <li key={a.slug}>
                    <Link to={toArea(a.slug)} onClick={() => setOpen(false)} className="group inline-flex items-center gap-2 text-lg text-ink/85 hover:text-ice">
                      {a.name[lang]} <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2 text-lg">
              {site.phones.map((p) => (
                <a key={p.href} href={p.href} className="flex items-center gap-3 font-medium hover:text-ice">
                  <Phone className="h-4 w-4 text-ice" /> {p.label}
                </a>
              ))}
              <a href={`mailto:${site.email}`} className="block text-ink/70 hover:text-ice">{site.email}</a>
            </div>
            <LanguageSelector tone="light" />
          </div>
        </div>
      </div>

      {/* Barra de acciones móvil (urgencias: siempre a un toque) */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-2 pb-[max(8px,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
        <a href={site.phones[0].href} className="flex min-h-[50px] items-center justify-center gap-2 rounded-[6px] border border-line text-[15px] font-semibold text-ink">
          <Phone className="h-4 w-4 text-ice" /> {t.cine.call}
        </a>
        <Link to={to('contact')} className="flex min-h-[50px] items-center justify-center rounded-[6px] bg-ice text-[15px] font-semibold text-navy">
          {t.ui.book}
        </Link>
      </div>
    </>
  )
}
