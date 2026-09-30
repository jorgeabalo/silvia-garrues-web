import { RevealText } from './Rich'

interface Props {
  kicker?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  tone?: 'dark' | 'light'
  size?: 'lg' | 'xl'
  className?: string
}

/** Encabezado editorial: antetítulo, gran titular con acentos serif e introducción. */
export function SectionTitle({ kicker, title, intro, align = 'left', as: H = 'h2', tone = 'dark', size = 'lg', className = '' }: Props) {
  const center = align === 'center'
  const sizes = size === 'xl' ? 'text-[2.7rem] sm:text-6xl lg:text-[5.6rem]' : 'text-[2.35rem] sm:text-5xl lg:text-[4.2rem]'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-4xl ${className}`}>
      {kicker && <p className={`kicker reveal ${tone === 'light' ? '!text-haze' : ''}`}>{kicker}</p>}
      <H className={`display mt-5 ${sizes} ${tone === 'light' ? '!text-white' : ''} text-balance`}>
        <RevealText text={title} accentClass={`serif-accent ${tone === 'light' ? 'text-haze' : 'text-intense'}`} base={0.1} />
      </H>
      {intro && (
        <p className={`reveal d2 mt-6 max-w-2xl text-[17px] leading-[1.7] ${center ? 'mx-auto' : ''} ${tone === 'light' ? 'text-white/70' : 'text-ink/70'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}
