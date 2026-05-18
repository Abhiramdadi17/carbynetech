import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { useBreakpoint } from '../hooks/useBreakpoint'

const industries = [
  {
    name: 'Consumer Packaged Goods',
    tags: ['OEM', 'PROCESS', 'DISCRETE', 'HYBRID'],
  },
  {
    name: 'Motor Manufacturing',
    tags: ['DISCRETE', 'MULTI-LINE', 'COMPLEX'],
  },
  {
    name: 'Tyre Manufacturing',
    tags: ['OEE', 'MULTI-PLANT', 'CHEMICAL'],
  },
  {
    name: 'Equipment Manufacturing',
    tags: ['CUSTOM TOOLING', 'COMPLEX', 'MIXED MODE'],
  },
  {
    name: 'Auto Components',
    tags: ['TIER-1', 'TIER-2', 'STAMPING', 'WELDING'],
  },
]

function IndustryRow({ industry, index }) {
  const [hovered, setHovered] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { isMobile } = useBreakpoint()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        padding: '1.75rem 1.5rem',
        borderTop: '1px solid var(--border)',
        background: hovered ? 'var(--bg-hover)' : 'transparent',
        borderLeft: hovered ? '3px solid var(--accent-blue)' : '3px solid transparent',
        cursor: 'pointer',
        transition: 'background 0.3s, border-left-color 0.3s',
        gap: '1.5rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
        {/* Index */}
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: hovered ? 'var(--accent-blue)' : 'var(--text-muted)',
          minWidth: '24px',
          transition: 'color 0.3s',
        }}>
          0{index + 1}
        </span>

        {/* Name */}
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1rem, 2vw, 1.4rem)',
          fontWeight: 700,
          color: hovered ? 'var(--text)' : 'var(--text-muted)',
          transition: 'color 0.3s',
          minWidth: isMobile ? 'auto' : '220px',
        }}>
          {industry.name}
        </h3>

        {/* Tags */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', flex: 1 }}>
            {industry.tags.map(tag => (
              <span
                key={tag}
                className="tag"
                style={hovered ? {
                  borderColor: 'rgba(0,194,255,0.4)',
                  color: 'var(--accent-blue)',
                  background: 'rgba(0,194,255,0.07)',
                  transition: 'all 0.3s',
                } : { transition: 'all 0.3s' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Tags on mobile — below name row */}
      {isMobile && (
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {industry.tags.map(tag => (
            <span
              key={tag}
              className="tag"
              style={hovered ? {
                borderColor: 'rgba(0,194,255,0.4)',
                color: 'var(--accent-blue)',
                background: 'rgba(0,194,255,0.07)',
                transition: 'all 0.3s',
              } : { transition: 'all 0.3s' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

    </motion.div>
  )
}

export default function Industries() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3rem' }}
        >
          <div className="section-label">INDUSTRIES</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: '1rem',
            lineHeight: 1.1,
          }}>
            Precision-configured for your world
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--text-muted)',
            maxWidth: '940px',
            lineHeight: 1.7,
          }}>
            Not a generic MES. Every deployment is tailored to your exact process flows, compliance requirements, and ERP protocols.
          </p>
        </motion.div>

        {/* Industry rows */}
        <div>
          {industries.map((industry, i) => (
            <IndustryRow key={industry.name} industry={industry} index={i} />
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </section>
  )
}
