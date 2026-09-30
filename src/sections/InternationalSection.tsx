import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'
import { Photo } from '../components/Photo'
import { SectionTitle } from '../components/SectionTitle'

/** Experiencia internacional: foto grande, texto editorial y una línea que une los lugares reales de su trayectoria. */
export function InternationalSection() {
  const { t } = useI18n()
  const it = t.international
  return (
    <section className="relative overflow-hidden bg-abyss py-24 text-white sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_10%,rgba(30,79,214,.45),transparent_70%),radial-gradient(50%_50%_at_0%_100%,rgba(45,106,150,.35),transparent_70%)]" />
      <div className="page-x relative">
        <AnimatedSection as="div" className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionTitle kicker={it.kicker} title={it.title} tone="light" />
            <p className="reveal d2 mt-8 max-w-xl text-[17px] leading-[1.75] text-white/75">{it.text}</p>
            <p className="reveal d3 mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-[13.5px] text-white/70">{it.visas}</p>
          </div>
          <div className="relative lg:col-span-6">
            <div className="reveal d1">
              <Photo name="courthouse" ratio={4 / 5} sizes="(min-width: 1024px) 45vw, 100vw" className="rounded-[30px] shadow-[0_40px_80px_-30px_rgba(0,0,0,.6)]" />
            </div>
            <div className="reveal d3 absolute -bottom-8 -left-4 w-[44%] sm:-left-10">
              <Photo name="meeting4" ratio={4 / 3} sizes="22vw" maxWidth={800} className="rounded-[20px] border-[6px] border-abyss" />
            </div>
          </div>
        </AnimatedSection>

        {/* Línea de trayectoria */}
        <AnimatedSection as="div" className="mt-28">
          <div className="relative">
            <span aria-hidden className="route-line absolute left-2 right-0 top-[7px] hidden h-px bg-gradient-to-r from-haze/80 via-haze/50 to-haze/10 md:block" />
            <span aria-hidden className="route-line-v absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-haze/80 to-haze/10 md:hidden" />
            <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
              {it.places.map((p, i) => (
                <li key={i} className={`reveal ${['d1', 'd2', 'd3', 'd4'][i]} flex gap-5 md:block`}>
                  <span className="relative mt-1 block h-4 w-4 shrink-0 rounded-full border-2 border-haze bg-abyss md:mt-0">
                    <span className="absolute inset-[3px] rounded-full bg-haze" />
                  </span>
                  <div className="md:mt-6">
                    <p className="text-[12px] uppercase tracking-[0.18em] text-haze/80">{p.region}</p>
                    <p className="mt-1 font-serif text-4xl italic">{p.city}</p>
                    <p className="mt-2 max-w-[26ch] text-[14.5px] leading-snug text-white/60">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
