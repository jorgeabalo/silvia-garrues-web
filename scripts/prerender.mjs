/**
 * Prerenderizado estático (SSG): genera un HTML completo por ruta e idioma,
 * con metadatos SEO, hreflang, OpenGraph, JSON-LD, sitemap.xml y robots.txt.
 * Todo el contenido es indexable sin ejecutar JavaScript.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssr = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href)
const { render, allRoutes, allAreaRoutes, areaPath, areaMeta, paths, languages, htmlLang, dictionaries, site, practiceAreas, photos, photoUrl, srcSet } = ssr

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const abs = (u) => (u.startsWith('/') ? site.url + u : u)
const ogImage = abs(photoUrl(photos.silviaDesk, 1200, 1200 / 630))
const heroByRoute = { home: 'silviaStanding', silvia: 'silviaStanding' }

function jsonLd(lang, key) {
  const t = dictionaries[lang]
  const url = site.url + paths[lang][key]
  const person = {
    '@type': 'Person',
    '@id': `${site.url}/#silvia`,
    name: 'Silvia Garrues Remírez',
    jobTitle: t.hero.role,
    image: abs(photoUrl(photos.silviaDesk, 800)),
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'University of Houston Law Center' },
      { '@type': 'CollegeOrUniversity', name: 'Universidad Nacional de Educación a Distancia' },
    ],
    memberOf: t.pages.silvia.barsList.map((name) => ({ '@type': 'Organization', name })),
    knowsLanguage: ['es', 'eu', 'en'],
    worksFor: { '@id': `${site.url}/#despacho` },
  }
  const business = {
    '@type': 'LegalService',
    '@id': `${site.url}/#despacho`,
    name: 'Silvia Garrues Remírez · ADOS',
    url: site.url + paths[lang].home,
    email: site.email,
    telephone: site.phones.map((p) => p.href.replace('tel:', '')),
    image: ogImage,
    logo: abs(photoUrl(photos.adosLogo, 800)),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: ['Tolosa', 'Gipuzkoa', 'Euskadi', 'España'],
    availableLanguage: ['es', 'eu', 'en'],
    paymentAccepted: 'Bizum',
    founder: { '@id': `${site.url}/#silvia` },
    knowsAbout: practiceAreas.map((a) => a.name[lang]),
  }
  const graph = [business, person]
  if (key === 'services') {
    business.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: t.pages.services.kicker,
      itemListElement: practiceAreas.map((a) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: a.name[lang], description: a.short[lang], url: site.url + areaPath(lang, a.slug) },
      })),
    }
  }
  if (key === 'home') {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: t.faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    })
  }
  if (key !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.ui.home, item: site.url + paths[lang].home },
        { '@type': 'ListItem', position: 2, name: t.meta[key].title.split(' · ')[0], item: url },
      ],
    })
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
}

function head(lang, key) {
  const t = dictionaries[lang]
  const meta = t.meta[key]
  const url = site.url + paths[lang][key]
  const noindex = ['legal', 'privacy', 'cookies'].includes(key)
  const lines = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    noindex ? `<meta name="robots" content="noindex, follow" />` : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${url}" />`,
    ...languages.map((l) => `<link rel="alternate" hreflang="${l}" href="${site.url + paths[l][key]}" />`),
    `<link rel="alternate" hreflang="x-default" href="${site.url + paths.es[key]}" />`,
    `<meta property="og:type" content="${key === 'silvia' ? 'profile' : 'website'}" />`,
    `<meta property="og:site_name" content="Silvia Garrues Remírez" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${htmlLang[lang].replace('-', '_')}" />`,
    ...languages.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${htmlLang[l].replace('-', '_')}" />`),
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
        `<script type="application/ld+json">${jsonLd(lang, key)}</script>`,
  ]
  if (key === 'home') {
    lines.push(`<link rel="preload" as="image" fetchpriority="high" type="image/avif" imagesrcset="/photos/silviaPortraitBlue-480.avif 480w, /photos/silviaPortraitBlue-920.avif 920w" imagesizes="(min-width: 640px) 40vw, 60vw" />`)
  }
  const hero = key === 'home' ? null : heroByRoute[key]
  if (hero) {
    const p = photos[hero]
    // Preload SOLO de la imagen principal
    lines.push(`<link rel="preload" as="image" fetchpriority="high" imagesrcset="${srcSet(p, undefined)}" imagesizes="${key === 'home' ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 640px) 66vw, 100vw'}" />`)
  }
  return lines.join('\n    ')
}

function write(file, html) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
}

function page(url, lang, headHtml) {
  return template
    .replace('<html lang="es-ES">', `<html lang="${htmlLang[lang]}">`)
    .replace('<!--app-head-->', headHtml)
    .replace('<!--app-html-->', render(url))
}

for (const { lang, key, path: p } of allRoutes) {
  const out = p === '/' ? path.join(dist, 'index.html') : path.join(dist, p.slice(1), 'index.html')
  write(out, page(p, lang, head(lang, key)))
  console.log('✓', p)
}
// Páginas por área de práctica
function areaHead(lang, id) {
  const t = dictionaries[lang]
  const meta = areaMeta(id, lang)
  const url = site.url + areaPath(lang, id)
  const area = practiceAreas.find((a) => a.slug === id)
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: area.name[lang],
        description: area.short[lang],
        url,
        areaServed: ['Tolosa', 'Gipuzkoa', 'Euskadi', 'España'],
        provider: { '@type': 'LegalService', '@id': `${site.url}/#despacho`, name: 'Silvia Garrues Remírez · ADOS', telephone: site.phones.map((p) => p.href.replace('tel:', '')), address: { '@type': 'PostalAddress', streetAddress: site.address.street, postalCode: site.address.postalCode, addressLocality: site.address.city, addressRegion: site.address.region, addressCountry: site.address.country } },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t.ui.home, item: site.url + paths[lang].home },
          { '@type': 'ListItem', position: 2, name: t.meta.services.title.split(' · ')[0], item: site.url + paths[lang].services },
          { '@type': 'ListItem', position: 3, name: area.name[lang], item: url },
        ],
      },
    ],
  }
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${url}" />`,
    ...languages.map((l) => `<link rel="alternate" hreflang="${l}" href="${site.url + areaPath(l, id)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${site.url + areaPath('es', id)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Silvia Garrues Remírez" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
  ].join('\n    ')
}
for (const { lang, id, path: p } of allAreaRoutes) {
  write(path.join(dist, p.slice(1), 'index.html'), page(p, lang, areaHead(lang, id)))
  console.log('✓', p)
}

// 404
write(path.join(dist, '404.html'), page('/404', 'es', `<title>${esc(dictionaries.es.pages.notFound.title)}</title>\n    <meta name="robots" content="noindex" />`))

// sitemap con alternativas hreflang
const today = new Date().toISOString().slice(0, 10)
const indexable = allRoutes.filter((r) => !['legal', 'privacy', 'cookies'].includes(r.key))
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${indexable
  .map(
    (r) => `  <url>
    <loc>${site.url + r.path}</loc>
    <lastmod>${today}</lastmod>
${languages.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${site.url + paths[l][r.key]}" />`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${site.url + paths.es[r.key]}" />
    <priority>${r.key === 'home' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
${allAreaRoutes
  .map(
    (r) => `  <url>
    <loc>${site.url + r.path}</loc>
    <lastmod>${today}</lastmod>
${languages.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${site.url + areaPath(l, r.id)}" />`).join('\n')}
    <priority>${practiceAreas.find((a) => a.slug === r.id).tier === 'main' ? '0.9' : '0.6'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log('✓ sitemap.xml, robots.txt, 404.html')
