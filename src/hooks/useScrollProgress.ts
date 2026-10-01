import { useEffect, useRef } from 'react'

/**
 * Progreso de scroll de un bloque alto con contenido «sticky»:
 * 0 cuando su parte superior toca el borde superior del viewport,
 * 1 cuando su parte inferior toca el borde inferior.
 * Escribe el valor en la variable CSS `--p` del elemento y llama a `onProgress`.
 */
export function useScrollProgress<T extends HTMLElement>(onProgress?: (p: number) => void) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--p', '1')
      onProgress?.(1)
      return
    }
    let frame = 0
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const range = r.height - window.innerHeight
      const p = range > 0 ? Math.min(1, Math.max(0, -r.top / range)) : 0
      el.style.setProperty('--p', p.toFixed(4))
      onProgress?.(p)
    }
    const on = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return ref
}

/** Progreso de un elemento al atravesar el viewport: -1 (abajo) → 0 (centro) → 1 (arriba). */
export function useViewportParallax<T extends HTMLElement>(apply: (el: T, t: number) => void) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      if (r.bottom < -200 || r.top > vh + 200) return
      const t = -((r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2))
      apply(el, Math.max(-1, Math.min(1, t)))
    }
    const on = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return ref
}
