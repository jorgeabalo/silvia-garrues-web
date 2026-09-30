/**
 * Datos reales del despacho (fuente: garrues.com, septiembre 2026).
 * No añadir nada que no esté confirmado por Silvia.
 */
export const site = {
  url: 'https://www.garrues.com',
  name: 'Silvia Garrues Remírez',
  firm: 'ADOS',
  email: 'silvia@garrues.com',
  phones: [
    { label: '943 65 10 11', href: 'tel:+34943651011' },
    { label: '+34 683 66 93 83', href: 'tel:+34683669383' },
  ],
  skype: '683 66 93 83',
  /** WhatsApp: solo si Silvia confirma que lo usa profesionalmente. */
  whatsapp: null as string | null,
  address: {
    street: 'Paseo Pedro de Tolosa, 1',
    postalCode: '20400',
    city: 'Tolosa',
    region: 'Gipuzkoa',
    country: 'ES',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Paseo+Pedro+de+Tolosa+1+20400+Tolosa+Gipuzkoa',
  blog: 'https://garruesabogadoymediacion.blogspot.com/',
  bizum: true,
  /**
   * Endpoint del formulario (Formspree, Getform, función serverless…).
   * Si está vacío, el formulario abre el cliente de correo con el mensaje ya redactado.
   */
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? '',
}
