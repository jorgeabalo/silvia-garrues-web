import { useI18n } from '../i18n'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'

export default function NotFoundPage() {
  const { t, to } = useI18n()
  return (
    <PageHero kicker="404" title={t.pages.notFound.title} intro={t.pages.notFound.text}>
      <div className="mt-10 pb-24">
        <Button to={to('home')}>{t.ui.back}</Button>
      </div>
    </PageHero>
  )
}
