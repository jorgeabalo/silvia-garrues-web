import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import './styles/index.css'

export { allRoutes, paths, languages, htmlLang } from './i18n/routes'
export { dictionaries } from './i18n'
export { site } from './content/site'
export { practiceAreas } from './content/practice'
export { photos } from './content/photos'
export { photoUrl, srcSet } from './lib/photo'

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
