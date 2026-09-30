import { useEffect, type ComponentType } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { I18nProvider } from './i18n'
import { allRoutes, langFromPath, resolve, type RouteKey } from './i18n/routes'
import { TopBar } from './components/TopBar'
import { FloatingNavigation } from './components/FloatingNavigation'
import { Footer } from './components/Footer'
import { Head } from './components/Head'
import HomePage from './pages/HomePage'
import SilviaPage from './pages/SilviaPage'
import ServicesPage from './pages/ServicesPage'
import ArticlesPage from './pages/ArticlesPage'
import ContactPage from './pages/ContactPage'
import LegalPage from './pages/LegalPage'
import NotFoundPage from './pages/NotFoundPage'

const pages: Record<RouteKey, ComponentType> = {
  home: HomePage,
  silvia: SilviaPage,
  services: ServicesPage,
  articles: ArticlesPage,
  contact: ContactPage,
  legal: () => <LegalPage kind="legal" />,
  privacy: () => <LegalPage kind="privacy" />,
  cookies: () => <LegalPage kind="cookies" />,
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const match = resolve(pathname)
  const lang = match?.lang ?? langFromPath(pathname)
  return (
    <I18nProvider lang={lang} routeKey={match?.key ?? null}>
      <Head />
      <ScrollManager />
      <TopBar />
      <main id="main" key={pathname} className="page-enter">
        <Routes>
          {allRoutes.map(({ key, path }) => {
            const Page = pages[key]
            return <Route key={path} path={path} element={<Page />} />
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingNavigation />
    </I18nProvider>
  )
}
