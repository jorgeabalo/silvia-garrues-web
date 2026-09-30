import { Link } from 'react-router-dom'
import { ArrowLeft, Check, MapPin } from 'lucide-react'
import { useI18n } from '../i18n'
import { practiceAreas } from '../content/practice'
import { areaFaq, areaSteps, copy } from '../content/compliance'
import { AnimatedSection } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Photo } from '../components/Photo'
import { SectionTitle } from '../components/SectionTitle'
import { UrgentBox } from '../components/UrgentBox'
import { FaqSection } from '../sections/FaqSection'
import { CtaSection } from '../sections/CtaSection'

/** Página propia de cada área de práctica. Solo contenido auténtico del despacho. */
export default function AreaPage({ id }: { id: string }) {
  const { t, lang, to, toArea } = useI18n()
  const a = practiceAreas.find((x) => x.slug === id)!
  const c = copy[lang]
  const steps = areaSteps(id)[lang]
  const faqIdx = [...(areaFaq[id] ?? []), t.faq.items.length - 1]
  const faqs = faqIdx.map((i) => t.faq.items[i])
  const others = practiceAreas.filter((x) => x.slug !== id && x.tier === 'main')

  return (
    <>
      <PageHero kicker={t.pages.services.kicker} title={a.name[lang]} intro={a.short[lang]}>
        <div className="reveal d3 mt-8 flex flex-wrap items-center gap-4">
          <Button to={to('contact')}>{t.ui.book}</Button>
          <Link to={to('services')} className="inline-flex min-h-[44px] items-center gap-2 px-2 text-[14px] font-medium text-ink/60 hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> {c.back}
          </Link>
        </div>
        <p className="reveal d4 mt-8 flex max-w-2xl gap-2 text-[14px] leading-relaxed text-ink/55">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-atlantic" /> {c.where}
        </p>
      </PageHero>

      <AnimatedSection className="pb-20">
        <div className="page-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker reveal">{t.pages.services.weHelp}</p>
            <ul className="reveal d1 mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {a.items[lang].map((item) => (
                <li key={item} className="flex gap-3 border-t border-line pt-4 text-[16px] leading-snug text-ink/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-intense" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal d2 lg:col-span-5">
            {a.photo ? (
              <Photo name={a.photo} ratio={4 / 3} sizes="(min-width: 1024px) 40vw, 100vw" className="rounded-[26px]" />
            ) : (
              <UrgentBox danger={id === 'violencia'} />
            )}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-cream py-24 sm:py-28">
        <div className="page-x">
          <SectionTitle title={c.howTitle} />
          <ol className={`mt-12 grid gap-4 md:grid-cols-2 ${steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {steps.map((s, i) => (
              <li key={s.title} className={`reveal ${['d1', 'd2', 'd3', 'd4'][i]} rounded-[26px] border border-line bg-white p-7`}>
                <span className="font-serif text-4xl italic text-intense">{i + 1}</span>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-ink/65">{s.text}</p>
              </li>
            ))}
          </ol>
          {id === 'violencia' && <p className="reveal d3 mt-8 max-w-2xl text-[15px] font-medium text-abyss">{c.noMediation}</p>}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 sm:py-28">
        <div className="page-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionTitle title={c.feesTitle} />
            <ul className="reveal d1 mt-8 space-y-3">
              {c.fees.map((f) => (
                <li key={f} className="flex gap-3 text-[16px] leading-snug text-ink/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-intense" strokeWidth={2} /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal d2 lg:col-span-6">{a.photo || id !== 'violencia' ? <UrgentBox /> : null}</div>
        </div>
      </AnimatedSection>

      <FaqSection items={faqs} title={c.faqTitle} id="preguntas-area" />

      <section className="pb-20">
        <div className="page-x flex flex-wrap gap-2">
          {others.map((o) => (
            <Link key={o.slug} to={toArea(o.slug)} className="rounded-full border border-line bg-white px-4 py-2.5 text-[14px] text-ink/75 transition-colors hover:border-abyss hover:text-abyss">
              {o.name[lang]}
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
