import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { useBreakpoint } from '../hooks/useBreakpoint'

const stats = [
  { label: '18 Countries', icon: '🌍' },
  { label: '100% Runtime', icon: '⚡' },
  { label: '05 Live OEE', icon: '📊' },
  { label: 'Live P&L', icon: '💹' },
  { label: '-78% Defect Rate', icon: '✅' },
]

export default function Hero() {
  const { isMobile } = useBreakpoint()

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--bg)',
      padding: '0',
      textAlign: 'left',
    }}>
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center right',
          zIndex: 0,
          opacity: 0.42,
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        background: `
          linear-gradient(
            to right,
            rgba(8,10,13,0.95) 0%,
            rgba(8,10,13,0.80) 35%,
            rgba(8,10,13,0.40) 65%,
            rgba(8,10,13,0.15) 100%
          ),
          linear-gradient(
            to bottom,
            rgba(8,10,13,0.60) 0%,
            rgba(8,10,13,0.00) 25%,
            rgba(8,10,13,0.00) 70%,
            rgba(8,10,13,0.90) 100%
          )
        `,
      }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: 'none',
        margin: '0',
        paddingTop: isMobile ? '7rem' : '7rem',
        paddingBottom: '4rem',
        paddingLeft: isMobile
          ? '1.25rem'
          : 'clamp(1rem, calc((100vw - 1280px) / 2 + 1rem), 7rem)',
        paddingRight: isMobile ? '1.25rem' : '2rem',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent-blue)',
              boxShadow: '0 0 8px var(--accent-blue)',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              color: 'var(--accent-blue)',
              textTransform: 'uppercase',
            }}>
              Manufacturing Intelligence Platform
            </span>
          </div>

          {/* Main headline */}
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: isMobile ? 'clamp(3rem, 11vw, 3.8rem)' : 'clamp(5rem, 10vw, 9rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '1.5rem',
          }}>
            The intelligent{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00c2ff, #00ff88)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}><br />
              shop floor
            </span>
            {' '}platform
          </h1>

          {/* Subtext */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: isMobile ? '0.92rem' : 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'var(--text-muted)',
            maxWidth: isMobile ? '100%' : '620px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}>
            Unifies your entire production floor into one real-time intelligence layer — eliminating paper, enforcing quality at every step, connecting people, machines, and data.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-start',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}>
            <a
              href="#cta"
              className="btn btn-primary"
              style={{
                fontSize: '0.9rem',
                padding: '0.8rem 1.8rem',
              }}
            >
              Book a Demo <ArrowRight size={16} />
            </a>
            <a
              href="#platform"
              className="btn btn-outline"
              style={{
                fontSize: '0.9rem',
                padding: '0.8rem 1.8rem',
              }}
            >
              Explore Platform
            </a>
          </div>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            display: isMobile ? 'grid' : 'flex',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : undefined,
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.1rem',
                background: 'rgba(15,18,24,0.8)',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                cursor: 'default',
              }}
              whileHover={{
                borderColor: 'rgba(0,194,255,0.3)',
                boxShadow: '0 0 20px rgba(0,194,255,0.1)',
              }}
            >
              <Zap size={12} color="var(--accent-blue)" />
              <span style={{
                fontFamily: 'var(--font-ui)',
                fontWeight: 500,
                fontSize: '0.75rem',
                color: 'var(--text)',
                letterSpacing: '0.03em',
              }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to bottom, transparent, var(--bg))',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
