import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { practiceAreas } from '../content/practice'
import { AnimatedSection } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Photo } from '../components/Photo'
import { SectionTitle } from '../components/SectionTitle'
import { ApproachSection } from '../sections/ApproachSection'
import { CtaSection } from '../sections/CtaSection'

export default function ServicesPage() {
  const { t, lang, to, toArea } = useI18n()
  const p = t.pages.services
  return (
    <>
      <PageHero kicker={p.kicker} title={p.title} intro={p.intro}>
        <nav className="reveal d3 mt-10 flex flex-wrap gap-2" aria-label={p.kicker}>
          {practiceAreas.map((a) => (
            <a key={a.slug} href={`#${a.slug}`} className="rounded-full border border-line bg-white px-4 py-2.5 text-[14px] text-ink/75 transition-colors hover:border-abyss hover:text-abyss">
              {a.name[lang]}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="pb-24">
        <div className="page-x space-y-5">
          {practiceAreas.map((a, i) => (
            <AnimatedSection as="article" key={a.slug} id={a.slug} className="scroll-mt-8 overflow-hidden rounded-[30px] border border-line bg-white shadow-soft">
              <div className="grid lg:grid-cols-12">
                <div className="p-7 sm:p-12 lg:col-span-7">
                  <span className="reveal font-serif text-xl italic text-atlantic">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="reveal d1 mt-3 text-[2.2rem] font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl">{a.name[lang]}</h2>
                  <p className="reveal d2 mt-5 max-w-xl text-[17px] leading-[1.7] text-ink/70">{a.short[lang]}</p>
                  <p className="kicker reveal d3 mt-9">{p.weHelp}</p>
                  <ul className="reveal d3 mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {a.items[lang].map((item) => (
                      <li key={item} className="flex gap-3 text-[15.5px] leading-snug text-ink/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-intense" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="reveal d4 mt-10 flex flex-wrap items-center gap-4">
                    <Link to={toArea(a.slug)} className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-abyss px-6 text-[15px] font-semibold text-white transition-colors hover:bg-intense">
                      {a.name[lang]} <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Button to={to('contact')} variant="ghost">
                      {t.hero.ctaPrimary}
                    </Button>
                  </div>
                </div>
                {a.photo && (
                  <div className="reveal d2 lg:col-span-5">
                    <Photo name={a.photo} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[16/10] h-full lg:aspect-auto" />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <ApproachSection />

      <AnimatedSection className="py-24 sm:py-32">
        <div className="page-x">
          <SectionTitle title={p.mediationTitle} />
          <ol className="mt-14 grid gap-4 md:grid-cols-3">
            {p.mediationSteps.map((s, i) => (
              <li key={s.title} className={`reveal ${['d1', 'd2', 'd3'][i]} rounded-[26px] border border-line p-8 ${i === 2 ? 'bg-abyss text-white' : 'bg-white'}`}>
                <span className={`font-serif text-5xl italic ${i === 2 ? 'text-haze' : 'text-intense'}`}>{i + 1}</span>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em]">{s.title}</h3>
                <p className={`mt-3 text-[15.5px] leading-[1.7] ${i === 2 ? 'text-white/70' : 'text-ink/65'}`}>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="reveal d3 mt-16 grid gap-10 lg:grid-cols-12">
            <h3 className="text-3xl font-medium tracking-[-0.03em] lg:col-span-4">{p.benefitsTitle}</h3>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {p.benefits.map((b) => (
                <li key={b} className="flex gap-3 border-t border-line pt-4 text-[16px] leading-snug text-ink/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-intense" strokeWidth={2} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <CtaSection />
    </>
  )
}
