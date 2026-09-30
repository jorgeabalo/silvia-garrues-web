import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'
import { SectionTitle } from '../components/SectionTitle'

export function ApproachSection() {
  const { t } = useI18n()
  const a = t.approach
  return (
    <AnimatedSection className="relative mx-3 overflow-hidden rounded-[32px] bg-mist py-20 sm:mx-5 sm:py-28 lg:mx-8">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-intense/10 blur-[100px]" />
      <div className="page-x relative">
        <SectionTitle kicker={a.kicker} title={a.title} />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {a.items.map((it, i) => (
            <div key={it.name} className={`reveal ${['d1', 'd2', 'd3'][i]} rounded-[26px] bg-white p-8 shadow-soft`}>
              <span className="font-serif text-5xl italic text-intense/80">{['I', 'II', 'III'][i]}</span>
              <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em]">{it.name}</h3>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-ink/65">{it.text}</p>
            </div>
          ))}
        </div>
        <div className="reveal d3 mt-12 flex flex-col gap-6 border-t border-ink/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[15px] text-ink/60">
            {a.during}{' '}
            {a.modes.map((m, i) => (
              <span key={m} className="serif-accent text-[1.35em] text-abyss">
                {m}
                {i < a.modes.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
          <ul className="flex flex-wrap gap-2">
            {a.offer.map((o) => (
              <li key={o} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-[13.5px] text-ink/75">
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  )
}
