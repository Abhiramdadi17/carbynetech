import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  { icon: '⚡', label: 'Real-time sync', desc: 'Sub-second data across every workstation' },
  { icon: '🔒', label: 'ISO & GMP Ready', desc: 'Built-in compliance for regulated industries' },
  { icon: '🌐', label: '18 Countries', desc: 'Deployed globally, maintained locally' },
  { icon: '📱', label: 'Works Offline', desc: 'Operator UIs run without connectivity' },
]

export default function ProductSpotlight() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section style={{
      position: 'relative',
      padding: '8rem 0',
      background: 'var(--bg-card)',
      overflow: 'hidden',
    }}>
      {/* Background geometric */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,194,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,194,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      {/* Large background SFX9 text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(8rem, 18vw, 20rem)',
        fontWeight: 800,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(0,194,255,0.06)',
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
        lineHeight: 1,
      }}>
        SFX9
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(0,194,255,0.08)',
            border: '1px solid rgba(0,194,255,0.2)',
            borderRadius: '100px',
            padding: '0.35rem 1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--accent-blue)',
            letterSpacing: '0.12em',
            marginBottom: '1.5rem',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--accent-blue)',
              animation: 'pulse 2s infinite',
              display: 'inline-block',
            }} />
            PRODUCT · SFX9
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            color: 'var(--text)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
          }}>
            One platform.<br />
            <span style={{
              background: 'linear-gradient(135deg, #00c2ff 0%, #00ff88 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Zero compromises.
            </span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--text-muted)',
            fontSize: '1.05rem',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            SFX9 is not a point solution. It is a complete manufacturing intelligence layer — integrating every discipline, every role, every data source into a single unified view.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }}>
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              style={{
                padding: '1.75rem',
                background: 'rgba(8,10,13,0.6)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
              }}
              whileHover={{
                borderColor: 'rgba(0,194,255,0.3)',
                boxShadow: '0 8px 30px rgba(0,194,255,0.08)',
                y: -4,
              }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{f.icon}</div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '0.35rem',
              }}>
                {f.label}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                lineHeight: 1.55,
              }}>
                {f.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .spotlight-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .spotlight-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
