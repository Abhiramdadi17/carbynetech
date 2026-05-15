import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = ['Services', 'Products', 'Insights & Events', 'Culture', 'Careers']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('main-nav')
      if (!nav) return;
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(8,10,13,0.92)'
        nav.style.boxShadow = '0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 48px rgba(0,0,0,0.4)'
      } else {
        nav.style.background = 'rgba(8,10,13,0.75)'
        nav.style.boxShadow = '0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 40px rgba(0,0,0,0.3)'
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav id="main-nav" style={{
        position: 'fixed',
        top: '16px',
        left: 'clamp(1rem, calc((100vw - 1280px) / 2 + 1rem), 7rem)',
        right: 'clamp(1rem, calc((100vw - 1280px) / 2 + 1rem), 7rem)',
        transform: 'none',
        width: 'auto',
        maxWidth: 'none',
        zIndex: 1000,
        background: 'rgba(8, 10, 13, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.6rem 1.5rem',
        gap: '1rem',
        boxSizing: 'border-box',
        boxShadow: `
          0 1px 0 rgba(255,255,255,0.06) inset,
          0 20px 40px rgba(0,0,0,0.3)
        `,
        transition: 'background 0.3s, box-shadow 0.3s',
      }}>

        {/* LEFT — Logo */}
        <a href="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          flexShrink: 0,
        }}>
          <img
            src="/newlogo.png"
            alt="Carbyne Tech"
            className="nav-logo"
            style={{
              height: '60px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '4px',
            }}
          />
        </a>

        {/* CENTER — Nav links (desktop) */}
        <div className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '0.1rem',
          flex: 1,
          paddingRight: '1.5rem',
        }}>
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.82rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
              padding: '0.45rem 1rem',
              borderRadius: '8px',
              transition: 'color 0.2s, background 0.2s',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.65)'
                e.currentTarget.style.background = 'transparent'
              }}>
              {link}
            </a>
          ))}
        </div>

        {/* RIGHT — CTA Button (desktop) */}
        <button className="desktop-cta" style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#080a0d',
          background: '#00c2ff',
          border: 'none',
          borderRadius: '10px',
          padding: '0.5rem 1.1rem',
          cursor: 'pointer',
          flexShrink: 0,
          transition: 'background 0.2s, transform 0.15s',
          letterSpacing: '0.01em',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#00d4ff'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#00c2ff'
            e.currentTarget.style.transform = 'translateY(0)'
          }}>
          Contact Us
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px',
            borderRadius: '6px',
            flexShrink: 0,
          }}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

      </nav>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(8,10,13,0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 1001,
              display: 'flex',
              flexDirection: 'column',
              padding: '5.5rem 2rem 2.5rem',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                color: '#ffffff',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>

            {/* Nav links */}
            <div style={{ flex: 1 }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.85)',
                    textDecoration: 'none',
                    padding: '1rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Contact Us at bottom */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.3 }}
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#080a0d',
                background: '#00c2ff',
                border: 'none',
                borderRadius: '12px',
                padding: '0.9rem',
                cursor: 'pointer',
                width: '100%',
                marginTop: '1.5rem',
                transition: 'background 0.2s',
                minHeight: '44px',
              }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
          #main-nav {
            left: 0.75rem !important;
            right: 0.75rem !important;
            padding: 0.5rem 1rem !important;
            top: 12px !important;
          }
          .nav-logo {
            height: 28px !important;
          }
        }
      `}</style>
    </>
  )
}
