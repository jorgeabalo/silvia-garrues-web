import { marqueeSequence, type PhotoKey } from '../content/photos'
import { Photo } from './Photo'

/**
 * Película fotográfica infinita: dos copias de la secuencia desplazándose
 * en bucle. Tamaños y alturas variables para un ritmo editorial.
 * Desktop: ~110 s por ciclo. Móvil: ~55 s. Se pausa al pasar el ratón.
 */
const shapes = [
  { w: 'w-[58vw] sm:w-[300px]', ratio: 3 / 4, y: 'translate-y-4' },
  { w: 'w-[78vw] sm:w-[440px]', ratio: 3 / 2, y: '-translate-y-2' },
  { w: 'w-[48vw] sm:w-[250px]', ratio: 4 / 5, y: 'translate-y-8' },
  { w: 'w-[70vw] sm:w-[380px]', ratio: 4 / 3, y: 'translate-y-0' },
]

export function PhotoMarquee({ items = marqueeSequence, label }: { items?: PhotoKey[]; label?: string }) {
  const Row = ({ hidden }: { hidden?: boolean }) => (
    <ul className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6" aria-hidden={hidden || undefined}>
      {items.map((key, i) => {
        const s = shapes[i % shapes.length]
        return (
          <li key={`${key}-${i}`} className={`${s.w} ${s.y} shrink-0 snap-center`}>
            <Photo
              name={key}
              ratio={s.ratio}
              sizes="(min-width: 640px) 440px, 78vw"
              maxWidth={1200}
              className="rounded-[22px] shadow-[0_18px_40px_-24px_rgba(10,30,66,.35)] sm:rounded-[28px]"
              imgClassName="transition-transform duration-[1.2s] hover:scale-[1.04]"
            />
          </li>
        )
      })}
    </ul>
  )
  return (
    <section aria-label={label} className="marquee relative -my-4 overflow-hidden py-10">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-paper to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-paper to-transparent sm:w-24" />
    </section>
  )
}
