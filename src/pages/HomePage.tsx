import { useI18n } from '../i18n'
import { IntroFilm } from '../sections/IntroFilm'
import { Hero } from '../sections/Hero'
import { PhotoMarquee } from '../components/PhotoMarquee'
import { SpecialtiesSection } from '../sections/SpecialtiesSection'
import { DivorceSection } from '../sections/DivorceSection'
import { SilviaSection } from '../sections/SilviaSection'
import { ApproachSection } from '../sections/ApproachSection'
import { ArticlesSection } from '../sections/ArticlesSection'
import { PressSection, TestimonialsSection } from '../sections/PressSection'
import { CtaSection } from '../sections/CtaSection'
import { ContactSection } from '../sections/ContactSection'

export default function HomePage() {
  const { t } = useI18n()
  return (
    <>
      <IntroFilm />
      <Hero />
      <PhotoMarquee label={t.film.label} />
      <SpecialtiesSection />
      <DivorceSection />
      <SilviaSection />
      <ApproachSection />
      <ArticlesSection />
      <PressSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </>
  )
}
