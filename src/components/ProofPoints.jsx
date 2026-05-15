import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    company: 'NovaPak Industries',
    quote: '"We went from 14-day batch traceability to a 30-second search. Our auditors thought the system was faked — until we showed them the live data trail in real time."',
    name: 'Rajiv Mehta',
    role: 'VP Manufacturing, NovaPak Industries',
    sector: 'Consumer Packaged Goods',
  },
  {
    company: 'Stellum Auto',
    quote: '"SFX9 didn\'t just digitise our forms — it transformed our people, our processes, and our customer quality. Defect escapes dropped to zero within 4 weeks of go-live."',
    name: 'Sarah Okonkwo',
    role: 'Head of Quality, Stellum Auto',
    sector: 'Automotive Tier-1',
  },
  {
    company: 'DuraTyre Group',
    quote: '"The RCA conversation lasted 5 minutes. Every data point was already in SFX9. The board approved full investment across all 7 plants before the plan presentation even ended."',
    name: 'Marcus Brandt',
    role: 'COO, DuraTyre Group',
    sector: 'Tyre Manufacturing',
  },
]

export default function ProofPoints() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-label">PROOF POINTS</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: 'var(--text)',
            lineHeight: 1.1,
          }}>
            Don't take our word for it
          </h2>
        </motion.div>

        <div className="proof-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }}>
          {testimonials.map((t, i) => {
            const isHovered = hoveredCard === i
            const isOtherHovered = hoveredCard !== null && hoveredCard !== i

            return (
              <motion.div
                key={t.company}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  padding: '2rem',
                  borderRadius: '12px',
                  border: isHovered ? '1px solid rgba(255,255,255,0.15)' : '1px solid var(--border)',
                  background: isHovered ? '#ffffff' : isOtherHovered ? '#060809' : 'var(--bg-card)',
                  opacity: isOtherHovered ? 0.4 : 1,
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isHovered
                    ? '0 20px 60px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2)'
                    : '0 0 0 rgba(0,0,0,0)',
                  cursor: 'default',
                  transition: 'background 0.3s ease, color 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
                  position: 'relative',
                }}
              >
                {/* Quote mark */}
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '4rem',
                  lineHeight: 0.8,
                  color: isHovered ? 'rgba(0, 194, 255, 0.3)' : 'rgba(0, 194, 255, 0.15)',
                  marginBottom: '1rem',
                  userSelect: 'none',
                  transition: 'color 0.3s',
                }}>
                  "
                </div>

                {/* Sector */}
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: isHovered ? '#008bbf' : 'var(--accent-blue)',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  background: isHovered ? 'rgba(0,194,255,0.12)' : 'rgba(0,194,255,0.07)',
                  border: isHovered ? '1px solid rgba(0,194,255,0.3)' : '1px solid rgba(0,194,255,0.2)',
                  borderRadius: '4px',
                  padding: '3px 10px',
                  display: 'inline-block',
                  marginBottom: '0.75rem',
                  transition: 'all 0.3s',
                }}>
                  {t.sector}
                </div>

                {/* Company */}
                <div style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: isHovered ? '#080a0d' : 'var(--text)',
                  marginBottom: '1rem',
                  transition: 'color 0.3s',
                }}>
                  {t.company}
                </div>

                {/* Quote */}
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: isHovered ? '#1a1a1a' : 'rgba(255,255,255,0.75)',
                  marginBottom: '1.5rem',
                  transition: 'color 0.3s',
                }}>
                  {t.quote}
                </p>

                {/* Person */}
                <div style={{
                  borderTop: `1px solid ${isHovered ? 'rgba(0,0,0,0.1)' : 'var(--border)'}`,
                  paddingTop: '1rem',
                  transition: 'border-color 0.3s',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: isHovered ? '#080a0d' : 'var(--text)',
                    transition: 'color 0.3s',
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: isHovered ? '#444' : 'var(--text-muted)',
                    marginTop: '0.2rem',
                    transition: 'color 0.3s',
                  }}>
                    {t.role}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proof-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .proof-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
