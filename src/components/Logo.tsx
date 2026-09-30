import { photos } from '../content/photos'
import { photoUrl } from '../lib/photo'

/** Logotipo A2 original de Silvia (se respeta tal cual, sobre su fondo). */
export function Logo({ size = 40, className = '' }: { size?: number; className?: string }) {
  const p = photos.logo
  return (
    <span
      className={`inline-block shrink-0 overflow-hidden rounded-[28%] bg-black ring-1 ring-black/5 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={photoUrl(p, 480, 1)}
        srcSet={`${photoUrl(p, 480, 1)} 1x`}
        width={size}
        height={size}
        alt="A2 · Silvia Garrues Remírez"
        className="h-full w-full scale-[1.18] object-cover"
        decoding="async"
      />
    </span>
  )
}
