import { useEffect } from 'react'
import { useI18n } from '../i18n'
import { htmlLang, languages, paths } from '../i18n/routes'
import { site } from '../content/site'

/** Mantiene title / description / canonical / hreflang al navegar en cliente. (El HTML inicial ya los trae prerenderizados.) */
export function Head() {
  const { t, routeKey, lang } = useI18n()
  useEffect(() => {
    const key = routeKey ?? 'home'
    const meta = t.meta[key]
    document.title = routeKey ? meta.title : t.pages.notFound.title
    document.documentElement.lang = htmlLang[lang]
    const set = (sel: string, attr: string, val: string) => document.querySelector(sel)?.setAttribute(attr, val)
    set('meta[name="description"]', 'content', meta.description)
    set('meta[property="og:title"]', 'content', meta.title)
    set('meta[property="og:description"]', 'content', meta.description)
    set('link[rel="canonical"]', 'href', site.url + paths[lang][key])
    set('meta[property="og:url"]', 'content', site.url + paths[lang][key])
    languages.forEach((l) => set(`link[rel="alternate"][hreflang="${l}"]`, 'href', site.url + paths[l][key]))
  }, [t, routeKey, lang])
  return null
}
