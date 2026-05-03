import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Home = lazy(() => import('../pages/Home'))
const Projects = lazy(() => import('../pages/Projects'))
const Contact = lazy(() => import('../pages/Contact'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
