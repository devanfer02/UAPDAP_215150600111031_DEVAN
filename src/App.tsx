import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Loading from './pages/Loading'
import Layout from './components/Layout'

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const WorksPage = lazy(() => import('./pages/Works'))
const PortfolioPage = lazy(() => import('./pages/Portfolio'))
const TerminalPage = lazy(() => import('./pages/Terminal'))
const NotFound = lazy(() => import('./pages/NotFound'))

const pages = [
  {
    path: '/',
    render: <HomePage/>
  },
  {
    path: '/about',
    render: <AboutPage/>
  },
  {
    path: '/works',
    render: <WorksPage/>
  },
  {
    path: '/portfolio',
    render: <PortfolioPage/>
  },
  {
    path: '/terminal',
    render: <TerminalPage/>
  },
  {
    path: '*',
    render: <NotFound/>
  }
]

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          { pages.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={
                <Layout>
                  <Suspense fallback={<Loading/>}>
                    {page.render}
                  </Suspense>
                </Layout>    
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

