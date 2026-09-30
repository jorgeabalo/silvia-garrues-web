import { Baby, Home, FileSignature } from 'lucide-react'
import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { Photo } from '../components/Photo'
import { SectionTitle } from '../components/SectionTitle'

const icons = [Baby, Home, FileSignature]

/** Divorcio: qué está en juego y el camino (mediación → acuerdo → juicio si hace falta). */
export function DivorceSection() {
  const { t, to } = useI18n()
  const d = t.divorce
  const steps = t.pages.services.mediationSteps
  return (
    <section className="relative mx-3 overflow-hidden rounded-[36px] bg-gradient-to-b from-cream to-mist py-20 sm:mx-5 sm:py-28 lg:mx-8">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#FFE3BD]/50 blur-[120px]" />
      <div className="page-x relative">
        <AnimatedSection as="div" className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionTitle kicker={d.kicker} title={d.title} intro={d.intro} size="xl" />
          </div>
          <div className="reveal d2 lg:col-span-5">
            <Photo name="meeting1" ratio={4 / 3} sizes="(min-width: 1024px) 40vw, 100vw" className="rounded-[28px] shadow-lift" />
          </div>
        </AnimatedSection>

        <AnimatedSection as="div" className="mt-16 grid gap-4 md:grid-cols-3">
          {d.stakes.map((s, i) => {
            const Icon = icons[i]
            return (
              <div key={s.title} className={`reveal ${['d1', 'd2', 'd3'][i]} rounded-[26px] bg-white p-8 shadow-soft`}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-haze/50 text-abyss">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em]">{s.title}</h3>
                <p className="mt-3 text-[15.5px] leading-[1.7] text-ink/65">{s.text}</p>
              </div>
            )
          })}
        </AnimatedSection>

        <AnimatedSection as="div" className="mt-20">
          <p className="kicker reveal">{d.pathTitle}</p>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-[26px] bg-line md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className={`reveal ${['d1', 'd2', 'd3'][i]} bg-paper p-8`}>
                <span className="font-serif text-6xl italic text-intense/80">{i + 1}</span>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-ink/65">{s.text}</p>
              </li>
            ))}
          </ol>
        </AnimatedSection>

        <AnimatedSection as="figure" className="mx-auto mt-20 max-w-4xl text-center">
          <blockquote className="reveal font-serif text-[1.9rem] leading-[1.2] text-abyss sm:text-[2.6rem]">«{d.quote}»</blockquote>
          <figcaption className="reveal d2 mt-6 text-[12px] uppercase tracking-[0.2em] text-ink/50">{d.quoteSource}</figcaption>
          <div className="reveal d3 mt-10">
            <Button to={to('contact')}>{t.hero.ctaPrimary}</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
