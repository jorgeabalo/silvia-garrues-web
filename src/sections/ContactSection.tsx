import { useI18n } from '../i18n'
import { AnimatedSection } from '../components/AnimatedSection'
import { ContactDetails } from '../components/ContactDetails'
import { ContactForm } from '../components/ContactForm'
import { SectionTitle } from '../components/SectionTitle'

export function ContactSection({ asPage = false }: { asPage?: boolean }) {
  const { t } = useI18n()
  return (
    <AnimatedSection id="contacto" className={asPage ? 'pb-24 pt-32 sm:pt-44' : 'pb-24 sm:pb-36'}>
      <div className="page-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionTitle
            as={asPage ? 'h1' : 'h2'}
            kicker={t.contact.kicker}
            title={asPage ? t.pages.contact.title : t.contact.title}
            intro={t.contact.intro}
            size={asPage ? 'xl' : 'lg'}
          />
          <div className="mt-10">
            <ContactDetails />
          </div>
        </div>
        <div className="reveal d2 lg:col-span-7 lg:pt-4">
          <ContactForm />
        </div>
      </div>
    </AnimatedSection>
  )
}
