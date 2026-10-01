import { formatDate, useI18n } from '../i18n'
import { press, testimonials } from '../content/articles'
import { AnimatedSection } from '../components/AnimatedSection'
import { Carousel } from '../components/Carousel'
import { SectionTitle } from '../components/SectionTitle'
import { TestimonialCard } from '../components/TestimonialCard'

/** Carrusel editorial de prensa (y de testimonios, cuando existan testimonios reales). */
export function PressSection() {
  const { t, lang } = useI18n()
  return (
    <AnimatedSection className="relative mx-3 overflow-hidden rounded-[6px] border border-line bg-cream py-20 text-white sm:mx-5 sm:py-28 lg:mx-8">
      <div aria-hidden className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-intense/30 blur-[120px]" />
      <div className="page-x relative">
        <SectionTitle kicker={t.press.kicker} title={t.press.title} tone="light" />
        <div className="reveal d2 mt-14">
          <Carousel label={t.press.kicker}>
            {press.map((p) => {
              const original = p.outlet === 'Diario Vasco' ? 'es' : undefined
              return (
                <TestimonialCard
                  key={p.url}
                  text={p.quote[lang]}
                  lang={original}
                  author={p.outlet}
                  meta={<time dateTime={p.date}>{formatDate(p.date, lang)}</time>}
                  href={p.url}
                />
              )
            })}
          </Carousel>
        </div>
      </div>
    </AnimatedSection>
  )
}

/** Se renderiza solo si hay testimonios reales y autorizados en content/articles.ts */
export function TestimonialsSection() {
  const { lang } = useI18n()
  if (!testimonials.length) return null
  return (
    <AnimatedSection className="relative mx-3 mt-6 overflow-hidden rounded-[6px] border border-line bg-cream py-20 text-white sm:mx-5 lg:mx-8">
      <div className="page-x">
        <Carousel label="Testimonios">
          {testimonials.map((x, i) => (
            <TestimonialCard key={i} text={x.text[lang]} author={x.author} />
          ))}
        </Carousel>
      </div>
    </AnimatedSection>
  )
}
