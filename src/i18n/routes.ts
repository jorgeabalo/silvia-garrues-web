/**
 * Arquitectura de idiomas.
 * Para añadir inglés: añade 'en' a `languages`, crea src/i18n/en.ts con la
 * misma forma que es.ts y define aquí sus rutas. Nada más.
 */
export const languages = ['es', 'eu'] as const
export type Lang = (typeof languages)[number]
export const defaultLang: Lang = 'es'

export const routeKeys = ['home', 'silvia', 'services', 'articles', 'contact', 'legal', 'privacy', 'cookies'] as const
export type RouteKey = (typeof routeKeys)[number]

export const paths: Record<Lang, Record<RouteKey, string>> = {
  es: {
    home: '/',
    silvia: '/silvia',
    services: '/servicios',
    articles: '/articulos',
    contact: '/contacto',
    legal: '/aviso-legal',
    privacy: '/privacidad',
    cookies: '/cookies',
  },
  eu: {
    home: '/eu',
    silvia: '/eu/silvia',
    services: '/eu/zerbitzuak',
    articles: '/eu/artikuluak',
    contact: '/eu/harremanetarako',
    legal: '/eu/lege-oharra',
    privacy: '/eu/pribatutasuna',
    cookies: '/eu/cookieak',
  },
}

export const htmlLang: Record<Lang, string> = { es: 'es-ES', eu: 'eu-ES' }

export function resolve(pathname: string): { lang: Lang; key: RouteKey } | null {
  const clean = pathname.replace(/\/+$/, '') || '/'
  for (const lang of languages) {
    for (const key of routeKeys) {
      if (paths[lang][key] === clean) return { lang, key }
    }
  }
  return null
}

export function langFromPath(pathname: string): Lang {
  return pathname === '/eu' || pathname.startsWith('/eu/') ? 'eu' : 'es'
}

export const allRoutes = languages.flatMap((lang) => routeKeys.map((key) => ({ lang, key, path: paths[lang][key] })))
