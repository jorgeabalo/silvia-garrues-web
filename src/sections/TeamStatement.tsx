import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { home } from '../content/home'
import { copy } from '../content/compliance'
import { useViewportParallax } from '../hooks/useScrollProgress'
import { Photo } from '../components/Photo'
import { AnimatedSection } from '../components/AnimatedSection'

/** Bloque a sangre con foto de Silvia y titular grande (como «A team that makes a difference»). */
export function TeamStatement() {
  const { lang, to } = useI18n()
  const h = home[lang]
  const img = useViewportParallax<HTMLDivElement>((el, t) => {
    el.style.transform = `translate3d(0, ${(t * 60).toFixed(1)}px, 0) scale(${(1.12 - Math.abs(t) * 0.04).toFixed(3)})`
  })
  return (
    <AnimatedSection className="relative h-[100svh] min-h-[560px] overflow-hidden bg-night" threshold={0.2}>
      <div ref={img} className="absolute inset-0 scale-[1.12] will-change-transform">
        <Photo name="silviaStanding" sizes="100vw" className="h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/10" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 px-5 pb-24 sm:px-8 md:flex-row md:items-end md:justify-between md:pb-12 lg:px-10">
        <div>
          <h2 className="text-[clamp(2.1rem,4.6vw,4.4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ice">
            <span className="reveal block">{h.teamTitle[0]}</span>
            <span className="reveal d1 block">{h.teamTitle[1]}</span>
          </h2>
          <p className="reveal d2 mt-4 text-[14px] text-ink/70">Silvia Garrues Remírez · {copy[lang].colegiada}</p>
        </div>
        <Link to={to('silvia')} className="reveal d3 shrink-0 self-start border-b border-ice/60 pb-1 text-[17px] text-ice hover:border-ice md:self-end">
          {h.teamLink}
        </Link>
      </div>
    </AnimatedSection>
  )
}
