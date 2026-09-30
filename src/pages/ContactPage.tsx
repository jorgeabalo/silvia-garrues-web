import { ContactSection } from '../sections/ContactSection'
import { PhotoMarquee } from '../components/PhotoMarquee'
import { useI18n } from '../i18n'

export default function ContactPage() {
  const { t } = useI18n()
  return (
    <>
      <ContactSection asPage />
      <PhotoMarquee label={t.film.label} items={['officeDoor', 'silviaPortrait', 'tolosaOria', 'officeWaiting', 'meeting1', 'tolosaTown', 'silviaRedFolder', 'officeDesk']} />
      <div className="h-24" />
    </>
  )
}
