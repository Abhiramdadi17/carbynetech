import React from 'react'

export default function CTASection() {
  return (
    <section style={{
      background: '#E9E9E9',           // light gray — matches screenshot
      padding: '7rem 2rem 0 2rem',     // no bottom padding — dark card overlaps footer
      textAlign: 'center',
      position: 'relative',
    }}>

      {/* Headline */}
      <h2 style={{
        fontFamily: 'var(--font-heading)',   // Cormorant
        fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
        fontWeight: 400,                     // Cormorant looks best at regular weight large
        color: '#111111',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        marginBottom: '1.5rem',
        maxWidth: '700px',
        margin: '0 auto 1.5rem',
      }}>
        Transform your<br />manufacturing operations
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
        marginBottom: '5rem',
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

      {/* Dark overlapping card — sits at bottom, overlaps footer */}
      <div style={{
        maxWidth: '1040px',
        margin: '0 auto',
        background: '#1A1A1A',
        borderRadius: '20px 20px 0 0',      // rounded only on top — merges with footer
        padding: '3rem 3.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        flexWrap: 'wrap',
        position: 'relative',
        bottom: 0,
      }}>

        {/* Left — text */}
        <div style={{ textAlign: 'left', flex: 1, minWidth: '260px' }}>
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
