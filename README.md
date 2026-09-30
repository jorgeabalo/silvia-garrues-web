# Silvia Garrues Remírez · Web

React + TypeScript + Vite + Tailwind CSS + lucide-react. Prerenderizada (SSG): cada ruta se genera como HTML completo e indexable, y React se hidrata después.

## Comandos

```bash
npm install
npm run dev        # desarrollo
npm run build      # typecheck + build + prerender de las 16 rutas + sitemap + robots
npm run photos     # descarga y optimiza TODAS las fotos (AVIF + WebP, 4 tamaños) en /public/photos
```

**Antes de dar de baja Wix, ejecuta `npm run photos` y vuelve a hacer `npm run build`.** Hasta entonces las fotografías se sirven desde el CDN de Wix (ya optimizadas: recorte, tamaño y AVIF/WebP automáticos).

Despliegue: Vercel o Netlify, carpeta `dist` (incluye `vercel.json`).
Formulario: define `VITE_FORM_ENDPOINT` (Formspree, Getform…). Sin él, el formulario abre el correo con la consulta ya redactada para silvia@garrues.com.

## Rutas

| ES | EU |
|---|---|
| `/` | `/eu` |
| `/silvia` | `/eu/silvia` |
| `/servicios` | `/eu/zerbitzuak` |
| `/articulos` | `/eu/artikuluak` |
| `/contacto` | `/eu/harremanetarako` |
| `/aviso-legal`, `/privacidad`, `/cookies` | `/eu/lege-oharra`, `/eu/pribatutasuna`, `/eu/cookieak` |

Inglés: añadir `'en'` en `src/i18n/routes.ts`, sus rutas y un `src/i18n/en.ts` con la misma forma que `es.ts`.

## Dónde está cada cosa

- `src/content/site.ts` — datos de contacto reales
- `src/content/photos.ts` — inventario fotográfico (originales de garrues.com + Tolosa de Wikimedia Commons)
- `src/content/practice.ts` — las 8 áreas reales con sus listados literales
- `src/content/articles.ts` — artículos del blog, prensa y testimonios (vacío)
- `src/i18n/es.ts` / `eu.ts` — todos los textos
- Componentes: `Button`, `SectionTitle`, `AnimatedSection`, `PracticeCard`, `ArticleCard`, `TestimonialCard`, `PhotoMarquee`, `LanguageSelector`, `FloatingNavigation`, `ContactForm` (+ `Photo`, `Carousel`, `Logo`…)

## Pendiente de Silvia (no se ha inventado nada)

1. **Aviso legal y privacidad**: NIF, nº de colegiada y texto RGPD completo.
2. **Revisión del euskera** por Silvia o un corrector.
3. **Fotos de Tolosa/Euskadi propias**: la web actual no tiene; se usan 4 de Wikimedia Commons (verificar licencia/autoría en cada ficha y citarla, o sustituir).
4. **Testimonios**: no hay publicados. La sección aparece sola al añadirlos en `articles.ts`.
5. **WhatsApp**: solo si lo usa profesionalmente (`site.whatsapp`).
6. **Grafía del apellido**: la web actual usa "Garrués" y "Garrues"; aquí se usa "Garrues" como en el logotipo.
7. **Texto íntegro sobre Ulpiano**: solo existe la cita en la web actual; si tiene un texto propio, se añade en la sección *Pensamiento y Derecho*.
8. **Logotipo en vectorial (SVG)**: ahora se usa el PNG original.
