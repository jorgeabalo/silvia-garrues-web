import { useI18n } from '../i18n'
import { site } from '../content/site'
import { PageHero } from '../components/PageHero'

export default function LegalPage({ kind }: { kind: 'legal' | 'privacy' | 'cookies' }) {
  const { t } = useI18n()
  const p = t.pages[kind]
  return (
    <>
      <PageHero kicker="garrues.com" title={p.title} />
      <section className="pb-32">
        <div className="page-x max-w-3xl space-y-6 text-[16px] leading-[1.75] text-ink/75">
          <p className="rounded-2xl border border-dashed border-atlantic/40 bg-mist p-5 text-[15px]">{p.pending}</p>
          <p>
            Silvia Garrues Remírez · {site.address.street}, {site.address.postalCode} {site.address.city} ({site.address.region}) ·{' '}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
