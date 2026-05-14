import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="cta" style={{ background: '#f5f5f0', padding: '7rem 0' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            color: '#6b7a90',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            GET STARTED
          </div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#080a0d',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Transform your manufacturing operations
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            color: '#4a5568',
            maxWidth: '500px',
            lineHeight: 1.7,
          }}>
            Join 18 countries of manufacturers who've eliminated paper, reduced defects, and unlocked real-time visibility with SFX9.
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: '#080a0d',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '3rem',
            maxWidth: '680px',
            boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
          }}
        >
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: '0.5rem',
          }}>
            Book a personalised demo
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            marginBottom: '1.5rem',
          }}>
            See SFX9 live on a real shop floor scenario matched to your industry in under 30 minutes.
          </p>

          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}>
            <div style={{
              flex: 1,
              minWidth: '240px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
            }}>
              <Mail size={16} color="var(--text-muted)" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your work email"
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--text)',
                }}
              />
            </div>
            <button
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem', flexShrink: 0 }}
            >
              Book a Demo <ArrowRight size={16} />
            </button>
          </div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginTop: '0.75rem',
          }}>
            No commitment. No long sales process. Just a focused 30-minute session.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
