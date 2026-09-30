import { useEffect, useRef, useState } from 'react'

/** Marca el elemento como visible la primera vez que entra en pantalla. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options: { threshold?: number; rootMargin?: string } = {}) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)
  const { threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = options

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, visible])

  return { ref, visible }
}
