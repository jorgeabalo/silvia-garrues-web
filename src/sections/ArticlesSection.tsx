import { useI18n } from '../i18n'
import { articles } from '../content/articles'
import { site } from '../content/site'
import { AnimatedSection } from '../components/AnimatedSection'
import { ArticleCard } from '../components/ArticleCard'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import { home } from '../content/home'

/** Prioriza los temas de sus especialidades */
const rank = (a: { area: { es: string } }) => ({ Familia: 4, Mediación: 3, Sucesiones: 2, Penal: 1 } as Record<string, number>)[a.area.es] ?? 0

export function ArticlesSection() {
  const { t, lang, to } = useI18n()
  const a = t.articles
  // Prioriza textos escritos en el idioma de la página y con extracto original disponible
  const picks = [...articles]
    .filter((x) => x.photo)
    .sort((x, y) => rank(y) - rank(x) || Number(y.lang === lang) - Number(x.lang === lang) || Number(!!y.excerpt) - Number(!!x.excerpt))
    .slice(0, 3)
  return (
    <section id="articulos" className="py-24 sm:py-36">
      <div className="page-x">
        <AnimatedSection as="div" className="flex items-end justify-between gap-8">
          <h2 className="reveal text-[clamp(2.4rem,4.4vw,4rem)] font-medium leading-none tracking-[-0.035em] text-ice">{home[lang].insightsTitle}</h2>
          <Link to={to('articles')} className="reveal d2 shrink-0 border-b border-ice/50 pb-1 text-[16px] text-ice hover:border-ice">
            {home[lang].insightsAll}
          </Link>
        </AnimatedSection>

        <AnimatedSection as="div" className="mt-12 grid gap-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-6">
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
