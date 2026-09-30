import { photos } from '../content/photos'
import { photoUrl } from '../lib/photo'

/**
 * Logotipo ADOS original. Su fondo gris claro se funde con el fondo blanco
 * (brightness + multiply), así el logo se integra sin recuadro.
 * `tile`: sobre fondos oscuros se presenta dentro de una pastilla blanca.
 */
export function Logo({ height = 40, tile = false, className = '' }: { height?: number; tile?: boolean; className?: string }) {
  const p = photos.adosLogo
  const ratio = p.w / p.h
  const img = (
    <img
      src={photoUrl(p, 480, ratio)}
      srcSet={`${photoUrl(p, 480, ratio)} 1x, ${photoUrl(p, 800, ratio)} 2x`}
      width={Math.round(height * ratio)}
      height={height}
      alt="ADOS · Abokatuak eta Bitartekariak"
      decoding="async"
      className="block h-full w-auto [filter:brightness(1.13)_contrast(1.1)] mix-blend-multiply"
      style={{ height }}
    />
  )
  if (!tile) return <span className={`inline-block shrink-0 bg-transparent ${className}`}>{img}</span>
  return <span className={`inline-flex shrink-0 items-center rounded-full bg-white px-3 ${className}`} style={{ height: height + 8 }}>{img}</span>
}
