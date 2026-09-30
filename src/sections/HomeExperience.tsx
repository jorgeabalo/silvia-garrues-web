import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent as RPointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ChevronDown, Phone, Play, X } from 'lucide-react'
import { useI18n } from '../i18n'
import { practiceAreas } from '../content/practice'
import { site } from '../content/site'
import type { PhotoKey } from '../content/photos'
import { Photo } from '../components/Photo'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { IntroFilm } from './IntroFilm'

/**
 * Experiencia a pantalla completa por capítulos (inspirada en Orano "Innovation"),
 * en azul y blanco: fotografía en duotono azul, rejilla fina, contador 01 — 06,
 * titular espaciado que aparece letra a letra, botón "Entrar" y flechas circulares
 * con anillo de progreso. Sin secuestrar el scroll: debajo continúa la web.
 */
const AUTOPLAY = 8000
const areaPhotos: Record<string, PhotoKey> = {
  divorcios: 'meeting2',
  familia: 'silviaSeated',
  herencias: 'officeDesk',
  penal: 'courthouse',
  violencia: 'silviaDesk',
}

interface Slide {
  id: string
  word: string
  text: string
  photo: PhotoKey
  href: string
  cta: string
}

export function HomeExperience() {
  const { t, lang, to } = useI18n()
  const e = t.exp
  const reduced = useReducedMotion()
  const main = practiceAreas.filter((a) => a.tier === 'main')

  const slides: Slide[] = [
    { id: 'intro', word: e.intro.word, text: e.intro.text, photo: 'silviaDesk', href: '', cta: e.hold },
    ...main.map((a) => ({
      id: a.slug,
      word: e.words[a.slug as keyof typeof e.words] ?? a.name[lang],
      text: a.short[lang],
      photo: areaPhotos[a.slug] ?? 'officeRoom',
      href: to('services', a.slug),
      cta: e.enter,
    })),
    { id: 'final', word: e.final.word, text: e.final.text, photo: 'silviaSeated', href: to('contact'), cta: t.ui.book },
  ]
  const n = slides.length

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [film, setFilm] = useState(false)
  const [cycle, setCycle] = useState(0) // reinicia el anillo de progreso
  const root = useRef<HTMLElement>(null)

  const go = useCallback(
    (i: number) => {
      setIndex(((i % n) + n) % n)
      setCycle((c) => c + 1)
    },
    [n],
  )
  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  // Autoplay (solo visible, sin reduced-motion, no en la portada ni en pausa)
  useEffect(() => {
    if (reduced || paused || index === 0 || film) return
    const id = window.setTimeout(next, AUTOPLAY)
    return () => window.clearTimeout(id)
  }, [index, paused, reduced, next, film, cycle])

  // Teclado
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      const r = root.current?.getBoundingClientRect()
      if (!r || r.bottom < 100 || film) return
      if (ev.key === 'ArrowRight') next()
      if (ev.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, film])

  // Gesto horizontal (móvil)
  const start = useRef<{ x: number; y: number } | null>(null)
  const onDown = (ev: RPointerEvent) => {
    if (ev.pointerType === 'mouse') return
    start.current = { x: ev.clientX, y: ev.clientY }
  }
  const onUp = (ev: RPointerEvent) => {
    const s = start.current
    start.current = null
    if (!s) return
    const dx = ev.clientX - s.x
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(ev.clientY - s.y)) (dx < 0 ? next : prev)()
  }

  // Película en modal
  useEffect(() => {
    if (!film) return
    const onKey = (ev: KeyboardEvent) => ev.key === 'Escape' && setFilm(false)
    window.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
    }
  }, [film])

  const pad = (i: number) => String(i).padStart(2, '0')

  return (
    <>
      <section
        ref={root}
        aria-roledescription="carousel"
        aria-label={e.chapters}
        onPointerDown={onDown}
        onPointerUp={onUp}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="xp relative isolate h-[100svh] min-h-[600px] overflow-hidden bg-[#1B4388] text-white"
      >
        {/* Fondos */}
        {slides.map((s, i) =>
          s.id === 'intro' ? (
            <div key={s.id} aria-hidden className={`xp-bg xp-soft absolute inset-0 -z-20 ${i === index ? 'is-active' : ''}`}>
              {/* Sala desenfocada (modo retrato) teñida de azul, para integrar a Silvia */}
              <picture className="xp-backdrop absolute inset-y-0 right-0 block w-full lg:w-[70%]">
                <source type="image/avif" srcSet="/photos/silviaBackdrop-800.avif 800w, /photos/silviaBackdrop-1600.avif 1600w" sizes="70vw" />
                <img src="/photos/silviaBackdrop-800.webp" srcSet="/photos/silviaBackdrop-800.webp 800w, /photos/silviaBackdrop-1600.webp 1600w" sizes="70vw" alt="" width={1600} height={1000} className="h-full w-full object-cover" />
              </picture>
              {/* Silvia en color sobre azul suave en degradado */}
              <div className="absolute right-0 top-16 h-[50%] sm:bottom-0 sm:top-auto sm:h-[88%] sm:translate-x-[10.5%] lg:h-[92%]">
              <picture className="xp-cutout block h-full">
                <source type="image/avif" srcSet="/photos/silviaCutout-480.avif 480w, /photos/silviaCutout-800.avif 800w, /photos/silviaCutout-1112.avif 1112w" sizes="(min-width: 1024px) 45vw, 80vw" />
                <img
                  src="/photos/silviaCutout-800.webp"
                  srcSet="/photos/silviaCutout-480.webp 480w, /photos/silviaCutout-800.webp 800w, /photos/silviaCutout-1112.webp 1112w"
                  sizes="(min-width: 1024px) 45vw, 80vw"
                  width={1112}
                  height={2085}
                  alt=""
                  // @ts-expect-error — atributo estándar aún no tipado en React 18
                  fetchpriority="high"
                  className="h-full w-auto max-w-none object-contain object-right-bottom"
                />
              </picture>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#173A78] via-[#1B4388]/75 via-45% to-transparent to-70% sm:hidden" />
            </div>
          ) : (
            <div key={s.id} aria-hidden className={`xp-bg absolute inset-0 -z-20 ${i === index ? 'is-active' : ''}`}>
              <div className="xp-kb absolute inset-0 lg:left-[34%]">
                <Photo name={s.photo} sizes="(min-width: 1024px) 66vw, 100vw" grade={false} className="xp-duo h-full w-full !bg-[#1B4388]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#132F63] via-[#17407F]/70 to-[#17407F]/10 lg:bg-gradient-to-r lg:from-[#132F63] lg:via-[#17407F]/65 lg:to-transparent" />
            </div>
          ),
        )}
        <div aria-hidden className="xp-grid pointer-events-none absolute inset-0 -z-10" />
        <div aria-hidden className="xp-dust pointer-events-none absolute inset-0 -z-10" />

        {/* Etiqueta superior izquierda */}
        <p className="absolute left-5 top-24 hidden items-center gap-3 sm:flex text-[11px] font-medium uppercase tracking-[0.28em] text-white/60 sm:left-8 lg:left-12 lg:top-28">
          <span className="h-4 w-[3px] bg-sky" /> {e.label}
        </p>

        {/* Contador */}
        <div className="absolute left-1/2 top-24 -translate-x-1/2 text-[12px] font-medium tracking-[0.3em] lg:top-28" aria-live="polite">
          <span className="text-white">{pad(index)}</span>
          <span className="mx-3 inline-block h-px w-10 translate-y-[-3px] bg-white/40" />
          <span className="text-white/80">{pad(n - 1)}</span>
        </div>

        {/* Contenido de cada capítulo */}
        {slides.map((s, i) => {
          const active = i === index
          return (
            <div
              key={s.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${pad(i)} / ${pad(n - 1)}`}
              aria-hidden={!active}
              className={`xp-slide absolute inset-x-0 bottom-0 top-0 flex items-end pb-40 sm:items-center sm:pb-0 ${active ? 'is-active' : 'pointer-events-none'}`}
            >
              <div className="page-x w-full">
                <div className="max-w-[40rem]">
                  <h2 className="xp-word text-[2.4rem] font-light uppercase leading-[1.05] tracking-[0.18em] sm:text-6xl lg:text-[4.6rem]" aria-label={s.word}>
                    {(() => {
                      let k = 0
                      return s.word.split(' ').map((w, wi) => (
                        <span key={wi} aria-hidden className="inline-block whitespace-nowrap">
                          {Array.from(w).map((ch) => (
                            <span key={k} style={{ '--k': k++ } as CSSProperties}>
                              {ch}
                            </span>
                          ))}
                          {' '}
                        </span>
                      ))
                    })()}
                  </h2>
                  <p className="xp-text mt-7 max-w-md text-[16px] leading-[1.75] text-white/75 sm:text-[17px]">{s.text}</p>

                  <div className="xp-cta mt-9 flex flex-wrap items-center gap-4">
                    {i === 0 ? (
                      <>
                        <HoldButton label={s.cta} short={e.holdShort} onDone={next} />
                        <button type="button" onClick={() => setFilm(true)} className="group inline-flex min-h-[52px] items-center gap-3 pr-2 text-[14px] font-medium text-white/85 hover:text-white" tabIndex={active ? 0 : -1}>
                          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition-transform duration-500 group-hover:scale-110">
                            <Play className="ml-0.5 h-4 w-4 fill-current" />
                          </span>
                          {t.cine.play}
                        </button>
                      </>
                    ) : (
                      <Link to={s.href} tabIndex={active ? 0 : -1} className="inline-flex min-h-[52px] items-center border-l-[3px] border-sky bg-white px-8 text-[13px] font-semibold uppercase tracking-[0.22em] text-night transition-colors hover:bg-haze">
                        {s.cta}
                      </Link>
                    )}
                    {s.id === 'final' && (
                      <a href={site.phones[0].href} tabIndex={active ? 0 : -1} className="inline-flex items-center gap-2 text-[15px] font-medium text-white/85 hover:text-white">
                        <Phone className="h-4 w-4 text-sky" /> {site.phones[0].label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Flechas circulares con progreso */}
        <div className="absolute bottom-24 right-5 flex gap-3 sm:bottom-8 sm:right-8 lg:right-12">
          <RingButton label={e.next} onClick={next} progress={index > 0 && !paused && !reduced} cycle={cycle} duration={AUTOPLAY}>
            <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
          </RingButton>
          <RingButton label={e.prev} onClick={prev} cycle={cycle}>
            <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
          </RingButton>
        </div>

        {/* Capítulos (escritorio) */}
        <nav aria-label={e.chapters} className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              aria-current={i === index ? 'step' : undefined}
              className={`group flex flex-col items-start gap-2 text-left text-[10.5px] font-medium uppercase tracking-[0.22em] transition-colors ${i === index ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
            >
              <span className="relative block h-px w-16 overflow-hidden bg-white/20">
                <span className={`absolute inset-0 origin-left bg-sky transition-transform duration-700 ${i === index ? 'scale-x-100' : 'scale-x-0'}`} />
              </span>
              <span>
                {pad(i)} · {i === 0 ? 'Silvia' : s.word}
              </span>
            </button>
          ))}
        </nav>

        <a href="#cifras" className="absolute bottom-8 left-5 hidden items-center gap-2 text-[10.5px] uppercase tracking-[0.24em] text-white/50 hover:text-white sm:left-8 md:flex lg:left-12">
          <ChevronDown className="h-4 w-4 animate-bounce" /> {e.scroll}
        </a>
      </section>

      {film && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-night/85 p-3 backdrop-blur-md sm:p-8" onClick={() => setFilm(false)}>
          <div role="dialog" aria-modal="true" aria-label={t.intro.label} className="relative w-full max-w-5xl" onClick={(ev) => ev.stopPropagation()}>
            <button type="button" onClick={() => setFilm(false)} aria-label={t.cine.close} className="absolute -top-14 right-0 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
            <IntroFilm embedded onCta={() => setFilm(false)} />
          </div>
        </div>
      )}
    </>
  )
}

/** Botón circular con anillo de progreso del autoplay. */
function RingButton({ label, onClick, children, progress, cycle, duration = AUTOPLAY }: { label: string; onClick: () => void; children: React.ReactNode; progress?: boolean; cycle: number; duration?: number }) {
  return (
    <button type="button" onClick={onClick} aria-label={label} className="group relative grid h-14 w-14 place-items-center rounded-full text-white transition-colors hover:bg-white/10 sm:h-16 sm:w-16">
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 64 64" aria-hidden>
        <circle cx="32" cy="32" r="30.5" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1.2" />
        {progress && <circle key={cycle} className="xp-ring" cx="32" cy="32" r="30.5" fill="none" stroke="#6FA8FF" strokeWidth="1.6" pathLength={1} style={{ animationDuration: `${duration}ms` }} />}
      </svg>
      <span className="transition-transform duration-500 group-hover:translate-x-0.5">{children}</span>
    </button>
  )
}

/** "Mantén pulsado para entrar" (como Orano); clic/teclado también funcionan. */
function HoldButton({ label, short, onDone }: { label: string; short: string; onDone: () => void }) {
  const [p, setP] = useState(0)
  const raf = useRef(0)
  const t0 = useRef(0)
  const HOLD = 900
  const stop = () => {
    cancelAnimationFrame(raf.current)
    setP(0)
  }
  const begin = () => {
    t0.current = performance.now()
    const tick = (now: number) => {
      const v = Math.min(1, (now - t0.current) / HOLD)
      setP(v)
      if (v >= 1) {
        setP(0)
        onDone()
        return
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }
  useEffect(() => () => cancelAnimationFrame(raf.current), [])
  return (
    <button
      type="button"
      onPointerDown={begin}
      onPointerUp={(ev) => (ev.pointerType === 'mouse' ? stop() : (stop(), onDone()))}
      onPointerLeave={stop}
      onKeyDown={(ev) => (ev.key === 'Enter' || ev.key === ' ') && (ev.preventDefault(), onDone())}
      onClick={(ev) => ev.detail === 0 && onDone()}
      className="relative inline-flex min-h-[52px] select-none items-center gap-4 overflow-hidden border-l-[3px] border-sky bg-white px-7 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-night"
      aria-label={short}
    >
      <span aria-hidden className="absolute inset-y-0 left-0 bg-haze" style={{ width: `${p * 100}%` }} />
      <span className="relative">{label}</span>
    </button>
  )
}
