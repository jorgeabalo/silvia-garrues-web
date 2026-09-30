import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Carrusel de tarjetas grandes con avance automático lento (se detiene al
 * interactuar) y flechas manuales debajo. Usa scroll-snap nativo.
 */
export function Carousel({ children, interval = 7000, label }: { children: ReactNode; interval?: number; label: string }) {
  const { t } = useI18n()
  const track = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()
  const count = Children.count(children)

  const step = useCallback((dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const w = card ? card.offsetWidth + 24 : el.clientWidth
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: 'smooth' })
    else el.scrollBy({ left: dir * w, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (paused || reduced || count < 2) return
    const id = window.setInterval(() => {
      const el = track.current
      if (!el) return
      const r = el.getBoundingClientRect()
      if (r.bottom > 0 && r.top < window.innerHeight) step(1)
    }, interval)
    return () => window.clearInterval(id)
  }, [paused, reduced, interval, step, count])

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <div className="w-[86%] shrink-0 snap-start sm:w-[60%] lg:w-[44%]">{child}</div>
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        <button type="button" onClick={() => { setPaused(true); step(-1) }} aria-label={t.ui.prev} className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-abyss">
          <ArrowLeft className="h-5 w-5" strokeWidth={1.6} />
        </button>
        <button type="button" onClick={() => { setPaused(true); step(1) }} aria-label={t.ui.next} className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-abyss">
          <ArrowRight className="h-5 w-5" strokeWidth={1.6} />
        </button>
      </div>
    </div>
  )
}
