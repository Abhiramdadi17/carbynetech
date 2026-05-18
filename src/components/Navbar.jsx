import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useBreakpoint } from '../hooks/useBreakpoint'

const navLinks = ['Services', 'Products', 'Insights & Events', 'Culture', 'Careers']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile } = useBreakpoint()

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
        left: isMobile
          ? '0.75rem'
          : 'clamp(1rem, calc((100vw - 1280px) / 2 + 1rem), 7rem)',
        right: isMobile
          ? '0.75rem'
          : 'clamp(1rem, calc((100vw - 1280px) / 2 + 1rem), 7rem)',
        transform: 'none',
        width: 'auto',
        maxWidth: 'none',
        zIndex: 1002,

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
        padding: isMobile ? '0.5rem 1rem' : '0.6rem 1.5rem',
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
              height: '60px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '4px',
            }}
          />
        </a>

        {/* CENTER — Nav links (desktop only) */}
        {!isMobile && (
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
        )}

        {/* Mobile hamburger / close toggle — only on mobile */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
              zIndex: 1002,
              position: 'relative',
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}

        {/* RIGHT — CTA Button (desktop only) */}
        {!isMobile && (
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
        )}

      </nav>

      {/* Mobile fullscreen menu — new code only, does not affect desktop */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1001,
              background: 'rgba(8,10,13,0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0',
            }}
          >
            {['Services', 'Products', 'Insights & Events', 'Culture', 'Careers'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  textDecoration: 'none',
                  padding: '1.1rem 0',
                  width: '80%',
                  textAlign: 'center',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {link}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: '2rem',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#080a0d',
                background: 'var(--accent-blue)',
                padding: '0.75rem 2rem',
                borderRadius: '10px',
                textDecoration: 'none',
                width: '80%',
                textAlign: 'center',
              }}
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          #main-nav {
            width: calc(100% - 1.5rem) !important;
            padding: 0.5rem 1rem !important;
          }
        }
      `}</style>
    </>
  )
}
