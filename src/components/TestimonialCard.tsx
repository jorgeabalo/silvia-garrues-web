import { Quote } from 'lucide-react'
import type { ReactNode } from 'react'

/** Tarjeta grande para testimonios reales o citas de prensa. */
export function TestimonialCard({ text, author, meta, href, lang }: { text: string; author?: string; meta?: ReactNode; href?: string; lang?: string }) {
  const body = (
    <figure className="flex h-full flex-col justify-between rounded-[30px] border border-white/10 bg-white/[0.04] p-8 text-white transition-colors duration-500 hover:bg-white/[0.07] sm:p-10">
      <Quote className="h-8 w-8 text-haze/70" strokeWidth={1.4} aria-hidden />
      <blockquote lang={lang} className="mt-8 font-serif text-[1.75rem] leading-[1.18] tracking-[-0.01em] sm:text-[2.2rem]">
        «{text}»
      </blockquote>
      <figcaption className="mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-[14px]">
        {author && <span className="font-semibold">{author}</span>}
        {meta && <span className="text-white/55">{meta}</span>}
      </figcaption>
    </figure>
  )
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {body}
    </a>
  ) : (
    body
  )
}
