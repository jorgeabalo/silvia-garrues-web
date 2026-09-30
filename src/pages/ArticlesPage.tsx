import { useMemo, useState } from 'react'
import { formatDate, useI18n } from '../i18n'
import { articles, press } from '../content/articles'
import { site } from '../content/site'
import { AnimatedSection } from '../components/AnimatedSection'
import { ArticleCard } from '../components/ArticleCard'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { UlpianoFeature } from '../sections/UlpianoFeature'
import { CtaSection } from '../sections/CtaSection'

export default function ArticlesPage() {
  const { t, lang } = useI18n()
  const p = t.pages.articles
  const [filter, setFilter] = useState<string | null>(null)
  const sorted = useMemo(
    () => [...articles].sort((a, b) => Number(b.lang === lang) - Number(a.lang === lang) || Number(!!b.photo) - Number(!!a.photo) || b.date.localeCompare(a.date)),
    [lang],
  )
  const areas = useMemo(() => [...new Set(articles.map((a) => a.area[lang]))], [lang])
  const featured = sorted.filter((a) => a.photo)
  const list = sorted.filter((a) => !a.photo && (!filter || a.area[lang] === filter))

  return (
    <>
      <PageHero kicker={p.kicker} title={p.title} intro={p.intro} />

      <section className="pb-20">
        <div className="page-x">
          <UlpianoFeature />
        </div>
      </section>

      {/* Prensa */}
      <AnimatedSection className="pb-20">
        <div className="page-x">
          <h2 className="kicker reveal">{t.articles.pressTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {press.map((x, i) => (
              <a key={x.url} href={x.url} target="_blank" rel="noopener noreferrer" className={`reveal ${['d1', 'd2', 'd3', 'd4'][i]} group rounded-[26px] bg-abyss p-8 text-white transition-transform duration-700 hover:-translate-y-1 sm:p-10`}>
                <p className="text-[12px] uppercase tracking-[0.18em] text-haze">
                  {x.outlet} · <time dateTime={x.date}>{formatDate(x.date, lang)}</time>
                </p>
                <p lang={x.outlet === 'Diario Vasco' ? 'es' : undefined} className="mt-5 font-serif text-3xl leading-[1.15] sm:text-[2.1rem]">
                  «{x.quote[lang]}»
                </p>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Destacados */}
      <AnimatedSection className="pb-20">
        <div className="page-x">
          <h2 className="kicker reveal">{t.articles.blogTitle}</h2>
          <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((a, i) => (
              <div key={a.url} className={`reveal ${['d1', 'd2', 'd3', 'd4'][i % 4]} flex`}>
                <ArticleCard article={a} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Archivo con filtro */}
      <AnimatedSection className="pb-24">
        <div className="page-x">
          <div className="reveal flex flex-wrap gap-2" role="group">
            {[null, ...areas].map((a) => (
              <button
                key={a ?? 'all'}
                type="button"
                onClick={() => setFilter(a)}
                aria-pressed={filter === a}
                className={`min-h-[40px] rounded-full px-4 text-[14px] transition-colors ${filter === a ? 'bg-abyss text-white' : 'border border-line bg-white text-ink/70 hover:border-ink/40'}`}
              >
                {a ?? p.filterAll}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-x-10 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <div key={a.url} className="border-b border-line py-7">
                <ArticleCard article={a} size="sm" />
              </div>
            ))}
          </div>
          <p className="mt-12">
            <Button href={site.blog} external variant="ghost">
              {t.articles.onBlog}
            </Button>
          </p>
        </div>
      </AnimatedSection>

      <CtaSection />
    </>
  )
}
