import { useState } from 'react'
import type { PhotoKey } from '../content/photos'
import { useI18n } from '../i18n'
import { getPhoto, isLocal, photoUrl, srcSet } from '../lib/photo'

interface Props {
  name: PhotoKey
  /** Proporción de recorte ancho/alto (p. ej. 4/5). Si se omite, la original. */
  ratio?: number
  sizes?: string
  priority?: boolean
  className?: string
  imgClassName?: string
  maxWidth?: number
  /** Tratamiento de color cálido y sereno (activado por defecto) */
  grade?: boolean
}

/**
 * Imagen responsive: srcset + sizes, lazy loading, dimensiones explícitas
 * (evita saltos de layout) y AVIF/WebP (local con <picture> o negociado por CDN).
 */
export function Photo({ name, ratio, sizes = '100vw', priority, className = '', imgClassName = '', maxWidth = 1800, grade = true }: Props) {
  const { lang } = useI18n()
  const p = getPhoto(name)
  const [loaded, setLoaded] = useState(false)
  const r = ratio ?? p.w / p.h
  const w = 1200
  const h = Math.round(w / r)
  const img = (
    <img
      src={photoUrl(p, 1200, ratio)}
      srcSet={srcSet(p, ratio, 'webp', maxWidth)}
      sizes={sizes}
      width={w}
      height={h}
      alt={p.alt[lang]}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      // @ts-expect-error — atributo estándar aún no tipado en React 18
      fetchpriority={priority ? 'high' : 'auto'}
      onLoad={() => setLoaded(true)}
      ref={(el) => {
        if (el?.complete && el.naturalWidth) setLoaded(true)
      }}
      style={{ objectPosition: p.focus ?? '50% 50%' }}
      className={`h-full w-full object-cover transition-[opacity,transform] duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
    />
  )
  return (
    <div className={`photo-skeleton relative overflow-hidden ${grade ? 'photo-grade' : ''} ${className}`} style={ratio ? { aspectRatio: String(ratio) } : undefined}>
      {isLocal(p) ? (
        <picture>
          <source type="image/avif" srcSet={srcSet(p, ratio, 'avif', maxWidth)} sizes={sizes} />
          {img}
        </picture>
      ) : (
        img
      )}
      {p.credit && (
        <span className="pointer-events-none absolute bottom-2 right-3 text-[10px] tracking-wide text-white/70 [text-shadow:0_1px_4px_rgba(0,0,0,.5)]">
          {p.credit}
        </span>
      )}
    </div>
  )
}
