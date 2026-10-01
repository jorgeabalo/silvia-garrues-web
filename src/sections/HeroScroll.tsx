import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { home } from '../content/home'
import { practiceAreas } from '../content/practice'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { Photo } from '../components/Photo'
import { Logo } from '../components/Logo'

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const range = (p: number, a: number, b: number) => clamp((p - a) / (b - a))

/**
 * Portada estilo Leome & Partners:
 * «Abogada de familia» · retrato · «con calma». Al hacer scroll la imagen crece
 * hasta ocupar toda la pantalla, el retrato se funde con la foto del despacho
 * y aparece la declaración de intenciones.
 */
export function HeroScroll() {
  const { lang, toArea } = useI18n()
  const h = home[lang]
  const box = useRef<HTMLDivElement>(null)
  const l1 = useRef<HTMLHeadingElement>(null)
  const l2 = useRef<HTMLParagraphElement>(null)
  const portrait = useRef<HTMLDivElement>(null)
  const shade = useRef<HTMLDivElement>(null)
  const statement = useRef<HTMLDivElement>(null)
  const frame = useRef<HTMLDivElement>(null)
  const bottom = useRef<HTMLDivElement>(null)

  const section = useScrollProgress<HTMLElement>((p) => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const mobile = vw < 768
    const w0 = mobile ? vw * 0.62 : Math.min(vw * 0.3, 470)
    const h0 = mobile ? vh * 0.4 : Math.min(vh * 0.44, 470)
    const e = ease(range(p, 0, 0.55))
    if (box.current) {
      box.current.style.width = `${w0 + (vw - w0) * e}px`
      box.current.style.height = `${h0 + (vh - h0) * e}px`
      box.current.style.borderRadius = `${4 * (1 - e)}px`
    }
    if (l1.current) l1.current.style.transform = `translate3d(0, ${-e * vh * 0.35}px, 0)`
    if (l2.current) l2.current.style.transform = `translate3d(0, ${e * vh * 0.35}px, 0)`
    if (portrait.current) portrait.current.style.opacity = String(1 - range(p, 0.18, 0.5))
    if (shade.current) shade.current.style.opacity = String(range(p, 0.4, 0.7))
    const s = range(p, 0.55, 0.8)
    if (statement.current) {
      statement.current.style.opacity = String(s)
      statement.current.style.transform = `translate3d(0, ${(1 - s) * 40}px, 0)`
    }
    const f = range(p, 0.48, 0.72)
    if (frame.current) {
      frame.current.style.opacity = String(f)
      frame.current.style.transform = `translate3d(0, ${(1 - f) * 30}px, 0)`
    }
    if (bottom.current) bottom.current.style.opacity = String(1 - range(p, 0, 0.2))
  })

  const main = practiceAreas.filter((a) => a.tier === 'main')

  return (
    <section ref={section} className="relative h-[280svh] bg-paper motion-reduce:h-auto" aria-label={`${h.line1} ${h.line2}`}>
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden motion-reduce:relative">
        {/* Imagen que crece */}
        <div ref={box} className="relative z-10 overflow-hidden rounded-[4px]" style={{ width: 'min(30vw,470px)', height: 'min(44svh,470px)' }}>
          <Photo name="silviaDesk" sizes="100vw" priority className="!absolute inset-0" />
          <div ref={portrait} className="absolute inset-0">
            <picture>
              <source type="image/avif" srcSet="/photos/silviaRetrato-480.avif 480w, /photos/silviaRetrato-920.avif 920w" sizes="(min-width: 768px) 470px, 62vw" />
              <img
                src="/photos/silviaRetrato-920.webp"
                srcSet="/photos/silviaRetrato-480.webp 480w, /photos/silviaRetrato-920.webp 920w"
                sizes="(min-width: 768px) 470px, 62vw"
                alt="Silvia Garrues Remírez"
                width={920}
                height={1150}
                // @ts-expect-error — atributo estándar aún no tipado en React 18
                fetchpriority="high"
                className="h-full w-full object-cover object-[50%_30%]"
              />
            </picture>
          </div>
          <div ref={shade} className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10 opacity-0" />

          {/* Marco tipo cartel (como en Leome) */}
          <div ref={frame} className="absolute left-[5%] top-[20%] hidden w-[min(460px,36vw)] border border-ice/40 bg-navy/85 p-7 opacity-0 backdrop-blur-md md:block">
            <p className="text-[1.7rem] font-medium tracking-[-0.02em] text-ink">{h.frameTitle}</p>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/75">{h.frameText}</p>
            <div className="mt-6 flex items-end justify-between">
              <span className="h-1.5 w-1.5 bg-ice" />
              <Logo mark height={46} />
            </div>
          </div>

          {/* Declaración */}
          <div ref={statement} className="absolute inset-x-0 bottom-0 px-5 pb-24 opacity-0 sm:px-8 md:pb-14 lg:px-10">
            <p className="max-w-[44rem] text-[1.25rem] font-medium leading-[1.35] tracking-[-0.015em] text-ice sm:text-[1.7rem]">{h.statement}</p>
          </div>
        </div>

        {/* Titular partido */}
        <h1 ref={l1} className="pointer-events-none absolute inset-x-0 top-[calc(50%-min(22svh,235px)-1.1em)] z-0 text-center text-[clamp(2.6rem,7.4vw,7rem)] font-medium leading-none tracking-[-0.04em] text-ice max-md:top-[calc(50%-20svh-1.15em)]">
          {h.line1}
        </h1>
        <p ref={l2} aria-hidden className="pointer-events-none absolute inset-x-0 top-[calc(50%+min(22svh,235px)+0.1em)] z-0 text-center text-[clamp(2.6rem,7.4vw,7rem)] font-medium leading-none tracking-[-0.04em] text-white max-md:top-[calc(50%+20svh+0.12em)]">
          {h.line2}
        </p>

        {/* Áreas al pie, como el menú inferior de Leome */}
        <div ref={bottom} className="absolute inset-x-0 bottom-0 z-20 hidden justify-between px-5 pb-6 text-[12px] text-ink/70 sm:px-8 md:flex lg:px-10">
          {main.map((a) => (
            <Link key={a.slug} to={toArea(a.slug)} className="transition-colors hover:text-ice">
              {a.name[lang]}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
