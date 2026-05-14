import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const layers = [
  {
    num: '01',
    name: 'Maintenance & Reliability',
    tags: ['PREDICTIVE PM', 'ASSET HEALTH', 'CMMS', 'IOT CONNECT'],
    desc: 'Smart maintenance scheduling, predictive failure detection, and real-time asset health monitoring.',
  },
  {
    num: '02',
    name: 'SFX MES Core',
    tags: ['PRODUCTION', 'QUALITY', 'TRACEABILITY', 'SCHEDULING'],
    desc: 'The intelligence layer — orchestrating every production event, quality check, and compliance record.',
  },
  {
    num: '03',
    name: 'Operator Interface',
    tags: ['TOUCHSCREEN', 'MOBILE', 'OFFLINE-READY'],
    desc: 'Purpose-built operator UIs for shop floor environments — fast, simple, and works offline.',
  },
  {
    num: '04',
    name: 'Automation / SCADA',
    tags: ['OPC-UA', 'MQTT', 'MODBUS', 'MACHINE CONNECT'],
    desc: 'Direct integration with PLCs, SCADA systems, and industrial automation equipment.',
  },
  {
    num: '05',
    name: 'Shop Floor',
    tags: ['MACHINES', 'SENSORS', 'OPERATORS'],
    desc: 'Physical assets, human operators, and digital sensors — all unified under SFX9 intelligence.',
  },
]

const badges = ['ISO & GMP Compliant', 'Security by Default', 'Local IT Ready']

export default function Architecture() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section" style={{ background: 'var(--bg-card)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3rem' }}
        >
          <div className="section-label">INTEGRATION LAYER</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: '1rem',
            lineHeight: 1.1,
          }}>
            A connected platform,<br />layer by layer
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--text-muted)',
            maxWidth: '520px',
            lineHeight: 1.7,
          }}>
            Five connected layers from machine I/O to enterprise ERP — designed for seamless integration into your existing technology landscape.
          </p>
        </motion.div>

        {/* Layer rows */}
        <div>
          {layers.map((layer, i) => (
            <motion.div
              key={layer.num}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="arch-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                padding: '1.75rem 1.5rem',
                borderTop: '1px solid var(--border)',
                borderLeft: '3px solid transparent',
                cursor: 'default',
                transition: 'background 0.3s, border-left-color 0.3s',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                minWidth: '28px',
                transition: 'color 0.3s',
              }} className="arch-num">
                {layer.num}
              </span>
              <div style={{ flex: '0 0 220px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  transition: 'color 0.3s',
                }} className="arch-name">
                  {layer.name}
                </h3>
              </div>
              <div style={{ flex: 1, display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {layer.tags.map(tag => (
                  <span key={tag} className="tag arch-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        {/* Bottom badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          {badges.map(badge => (
            <div
              key={badge}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-blue)',
                padding: '0.5rem 1rem',
                border: '1px solid rgba(0,194,255,0.25)',
                borderRadius: '100px',
                background: 'rgba(0,194,255,0.05)',
                letterSpacing: '0.05em',
              }}
            >
              ✓ {badge}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .arch-row:hover {
          background: var(--bg-hover);
          border-left-color: var(--accent-blue) !important;
        }
        .arch-row:hover .arch-num {
          color: var(--accent-blue) !important;
        }
        .arch-row:hover .arch-name {
          color: var(--text) !important;
        }
        .arch-row:hover .arch-tag {
          border-color: rgba(0,194,255,0.35) !important;
          color: var(--accent-blue) !important;
          background: rgba(0,194,255,0.07) !important;
        }
      `}</style>
    </section>
  )
}
