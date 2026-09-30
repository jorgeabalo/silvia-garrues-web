import { useEffect, useState } from 'react'
import { ArrowDown, RotateCcw, SkipForward } from 'lucide-react'
import { useI18n } from '../i18n'
import { Button } from '../components/Button'
import { Photo } from '../components/Photo'

/**
 * Película introductoria animada (≈16 s), sin vídeo externo: SVG + CSS.
 *  1. Una pareja unida, con su hijo, su casa y su coche.
 *  2. Los caminos se separan; el suelo se agrieta.
 *  3. Tiran de una cuerda: casa, coche e hijo, disputados.
 *  4. Llega Silvia: luz cálida, todo se ordena sobre una línea serena.
 * Respeta prefers-reduced-motion (muestra directamente el final).
 */
const DURATION = 16000

export function IntroFilm() {
  const { t, to } = useI18n()
  const i = t.intro
  const [run, setRun] = useState(0)
  const [ended, setEnded] = useState(false)
  const [skipped, setSkipped] = useState(false)

  useEffect(() => {
    if (skipped) return
    setEnded(false)
    const id = window.setTimeout(() => setEnded(true), DURATION)
    return () => window.clearTimeout(id)
  }, [run, skipped])

  const skip = () => {
    setSkipped(true)
    setEnded(true)
  }
  const replay = () => {
    setSkipped(false)
    setRun((r) => r + 1)
  }

  return (
    <section aria-label={i.label} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-gradient-to-b from-cream via-paper to-paper pb-28 pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(42,91,196,.10),transparent_70%)]" />

      <div key={run} className={`intro relative mx-auto flex w-full max-w-[1100px] flex-1 flex-col justify-center px-3 ${skipped ? 'intro-skip' : ''}`}>
        {/* Escenario */}
        <div className="relative mx-auto w-full max-w-[min(100%,calc(52svh*800/560))]">
          <svg viewBox="0 0 800 560" className="block h-auto w-full" role="img" aria-label={[...i.scenes, i.finale].join(' ')}>
            <defs>
              <radialGradient id="calm" cx="50%" cy="38%" r="55%">
                <stop offset="0" stopColor="#FFE9C7" stopOpacity=".95" />
                <stop offset=".45" stopColor="#F6E7D2" stopOpacity=".55" />
                <stop offset="1" stopColor="#FFFBF6" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Luz de calma */}
            <rect className="i-glow" x="0" y="0" width="800" height="560" fill="url(#calm)" />

            {/* Suelo partido + grieta */}
            <path d="M60 470 H398" stroke="#172238" strokeOpacity=".18" strokeWidth="2" strokeLinecap="round" />
            <path d="M402 470 H740" stroke="#172238" strokeOpacity=".18" strokeWidth="2" strokeLinecap="round" />
            <path className="i-crack" pathLength={1} d="M400 470 l-12 16 l16 12 l-14 18 l12 20 l-8 16" fill="none" stroke="#172238" strokeOpacity=".45" strokeWidth="2.5" strokeLinejoin="round" />

            {/* Línea serena final */}
            <path className="i-line" pathLength={1} d="M150 470 H650" stroke="#C8964F" strokeWidth="3" strokeLinecap="round" />

            {/* Cuerda de la disputa */}
            <g className="i-rope">
              <path d="M166 392 Q400 404 634 392" fill="none" stroke="#C8964F" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="10 7" className="i-rope-dash" />
            </g>

            {/* Casa */}
            <g className="i-house">
              <g className="i-house-shake">
                <g transform="translate(180 470)">
                  <path d="M-60 0 V-78 L0 -128 L60 -78 V0 Z" fill="#FFFFFF" stroke="#15315F" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M-16 0 V-40 H16 V0" fill="none" stroke="#15315F" strokeWidth="3" />
                  <rect x="24" y="-64" width="20" height="20" rx="3" fill="none" stroke="#15315F" strokeWidth="2.5" />
                  <rect x="-44" y="-64" width="20" height="20" rx="3" fill="none" stroke="#15315F" strokeWidth="2.5" />
                </g>
              </g>
            </g>

            {/* Coche */}
            <g className="i-car">
              <g className="i-car-shake">
                <g transform="translate(620 470)">
                  <path d="M-72 -12 H72 V-34 Q72 -44 62 -46 L34 -50 L14 -74 H-38 L-60 -50 L-66 -48 Q-72 -46 -72 -38 Z" fill="#FFFFFF" stroke="#15315F" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M-30 -70 H10 L26 -50 H-50 Z" fill="#C9D8EE" />
                  <circle cx="-40" cy="-10" r="13" fill="#FFFFFF" stroke="#15315F" strokeWidth="3" />
                  <circle cx="40" cy="-10" r="13" fill="#FFFFFF" stroke="#15315F" strokeWidth="3" />
                </g>
              </g>
            </g>

            {/* Persona A */}
            <g className="i-a">
              <g className="i-a-lean">
                <g transform="translate(330 470)">
                  <circle cx="0" cy="-150" r="21" fill="#15315F" />
                  <rect x="-25" y="-122" width="50" height="122" rx="25" fill="#15315F" />
                </g>
              </g>
            </g>

            {/* Persona B */}
            <g className="i-b">
              <g className="i-b-lean">
                <g transform="translate(470 470)">
                  <circle cx="0" cy="-146" r="20" fill="#3C6C9E" />
                  <rect x="-24" y="-118" width="48" height="118" rx="24" fill="#3C6C9E" />
                </g>
              </g>
            </g>

            {/* Hijo */}
            <g className="i-kid">
              <g className="i-kid-shake">
                <g transform="translate(400 470)">
                  <circle cx="0" cy="-94" r="14" fill="#C8964F" />
                  <rect x="-16" y="-74" width="32" height="74" rx="16" fill="#C8964F" />
                </g>
              </g>
            </g>

            {/* Corazón inicial */}
            <g className="i-heart">
              <path transform="translate(400 318)" d="M0 12 C-18 -2 -22 -14 -12 -20 C-6 -24 -1 -20 0 -16 C1 -20 6 -24 12 -20 C22 -14 18 -2 0 12 Z" fill="#E7A27B" />
            </g>
          </svg>

          {/* Silvia aparece */}
          <div className="i-silvia pointer-events-none absolute left-1/2 top-[8%] w-[20%] max-w-[170px] -translate-x-1/2">
            <Photo name="silviaDesk" ratio={1} sizes="340px" maxWidth={800} priority imgClassName="scale-[2] origin-[67%_30%]" className="rounded-full shadow-[0_20px_50px_-15px_rgba(21,49,95,.45)] ring-4 ring-white" />
          </div>
        </div>

        {/* Subtítulos */}
        <div className="relative mx-auto mt-4 h-[5.5rem] w-full max-w-3xl text-center sm:mt-6 sm:h-24">
          {i.scenes.map((c, n) => (
            <p key={n} className={`i-cap i-cap-${n + 1} absolute inset-x-0 top-0 text-balance font-serif text-[1.9rem] leading-[1.1] text-ink sm:text-[2.6rem]`}>
              {c}
            </p>
          ))}
          <p className="i-cap i-cap-final absolute inset-x-0 top-0 text-balance text-[1.7rem] font-medium leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.5rem]">
            <span className="serif-accent text-intense">{i.finale}</span>
          </p>
        </div>

        <div className="i-cta mt-2 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button to={to('contact')}>{t.hero.ctaPrimary}</Button>
          <a href="#inicio" className="inline-flex min-h-[44px] items-center gap-2 px-4 text-[14px] font-medium text-ink/60 hover:text-ink">
            <ArrowDown className="h-4 w-4" /> {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Controles */}
      <div className="absolute bottom-24 right-4 z-10 sm:bottom-8 sm:right-8">
        {ended ? (
          <button type="button" onClick={replay} className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 text-[13px] font-medium text-ink/70 backdrop-blur hover:text-ink">
            <RotateCcw className="h-3.5 w-3.5" /> {i.replay}
          </button>
        ) : (
          <button type="button" onClick={skip} className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 text-[13px] font-medium text-ink/70 backdrop-blur hover:text-ink">
            <SkipForward className="h-3.5 w-3.5" /> {i.skip}
          </button>
        )}
      </div>
    </section>
  )
}
