import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useBreakpoint } from '../hooks/useBreakpoint'

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
  const { isMobile } = useBreakpoint()

  return (
    <section className="section" style={{
      background: '#F7F6F2',
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(26,31,46,0.04) 1px, transparent 0)',
      backgroundSize: '32px 32px'
    }}>
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
            letterSpacing: '0.18em',
            color: '#1D4ED8',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            INTEGRATION LAYER
          </div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#1A1F2E',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            A connected platform,<br />layer by layer
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            color: '#6B7280',
            maxWidth: '1120px',
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
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                gap: isMobile ? '0.5rem' : '2rem',
                padding: '1.5rem 0',
                borderTop: '1px solid #DDD9D3',
                borderLeft: '3px solid transparent',
                background: 'transparent',
                cursor: 'default',
                transition: 'all 0.25s ease',
              }}
            >
              {isMobile ? (
                // Mobile: num + name on one line, tags below
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: '500',
                      color: '#1D4ED8',
                      flexShrink: 0,
                    }} className="arch-num">
                      {layer.num}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1A1F2E',
                      margin: 0,
                    }} className="arch-name">
                      {layer.name}
                    </h3>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {layer.tags.map(tag => (
                      <span key={tag} className="tag arch-tag">{tag}</span>
                    ))}
                  </div>
                </>
              ) : (
                // Desktop: unchanged flat 3-column row
                <>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: '500',
                    color: '#1D4ED8',
                    minWidth: '36px',
                    transition: 'color 0.25s',
                  }} className="arch-num">
                    {layer.num}
                  </span>
                  <div style={{ flex: '0 0 280px' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1A1F2E',
                      transition: 'color 0.25s',
                    }} className="arch-name">
                      {layer.name}
                    </h3>
                  </div>
                  <div style={{ flex: 1, display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {layer.tags.map(tag => (
                      <span key={tag} className="tag arch-tag">{tag}</span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ))}
          <div style={{ height: '1px', background: '#DDD9D3' }} />
        </div>

        {/* Bottom badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
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
                fontSize: '0.68rem',
                color: '#F7F6F2',
                padding: '0.45rem 1.1rem',
                border: 'none',
                borderRadius: '100px',
                background: '#1A1F2E',
                letterSpacing: '0.1em',
              }}
            >
              <span style={{ color: '#1D4ED8', marginRight: '0.3rem' }}>✓</span> {badge}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .arch-tag {
          background: #EFF6FF !important;
          border: 1px solid #BFDBFE !important;
          color: #1D4ED8 !important;
          font-family: var(--font-mono) !important;
          font-size: 0.7rem !important;
          letter-spacing: 0.1em !important;
          border-radius: 4px !important;
          padding: 3px 10px !important;
          transition: all 0.25s ease !important;
        }
        .arch-row:hover {
          background: #EEECEA !important;
          border-left-color: #1D4ED8 !important;
          padding-left: 1rem !important;
        }
        .arch-row:hover .arch-tag {
          background: #DBEAFE !important;
          border-color: #93C5FD !important;
        }
      `}</style>
    </section>
  )
}
