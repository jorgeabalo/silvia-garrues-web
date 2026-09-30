import { photos, type Photo, type PhotoKey } from '../content/photos'
import localIds from '../content/photos.local.json'

/** Tamaños que genera `npm run photos` y que se piden a los CDN */
export const WIDTHS = [480, 800, 1200, 1800] as const

const local = new Set<string>(localIds as string[])

export function isLocal(p: Photo) {
  return local.has(p.id)
}

/** URL de una foto a un ancho dado, recortada opcionalmente a una proporción (w/h). */
export function photoUrl(p: Photo, width: number, ratio?: number, format: 'avif' | 'webp' = 'webp'): string {
  if (isLocal(p)) return `/photos/${p.id}-${width}.${format}`
  if (p.origin === 'garrues.com') {
    const h = Math.round(width / (ratio ?? p.w / p.h))
    // enc_auto: el CDN negocia AVIF/WebP según el navegador
    return `https://static.wixstatic.com/media/${p.file}/v1/fill/w_${width},h_${h},al_c,q_80,usm_0.66_1.00_0.01,enc_auto/${encodeURIComponent(p.file)}`
  }
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(p.file)}?width=${width}`
}

export function srcSet(p: Photo, ratio?: number, format: 'avif' | 'webp' = 'webp', max = 1800) {
  return WIDTHS.filter((w) => w <= max)
    .map((w) => `${photoUrl(p, w, ratio, format)} ${w}w`)
    .join(', ')
}

export function getPhoto(key: PhotoKey): Photo {
  return photos[key]
}
