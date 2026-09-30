import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { Photo } from '../components/Photo'
import { RevealText } from '../components/Rich'

export function Hero() {
  const { t, to } = useI18n()
  const h = t.hero
  return (
    <AnimatedSection className="relative overflow-hidden pb-10 pt-24 sm:pt-32" threshold={0}>
      {/* Luz azul muy sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(60%_55%_at_50%_0%,rgba(30,79,214,.13),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-80 h-96 w-96 rounded-full bg-atlantic/10 blur-[110px]" />

      <div className="page-x relative text-center">
        <div className="reveal flex justify-center">
          <Logo size={64} className="shadow-soft" />
        </div>
        <h1 className="reveal d1 mt-7 text-[15px] font-medium tracking-[-0.01em] text-ink sm:text-[17px]">
          Silvia Garrues Remírez
          <span className="mx-2 text-ink/25">—</span>
          <span className="serif-accent text-[1.2em] text-atlantic">{h.role}</span>
        </h1>
        <p className="reveal d2 mx-auto mt-3 max-w-xl text-[12.5px] uppercase leading-relaxed tracking-[0.16em] text-ink/50">{h.credential}</p>

        <p className="display mx-auto mt-10 max-w-[15ch] text-balance text-[2.9rem] sm:mt-12 sm:text-7xl lg:max-w-[16ch] lg:text-[6.4rem]">
          <RevealText text={h.title} accentClass="serif-accent text-intense" base={0.35} />
        </p>

        <div className="mx-auto mt-10 max-w-2xl space-y-4 text-[16.5px] leading-[1.7] text-ink/70 sm:text-lg">
          {h.paragraphs.map((p, i) => (
            <p key={i} className={`reveal ${['d2', 'd3', 'd4'][i]} ${i === 0 ? 'text-ink/85' : ''}`}>
              {p}
            </p>
          ))}
        </div>

        <div className="reveal d4 mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button to={to('contact')}>{h.ctaPrimary}</Button>
          <Button to={to('silvia')} variant="ghost">
            {h.ctaSecondary}
          </Button>
        </div>
      </div>

      {/* Composición fotográfica editorial */}
      <div className="page-x relative mt-16 sm:mt-20">
        <div className="grid grid-cols-12 items-center gap-4 lg:gap-6">
          <div className="col-span-3 hidden translate-y-16 lg:block">
            <div className="reveal d3">
              <Photo name="silviaRedFolder" ratio={4 / 5} sizes="25vw" maxWidth={800} className="rounded-[26px] shadow-soft" />
            </div>
          </div>
          <figure className="col-span-12 lg:col-span-6">
            <div className="hero-photo">
              <Photo
                name="silviaDesk"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/5] rounded-[30px] shadow-lift sm:aspect-[16/11]"
              />
            </div>
            <figcaption className="reveal d4 mt-4 text-[13px] text-ink/50">{h.photoCaption}</figcaption>
          </figure>
          <div className="col-span-3 hidden -translate-y-10 lg:block">
            <div className="reveal d4">
              <Photo name="officeDoor" ratio={3 / 4} sizes="25vw" maxWidth={800} className="rounded-[26px] shadow-soft" />
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 lg:grid-cols-4">
          {t.facts.map((f, i) => (
            <div key={f.label} className={`reveal ${['d1', 'd2', 'd3', 'd4'][i]}`}>
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="font-serif text-6xl leading-none text-abyss sm:text-7xl">{f.value}</span>
                <span className="mt-3 block max-w-[22ch] text-[14px] leading-snug text-ink/60">{f.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </AnimatedSection>
  )
}
