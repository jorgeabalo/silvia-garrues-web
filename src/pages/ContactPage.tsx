import { ContactSection } from '../sections/ContactSection'
import { PhotoMarquee } from '../components/PhotoMarquee'
import { useI18n } from '../i18n'
import { UrgentBox } from '../components/UrgentBox'

export default function ContactPage() {
  const { t } = useI18n()
  return (
    <>
      <ContactSection asPage />
      <div className="page-x pb-20">
        <UrgentBox />
      </div>
      <PhotoMarquee label={t.film.label} items={['officeDoor', 'silviaStanding', 'officeWaiting', 'meeting1', 'silviaRedFolder', 'officeDesk', 'silviaSeated', 'meeting2']} />
      <div className="h-24" />
    </>
  )
}
