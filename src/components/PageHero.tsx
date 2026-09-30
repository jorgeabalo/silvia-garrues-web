import type { ReactNode } from 'react'
import { AnimatedSection } from './AnimatedSection'
import { SectionTitle } from './SectionTitle'

export function PageHero({ kicker, title, intro, children }: { kicker: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <AnimatedSection className="relative overflow-hidden pb-12 pt-32 sm:pt-44" threshold={0}>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(55%_60%_at_30%_0%,rgba(30,79,214,.12),transparent_70%)]" />
      <div className="page-x relative">
        <SectionTitle as="h1" kicker={kicker} title={title} intro={intro} size="xl" />
        {children}
      </div>
    </AnimatedSection>
  )
}
