import { useEffect, type ComponentType } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { I18nProvider } from './i18n'
import { allAreaRoutes, allRoutes, langFromPath, resolve, resolveArea, type RouteKey } from './i18n/routes'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Head } from './components/Head'
import HomePage from './pages/HomePage'
import SilviaPage from './pages/SilviaPage'
import ServicesPage from './pages/ServicesPage'
import ArticlesPage from './pages/ArticlesPage'
import ContactPage from './pages/ContactPage'
import LegalPage from './pages/LegalPage'
import NotFoundPage from './pages/NotFoundPage'
import AreaPage from './pages/AreaPage'

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
  const areaMatch = match ? null : resolveArea(pathname)
  const lang = match?.lang ?? areaMatch?.lang ?? langFromPath(pathname)
  return (
    <I18nProvider lang={lang} routeKey={match?.key ?? (areaMatch ? 'services' : null)} area={areaMatch?.id ?? null}>
      <Head />
      <ScrollManager />
      <Header />
      <main id="main" key={pathname} className="page-enter">
        <Routes>
          {allRoutes.map(({ key, path }) => {
            const Page = pages[key]
            return <Route key={path} path={path} element={<Page />} />
          })}
          {allAreaRoutes.map(({ id, path }) => (
            <Route key={path} path={path} element={<AreaPage id={id} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </I18nProvider>
  )
}
