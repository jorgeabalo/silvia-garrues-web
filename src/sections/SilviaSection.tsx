import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { Photo } from '../components/Photo'
import { RevealText } from '../components/Rich'
import { SectionTitle } from '../components/SectionTitle'

export function SilviaSection() {
  const { t, to } = useI18n()
  const s = t.silvia
  return (
    <section id="silvia" className="py-24 sm:py-36">
      <div className="page-x">
        <AnimatedSection as="div" className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div className="lg:sticky lg:top-10">
              <div className="reveal">
                <Photo name="silviaStanding" ratio={4 / 5} sizes="(min-width: 1024px) 40vw, 100vw" className="rounded-[6px] shadow-lift" />
              </div>
              <div className="reveal d2 absolute -bottom-10 -right-3 w-[42%] sm:-right-8 lg:-right-12">
                <Photo name="silviaSeated" ratio={1} sizes="20vw" maxWidth={800} className="rounded-[6px] border-[6px] border-paper shadow-lift" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <SectionTitle kicker={s.kicker} title={s.title} />
            <p className="reveal d2 mt-8 text-[18px] leading-[1.75] text-ink/75">{s.lead}</p>

            <ol className="mt-12 border-t border-line">
              {s.chapters.map((c, i) => (
                <li key={c.title} className={`reveal ${['d1', 'd2', 'd3', 'd4'][i]} grid gap-2 border-b border-line py-7 sm:grid-cols-[160px_1fr] sm:gap-8`}>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-atlantic sm:pt-1.5">{c.place}</p>
                  <div>
                    <h3 className="text-[1.45rem] font-medium tracking-[-0.03em] text-ink">{c.title}</h3>
                    <p className="mt-2 text-[16px] leading-[1.7] text-ink/65">{c.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="reveal d3 mt-10">
              <Button to={to('silvia')} variant="ghost">
                {s.cta}
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection as="figure" className="mx-auto mt-28 max-w-5xl text-center sm:mt-40">
          <blockquote className="font-serif text-[2.4rem] leading-[1.05] tracking-[-0.02em] text-abyss sm:text-6xl lg:text-[5.2rem]">
            <RevealText text={`«${s.quote}»`} accentClass="" />
          </blockquote>
          <figcaption className="reveal d3 mt-8 text-[13px] uppercase tracking-[0.18em] text-ink/50">{s.quoteSource}</figcaption>
        </AnimatedSection>
      </div>
    </section>
  )
}
