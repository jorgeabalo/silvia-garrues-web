import { Link } from 'react-router-dom'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { useI18n } from '../i18n'
import { practiceAreas } from '../content/practice'
import { AnimatedSection } from '../components/AnimatedSection'
import { Photo } from '../components/Photo'
import { SectionTitle } from '../components/SectionTitle'

/** Especialidades en mosaico de imagen (bento). Divorcios, protagonista. */
export function SpecialtiesSection() {
  const { t, lang, to } = useI18n()
  const main = practiceAreas.filter((a) => a.tier === 'main')
  const others = practiceAreas.filter((a) => a.tier === 'other')
  const layout = ['lg:col-span-7 lg:row-span-2 min-h-[460px] lg:min-h-[620px]', 'lg:col-span-5 min-h-[300px]', 'lg:col-span-5 min-h-[300px]', 'lg:col-span-6 min-h-[320px]', 'lg:col-span-6 min-h-[320px]']
  return (
    <section id="servicios" className="py-24 sm:py-32">
      <div className="page-x">
        <AnimatedSection as="div" className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle kicker={t.specialties.kicker} title={t.specialties.title} intro={t.specialties.intro} />
        </AnimatedSection>

        <AnimatedSection as="div" className="mt-14 grid gap-4 lg:grid-cols-12">
          {main.map((a, i) => (
            <Link
              key={a.slug}
              to={to('services', a.slug)}
              className={`reveal ${['', 'd1', 'd2', 'd3', 'd4'][i]} group relative isolate flex flex-col justify-end overflow-hidden rounded-[28px] bg-abyss p-7 text-white shadow-soft sm:p-9 ${layout[i]}`}
            >
              {a.photo ? (
                <Photo name={a.photo} sizes={i === 0 ? '(min-width: 1024px) 58vw, 100vw' : '(min-width: 1024px) 42vw, 100vw'} className="xp-duo !absolute inset-0 -z-10 h-full w-full" grade={false} imgClassName="transition-transform duration-[1.4s] group-hover:scale-[1.05]" />
              ) : (
                <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(80%_80%_at_80%_0%,rgba(111,168,255,.35),transparent_60%),linear-gradient(135deg,#15315F,#0E1D38)]">
                  <ShieldCheck className="absolute right-8 top-8 h-16 w-16 text-[#9CC4FF]/70" strokeWidth={1.2} />
                </div>
              )}
              <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-night/95 via-night/45 to-night/0 transition-opacity duration-700 group-hover:opacity-90" />
              <span className="font-serif text-lg italic text-[#9CC4FF]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className={`mt-2 font-semibold leading-[1.02] tracking-[-0.04em] ${i === 0 ? 'text-[2.6rem] sm:text-6xl' : 'text-[1.9rem] sm:text-[2.2rem]'}`}>{a.name[lang]}</h3>
              <p className={`mt-4 max-w-lg text-[15.5px] leading-[1.65] text-white/75 ${i === 0 ? '' : 'line-clamp-3'}`}>{a.short[lang]}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold">
                {t.ui.readMore}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-night transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
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
