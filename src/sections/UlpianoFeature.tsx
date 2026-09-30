import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'
import { Photo } from '../components/Photo'
import { RevealText } from '../components/Rich'

/** La cita de Ulpiano que Silvia eligió para su web, tratada como portada de revista. */
export function UlpianoFeature() {
  const { t } = useI18n()
  const u = t.ulpiano
  return (
    <AnimatedSection as="figure" className="grid items-center gap-10 overflow-hidden rounded-[32px] bg-white p-5 shadow-soft sm:p-8 lg:grid-cols-12 lg:gap-16 lg:p-10">
      <div className="reveal lg:col-span-5">
        <Photo name="ulpiano" ratio={1} sizes="(min-width: 1024px) 40vw, 100vw" maxWidth={1200} className="rounded-[24px] grayscale-[35%]" />
      </div>
      <div className="px-2 pb-4 lg:col-span-7 lg:px-0 lg:pb-0">
        <p className="kicker reveal">{u.kicker}</p>
        <blockquote className="mt-6 font-serif text-[2.3rem] leading-[1.06] tracking-[-0.015em] text-abyss sm:text-6xl">
          <RevealText text={`«${u.quote}`} accentClass="text-intense" base={0.15} />
        </blockquote>
        <figcaption className="reveal d3 mt-8">
          <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-ink">— {u.author}</span>
          <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-ink/60">{u.note}</p>
        </figcaption>
      </div>
    </AnimatedSection>
  )
}
