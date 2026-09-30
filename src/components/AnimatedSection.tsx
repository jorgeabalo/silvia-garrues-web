import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

/**
 * Contenedor que activa las animaciones de sus hijos `.reveal` (y `.d1`…`.d4`
 * para el escalonado 0.1–0.4 s) cuando entra en pantalla.
 */
export function AnimatedSection({
  as: Tag = 'section',
  children,
  className = '',
  id,
  threshold,
  ...rest
}: {
  as?: ElementType
  children: ReactNode
  className?: string
  id?: string
  threshold?: number
  [key: string]: unknown
}) {
  const { ref, visible } = useReveal<HTMLElement>({ threshold })
  return (
    <Tag ref={ref} id={id} className={`${className} ${visible ? 'is-visible' : ''}`} {...rest}>
      {children}
    </Tag>
  )
}
