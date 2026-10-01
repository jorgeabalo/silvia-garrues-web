import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { site } from '../content/site'
import { copy } from '../content/compliance'
import { Logo } from './Logo'
import { LanguageSelector } from './LanguageSelector'

/** Pie estilo Leome: marco con degradado, símbolo ADOS grande y nombre a todo el ancho. */
export function Footer() {
  const { t, to, lang } = useI18n()
  const year = new Date().getFullYear()
  const main = [
    { key: 'services' as const, label: t.ui.services },
    { key: 'silvia' as const, label: t.ui.silvia },
    { key: 'articles' as const, label: t.ui.articles },
    { key: 'contact' as const, label: t.ui.contact },
  ]
  const legal = [
    { key: 'legal' as const, label: t.ui.legal },
    { key: 'privacy' as const, label: t.ui.privacy },
    { key: 'cookies' as const, label: t.ui.cookies },
  ]
  return (
    <footer className="bg-paper px-3 pb-24 pt-10 sm:px-5 md:pb-5">
      <div className="bg-gradient-to-br from-[#2E5C99] via-[#0E2A50] to-[#A9D1FF]/70 p-3 sm:p-4">
        <div className="relative overflow-hidden bg-paper px-5 pb-6 pt-12 sm:px-10 sm:pt-16">
          <span aria-hidden className="absolute right-5 top-5 h-1.5 w-1.5 bg-ice" />
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Logo mark height={150} className="h-[110px] sm:h-[150px]" />
              <p className="mt-8 max-w-xs text-[14px] leading-relaxed text-ink/60">
                {t.footer.tagline}
                <br />
                {copy[lang].colegiada}
              </p>
            </div>
            <nav className="flex flex-col gap-2 text-[1.35rem] font-medium tracking-[-0.01em] md:col-span-3" aria-label="Footer">
              {main.map((l) => (
                <Link key={l.key} to={to(l.key)} className="text-ink transition-colors hover:text-ice">
                  {l.label}
                </Link>
              ))}
            </nav>
            <address className="flex flex-col gap-2 text-[15px] not-italic text-ink/75 md:col-span-4">
              <a href={`mailto:${site.email}`} className="text-ink hover:text-ice">{site.email}</a>
              {site.phones.map((p) => (
                <a key={p.href} href={p.href} className="hover:text-ice">{p.label}</a>
              ))}
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 hover:text-ice">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city} · {site.address.region}
              </a>
            </address>
          </div>

          <p aria-hidden className="mt-16 select-none whitespace-nowrap text-[15.2vw] font-medium leading-[0.85] tracking-[-0.06em] text-ice sm:mt-20 md:text-[14.6vw]">
            Silvia Garrues
          </p>

          <div className="mt-8 flex flex-col-reverse items-start justify-between gap-5 border-t border-line pt-5 text-[13px] text-ink/50 sm:flex-row sm:items-center">
            <p>© {year} Silvia Garrues Remírez · ADOS. {t.footer.rights}</p>
            <div className="flex flex-wrap items-center gap-5">
              {legal.map((l) => (
                <Link key={l.key} to={to(l.key)} className="hover:text-ice">
                  {l.label}
                </Link>
              ))}
              <LanguageSelector tone="light" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
