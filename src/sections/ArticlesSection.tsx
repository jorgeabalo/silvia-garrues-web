import { useI18n } from '../i18n'
import { articles } from '../content/articles'
import { site } from '../content/site'
import { AnimatedSection } from '../components/AnimatedSection'
import { ArticleCard } from '../components/ArticleCard'
import { Button } from '../components/Button'
import { SectionTitle } from '../components/SectionTitle'
import { UlpianoFeature } from './UlpianoFeature'

export function ArticlesSection() {
  const { t, lang, to } = useI18n()
  const a = t.articles
  // Prioriza textos escritos en el idioma de la página y con extracto original disponible
  const picks = [...articles]
    .filter((x) => x.photo)
    .sort((x, y) => Number(y.lang === lang) - Number(x.lang === lang) || Number(!!y.excerpt) - Number(!!x.excerpt))
    .slice(0, 3)
  return (
    <section id="articulos" className="py-24 sm:py-36">
      <div className="page-x">
        <AnimatedSection as="div" className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle kicker={a.kicker} title={a.title} intro={a.intro} />
          <div className="reveal d3 flex shrink-0 flex-wrap gap-3">
            <Button to={to('articles')} variant="ghost">
              {a.all}
            </Button>
          </div>
        </AnimatedSection>

        <div className="mt-14">
          <UlpianoFeature />
        </div>

        <AnimatedSection as="div" className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {picks.map((art, i) => (
            <div key={art.url} className={`reveal ${['d1', 'd2', 'd3'][i]} flex`}>
              <ArticleCard article={art} className="w-full" />
            </div>
          ))}
        </AnimatedSection>
        <p className="mt-12 text-center">
          <Button href={site.blog} external variant="link">
            {a.onBlog}
          </Button>
        </p>
      </div>
    </section>
  )
}
