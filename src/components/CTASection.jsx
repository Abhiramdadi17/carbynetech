import React from 'react'

export default function CTASection() {
  return (
    <section style={{
      background: '#E9E9E9',
      padding: '7rem 2rem 0 2rem',
      paddingBottom: '70px',
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
        <h2 className="cta-headline" style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
          fontWeight: 400,
          color: '#111111',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
          margin: '0 auto 1.5rem',
        }}>
          Transform your manufacturing operations
        </h2>

        {/* Subtext */}
        <p style={{
          fontFamily: 'var(--font-body)',
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
        <div className="cta-buttons" style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="#contact" className="cta-pill" style={{
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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

          <a href="#services" className="cta-pill" style={{
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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

      {/* Dark floating card */}
      <div className="cta-card" style={{
        position: 'absolute',
        bottom: '-70px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 4rem)',
        maxWidth: '1100px',
        zIndex: 10,
        background: '#1A1A1A',
        borderRadius: '20px',
        padding: '2.5rem 3.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}>

        {/* Left — text */}
        <div style={{ textAlign: 'left', flex: 1, minWidth: '260px' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 400,
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            lineHeight: 1.2,
          }}>
            Transform your production visibility
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.6,
          }}>
            Drive accountability and eliminate material waste with SFX9 MES platform.
          </p>
        </div>

        {/* Right — buttons */}
        <div className="cta-card-buttons" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          flexShrink: 0,
          flexWrap: 'wrap',
        }}>
          <button style={{
            fontFamily: 'var(--font-ui)',
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

      <style>{`
        @media (max-width: 768px) {
          .cta-headline {
            white-space: normal !important;
            font-size: clamp(1.6rem, 6vw, 2rem) !important;
          }
          .cta-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .cta-pill {
            width: 100% !important;
          }
          .cta-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 2rem 1.5rem !important;
            bottom: -60px !important;
            border-radius: 16px 16px 0 0 !important;
            width: calc(100% - 2rem) !important;
          }
          .cta-card-buttons {
            width: 100% !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.75rem !important;
          }
          .cta-card-buttons button,
          .cta-card-buttons a {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}
