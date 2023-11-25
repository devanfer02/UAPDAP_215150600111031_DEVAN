import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Loading from './pages/Loading'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Portfolio = lazy(() => import('./pages/Portfolio'))

const pages = [
  {
    path: '/',
    render: <Home/>
  },
  {
    path: 'about',
    render: <About/>
  },
  {
    path: 'portfolio',
    rener: <Portfolio/>
  }
]

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <section>
          <Routes>
            { pages.map(page => (
              <Route
                path={page.path}
                element={
                  <Suspense fallback={<Loading/>}>{page.render}</Suspense>
                }
              />
            ))}
          </Routes>
        </section>
      </BrowserRouter>
    </>
  )
}

