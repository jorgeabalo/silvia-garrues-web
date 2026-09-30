import { createContext, useContext, type ReactNode } from 'react'
import es, { type Dict } from './es'
import eu from './eu'
import { paths, type Lang, type RouteKey } from './routes'

export const dictionaries: Record<Lang, Dict> = { es, eu }

interface I18nValue {
  lang: Lang
  routeKey: RouteKey | null
  t: Dict
  to: (key: RouteKey, hash?: string) => string
  /** Ruta equivalente de la página actual en otro idioma */
  alternate: (lang: Lang) => string
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ lang, routeKey, children }: { lang: Lang; routeKey: RouteKey | null; children: ReactNode }) {
  const value: I18nValue = {
    lang,
    routeKey,
    t: dictionaries[lang],
    to: (key, hash) => paths[lang][key] + (hash ? `#${hash}` : ''),
    alternate: (l) => paths[l][routeKey ?? 'home'],
  }
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n fuera de I18nProvider')
  return ctx
}

export function formatDate(iso: string, lang: Lang) {
  const d = new Date(iso + 'T12:00:00')
  if (lang === 'eu') {
    const months = ['urtarrilaren', 'otsailaren', 'martxoaren', 'apirilaren', 'maiatzaren', 'ekainaren', 'uztailaren', 'abuztuaren', 'irailaren', 'urriaren', 'azaroaren', 'abenduaren']
    return `${d.getFullYear()}ko ${months[d.getMonth()]} ${d.getDate()}a`
  }
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}
