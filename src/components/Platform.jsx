import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useBreakpoint } from '../hooks/useBreakpoint'

const pillars = [
  {
    num: '01',
    title: 'Paperless Manufacturing',
    desc: 'Remove every paper-based touchpoint. Real-time digital travellers, batch records, and work orders keep your plant audit-ready, always.',
    tags: ['BATCH RECORDS', 'DIGITAL TRAVELLERS', 'AUDIT TRAILS'],
    chart: 'paperless',
    stat: '100%',
    statLabel: 'Paperless Ops',
    bars: [55, 65, 45, 78, 68, 85, 95],
    color: '#00c2ff',
  },
  {
    num: '02',
    title: 'In-Process Quality',
    desc: 'Capture quality at the point of work, not after the fact. SFX9 flags deviations before they become defects, keeping your line and your compliance intact.',
    tags: ['INLINE INSPECTION', 'SPC CONTROL', 'DEVIATION ALERTS'],
    chart: 'quality',
    stat: '-78%',
    statLabel: 'Defect Reduction',
    bars: [88, 74, 62, 50, 38, 26, 14],
    color: '#00ff88',
  },
  {
    num: '03',
    title: 'OEE & Performance',
    desc: 'Live availability, performance, and quality scores for every asset, every shift. No spreadsheets, no delays — just clear numbers and clear actions.',
    tags: ['AVAILABILITY', 'PERFORMANCE', 'QUALITY OEE'],
    chart: 'oee',
    stat: '87.2%',
    statLabel: 'OEE Score',
    bars: [72, 75, 80, 82, 84, 85, 87],
    color: '#00c2ff',
  },
  {
    num: '04',
    title: 'Inventory & Traceability',
    desc: "Know exactly what you have, where it is, and where it's been. Full genealogy from raw material to finished good, traceable in seconds.",
    tags: ['MATERIAL TRACKING', 'GENEALOGY', 'WIP VISIBILITY'],
    chart: 'inventory',
    stat: '100%',
    statLabel: 'Traceability',
    bars: [60, 68, 74, 80, 88, 94, 100],
    color: '#00ff88',
  },
  {
    num: '05',
    title: 'Maintenance & Reliability',
    desc: 'Predict failures before they happen. SFX9 connects your assets to a living maintenance plan that reduces downtime and extends equipment life.',
    tags: ['PREDICTIVE PM', 'ASSET HEALTH', 'MTTR REDUCTION'],
    chart: 'maintenance',
    stat: '+42%',
    statLabel: 'MTBF Improvement',
    bars: [20, 25, 28, 32, 35, 39, 42],
    color: '#00c2ff',
  },
  {
    num: '06',
    title: 'Energy & Sustainability',
    desc: 'Monitor energy consumption line by line, shift by shift. Link usage to production output and build a measurable path to your sustainability targets.',
    tags: ['ENERGY MONITORING', 'CARBON TRACKING', 'SUSTAINABILITY KPIs'],
    chart: 'energy',
    stat: '-22%',
    statLabel: 'Energy per Unit',
    bars: [100, 94, 88, 83, 79, 76, 78],
    color: '#00ff88',
  },
]

