/**
 * Descarga TODAS las fotografías del inventario (src/content/photos.ts) y
 * genera versiones optimizadas AVIF + WebP en 480/800/1200/1800 px dentro de
 * /public/photos. Después, la web las sirve localmente (sin CDN externo).
 *
 * Uso:  npm run photos
 * Ejecútalo ANTES de dar de baja el plan de Wix.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const src = fs.readFileSync(path.join(root, 'src/content/photos.ts'), 'utf8')
const WIDTHS = [480, 800, 1200, 1800]
const out = path.join(root, 'public/photos')
fs.mkdirSync(out, { recursive: true })

// Extrae id, origen y fichero de cada entrada g(...) / c(...)
const entries = [...src.matchAll(/^\s+\w+: ([gc])\('(\w+)', '([^']+)'/gm)].map((m) => ({
  origin: m[1] === 'g' ? 'wix' : 'commons',
  id: m[2],
  file: m[3],
}))

const done = []
for (const e of entries) {
  const url =
    e.origin === 'wix'
      ? `https://static.wixstatic.com/media/${e.file}`
      : `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(e.file)}?width=2400`
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'garrues-web-build/1.0 (silvia@garrues.com)' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    fs.writeFileSync(path.join(out, `${e.id}-original${path.extname(e.file).toLowerCase() || '.jpg'}`), buf)
    for (const w of WIDTHS) {
      const img = sharp(buf).rotate().resize({ width: w, withoutEnlargement: false })
      await img.clone().avif({ quality: 55 }).toFile(path.join(out, `${e.id}-${w}.avif`))
      await img.clone().webp({ quality: 78 }).toFile(path.join(out, `${e.id}-${w}.webp`))
    }
    done.push(e.id)
    console.log('✓', e.id)
  } catch (err) {
    console.warn('✗', e.id, err.message)
  }
}
fs.writeFileSync(path.join(root, 'src/content/photos.local.json'), JSON.stringify(done, null, 2))
console.log(`\n${done.length}/${entries.length} fotografías optimizadas en public/photos`)
