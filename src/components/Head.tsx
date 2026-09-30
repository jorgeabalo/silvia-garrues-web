import { useEffect } from 'react'
import { useI18n } from '../i18n'
import { areaPath, htmlLang, languages, paths } from '../i18n/routes'
import { site } from '../content/site'
import { areaMeta } from '../content/practice'

/** Mantiene title / description / canonical / hreflang al navegar en cliente. (El HTML inicial ya los trae prerenderizados.) */
export function Head() {
  const { t, routeKey, lang, area } = useI18n()
  useEffect(() => {
    const key = routeKey ?? 'home'
    const meta = area ? areaMeta(area, lang) : t.meta[key]
    const url = (l: typeof lang) => site.url + (area ? areaPath(l, area) : paths[l][key])
    document.title = routeKey || area ? meta.title : t.pages.notFound.title
    document.documentElement.lang = htmlLang[lang]
    const set = (sel: string, attr: string, val: string) => document.querySelector(sel)?.setAttribute(attr, val)
    set('meta[name="description"]', 'content', meta.description)
    set('meta[property="og:title"]', 'content', meta.title)
    set('meta[property="og:description"]', 'content', meta.description)
    set('link[rel="canonical"]', 'href', url(lang))
    set('meta[property="og:url"]', 'content', url(lang))
    languages.forEach((l) => set(`link[rel="alternate"][hreflang="${l}"]`, 'href', url(l)))
  }, [t, routeKey, lang, area])
  return null
}
