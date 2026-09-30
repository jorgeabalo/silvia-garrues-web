import { useI18n } from '../i18n'
import { practiceAreas } from '../content/practice'
import { AnimatedSection } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { PracticeCard } from '../components/PracticeCard'
import { SectionTitle } from '../components/SectionTitle'

export function PracticeSection() {
  const { t, to } = useI18n()
  const featured = practiceAreas.filter((a) => a.featured)
  const rest = practiceAreas.filter((a) => !a.featured)
  return (
    <section id="servicios" className="py-24 sm:py-36">
      <div className="page-x">
        <AnimatedSection as="div" className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle kicker={t.practice.kicker} title={t.practice.title} intro={t.practice.intro} />
          <div className="reveal d3 shrink-0">
            <Button to={to('services')} variant="ghost">
              {t.practice.all}
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection as="div" className="mt-14 grid gap-5 lg:grid-cols-2">
          {featured.map((a, i) => (
            <div key={a.slug} className={`reveal ${i ? 'd2' : 'd1'} flex`}>
              <PracticeCard area={a} index={i} className="w-full" />
            </div>
          ))}
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <div key={a.slug} className={`reveal ${['d1', 'd2', 'd3'][i % 3]} flex`}>
              <PracticeCard area={a} index={i + featured.length} className="w-full" />
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
