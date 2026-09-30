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

/** Páginas propias por área de práctica (una URL por especialidad y por idioma). */
export const areaSlug: Record<string, Record<Lang, string>> = {
  divorcios: { es: 'divorcios-y-separaciones', eu: 'dibortzioak-eta-banantzeak' },
  familia: { es: 'derecho-de-familia', eu: 'familia-zuzenbidea' },
  herencias: { es: 'herencias-y-sucesiones', eu: 'jaraunspenak-eta-oinordetzak' },
  penal: { es: 'derecho-penal', eu: 'zigor-zuzenbidea' },
  violencia: { es: 'violencia-de-genero-y-domestica', eu: 'genero-eta-etxeko-indarkeria' },
  mediacion: { es: 'mediacion', eu: 'bitartekaritza' },
  civil: { es: 'derecho-civil', eu: 'zuzenbide-zibila' },
  extranjeria: { es: 'extranjeria', eu: 'atzerritartasuna' },
  laboral: { es: 'laboral-y-seguridad-social', eu: 'lana-eta-gizarte-segurantza' },
  seguros: { es: 'seguros-y-trafico', eu: 'aseguruak-eta-trafikoa' },
}

export function areaPath(lang: Lang, id: string) {
  return `${paths[lang].services}/${areaSlug[id][lang]}`
}

export function resolveArea(pathname: string): { lang: Lang; id: string } | null {
  const clean = pathname.replace(/\/+$/, '')
  for (const lang of languages) for (const id of Object.keys(areaSlug)) if (areaPath(lang, id) === clean) return { lang, id }
  return null
}

export const allAreaRoutes = languages.flatMap((lang) => Object.keys(areaSlug).map((id) => ({ lang, id, path: areaPath(lang, id) })))
