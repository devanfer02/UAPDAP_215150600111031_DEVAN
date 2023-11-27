import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Loading from './pages/Loading'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Works = lazy(() => import('./pages/Works'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Terminal = lazy(() => import('./pages/Terminal'))
const NotFound = lazy(() => import('./pages/NotFound'))

const pages = [
  {
    path: '/',
    render: <Home/>
  },
  {
    path: '/about',
    render: <About/>
  },
  {
    path: '/works',
    render: <Works/>
  },
  {
    path: '/portfolio',
    render: <Portfolio/>
  },
  {
    path: '/terminal',
    render: <Terminal/>
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

