import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useBreakpoint } from '../hooks/useBreakpoint'

const kpis = [
  {
    category: 'Supplier',
    name: 'On-Time Delivery',
    value: 98.4,
    unit: '%',
    prefix: '+',
    context: 'Supplier on-time delivery rate — tracked across all tier-1 and tier-2 vendors in real time.',
    sparkline: [82, 85, 88, 90, 92, 94, 96, 98, 98.4],
    color: '#00c2ff',
  },
  {
    category: 'Inventory',
    name: 'WIP Reduction',
    value: 34,
    unit: '%',
    prefix: '-',
    context: 'Work-in-progress inventory reduced through real-time pull signals and digital travellers.',
    sparkline: [4, 8, 14, 20, 25, 28, 31, 33, 34],
    color: '#00ff88',
  },
  {
    category: 'Production',
    name: 'OEE Score',
    value: 87.2,
    unit: '%',
    prefix: '',
    context: 'Overall Equipment Effectiveness — availability × performance × quality, updated every shift.',
    sparkline: [71, 73, 75, 78, 81, 83, 85, 86, 87.2],
    color: '#00c2ff',
  },
  {
    category: 'Quality',
    name: 'Defect Rate',
    value: 78,
    unit: '%',
    prefix: '-',
    context: 'Inline inspection and SPC controls drive defect rates toward zero across all production lines.',
    sparkline: [10, 22, 35, 47, 58, 65, 71, 75, 78],
    color: '#00ff88',
  },
  {
    category: 'Maintenance',
    name: 'MTBF Improvement',
    value: 42,
    unit: '%',
    prefix: '+',
    context: 'Mean time between failures improved through predictive maintenance and real-time asset health monitoring.',
    sparkline: [5, 10, 17, 22, 28, 33, 37, 40, 42],
    color: '#00c2ff',
  },
  {
    category: 'Energy',
    name: 'Energy per Unit',
    value: 22,
    unit: '%',
    prefix: '-',
    context: 'Energy consumption per produced unit — tracked line-by-line, shift-by-shift, against production output.',
    sparkline: [3, 6, 10, 13, 16, 18, 20, 21, 22],
    color: '#00ff88',
  },
]

function useCountUp(target, duration = 1400, trigger) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) { setCount(0); return }
    let rafId
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * target)
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [target, trigger])
  return count
}

function KPIPanel({ kpi }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const count = useCountUp(kpi.value, 1400, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      style={{
        padding: '2.5rem',
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        minHeight: '320px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle corner glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '200px', height: '200px',
        background: `radial-gradient(circle at top right, ${kpi.color}0d 0%, transparent 60%)`,
        pointerEvents: 'none',
      }} />

      {/* KPI label */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        color: 'var(--text-muted)',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        marginBottom: '0.75rem',
      }}>
        {kpi.category} · {kpi.name}
      </div>

      {/* Big number */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
        color: kpi.color,
        lineHeight: 1,
        marginBottom: '2rem',
        fontWeight: 400,
        letterSpacing: '-0.02em',
        textShadow: `0 0 50px ${kpi.color}30`,
      }}>
        {kpi.prefix}<span>{count.toFixed(count < 10 ? 1 : 0)}</span>
        <span style={{ fontSize: '0.35em', opacity: 0.6, marginLeft: '2px' }}>{kpi.unit}</span>
      </div>

      {/* Sparkline */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.6rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.12em',
          }}>TREND — LAST 9 SHIFTS</span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: kpi.color,
            letterSpacing: '0.05em',
          }}>↑ IMPROVING</span>
        </div>
        <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-end', height: '52px' }}>
          {kpi.sparkline.map((v, i) => {
            const maxV = Math.max(...kpi.sparkline)
            const heightPct = Math.max(8, (v / maxV) * 100)
            return (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
                style={{
                  flex: 1,
                  height: `${heightPct}%`,
                  background: i === kpi.sparkline.length - 1
                    ? kpi.color
                    : `${kpi.color}66`,
                  borderRadius: '2px 2px 0 0',
                  transformOrigin: 'bottom',
                  boxShadow: i === kpi.sparkline.length - 1 ? `0 0 8px ${kpi.color}88` : 'none',
                }}
              />
            )
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
          {['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9'].map(s => (
            <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: 'var(--text-muted)' }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Context */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        lineHeight: 1.65,
        borderTop: '1px solid var(--border)',
        paddingTop: '1rem',
      }}>
        {kpi.context}
      </p>
    </motion.div>
  )
}

export default function KPIIntelligence() {
  const [activeKPI, setActiveKPI] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { isMobile } = useBreakpoint()

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
          <div className="section-label">KPI INTELLIGENCE</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: '1rem',
            lineHeight: 1.1,
          }}>
            Every metric that matters
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--text-muted)',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}>
            SFX9 tracks every KPI in real time — reportable automatically, surfaced in one view.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '220px 1fr',
          gap: '1.5rem',
          alignItems: 'start',
        }}>
          {/* Left: vertical category list */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            overflow: isMobile ? 'auto' : 'hidden',
            background: 'var(--bg-card)',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}>
            {kpis.map((kpi, i) => (
              <button
                key={kpi.category}
                onClick={() => setActiveKPI(i)}
                style={{
                  padding: '1rem 1.25rem',
                  background: activeKPI === i ? 'rgba(255,255,255,0.04)' : 'transparent',
                  border: 'none',
                  borderLeft: isMobile ? 'none' : `3px solid ${activeKPI === i ? kpi.color : 'transparent'}`,
                  borderBottom: isMobile
                    ? `3px solid ${activeKPI === i ? kpi.color : 'transparent'}`
                    : (i < kpis.length - 1 ? '1px solid var(--border)' : 'none'),
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'background 0.2s, border-color 0.2s',
                  flexShrink: isMobile ? 0 : undefined,
                  whiteSpace: isMobile ? 'nowrap' : undefined,
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: activeKPI === i ? 'var(--text)' : 'var(--text-muted)',
                  transition: 'color 0.2s',
                  marginBottom: '0.2rem',
                }}>
                  {kpi.category}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: activeKPI === i ? kpi.color : 'rgba(107,122,144,0.6)',
                  transition: 'color 0.2s',
                  letterSpacing: '0.03em',
                }}>
                  {kpi.prefix}{kpi.value}{kpi.unit}
                </div>
              </button>
            ))}
          </div>

          {/* Right: animated KPI panel */}
          <AnimatePresence mode="wait">
            <KPIPanel key={activeKPI} kpi={kpis[activeKPI]} />
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .kpi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
