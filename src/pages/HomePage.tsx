import { HomeExperience } from '../sections/HomeExperience'
import { StatsBand } from '../sections/StatsBand'
import { DivorceSection } from '../sections/DivorceSection'
import { SilviaSection } from '../sections/SilviaSection'
import { PressSection, TestimonialsSection } from '../sections/PressSection'
import { FaqSection } from '../sections/FaqSection'
import { ArticlesSection } from '../sections/ArticlesSection'
import { ContactSection } from '../sections/ContactSection'
import { SpecialtiesSection } from '../sections/SpecialtiesSection'

export default function HomePage() {
  return (
    <>
      <HomeExperience />
      <StatsBand />
      <SpecialtiesSection />
      <DivorceSection />
      <SilviaSection />
      <PressSection />
      <TestimonialsSection />
      <FaqSection />
      <ArticlesSection />
      <ContactSection />
    </>
  )
}
