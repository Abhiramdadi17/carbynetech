import React from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function CTASection() {
  const { isMobile } = useBreakpoint()

  return (
    <section style={{
      background: '#E9E9E9',
      padding: isMobile ? '4rem 1.25rem 0 1.25rem' : '7rem 2rem 0 2rem',
      paddingBottom: isMobile ? '0' : '70px',
      position: 'relative',
    }}>

      {/* Headline + buttons — centered, normal flow */}
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center',
        paddingBottom: '4rem',
      }}>
        {/* Headline */}
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
          fontWeight: 400,
          color: '#111111',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          whiteSpace: isMobile ? 'normal' : 'nowrap',
          margin: '0 auto 1.5rem',
        }}>
          Transform your manufacturing operations
        </h2>

        {/* Subtext */}
        <p style={{
          fontFamily: 'var(--font-body)',      // Inter
          fontSize: '0.95rem',
          color: '#666666',
          marginBottom: '2.5rem',
          maxWidth: '480px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.6,
        }}>
          Drive production efficiency, eliminate paper waste, and accelerate delivery with SFX9 MES.
        </p>

        {/* Two outlined pill buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
        }}>
          <a href="#contact" style={{
            fontFamily: 'var(--font-ui)',       // Space Grotesk
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            color: '#111111',
            border: '1px solid #AAAAAA',
            borderRadius: '100px',
            padding: '0.75rem 2rem',
            textDecoration: 'none',
            background: 'transparent',
            transition: 'border-color 0.2s, background 0.2s',
            cursor: 'pointer',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '300px' : 'none',
            textAlign: 'center',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#111111'
              e.currentTarget.style.background = 'rgba(0,0,0,0.04)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#AAAAAA'
              e.currentTarget.style.background = 'transparent'
            }}>
            CONTACT US
          </a>

          <a href="#services" style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            color: '#111111',
            border: '1px solid #AAAAAA',
            borderRadius: '100px',
            padding: '0.75rem 2rem',
            textDecoration: 'none',
            background: 'transparent',
            transition: 'border-color 0.2s, background 0.2s',
            cursor: 'pointer',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '300px' : 'none',
            textAlign: 'center',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#111111'
              e.currentTarget.style.background = 'rgba(0,0,0,0.04)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#AAAAAA'
              e.currentTarget.style.background = 'transparent'
            }}>
            EXPLORE MORE
          </a>
        </div>
      </div>

      {/* Card — absolutely positioned at the bottom edge of this section */}
      <div style={{
        position: isMobile ? 'relative' : 'absolute',
        bottom: isMobile ? undefined : '-70px',
        left: isMobile ? undefined : '50%',
        transform: isMobile ? undefined : 'translateX(-50%)',
        width: isMobile ? '100%' : 'calc(100% - 4rem)',
        maxWidth: '1100px',
        zIndex: 10,
        background: '#1A1A1A',
        borderRadius: '20px',
        padding: isMobile ? '2rem 1.5rem' : '2.5rem 3.5rem',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        margin: isMobile ? '0 auto' : undefined,
      }}>

        {/* Left — text */}
        <div style={{ textAlign: 'left', flex: 1, minWidth: isMobile ? '0' : '260px' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',   // Cormorant
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 400,
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            lineHeight: 1.2,
          }}>
            Transform your production visibility
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',      // Inter
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.6,
          }}>
            Drive accountability and eliminate material waste with SFX9 MES platform.
          </p>
        </div>

        {/* Right — buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          flexShrink: 0,
          flexWrap: 'wrap',
          width: isMobile ? '100%' : 'auto',
        }}>
          {/* Primary pill button — white filled */}
          <button style={{
            fontFamily: 'var(--font-ui)',        // Space Grotesk
            fontSize: '0.88rem',
            fontWeight: 500,
            color: '#111111',
            background: '#FFFFFF',
            border: 'none',
            borderRadius: '100px',
            padding: '0.75rem 1.75rem',
            cursor: 'pointer',
            transition: 'background 0.2s, transform 0.2s',
            whiteSpace: 'nowrap',
            width: isMobile ? '100%' : 'auto',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#F0F0F0'}
            onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
          >
            Book a Consultant
          </button>

          {/* Ghost text link */}
          <a href="#services" style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.85rem',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            transition: 'color 0.2s',
            whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            Explorer Services ↗
          </a>
        </div>

      </div>
    </section>
  )
}
