import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'
import { Photo } from '../components/Photo'
import { RevealText } from '../components/Rich'
import { useParallax } from '../hooks/useParallax'

/** Tolosa / Euskadi: identidad, no turismo. Panorámica con parallax ligero. */
export function RootsSection() {
  const { t } = useI18n()
  const r = t.roots
  const parallax = useParallax<HTMLDivElement>(50)
  return (
    <AnimatedSection className="relative">
      <div className="relative mx-3 overflow-hidden rounded-[32px] sm:mx-5 lg:mx-8">
        <div ref={parallax} className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full will-change-transform" style={{ transform: 'scale(1.12)' }}>
            <Photo name="tolosaOria" sizes="100vw" className="h-full w-full" />
          </div>
        </div>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/55 to-abyss/10" />
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_100%,rgba(30,79,214,.35),transparent)]" />

        <div className="relative flex min-h-[640px] flex-col justify-end px-6 pb-10 pt-40 sm:min-h-[760px] sm:px-12 sm:pb-16 lg:px-20 lg:pb-20">
          <p className="kicker reveal !text-haze">{r.kicker}</p>
          <h2 className="display mt-6 max-w-5xl text-balance text-[2.8rem] !text-white sm:text-7xl lg:text-[6.2rem]">
            <RevealText text={r.title} accentClass="serif-accent text-haze" base={0.1} />
          </h2>
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="reveal d2 max-w-xl text-[17px] leading-[1.75] text-white/80">{r.text}</p>
            <div className="reveal d3 hidden w-[300px] shrink-0 lg:block">
              <Photo name="tolosaChurch" ratio={4 / 3} sizes="300px" maxWidth={800} className="rounded-[20px] ring-1 ring-white/20" />
            </div>
          </div>
        </div>
      </div>
      <p className="page-x mt-4 text-[12px] text-ink/45">{r.caption}</p>
    </AnimatedSection>
  )
}
