import { ArrowUpRight } from 'lucide-react'
import type { Article } from '../content/articles'
import { formatDate, useI18n } from '../i18n'
import { Photo } from './Photo'

/** Artículo presentado como pieza de revista. Enlaza al texto original íntegro. */
export function ArticleCard({ article, size = 'md', className = '' }: { article: Article; size?: 'md' | 'sm'; className?: string }) {
  const { lang, t } = useI18n()
  const foreign = article.lang !== lang
  return (
    <article className={`group flex flex-col ${className}`}>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex flex-1 flex-col">
        {article.photo && size === 'md' && (
          <Photo
            name={article.photo}
            ratio={4 / 3}
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            maxWidth={1200}
            className="mb-6 rounded-[22px]"
            imgClassName="group-hover:scale-[1.04]"
          />
        )}
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-atlantic">
          <span>{article.area[lang]}</span>
          <span className="h-1 w-1 rounded-full bg-atlantic/40" />
          <time dateTime={article.date} className="font-medium normal-case tracking-normal text-ink/50">
            {formatDate(article.date, lang)}
          </time>
          {foreign && <span className="rounded-full bg-mist px-2 py-0.5 text-[10px] tracking-[0.12em] text-ink/60">{t.ui.originalLang[article.lang]}</span>}
        </p>
        <h3 lang={article.lang} className={`mt-3 font-medium tracking-[-0.03em] text-ink transition-colors group-hover:text-intense ${size === 'md' ? 'text-[1.45rem] leading-[1.15]' : 'text-[1.15rem] leading-[1.25]'}`}>
          {sentence(article.title)}
        </h3>
        {article.excerpt && size === 'md' && (
          <p lang={article.lang} className="mt-3 line-clamp-4 text-[15px] leading-[1.65] text-ink/65">
            {article.excerpt}
          </p>
        )}
        <span className="mt-auto flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-abyss">
          {t.ui.readArticle}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} />
        </span>
      </a>
    </article>
  )
}

/** Normaliza titulares escritos TODO EN MAYÚSCULAS a tipo oración (misma redacción). */
function sentence(title: string) {
  const letters = title.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/g, '')
  const upper = letters.replace(/[^A-ZÁÉÍÓÚÜÑ]/g, '')
  if (letters.length && upper.length / letters.length > 0.7) {
    const lower = title.toLocaleLowerCase('es')
    const out = lower.charAt(0).toLocaleUpperCase('es') + lower.slice(1).replace(/([:.?]\s+)(\p{L})/gu, (_, a, b) => a + b.toLocaleUpperCase('es'))
    return out.replace(/\b(erte|ii)\b/g, (m) => m.toUpperCase()).replace(/\bglovo\b/g, 'Glovo')
  }
  return title
}
