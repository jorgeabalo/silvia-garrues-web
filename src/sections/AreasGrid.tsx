import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n'
import { home } from '../content/home'
import { practiceAreas } from '../content/practice'
import { useViewportParallax } from '../hooks/useScrollProgress'
import { AnimatedSection } from '../components/AnimatedSection'
import { Photo } from '../components/Photo'

/** Posición escalonada de las tarjetas (como «Our areas of expertise» de Leome). */
const layout = [
  { col: 'md:ml-[35%]', mt: '', speed: 0.6 },
  { col: 'md:ml-0', mt: 'md:-mt-[10%]', speed: 1.2 },
  { col: 'md:ml-[68%]', mt: 'md:-mt-[24%]', speed: 0.9 },
  { col: 'md:ml-[35%]', mt: 'md:-mt-[6%]', speed: 0.5 },
  { col: 'md:ml-0', mt: 'md:-mt-[16%]', speed: 1.1 },
]

function AreaCard({ id, i }: { id: string; i: number }) {
  const { lang, toArea } = useI18n()
  const a = practiceAreas.find((x) => x.slug === id)!
  const l = layout[i]
  const ref = useViewportParallax<HTMLDivElement>((el, t) => {
    if (window.innerWidth < 768) return void (el.style.transform = '')
    el.style.transform = `translate3d(0, ${(-t * 70 * l.speed).toFixed(1)}px, 0)`
  })
  return (
    <div ref={ref} className={`${l.col} ${l.mt} w-full md:w-[32%] will-change-transform`}>
      <Link
        to={toArea(id)}
        className={`reveal ${['', 'd1', 'd2', 'd1', 'd2'][i]} group relative flex aspect-[4/3] flex-col justify-between overflow-hidden border border-line p-5 transition-colors duration-500 hover:border-ice md:aspect-square md:p-6`}
      >
        {a.photo && (
          <Photo
            name={a.photo}
            sizes="(min-width: 768px) 32vw, 100vw"
            className="!absolute inset-0 -z-0 opacity-70 transition-opacity duration-700 group-hover:opacity-100"
            imgClassName="scale-[1.06] transition-transform duration-[1.2s] group-hover:scale-100"
          />
        )}
        <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
        <div className="relative flex items-start justify-between">
          <span className="text-[12px] text-ink/70">0{i + 1}</span>
          <span className="grid h-11 w-11 place-items-center bg-ice text-navy transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="h-6 w-6" strokeWidth={2.2} />
          </span>
        </div>
        <div className="relative">
          <h3 className="text-[1.6rem] font-medium leading-tight tracking-[-0.02em] text-ink sm:text-[1.9rem]">{a.name[lang]}</h3>
          <p className="mt-2 max-h-0 overflow-hidden text-[14.5px] leading-relaxed text-ink/80 opacity-0 transition-all duration-700 group-hover:max-h-40 group-hover:opacity-100 max-md:max-h-40 max-md:opacity-100">
            {a.short[lang]}
          </p>
        </div>
      </Link>
    </div>
  )
}

export function AreasGrid() {
  const { lang, to, toArea } = useI18n()
  const h = home[lang]
  const main = practiceAreas.filter((a) => a.tier === 'main')
  const other = practiceAreas.filter((a) => a.tier === 'other')
  return (
    <AnimatedSection id="especialidades" className="relative scroll-mt-24 bg-paper py-24 sm:py-32" threshold={0.05}>
      <span aria-hidden className="absolute left-5 top-8 h-1.5 w-1.5 bg-ice sm:left-8 lg:left-10" />
      <span aria-hidden className="absolute right-5 top-8 h-1.5 w-1.5 bg-ice sm:right-8 lg:right-10" />
      <div className="px-5 sm:px-8 lg:px-10">
        <div className="relative md:h-0">
          <h2 className="reveal whitespace-pre-line text-[clamp(2.4rem,4.4vw,4rem)] font-medium leading-[1.04] tracking-[-0.035em] text-ice">{h.areasTitle}</h2>
          <Link to={to('services')} className="reveal d2 mt-6 inline-block border-b border-ice/50 pb-1 text-[17px] text-ice hover:border-ice md:absolute md:right-0 md:top-2 md:mt-0">
            {h.areasAll}
          </Link>
        </div>
        <div className="mt-12 flex flex-col gap-4 md:mt-0 md:gap-0">
          {main.map((a, i) => (
            <AreaCard key={a.slug} id={a.slug} i={i} />
          ))}
        </div>
        <div className="reveal mt-20 border-t border-line pt-8 md:mt-28">
          <p className="text-[12px] uppercase tracking-[0.18em] text-atlantic">{h.otherAreas}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {other.map((a) => (
              <Link key={a.slug} to={toArea(a.slug)} className="border border-line px-4 py-2.5 text-[14px] text-ink/80 transition-colors hover:border-ice hover:text-ice">
                {a.name[lang]}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <span aria-hidden className="absolute bottom-8 left-5 h-1.5 w-1.5 bg-ice sm:left-8 lg:left-10" />
      <span aria-hidden className="absolute bottom-8 right-5 h-1.5 w-1.5 bg-ice sm:right-8 lg:right-10" />
    </AnimatedSection>
  )
}