function DashboardViz({ pillar }) {
  const { color, stat, statLabel, bars, tags, title } = pillar
  const maxBar = Math.max(...bars)

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            color: 'var(--text-muted)', letterSpacing: '0.18em', marginBottom: '4px',
          }}>
            SFX9 · LIVE DASHBOARD
          </div>
          <div style={{
            fontFamily: 'var(--font-heading)', fontSize: '1rem',
            color: 'var(--text)', fontWeight: 700,
          }}>
            {title}
          </div>
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          color: color, padding: '3px 10px',
          border: `1px solid ${color}44`, borderRadius: '4px',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: color, display: 'inline-block',
            animation: 'pulseGlow 2s infinite',
          }} />
          LIVE
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--border)' }} />

      {/* Big stat */}
      <div style={{ textAlign: 'center', padding: '0.5rem 0 0.25rem' }}>
        <motion.div
          key={stat}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(2.8rem, 4vw, 3.8rem)',
            fontWeight: 400,
            color: color,
            lineHeight: 1,
            textShadow: `0 0 40px ${color}44`,
            letterSpacing: '-0.02em',
          }}
        >
          {stat}
        </motion.div>
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: '0.78rem',
          color: 'var(--text-muted)', marginTop: '0.4rem',
        }}>
          {statLabel}
        </div>
      </div>

      {/* Bar chart */}
      <div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
          color: 'var(--text-muted)', marginBottom: '0.5rem',
          letterSpacing: '0.12em',
        }}>
          TREND — LAST 7 SHIFTS
        </div>
        <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-end', height: '64px' }}>
          {bars.map((h, i) => {
            const pct = (h / maxBar) * 100
            return (
              <motion.div
                key={`${pillar.num}-${i}`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
                style={{
                  flex: 1,
                  height: `${Math.max(6, pct)}%`,
                  background: i === bars.length - 1
                    ? color
                    : `linear-gradient(to top, ${color}cc, ${color}44)`,
                  borderRadius: '3px 3px 0 0',
                  transformOrigin: 'bottom',
                  boxShadow: i === bars.length - 1 ? `0 0 10px ${color}66` : 'none',
                }}
              />
            )
          })}
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', marginTop: '5px',
        }}>
          {['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'].map(s => (
            <span key={s} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
              color: 'rgba(107,122,144,0.6)',
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: 'auto' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
            padding: '3px 8px',
            border: `1px solid ${color}30`,
            borderRadius: '3px',
            color: color,
            background: `${color}0a`,
            letterSpacing: '0.06em',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Platform() {
  const [activePillar, setActivePillar] = useState(0)
  const [clickedPillar, setClickedPillar] = useState(null)
  const clickTimeoutRef = useRef(null)
  const sectionRef = useRef(null)
  const { ref: inViewRef, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const { isMobile } = useBreakpoint()

  const LEFT_PAD = 'clamp(1rem, calc((100vw - 1280px) / 2 + 2rem), 8rem)'

  useEffect(() => {
    return () => clearTimeout(clickTimeoutRef.current)
  }, [])

  const displayedPillar = clickedPillar !== null ? clickedPillar : activePillar

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  // Map 0-1 scroll progress to 0-5 index
  const activePillarIndex = useTransform(scrollYProgress,
    [0, 0.10, 0.26, 0.42, 0.58, 0.74, 0.90, 1.0],
    [0, 0, 1, 2, 3, 4, 5, 5]
  )

  // Calculate exact scroll distance needed to reveal all pillars
  const PILLAR_ROW_HEIGHT = 90
  const ACTIVE_ROW_EXTRA = 120
  const totalListHeight = pillars.length * PILLAR_ROW_HEIGHT + ACTIVE_ROW_EXTRA
  const visibleHeight = typeof window !== 'undefined' ? window.innerHeight * 0.7 : 600
  const maxShift = Math.max(0, totalListHeight - visibleHeight)

  const leftY = useTransform(scrollYProgress, [0, 1], [0, -maxShift])

  useMotionValueEvent(activePillarIndex, "change", (v) => {
    setActivePillar(Math.round(v))
  })

  const handlePillarClick = (index) => {
    setClickedPillar(index)
    clearTimeout(clickTimeoutRef.current)
    clickTimeoutRef.current = setTimeout(() => {
      setClickedPillar(null)
    }, 3000)
  }

  // ── SINGLE RETURN — sectionRef always attached so useScroll always tracks ──
  // Desktop: minHeight 750vh + sticky grid (unchanged logic)
  // Mobile: compact accordion, no sticky scroll
  return (
    <section
      id="platform"
      ref={sectionRef}
      style={isMobile ? {
        background: 'var(--bg)',
        padding: '4rem 1.25rem',
        position: 'relative',
      } : {
        background: 'var(--bg)',
        position: 'relative',
        minHeight: '750vh',
        paddingBottom: 0,
        marginBottom: 0,
      }}
    >
      {isMobile ? (
        // ── MOBILE ACCORDION ──
        <>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-label">— PLATFORM</div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 6vw, 2.4rem)',
              fontWeight: 800,
              color: 'var(--text)',
              lineHeight: 1.1,
              marginBottom: '0.75rem',
            }}>
              Six pillars of SFX9 intelligence
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              lineHeight: 1.6,
            }}>
              Every module is purpose-built to eliminate waste, enforce standards,
              and surface insights that drive competitive advantage.
            </p>
          </div>

          {pillars.map((pillar, i) => (
            <div
              key={i}
              onClick={() => setActivePillar(i)}
              style={{
                borderBottom: '1px solid var(--border)',
                borderLeft: i === activePillar
                  ? '3px solid var(--accent-blue)'
                  : '3px solid transparent',
                padding: '1.25rem 1rem',
                cursor: 'pointer',
                transition: 'border-left-color 0.3s',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: i === activePillar ? 'var(--accent-blue)' : 'var(--text-muted)',
                marginBottom: '0.3rem',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 700,
                color: i === activePillar ? 'var(--text)' : 'var(--text-muted)',
                margin: 0,
              }}>
                {pillar.title}
              </h3>

              <AnimatePresence>
                {i === activePillar && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                      margin: '0.75rem 0',
                    }}>
                      {pillar.desc}
                    </p>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                      {pillar.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      marginBottom: '0.5rem',
                    }}>
                      <DashboardViz pillar={pillar} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </>
      ) : (
        // ── DESKTOP STICKY SCROLL — entirely unchanged from original ──
        <>
          {/* ── HEADER ── */}
          <div style={{
            paddingTop: '5rem',
            paddingBottom: '2.5rem',
            paddingLeft: LEFT_PAD,
            paddingRight: '2rem',
            position: 'relative',
            zIndex: 1,
          }}>
            <motion.div
              ref={inViewRef}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="section-label">— PLATFORM</div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text)',
                marginBottom: '0.75rem',
                lineHeight: 1.1,
                maxWidth: '600px',
              }}>
                Six pillars of SFX9 intelligence
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                maxWidth: '480px',
                marginBottom: '0',
              }}>
                Every module is purpose-built to eliminate waste, enforce standards, and surface insights that drive competitive advantage.
              </p>
            </motion.div>
          </div>

          {/* ── STICKY GRID — starts at top: 64px ── */}
          <div style={{
            position: 'sticky',
            top: '64px',
            height: 'calc(100vh - 64px)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxSizing: 'border-box',
          }}>
            <div className="platform-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(380px, 1fr)',
              flex: 1,
              minHeight: 0,
              overflow: 'visible',
              alignItems: 'start',
            }}>
              {/* Wrapper to clip the scrolling left column */}
              <div style={{ overflow: 'hidden', position: 'relative', height: '100%' }}>
                {/* LEFT — shifted using scroll progress */}
                <motion.div
                  className="platform-left"
                  style={{
                    height: 'auto',
                    alignSelf: 'stretch',
                    paddingTop: '1.5rem',
                    paddingBottom: '10vh',
                    paddingLeft: LEFT_PAD,
                    paddingRight: '2rem',
                    y: leftY,
                  }}
                >
                  {pillars.map((pillar, i) => {
                    const isActive = displayedPillar === i
                    return (
                      <div
                        key={pillar.num}
                        onClick={() => handlePillarClick(i)}
                        style={{
                          padding: '1rem 0 1rem 1.25rem',
                          borderBottom: '1px solid var(--border)',
                          borderLeft: `3px solid ${isActive ? 'var(--accent-blue)' : 'transparent'}`,
                          cursor: 'pointer',
                          transition: 'border-left-color 0.35s ease',
                        }}
                      >
                        {/* Number */}
                        <div style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          letterSpacing: '0.12em',
                          color: isActive ? 'var(--accent-blue)' : 'var(--text-muted)',
                          marginBottom: '0.4rem',
                          transition: 'color 0.3s',
                        }}>
                          {pillar.num}
                        </div>

                        {/* Title */}
                        <h3 style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                          fontWeight: 700,
                          color: isActive ? 'var(--text)' : 'var(--text-muted)',
                          marginBottom: '0.4rem',
                          transition: 'color 0.3s',
                          lineHeight: 1.2,
                        }}>
                          {pillar.title}
                        </h3>

                        {/* Description */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.6,
                                marginBottom: '0.8rem',
                                maxWidth: '460px',
                                overflow: 'hidden',
                              }}
                            >
                              {pillar.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>

                        {/* Tags */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', overflow: 'hidden' }}
                            >
                              {pillar.tags.map(tag => (
                                <span
                                  key={tag}
                                  className="tag"
                                  style={{
                                    borderColor: 'rgba(0,194,255,0.35)',
                                    color: 'var(--accent-blue)',
                                    background: 'rgba(0,194,255,0.06)',
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </motion.div>
              </div>

              {/* RIGHT — sticky dashboard viz */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',     // ← start, not center
                justifyContent: 'center',
                padding: '1rem 2rem 2rem 1rem',
                overflow: 'visible',
                minWidth: 0,
                background: 'linear-gradient(135deg, var(--bg) 0%, rgba(15,18,24,0.8) 100%)',
                position: 'sticky',
                top: '64px',                  // ← navbar height
              }}>
                <div style={{
                  width: '100%',
                  maxWidth: '460px',
                  minWidth: '320px',
                  minHeight: '480px',
                  boxSizing: 'border-box',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  boxShadow: '0 0 60px rgba(0,194,255,0.07), 0 0 120px rgba(0,194,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  {/* Top accent line */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: '20%', right: '20%', height: '1px',
                    background: `linear-gradient(90deg, transparent, ${pillars[displayedPillar].color}66, transparent)`,
                  }} />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={displayedPillar}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                      style={{ height: '100%' }}
                    >
                      <DashboardViz pillar={pillars[displayedPillar]} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        .platform-left::-webkit-scrollbar { display: none; }
        @keyframes pulseGlow {
          0%, 100% { opacity: 1; box-shadow: 0 0 4px currentColor; }
          50% { opacity: 0.5; box-shadow: none; }
        }
        @media (max-width: 900px) {
          #platform .sticky-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
