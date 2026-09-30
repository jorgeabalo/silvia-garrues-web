import { useI18n } from '../i18n'
import { Hero } from '../sections/Hero'
import { PhotoMarquee } from '../components/PhotoMarquee'
import { SilviaSection } from '../sections/SilviaSection'
import { RootsSection } from '../sections/RootsSection'
import { PracticeSection } from '../sections/PracticeSection'
import { ApproachSection } from '../sections/ApproachSection'
import { InternationalSection } from '../sections/InternationalSection'
import { ArticlesSection } from '../sections/ArticlesSection'
import { PressSection, TestimonialsSection } from '../sections/PressSection'
import { CtaSection } from '../sections/CtaSection'
import { ContactSection } from '../sections/ContactSection'

export default function HomePage() {
  const { t } = useI18n()
  return (
    <>
      <Hero />
      <PhotoMarquee label={t.film.label} />
      <SilviaSection />
      <RootsSection />
      <PracticeSection />
      <ApproachSection />
      <div className="h-24 sm:h-36" />
      <InternationalSection />
      <ArticlesSection />
      <PressSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </>
  )
}
