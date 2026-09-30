import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'

/** Banda de cifras reales, en grande (como los "récords" de Arnold & Itkin, pero sin inventar resultados). */
export function StatsBand() {
  const { t } = useI18n()
  return (
    <AnimatedSection id="cifras" className="relative bg-night pb-20 text-white sm:pb-24">
      <div className="page-x">
        <dl className="grid divide-y divide-white/10 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {t.facts.map((f, i) => (
            <div key={f.label} className={`reveal ${['d1', 'd2', 'd3'][i]} px-2 py-9 sm:px-8 sm:py-12`}>
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="font-serif text-7xl leading-none text-[#9CC4FF] sm:text-8xl">{f.value}</span>
                <span className="mt-4 block max-w-[24ch] text-[15px] leading-snug text-white/65">{f.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </AnimatedSection>
  )
}
