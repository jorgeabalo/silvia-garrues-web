import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { PracticeArea } from '../content/practice'
import { useI18n } from '../i18n'
import { Photo } from './Photo'

export function PracticeCard({ area, index, className = '' }: { area: PracticeArea; index: number; className?: string }) {
  const { lang, t, to } = useI18n()
  const featured = area.featured && area.photo
  return (
    <Link
      to={to('services', area.slug)}
      className={`group relative flex flex-col overflow-hidden rounded-[28px] border border-line bg-white p-6 shadow-soft transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 hover:border-transparent hover:shadow-lift sm:p-8 ${className}`}
    >
      {featured && (
        <Photo
          name={area.photo!}
          ratio={16 / 10}
          sizes="(min-width: 1024px) 600px, 100vw"
          maxWidth={1200}
          className="-mx-6 -mt-6 mb-7 rounded-t-[28px] sm:-mx-8 sm:-mt-8"
          imgClassName="group-hover:scale-[1.04]"
        />
      )}
      <span className="font-serif text-lg italic text-atlantic">{String(index + 1).padStart(2, '0')}</span>
      <h3 className={`mt-3 font-medium tracking-[-0.035em] text-ink ${featured ? 'text-[2rem] leading-[1.05] sm:text-[2.6rem]' : 'text-[1.6rem] leading-[1.1]'}`}>
        {area.name[lang]}
      </h3>
      <p className="mt-4 text-[15.5px] leading-[1.65] text-ink/65">{area.short[lang]}</p>
      <span className="mt-auto flex items-center gap-2 pt-8 text-[14px] font-semibold text-abyss">
        {t.ui.readMore}
        <span className="grid h-9 w-9 place-items-center rounded-full bg-mist transition-all duration-500 group-hover:bg-intense group-hover:text-white">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.8} />
        </span>
      </span>
      <span className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-intense/[0.04] via-transparent to-atlantic/[0.06] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </Link>
  )
}
