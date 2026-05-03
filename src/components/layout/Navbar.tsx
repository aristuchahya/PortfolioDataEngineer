import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/#experience' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (location.pathname !== '/') {
        window.location.href = href
        return
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-heading font-bold text-lg text-gradient">Dev.Portfolio</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm text-muted hover:text-text hover:bg-surface rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                    location.pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted hover:text-text hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <Button size="sm">Hire Me</Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-muted hover:text-text hover:bg-surface transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-surface-2"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <button
                    key={link.href}
                    onClick={() => { scrollToSection(link.href); setMenuOpen(false) }}
                    className="block w-full text-left px-4 py-2.5 text-sm text-muted hover:text-text hover:bg-surface rounded-lg transition-all"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2.5 text-sm text-muted hover:text-text hover:bg-surface rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-2">
                <Link to="/contact" className="block">
                  <Button className="w-full">Hire Me</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
