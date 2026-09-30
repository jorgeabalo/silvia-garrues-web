import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { languages } from '../i18n/routes'

/** Selector ES | EU. Cada idioma enlaza a la página equivalente. */
export function LanguageSelector({ tone = 'dark', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  const { lang, alternate, t } = useI18n()
  return (
    <nav aria-label={t.ui.langLabel} className={`flex items-center gap-1 text-[13px] font-semibold tracking-[0.12em] ${className}`}>
      {languages.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className={tone === 'light' ? 'text-white/30' : 'text-ink/25'}>|</span>}
          <Link
            to={alternate(l)}
            hrefLang={l}
            lang={l}
            aria-current={l === lang ? 'true' : undefined}
            title={t.ui.langNames[l]}
            className={`rounded-full px-2.5 py-1.5 uppercase transition-colors ${
              l === lang
                ? tone === 'light'
                  ? 'bg-white text-abyss'
                  : 'bg-abyss text-white'
                : tone === 'light'
                  ? 'text-white/70 hover:text-white'
                  : 'text-ink/60 hover:text-ink'
            }`}
          >
            {l}
          </Link>
        </span>
      ))}
    </nav>
  )
}
