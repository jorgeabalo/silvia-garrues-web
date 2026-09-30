import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { LanguageSelector } from './LanguageSelector'
import { Logo } from './Logo'

/** Cabecera mínima: identidad a la izquierda, idioma siempre visible a la derecha. */
export function TopBar() {
  const { t, to } = useI18n()
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        {t.ui.skip}
      </a>
      <div className="page-x flex h-20 items-center justify-between">
        <Link to={to('home')} className="flex items-center gap-3" aria-label={t.ui.home}>
          <Logo height={38} />
          <span className="hidden border-l border-line pl-3 text-[13px] font-medium tracking-[-0.01em] text-ink/80 md:block">
            Silvia Garrues Remírez <span className="text-ink/40">· {t.hero.role}</span>
          </span>
        </Link>
        <LanguageSelector className="glass rounded-full p-1 shadow-soft" />
      </div>
    </header>
  )
}
