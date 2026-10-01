import { HeroScroll } from '../sections/HeroScroll'
import { AreasGrid } from '../sections/AreasGrid'
import { TeamStatement } from '../sections/TeamStatement'
import { DivorceSection } from '../sections/DivorceSection'
import { PressSection } from '../sections/PressSection'
import { FaqSection } from '../sections/FaqSection'
import { ArticlesSection } from '../sections/ArticlesSection'
import { ContactSection } from '../sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroScroll />
      <AreasGrid />
      <TeamStatement />
      <div className="pt-24 sm:pt-32">
        <DivorceSection />
      </div>
      <FaqSection />
      <PressSection />
      <ArticlesSection />
      <ContactSection />
    </>
  )
}
