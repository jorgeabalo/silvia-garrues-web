import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n'
import { practiceAreas } from '../content/practice'
import { AnimatedSection } from '../components/AnimatedSection'
import { Photo } from '../components/Photo'
import { SectionTitle } from '../components/SectionTitle'

/** Las especialidades reales de Silvia, por orden de importancia. Divorcios, protagonista. */
export function SpecialtiesSection() {
  const { t, lang, to } = useI18n()
  const main = practiceAreas.filter((a) => a.tier === 'main')
  const others = practiceAreas.filter((a) => a.tier === 'other')
  const [lead, ...rest] = main
  return (
    <section id="servicios" className="py-24 sm:py-32">
      <div className="page-x">
        <AnimatedSection as="div">
          <SectionTitle kicker={t.specialties.kicker} title={t.specialties.title} intro={t.specialties.intro} />
        </AnimatedSection>

        <AnimatedSection as="div" className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Divorcios: tarjeta protagonista */}
          <Link
            to={to('services', lead.slug)}
            className="reveal group relative isolate flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[32px] p-7 text-white shadow-lift sm:p-10 lg:col-span-7 lg:row-span-3 lg:min-h-[640px]"
          >
            <Photo name={lead.photo!} sizes="(min-width: 1024px) 58vw, 100vw" className="!absolute inset-0 -z-10 h-full w-full" imgClassName="group-hover:scale-[1.04]" />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-abyss via-abyss/70 to-abyss/5" />
            <span className="font-serif text-xl italic text-haze">01</span>
            <h3 className="mt-3 text-[2.6rem] font-medium leading-[1] tracking-[-0.04em] sm:text-6xl">{lead.name[lang]}</h3>
            <p className="mt-5 max-w-lg text-[16.5px] leading-[1.7] text-white/80">{lead.short[lang]}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {lead.items[lang].slice(0, 5).map((it) => (
                <li key={it} className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[13px] backdrop-blur">
                  {it}
                </li>
              ))}
            </ul>
            <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold">
              {t.ui.readMore}
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-abyss transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </span>
          </Link>

          {rest.map((a, i) => (
            <Link
              key={a.slug}
              to={to('services', a.slug)}
              className={`reveal ${['d1', 'd2', 'd3'][i]} group relative flex flex-col overflow-hidden rounded-[28px] border border-line bg-white p-7 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:shadow-lift sm:p-8 lg:col-span-5`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="font-serif text-lg italic text-atlantic">{String(i + 2).padStart(2, '0')}</span>
                  <h3 className="mt-2 text-[1.75rem] font-medium leading-[1.08] tracking-[-0.035em] text-ink">{a.name[lang]}</h3>
                </div>
                {a.photo && (
                  <Photo name={a.photo} ratio={1} sizes="96px" maxWidth={480} className="h-20 w-20 shrink-0 rounded-2xl sm:h-24 sm:w-24" />
                )}
              </div>
              <p className="mt-4 text-[15.5px] leading-[1.65] text-ink/65">{a.short[lang]}</p>
              <span className="mt-auto flex items-center gap-2 pt-6 text-[14px] font-semibold text-abyss">
                {t.ui.readMore}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </Link>
          ))}
        </AnimatedSection>

        <AnimatedSection as="div" className="mt-8 flex flex-wrap items-center gap-2">
          <span className="reveal mr-2 text-[14px] text-ink/55">{t.specialties.others}</span>
          {others.map((a, i) => (
            <Link key={a.slug} to={to('services', a.slug)} className={`reveal ${['d1', 'd2', 'd3', 'd4'][i % 4]} rounded-full border border-line bg-white px-4 py-2 text-[14px] text-ink/75 transition-colors hover:border-abyss hover:text-abyss`}>
              {a.name[lang]}
            </Link>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
