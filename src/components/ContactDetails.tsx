import { ArrowUpRight, Mail, MapPin, Phone, Video } from 'lucide-react'
import { useI18n } from '../i18n'
import { site } from '../content/site'

/** Datos de contacto reales, grandes y táctiles. */
export function ContactDetails() {
  const { t } = useI18n()
  const row = 'group flex items-start gap-4 border-b border-line py-5 transition-colors'
  const icon = 'mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mist text-abyss transition-colors group-hover:bg-intense group-hover:text-white'
  return (
    <div className="reveal d1">
      <div className={row}>
        <span className={icon}><Phone className="h-[18px] w-[18px]" strokeWidth={1.7} /></span>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-atlantic">{t.contact.phone}</p>
          <div className="mt-1 flex flex-col">
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="text-[1.35rem] font-medium tracking-[-0.02em] text-ink hover:text-intense">{p.label}</a>
            ))}
          </div>
        </div>
      </div>
      <a href={`mailto:${site.email}`} className={row}>
        <span className={icon}><Mail className="h-[18px] w-[18px]" strokeWidth={1.7} /></span>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-atlantic">{t.contact.email}</p>
          <p className="mt-1 text-[1.35rem] font-medium tracking-[-0.02em] text-ink group-hover:text-intense">{site.email}</p>
        </div>
      </a>
      <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={row}>
        <span className={icon}><MapPin className="h-[18px] w-[18px]" strokeWidth={1.7} /></span>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-atlantic">{t.contact.office}</p>
          <p className="mt-1 text-[1.2rem] leading-snug tracking-[-0.02em] text-ink">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}, {site.address.region}
          </p>
          <span className="mt-2 inline-flex items-center gap-1 text-[14px] font-semibold text-abyss">
            {t.contact.howToArrive} <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </a>
      <div className="flex flex-wrap gap-2 pt-5 text-[13px] text-ink/60">
        {site.bizum && <span className="rounded-full bg-mist px-3.5 py-2">{t.contact.bizum}</span>}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3.5 py-2">
          <Video className="h-3.5 w-3.5" /> {t.contact.skype}: {site.skype}
        </span>
      </div>
    </div>
  )
}
