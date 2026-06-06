'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-warm-sm border-b border-beige'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex flex-col items-center group select-none" style={{ gap: '2px' }}>
              <span className="font-playfair font-semibold text-wine leading-none tracking-tight transition-opacity duration-200 group-hover:opacity-75" style={{ fontSize: '1.35rem' }}>
                Jady Moraes
              </span>
              <div className="flex items-center gap-1.5 w-full">
                <div className="flex-1 h-px bg-wine/30" />
                <div className="w-1 h-1 rotate-45 bg-wine/50" />
                <div className="flex-1 h-px bg-wine/30" />
              </div>
              <span className="font-inter text-wine/60 uppercase tracking-[0.18em] leading-none transition-opacity duration-200 group-hover:opacity-75" style={{ fontSize: '0.52rem' }}>
                Leitura Crítica
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-inter text-sm text-brown hover:text-wine transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 bg-wine text-cream-50 rounded-full font-inter text-sm font-medium hover:bg-wine-dark transition-colors shadow-warm-sm"
              >
                Solicitar orçamento
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-charcoal hover:text-wine hover:bg-cream-300 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-cream-50/98 backdrop-blur-md border-b border-beige shadow-warm-lg lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-inter text-base text-charcoal hover:text-wine hover:bg-cream-300 px-4 py-3 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-beige">
                <a
                  href="#contato"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center px-6 py-3 bg-wine text-cream-50 rounded-full font-inter font-medium hover:bg-wine-dark transition-colors"
                >
                  Solicitar orçamento
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
