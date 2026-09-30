import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'
import { PageHero } from '../components/PageHero'
import { Photo } from '../components/Photo'
import { PhotoMarquee } from '../components/PhotoMarquee'
import { RevealText } from '../components/Rich'
import { SectionTitle } from '../components/SectionTitle'
import { CtaSection } from '../sections/CtaSection'
import type { PhotoKey } from '../content/photos'

const chapterPhotos: PhotoKey[] = ['silviaEntrance', 'meeting3', 'officeWaiting']
const gallery: { key: PhotoKey; cls: string; ratio: number }[] = [
  { key: 'silviaDesk', cls: 'col-span-6 lg:col-span-4', ratio: 4 / 5 },
  { key: 'event', cls: 'col-span-6 lg:col-span-5 lg:mt-20', ratio: 4 / 3 },
  { key: 'withColleague', cls: 'col-span-6 lg:col-span-3', ratio: 3 / 4 },
  { key: 'meeting2', cls: 'col-span-6 lg:col-span-4 lg:-mt-10', ratio: 1 },
  { key: 'officeRoom', cls: 'col-span-12 lg:col-span-5', ratio: 16 / 10 },
  { key: 'silviaRedFolder', cls: 'col-span-12 sm:col-span-6 lg:col-span-3 lg:mt-16', ratio: 4 / 5 },
]

export default function SilviaPage() {
  const { t } = useI18n()
  const p = t.pages.silvia
  const s = t.silvia
  return (
    <>
      <PageHero kicker={p.kicker} title={p.title} intro={p.intro}>
        <div className="mt-14 grid grid-cols-12 gap-4 sm:gap-6">
          <div className="reveal d2 col-span-12 sm:col-span-8">
            <Photo name="silviaStanding" priority sizes="(min-width: 640px) 66vw, 100vw" className="aspect-[4/5] rounded-[30px] shadow-lift sm:aspect-[16/11]" />
          </div>
          <div className="reveal d3 col-span-12 flex flex-col justify-end gap-6 sm:col-span-4">
            <div className="rounded-[26px] bg-white p-7 shadow-soft">
              <p className="kicker">{p.bars}</p>
              <ul className="mt-4 space-y-2 text-[16px] leading-snug">
                {p.barsList.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="kicker mt-7">{p.languages}</p>
              <p className="mt-3 font-serif text-3xl italic text-abyss">{p.languagesList.join(' · ')}</p>
            </div>
            <Photo name="silviaSeated" ratio={4 / 5} sizes="33vw" maxWidth={800} className="hidden rounded-[26px] sm:block" />
          </div>
        </div>
      </PageHero>

      <section className="py-20 sm:py-32">
        <div className="page-x">
          <AnimatedSection as="div">
            <SectionTitle kicker={s.kicker} title={s.title} intro={s.lead} />
          </AnimatedSection>
          <div className="mt-16 space-y-20 sm:space-y-28">
            {s.chapters.map((c, i) => (
              <AnimatedSection as="article" key={c.title} className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-16`}>
                <div className={`reveal lg:col-span-6 ${i % 2 ? 'lg:order-2' : ''}`}>
                  <Photo name={chapterPhotos[i]} ratio={i % 2 ? 4 / 3 : 4 / 5} sizes="(min-width: 1024px) 50vw, 100vw" className="rounded-[28px] shadow-soft" />
                </div>
                <div className="lg:col-span-6">
                  <p className="reveal d1 font-serif text-7xl italic text-intense/25 sm:text-8xl">{String(i + 1).padStart(2, '0')}</p>
                  <p className="kicker reveal d1 mt-2">{c.place}</p>
                  <h2 className="reveal d2 mt-4 text-4xl font-medium tracking-[-0.035em] sm:text-5xl">{c.title}</h2>
                  <p className="reveal d3 mt-5 max-w-lg text-[17px] leading-[1.75] text-ink/70">{c.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-mist py-24 sm:py-32">
        <div className="page-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle title={p.mediationTitle} />
          </div>
          <div className="space-y-5 text-[17px] leading-[1.75] text-ink/75 lg:col-span-7">
            {p.mediationText.map((x, i) => (
              <p key={i} className={`reveal ${i ? 'd2' : 'd1'}`}>
                {x}
              </p>
            ))}
            <figure className="reveal d3 border-l-2 border-intense pl-6 pt-2">
              <blockquote className="font-serif text-3xl leading-tight text-abyss sm:text-4xl">«{p.pressQuote}»</blockquote>
              <figcaption className="mt-3 text-[13px] uppercase tracking-[0.16em] text-ink/50">{p.pressSource}</figcaption>
            </figure>
          </div>
        </div>
      </AnimatedSection>

      <section className="py-24 sm:py-32">
        <AnimatedSection as="div" className="page-x grid grid-cols-12 items-start gap-4 sm:gap-6">
          {gallery.map((g, i) => (
            <div key={g.key} className={`${g.cls}`}>
              <div className={`reveal ${['d1', 'd2', 'd3', 'd4'][i % 4]}`}>
                <Photo name={g.key} ratio={g.ratio} sizes="(min-width: 1024px) 33vw, 50vw" maxWidth={1200} className="rounded-[24px]" imgClassName="hover:scale-[1.03]" />
              </div>
            </div>
          ))}
        </AnimatedSection>
        <AnimatedSection as="figure" className="page-x mx-auto mt-28 max-w-5xl text-center">
          <blockquote className="font-serif text-[2.3rem] leading-[1.05] text-abyss sm:text-6xl">
            <RevealText text={`«${s.quote}»`} accentClass="" />
          </blockquote>
          <figcaption className="reveal d3 mt-6 text-[13px] uppercase tracking-[0.18em] text-ink/50">{s.quoteSource}</figcaption>
        </AnimatedSection>
      </section>

      <PhotoMarquee label={t.film.label} />
      <CtaSection />
    </>
  )
}
