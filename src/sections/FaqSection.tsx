import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'
import { SectionTitle } from '../components/SectionTitle'

/** Preguntas frecuentes en acordeón (con datos estructurados FAQPage en el prerender). */
export function FaqSection() {
  const { t } = useI18n()
  const [open, setOpen] = useState<number | null>(0)
  return (
    <AnimatedSection id="preguntas" className="scroll-mt-24 py-24 sm:py-32">
      <div className="page-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionTitle kicker={t.faq.kicker} title={t.faq.title} />
          <p className="reveal d2 mt-6 text-[15px] text-ink/55">{t.faq.note}</p>
        </div>
        <div className="lg:col-span-8">
          {t.faq.items.map((it, i) => {
            const isOpen = open === i
            return (
              <div key={it.q} className={`reveal ${['d1', 'd2', 'd3', 'd4'][i % 4]} border-b border-line`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left text-[1.2rem] font-medium leading-snug tracking-[-0.02em] text-ink transition-colors hover:text-intense sm:text-[1.35rem]"
                  >
                    {it.q}
                    <span className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 ${isOpen ? 'rotate-45 border-abyss bg-abyss text-white' : 'text-ink'}`}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div id={`faq-${i}`} className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 text-[16px] leading-[1.75] text-ink/70">{it.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
