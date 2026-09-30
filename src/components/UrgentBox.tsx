import { Phone, ShieldAlert } from 'lucide-react'
import { useI18n } from '../i18n'
import { copy } from '../content/compliance'
import { site } from '../content/site'

/** Bloque de urgencia: teléfono clicable y, si procede, 112 / 016. */
export function UrgentBox({ danger = false, className = '' }: { danger?: boolean; className?: string }) {
  const { lang } = useI18n()
  const c = copy[lang]
  const mobile = site.phones[1]
  return (
    <aside className={`rounded-[26px] bg-abyss p-7 text-white sm:p-9 ${className}`} aria-label={c.urgentTitle}>
      <p className="text-2xl font-medium tracking-[-0.03em]">{c.urgentTitle}</p>
      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/70">{c.urgentText}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {[mobile, site.phones[0]].map((p) => (
          <a key={p.href} href={p.href} className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-5 text-[15px] font-semibold text-abyss transition-colors hover:bg-haze">
            <Phone className="h-4 w-4" /> {p.label}
          </a>
        ))}
      </div>
      {danger && (
        <p className="mt-6 flex gap-3 border-t border-white/15 pt-5 text-[14.5px] leading-relaxed text-white/85">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
          <span>
            {c.danger}{' '}
            <a href="tel:112" className="font-semibold underline underline-offset-4">112</a> ·{' '}
            <a href="tel:016" className="font-semibold underline underline-offset-4">016</a>
          </span>
        </p>
      )}
    </aside>
  )
}
