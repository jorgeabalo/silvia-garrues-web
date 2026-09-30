import { Fragment } from 'react'

/** Convierte "texto *acento serif*" en spans con tipografía editorial. */
export function Rich({ text, accentClass = 'serif-accent' }: { text: string; accentClass?: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('*') ? (
          <span key={i} className={accentClass}>
            {part.slice(1, -1)}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}

/** Texto que aparece palabra a palabra (máscara) cuando su contenedor es visible. */
export function RevealText({ text, accentClass = 'serif-accent', base = 0 }: { text: string; accentClass?: string; base?: number }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean)
  let i = 0
  return (
    <>
      {parts.map((part, pi) => {
        const accent = part.startsWith('*')
        const words = (accent ? part.slice(1, -1) : part).split(/(\s+)/)
        return (
          <span key={pi} className={accent ? accentClass : undefined}>
            {words.map((w, wi) =>
              /^\s+$/.test(w) || w === '' ? (
                <Fragment key={wi}>{w}</Fragment>
              ) : (
                <span key={wi} className="reveal-word">
                  <span style={{ ['--i' as string]: i++, ['--base' as string]: `${base}s` }}>{w}</span>
                </span>
              ),
            )}
          </span>
        )
      })}
    </>
  )
}
