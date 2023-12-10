import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollTop from "./components/ScrollTop";

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
    render: <HomePage/>,
    title: 'Home'
  },
  {
    path: '/about',
    render: <AboutPage/>,
    title: 'About Me'
  },
  {
    path: '/works',
    render: <WorksPage/>,
    title: 'Works'
  },
  {
    path: '/portfolio',
    render: <PortfolioPage/>,
    title: 'Works'
  },
  {
    path: '/terminal',
    render: <TerminalPage/>,
    title: 'Terminal'
  },
  {
    path: '*',
    render: <NotFound/>,
    title: 'Page Not Found'
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
                <Layout pageTitle={page.title}>
                  <ScrollTop/>
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

