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

  return (
    <>
      {/* NAVBAR wrapper — full width but content is constrained */}
      <nav id="main-nav" style={{
        position: 'fixed',
        top: '16px',                          // floats 16px from top — not flush
        left: 'clamp(1rem, calc((100vw - 1280px) / 2 + 1rem), 7rem)',
        right: 'clamp(1rem, calc((100vw - 1280px) / 2 + 1rem), 7rem)',
        transform: 'none',
        width: 'auto',
        maxWidth: 'none',
        zIndex: 1000,

        // Glassmorphism pill
        background: 'rgba(8, 10, 13, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',                 // pill/rounded rect shape

        // Layout
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.6rem 1.5rem',
        gap: '1rem',
        boxSizing: 'border-box',

        // Subtle top highlight
        boxShadow: `
          0 1px 0 rgba(255,255,255,0.06) inset,
          0 20px 40px rgba(0,0,0,0.3)
        `,

        // Smooth scroll transition
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
            style={{
              height: '40px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '4px',
            }}
          />
        </a>

        {/* CENTER — Nav links */}
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
              fontFamily: 'var(--font-ui)',   // Space Grotesk
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'none',
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* RIGHT — CTA Button */}
        <button className="desktop-cta" style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#080a0d',
          background: '#00c2ff',             // cyan fill — matches site accent
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

      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: 'clamp(1rem, calc((100vw - 1280px) / 2 + 1rem), 7rem)',
              right: 'clamp(1rem, calc((100vw - 1280px) / 2 + 1rem), 7rem)',
              transform: 'none',
              width: 'auto',
              background: 'rgba(8,10,13,0.98)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              zIndex: 999,
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {link}
              </a>
            ))}
            <button style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#080a0d',
              background: '#00c2ff',
              border: 'none',
              borderRadius: '10px',
              padding: '0.75rem 1.1rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
              transition: 'background 0.2s',
            }}>
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
          #main-nav {
            width: calc(100% - 2rem) !important;
            padding: 0.5rem 1rem !important;
          }
        }
      `}</style>
    </>
  )
}
