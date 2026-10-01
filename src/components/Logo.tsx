/**
 * Logotipo ADOS en versión azul (hielo + azul cielo) para fondos marino.
 * `mark`: solo el símbolo (las tres figuras), para el pie de página.
 */
export function Logo({ height = 40, mark = false, className = '' }: { height?: number; mark?: boolean; tile?: boolean; className?: string }) {
  const ratio = mark ? 806 / 716 : 1735 / 716
  return (
    <img
      src={mark ? '/brand/ados-mark.webp' : '/brand/ados-light.webp'}
      width={Math.round(height * ratio)}
      height={height}
      alt="ADOS · Abokatuak eta Bitartekariak"
      decoding="async"
      className={`block w-auto shrink-0 ${className}`}
      style={{ height }}
    />
  )
}
