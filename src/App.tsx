import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Loading from './pages/Loading'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Terminal = lazy(() => import('./pages/Terminal'))

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
    path: '/portfolio',
    render: <Portfolio/>
  },
  {
    path: '/terminal',
    render: <Terminal/>
  }
]

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <>
          <Routes>
            { pages.map((page, index) => (
              <Route
                key={index}
                path={page.path}
                element={
                  <Suspense fallback={<Loading/>}>
                    {page.render}
                  </Suspense>
                }
              />
            ))}
          </Routes>
        </>
      </BrowserRouter>
    </>
  )
}

