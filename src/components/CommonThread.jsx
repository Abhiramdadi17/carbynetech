import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useBreakpoint } from '../hooks/useBreakpoint'

const tabs = [
  {
    id: 'agile',
    label: 'Agile Deployment',
    headline: 'Live in weeks. Not years.',
    subtext: 'SFX9 deploys plant-by-plant with a proven sprint model. Your first production line goes live in under 8 weeks — without shutting down operations. Our deployment team embeds with yours, configures to your exact process flows, and hands over a system your operators actually want to use.',
    metrics: [
      { label: 'Avg. Go-Live', value: '6 weeks' },
      { label: 'Deployment Success', value: '100%' },
    ],
    stat: '6-Week Go-Live',
    color: '#00c2ff',
  },
  {
    id: 'paper',
    label: 'Zero Paper',
    headline: 'Zero paper. Full control.',
    subtext: 'Every traveller, batch record, sign-off, and deviation report lives in SFX9. Digital workflows replace every clipboard and spreadsheet. Your floor is audit-ready at all times, and your operators move faster — with fewer errors — than ever before.',
    metrics: [
      { label: 'Paperless Ops', value: '100%' },
      { label: 'Rework Reduction', value: '-78%' },
    ],
    stat: '100% Paperless',
    color: '#00ff88',
  },
  {
    id: 'oee',
    label: 'Real-Time OEE',
    headline: 'Every second counts.',
    subtext: 'Live OEE visibility across every asset, every shift — without manual data entry. SFX9 aggregates availability, performance, and quality into a single score, surfaced in real time to operators, supervisors, and management. No delays. No guesswork.',
    metrics: [
      { label: 'OEE Score', value: '87.2%' },
      { label: 'Reporting Lag', value: '0 min' },
    ],
    stat: '87.2% OEE',
    color: '#00c2ff',
  },
  {
    id: 'quality',
    label: 'Quality Control',
    headline: 'Quality at the point of work.',
    subtext: 'In-process inspection, SPC limits, and deviation alerts fire at the exact moment a parameter drifts. SFX9 stops defects from propagating — and builds a compliance record automatically. No more end-of-line discoveries.',
    metrics: [
      { label: 'Defect Rate', value: '-78%' },
      { label: 'First-Pass Yield', value: '+34%' },
    ],
    stat: '-78% Defect Rate',
    color: '#00ff88',
  },
  {
    id: 'trace',
    label: 'Full Traceability',
    headline: 'From raw material to finished good.',
    subtext: 'Complete genealogy for every unit produced. Know exactly what materials went into every product, which operators touched it, and what machines processed it — in seconds, not days. Recall events become routine. Audit queries get answered before the auditor finishes their sentence.',
    metrics: [
      { label: 'Trace Speed', value: '<30 sec' },
      { label: 'Batch Traceability', value: '100%' },
    ],
    stat: 'Full Genealogy',
    color: '#00c2ff',
  },
]

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
}

export default function CommonThread() {
  const [activeTab, setActiveTab] = useState(0)
  const [direction, setDirection] = useState(1)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { isMobile } = useBreakpoint()

  const handleTab = (i) => {
    setDirection(i > activeTab ? 1 : -1)
    setActiveTab(i)
  }

  const tab = tabs[activeTab]

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
          <div className="section-label">THE COMMON THREAD</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: 'var(--text)',
            lineHeight: 1.1,
          }}>
            Capabilities that cross every industry
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'flex',
            gap: 0,
            borderBottom: '1px solid var(--border)',
            marginBottom: 0,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}>
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => handleTab(i)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  padding: '1rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === i ? `2px solid var(--accent-blue)` : '2px solid transparent',
                  color: activeTab === i ? 'var(--text)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'color 0.2s, border-color 0.2s',
                  whiteSpace: 'nowrap',
                  fontWeight: activeTab === i ? 600 : 400,
                  flexShrink: isMobile ? 0 : 1,
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
          {isMobile && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: '1px',
              width: '56px',
              background: 'linear-gradient(to right, transparent, var(--bg-card))',
              pointerEvents: 'none',
            }} />
          )}
        </div>

        {/* Dot indicators — mobile only */}
        {isMobile && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 0 6px',
          }}>
            {tabs.map((_, i) => (
              <div
                key={i}
                onClick={() => handleTab(i)}
                style={{
                  width: activeTab === i ? '18px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: activeTab === i ? 'var(--accent-blue)' : 'rgba(255,255,255,0.18)',
                  cursor: 'pointer',
                  transition: 'width 0.3s, background 0.3s',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        )}

        {/* Content panel — fixed height to prevent layout shift */}
        <div style={{
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderTop: 'none',
          borderRadius: '0 0 12px 12px',
          minHeight: '340px',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={tab.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '1.5rem' : '3rem',
                padding: isMobile ? '1.5rem' : '2.5rem',
                minHeight: '340px',
              }}
            >
              {/* Left: content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                  fontWeight: 800,
                  color: tab.color,
                  lineHeight: 1.1,
                  textShadow: `0 0 30px ${tab.color}33`,
                }}>
                  {tab.headline}
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  fontSize: '0.95rem',
                }}>
                  {tab.subtext}
                </p>
                {/* Metrics */}
                <div style={{ display: 'flex', gap: '2rem' }}>
                  {tab.metrics.map(m => (
                    <div key={m.label}>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.6rem',
                        color: tab.color,
                        fontWeight: 400,
                      }}>
                        {m.value}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        marginTop: '0.2rem',
                      }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: abstract visual (hidden on mobile to save space) */}
              {!isMobile && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    width: '100%',
                    maxWidth: '320px',
                    aspectRatio: '1',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {/* Abstract circular viz */}
                    <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                      {/* Outer ring */}
                      <circle cx="100" cy="100" r="90" fill="none" stroke={tab.color} strokeWidth="0.5" opacity="0.2" />
                      <circle cx="100" cy="100" r="70" fill="none" stroke={tab.color} strokeWidth="0.5" opacity="0.15" />
                      <circle cx="100" cy="100" r="50" fill="none" stroke={tab.color} strokeWidth="0.5" opacity="0.1" />
                      {/* Progress arc */}
                      <circle
                        cx="100" cy="100" r="90"
                        fill="none"
                        stroke={tab.color}
                        strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 90 * 0.78} ${2 * Math.PI * 90}`}
                        strokeLinecap="round"
                        transform="rotate(-90 100 100)"
                        opacity="0.8"
                      />
                      {/* Center stat */}
                      <text
                        x="100" y="96"
                        textAnchor="middle"
                        fill={tab.color}
                        fontSize="22"
                        fontFamily="IBM Plex Mono"
                        fontWeight="400"
                      >
                        {tab.stat.split(' ')[0]}
                      </text>
                      <text
                        x="100" y="116"
                        textAnchor="middle"
                        fill="#6b7a90"
                        fontSize="10"
                        fontFamily="Inter"
                      >
                        {tab.stat.split(' ').slice(1).join(' ')}
                      </text>
                      {/* Dots on ring */}
                      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                        const rad = (deg - 90) * Math.PI / 180
                        const x = 100 + 90 * Math.cos(rad)
                        const y = 100 + 90 * Math.sin(rad)
                        return (
                          <circle key={i} cx={x} cy={y} r="3" fill={tab.color} opacity={i === 0 ? 1 : 0.3} />
                        )
                      })}
                    </svg>
                    {/* Glow */}
                    <div style={{
                      position: 'absolute',
                      inset: '20%',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${tab.color}15 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }} />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .thread-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
