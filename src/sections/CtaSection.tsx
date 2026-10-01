import { useRef, type PointerEvent } from 'react'
import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { Photo } from '../components/Photo'
import { RevealText } from '../components/Rich'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Gran llamada a la acción. Interacción de ratón muy sutil: una luz y una
 * fotografía de Silvia siguen levemente al cursor (solo con puntero fino).
 */
export function CtaSection() {
  const { t, to } = useI18n()
  const box = useRef<HTMLDivElement>(null)
  const photo = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== 'mouse' || !box.current) return
    const r = box.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    box.current.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
    box.current.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
    if (photo.current) photo.current.style.transform = `translate3d(${((x - 0.5) * 18).toFixed(1)}px, ${((y - 0.5) * 14).toFixed(1)}px, 0) rotate(${((x - 0.5) * 2).toFixed(2)}deg)`
  }
  const onLeave = () => {
    if (photo.current) photo.current.style.transform = ''
  }

  return (
    <AnimatedSection className="py-24 sm:py-32">
      <div
        ref={box}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="relative mx-3 overflow-hidden rounded-[6px] border border-line bg-gradient-to-br from-[#0E2A50] via-[#0B2347] to-[#163B70] px-6 py-20 text-white sm:mx-5 sm:px-12 sm:py-28 lg:mx-8 lg:px-20"
        style={{ ['--mx' as string]: '70%', ['--my' as string]: '30%' }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_circle_at_var(--mx)_var(--my),rgba(255,255,255,.14),transparent_65%)] transition-[background] duration-300" />
        <div className="relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display text-balance text-[3.2rem] !text-white sm:text-7xl lg:text-[7rem]">
              <RevealText text={t.cta.title} accentClass="serif-accent text-haze" base={0.1} />
            </h2>
            <p className="reveal d2 mt-8 max-w-lg text-[17px] leading-[1.75] text-white/75">{t.cta.text}</p>
            <div className="reveal d3 mt-10">
              <Button to={to('contact')} variant="light" className="min-h-[60px] px-9 text-[17px]">
                {t.cta.button}
              </Button>
            </div>
          </div>
          <div className="reveal d2 hidden lg:col-span-5 lg:block">
            <div ref={photo} className="transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)]">
              <Photo name="silviaSeated" ratio={4 / 5} sizes="35vw" maxWidth={1200} className="rounded-[6px] shadow-[0_40px_80px_-30px_rgba(0,0,0,.6)] ring-1 ring-white/15" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
