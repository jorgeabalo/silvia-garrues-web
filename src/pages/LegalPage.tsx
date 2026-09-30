import { formatDate, useI18n } from '../i18n'
import { legalDoc } from '../content/compliance'
import { PageHero } from '../components/PageHero'

export default function LegalPage({ kind }: { kind: 'legal' | 'privacy' | 'cookies' }) {
  const { t, lang } = useI18n()
  const p = t.pages[kind]
  const doc = legalDoc(kind, lang)
  return (
    <>
      <PageHero kicker="garrues.com" title={p.title} />
      <section className="pb-32">
        <div className="page-x max-w-3xl text-[16px] leading-[1.75] text-ink/75">
          <p className="text-[13px] text-ink/50">
            {lang === 'es' ? 'Última actualización' : 'Azken eguneratzea'}: <time dateTime={doc.updated}>{formatDate(doc.updated, lang)}</time>
          </p>
          {doc.sections.map((s) => (
            <div key={s.h} className="mt-10">
              <h2 className="text-xl font-medium tracking-[-0.02em] text-ink">{s.h}</h2>
              <div className="mt-4 space-y-3">
                {s.p.map((x, i) =>
                  typeof x === 'string' ? (
                    <p key={i}>{x}</p>
                  ) : (
                    <p key={i} className="grid gap-1 border-b border-line pb-3 sm:grid-cols-[220px_1fr] sm:gap-6">
                      <span className="text-[14px] font-medium text-ink/55">{x[0]}</span>
                      <span className={x[1].startsWith('[') || x[1].endsWith(']') ? 'rounded bg-mist px-2 text-atlantic' : 'text-ink'}>{x[1]}</span>
                    </p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
