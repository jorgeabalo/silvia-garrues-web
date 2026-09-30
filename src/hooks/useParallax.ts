import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Parallax muy ligero: desplaza el elemento interior en Y según la posición
 * del contenedor en el viewport. `strength` = píxeles máximos de recorrido.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 60) {
  const ref = useRef<T>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    const target = el.firstElementChild as HTMLElement | null
    if (!target) return
    let frame = 0
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      if (r.bottom < 0 || r.top > vh) return
      const progress = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2)
      target.style.transform = `translate3d(0, ${(-progress * strength).toFixed(1)}px, 0) scale(1.12)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [strength, reduced])

  return ref
}
