import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { site } from '../content/site'
import { copy } from '../content/compliance'
import { Logo } from './Logo'
import { LanguageSelector } from './LanguageSelector'

export function Footer() {
  const { t, to, lang } = useI18n()
  const year = new Date().getFullYear()
  const main = [
    { key: 'silvia' as const, label: t.ui.silvia },
    { key: 'services' as const, label: t.ui.services },
    { key: 'articles' as const, label: t.ui.articles },
    { key: 'contact' as const, label: t.ui.contact },
  ]
  const legal = [
    { key: 'legal' as const, label: t.ui.legal },
    { key: 'privacy' as const, label: t.ui.privacy },
    { key: 'cookies' as const, label: t.ui.cookies },
  ]
  return (
    <footer className="relative overflow-hidden bg-night pb-32 pt-20 text-white sm:pb-36">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[900px] -translate-x-1/2 rounded-full bg-intense/20 blur-[120px]" />
      <div className="page-x relative">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo height={52} tile />
            <p className="mt-6 text-[2.4rem] font-medium leading-none tracking-[-0.04em] sm:text-6xl">
              Silvia Garrues <span className="serif-accent text-haze">Remírez</span>
            </p>
            <p className="mt-4 text-white/55">{t.footer.tagline}</p>
            <p className="mt-2 max-w-md text-[13px] text-white/40">{copy[lang].colegiada}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-[15px] sm:grid-cols-3">
            <nav className="flex flex-col gap-3" aria-label="Footer">
              {main.map((l) => (
                <Link key={l.key} to={to(l.key)} className="text-white/80 transition-colors hover:text-white">
                  {l.label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3" aria-label="Legal">
              {legal.map((l) => (
                <Link key={l.key} to={to(l.key)} className="text-white/55 transition-colors hover:text-white">
                  {l.label}
                </Link>
              ))}
            </nav>
            <address className="col-span-2 flex flex-col gap-3 not-italic text-white/55 sm:col-span-1">
              <a href={`mailto:${site.email}`} className="text-white/80 hover:text-white">{site.email}</a>
              {site.phones.map((p) => (
                <a key={p.href} href={p.href} className="hover:text-white">{p.label}</a>
              ))}
              <span>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city} · {site.address.region}
              </span>
            </address>
          </div>
        </div>
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 pt-8 text-[13px] text-white/45 sm:flex-row sm:items-center">
          <p>
            © {year} Silvia Garrues Remírez · ADOS. {t.footer.rights}
          </p>
          <LanguageSelector tone="light" />
        </div>
      </div>
    </footer>
  )
}
