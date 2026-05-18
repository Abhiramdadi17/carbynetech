import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight, BarChart2, Activity, Shield, Layers } from 'lucide-react'
import { useBreakpoint } from '../hooks/useBreakpoint'

const navLinks = ['Services', 'Products', 'Insights & Events', 'Culture', 'Careers']

const LOSS_URL = import.meta.env.VITE_LOSS_INTELLIGENCE_URL || 'http://localhost:5173'

const products = [
  {
    id: 1,
    name: 'OEE Monitor',
    desc: 'Live equipment effectiveness tracking with real-time downtime alerts across every production line.',
    tag: 'Production',
    color: '#00c2ff',
    Icon: BarChart2,
  },
  {
    id: 2,
    name: 'Loss Intelligence',
    desc: 'AI-driven root cause analysis that pinpoints every hidden source of factory loss instantly.',
    tag: 'Analytics',
    color: '#00ff88',
    Icon: Activity,
    href: LOSS_URL,
  },
  {
    id: 3,
    name: 'Quality AI',
    desc: 'Zero-escape defect detection and quality enforcement powered by machine vision and AI.',
    tag: 'Quality',
    color: '#a78bfa',
    Icon: Shield,
  },
  {
    id: 4,
    name: 'SFX9 Platform',
    desc: 'Complete paperless MES — OEE, quality, inventory, and maintenance unified into one live shop floor system.',
    tag: 'MES',
    color: '#f97316',
    Icon: Layers,
  },
]

/* ── Product visual panels ── */

function OEEVisual() {
  const bars = [
    { label: 'Availability', val: 94.2, color: '#00c2ff' },
    { label: 'Performance', val: 87.8, color: '#00ff88' },
    { label: 'Quality',      val: 99.1, color: '#fbbf24' },
  ]
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem 1.4rem' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.54rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Overall OEE</div>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3.2rem', fontWeight: 700, color: '#00c2ff', lineHeight: 1, marginBottom: '0.25rem' }}>82.5%</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#00ff88', marginBottom: '1.4rem' }}>▲ +3.2% vs last shift</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
        {bars.map(b => (
          <div key={b.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.22rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)' }}>{b.label}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: b.color }}>{b.val}%</span>
            </div>
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
              <motion.div initial={{ width: 0 }} animate={{ width: `${b.val}%` }} transition={{ duration: 0.7, delay: 0.1 }}
                style={{ height: '100%', background: b.color, borderRadius: '2px' }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {[['Line 1', true], ['Line 2', true], ['Line 3', false]].map(([l, up]) => (
          <span key={l} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', padding: '0.16rem 0.45rem', borderRadius: '4px', background: up ? 'rgba(0,255,136,0.08)' : 'rgba(255,75,75,0.1)', color: up ? '#00ff88' : '#ff4b4b', border: `1px solid ${up ? 'rgba(0,255,136,0.18)' : 'rgba(255,75,75,0.25)'}` }}>{l} · {up ? 'Running' : 'Down'}</span>
        ))}
      </div>
    </div>
  )
}

function LossVisual() {
  const losses = [
    { label: 'Machine Downtime', pct: 35, color: '#ff4b4b' },
    { label: 'Speed Loss',       pct: 22, color: '#fbbf24' },
    { label: 'Quality Defects',  pct: 18, color: '#f97316' },
    { label: 'Changeover',       pct: 14, color: '#a78bfa' },
    { label: 'Minor Stops',      pct: 11, color: '#00c2ff' },
  ]
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem 1.4rem' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.54rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Total Losses Today</div>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3.2rem', fontWeight: 700, color: '#00ff88', lineHeight: 1, marginBottom: '0.25rem' }}>₹4.2L</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#00ff88', marginBottom: '1.4rem' }}>▼ −18% vs yesterday</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        {losses.map((l, i) => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '7px', height: '7px', borderRadius: '2px', background: l.color, flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'rgba(255,255,255,0.45)', flex: 1 }}>{l.label}</span>
            <div style={{ flex: '0 0 80px', height: '4px', background: 'rgba(255,255,255,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
              <motion.div initial={{ width: 0 }} animate={{ width: `${l.pct * 2.57}%` }} transition={{ duration: 0.6, delay: i * 0.07 }}
                style={{ height: '100%', background: l.color, borderRadius: '2px' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: l.color, width: '26px', textAlign: 'right', flexShrink: 0 }}>{l.pct}%</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1rem', padding: '0.55rem 0.75rem', borderRadius: '7px', background: 'rgba(255,75,75,0.06)', border: '1px solid rgba(255,75,75,0.15)', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#ff4b4b' }}>
        ⚠ Root cause: Spindle bearing wear on CNC #3
      </div>
    </div>
  )
}

function QualityVisual() {
  const cells = Array.from({ length: 20 }, (_, i) => ({ pass: ![3, 11].includes(i), i }))
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem 1.4rem' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.54rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Defect Rate</div>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3.2rem', fontWeight: 700, color: '#a78bfa', lineHeight: 1, marginBottom: '0.25rem' }}>0.32%</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#00ff88', marginBottom: '1.4rem' }}>▼ −78% vs baseline</div>
      <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', overflow: 'hidden', background: 'rgba(255,255,255,0.02)', padding: '0.6rem', marginBottom: '0.75rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>INSPECTION FEED — LAST 20</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '3px' }}>
          {cells.map(({ pass, i }) => (
            <div key={i} style={{ aspectRatio: '1', borderRadius: '3px', background: pass ? 'rgba(167,139,250,0.12)' : 'rgba(255,75,75,0.25)', border: `1px solid ${pass ? 'rgba(167,139,250,0.15)' : 'rgba(255,75,75,0.5)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {!pass && <div style={{ width: '4px', height: '4px', borderRadius: '1px', background: '#ff4b4b', transform: 'rotate(45deg)' }} />}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {[['18/20', 'Passed', '#00ff88'], ['2/20', 'Flagged', '#ff4b4b'], ['0', 'Escapes', '#a78bfa']].map(([n, l, c]) => (
          <div key={l} style={{ flex: 1, padding: '0.45rem', borderRadius: '6px', background: `${c}0d`, border: `1px solid ${c}20`, textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: c }}>{n}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.3)' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SFX9Visual() {
  const pillars = [
    { label: 'Paperless Manufacturing', stat: '100%',  color: '#00c2ff' },
    { label: 'In-Process Quality',      stat: '−78%',  color: '#00ff88' },
    { label: 'OEE & Performance',       stat: '87.2%', color: '#00c2ff' },
    { label: 'Inventory & Traceability',stat: '100%',  color: '#00ff88' },
    { label: 'Maintenance & Reliability',stat: '+42%', color: '#f97316' },
  ]
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem 1.4rem' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.54rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>SFX9 Platform</div>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3.2rem', fontWeight: 700, color: '#f97316', lineHeight: 1, marginBottom: '0.25rem' }}>5-in-1</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#00ff88', marginBottom: '1.4rem' }}>✓ Full MES Suite</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.42rem', flex: 1 }}>
        {pillars.map((p, i) => (
          <motion.div key={p.label} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.42rem 0.65rem', borderRadius: '7px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'rgba(255,255,255,0.5)', flex: 1 }}>{p.label}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: p.color, fontWeight: 600 }}>{p.stat}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const visuals = { 1: OEEVisual, 2: LossVisual, 3: QualityVisual, 4: SFX9Visual }

/* ── Main Navbar ── */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(products[0])
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const { isMobile } = useBreakpoint()
  const productsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('main-nav')
      if (!nav) return
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(8,10,13,0.92)'
        nav.style.boxShadow = '0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 48px rgba(0,0,0,0.4)'
      } else {
        nav.style.background = 'rgba(8,10,13,0.75)'
        nav.style.boxShadow = '0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 40px rgba(0,0,0,0.3)'
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!productsOpen) return
    const handleClick = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [productsOpen])

  const edgeClamp = 'clamp(1rem, calc((100vw - 1280px) / 2 + 1rem), 7rem)'
  const Visual = visuals[activeProduct.id]

  return (
    <>
      <div
        ref={productsRef}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1002, pointerEvents: 'none' }}
      >
        {/* ── Navbar bar ── */}
        <nav id="main-nav" style={{
          position: 'absolute',
          top: '16px',
          left: isMobile ? '0.75rem' : edgeClamp,
          right: isMobile ? '0.75rem' : edgeClamp,
          pointerEvents: 'auto',
          background: 'rgba(8,10,13,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '0.5rem 1rem' : '0.6rem 1.5rem',
          gap: '1rem',
          boxSizing: 'border-box',
          boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 40px rgba(0,0,0,0.3)',
          transition: 'background 0.3s, box-shadow 0.3s',
        }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <img src="/newlogo.png" alt="Carbyne Tech" style={{ height: '60px', width: 'auto', objectFit: 'contain', display: 'block', borderRadius: '4px' }} />
          </a>

          {!isMobile && (
            <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.1rem', flex: 1, paddingRight: '1.5rem' }}>
              {navLinks.map(link =>
                link === 'Products' ? (
                  <button key={link} onClick={() => setProductsOpen(p => !p)} style={{
                    fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 500,
                    color: productsOpen ? '#ffffff' : 'rgba(255,255,255,0.65)',
                    background: productsOpen ? 'rgba(255,255,255,0.07)' : 'transparent',
                    border: 'none', padding: '0.45rem 1rem', borderRadius: '8px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '0.3rem',
                    transition: 'color 0.2s, background 0.2s', whiteSpace: 'nowrap',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
                    onMouseLeave={e => { if (!productsOpen) { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'transparent' } }}
                  >
                    Products
                    <ChevronDown size={13} style={{ transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.22s ease', opacity: 0.7 }} />
                  </button>
                ) : (
                  <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} style={{
                    fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 500,
                    color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
                    padding: '0.45rem 1rem', borderRadius: '8px',
                    transition: 'color 0.2s, background 0.2s', whiteSpace: 'nowrap',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'transparent' }}
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(p => !p)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', padding: '4px', zIndex: 1002, position: 'relative' }} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}

          {!isMobile && (
            <button className="desktop-cta" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 600, color: '#080a0d', background: '#00c2ff', border: 'none', borderRadius: '10px', padding: '0.5rem 1.1rem', cursor: 'pointer', flexShrink: 0, transition: 'background 0.2s, transform 0.15s', letterSpacing: '0.01em' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#00d4ff'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#00c2ff'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Contact Us
            </button>
          )}
        </nav>

        {/* ── Products dropdown ── */}
        <AnimatePresence>
          {productsOpen && !isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute',
                top: '100px',
                left: edgeClamp,
                right: edgeClamp,
                pointerEvents: 'auto',
                background: 'rgba(8,10,13,0.97)',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '18px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,194,255,0.05)',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <div style={{ padding: '1.25rem 1.5rem 0.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--accent-blue)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Product Suite</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>Manufacturing Intelligence Tools</div>
              </div>

              {/* Body: left list + right visual */}
              <div style={{ display: 'grid', gridTemplateColumns: '42% 1fr', minHeight: '380px' }}>

                {/* Left — product list */}
                <div style={{ padding: '0.75rem', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {products.map(p => {
                    const Icon = p.Icon
                    const active = activeProduct.id === p.id
                    return (
                      <div
                        key={p.id}
                        onMouseEnter={() => setActiveProduct(p)}
                        onClick={() => p.href && window.location.assign(p.href)}
                        style={{
                          display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                          padding: '0.85rem 1rem', borderRadius: '12px',
                          borderLeft: `2px solid ${active ? p.color : 'transparent'}`,
                          background: active ? `${p.color}0d` : 'transparent',
                          cursor: p.href ? 'pointer' : 'default',
                          transition: 'background 0.18s, border-left-color 0.18s',
                        }}
                      >
                        <div style={{
                          width: '36px', height: '36px', borderRadius: '9px', flexShrink: 0,
                          background: active ? `${p.color}18` : 'rgba(255,255,255,0.05)',
                          border: `1px solid ${active ? `${p.color}40` : 'rgba(255,255,255,0.08)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'background 0.18s, border-color 0.18s',
                          boxShadow: active ? `0 0 16px ${p.color}30` : 'none',
                        }}>
                          <Icon size={17} color={active ? p.color : 'rgba(255,255,255,0.35)'} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 600, color: active ? '#fff' : 'rgba(255,255,255,0.7)' }}>{p.name}</span>
                            {p.href && <ChevronRight size={13} color={p.color} style={{ opacity: active ? 1 : 0.45, transition: 'opacity 0.18s', flexShrink: 0 }} />}
                          </div>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.73rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.55, margin: '0 0 0.45rem' }}>{p.desc}</p>
                          <span style={{
                            fontFamily: 'var(--font-mono)', fontSize: '0.57rem', fontWeight: 500,
                            color: p.color, background: `${p.color}12`,
                            border: `1px solid ${p.color}28`, padding: '0.12rem 0.45rem',
                            borderRadius: '100px', letterSpacing: '0.07em', textTransform: 'uppercase',
                          }}>{p.tag}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Right — visual panel */}
                <div style={{ position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: `linear-gradient(${activeProduct.color}09 1px, transparent 1px), linear-gradient(90deg, ${activeProduct.color}09 1px, transparent 1px)`,
                    backgroundSize: '28px 28px',
                    transition: 'background-image 0.3s',
                  }} />
                  <div style={{
                    position: 'absolute', top: '-60px', right: '-60px',
                    width: '240px', height: '240px', borderRadius: '50%',
                    background: `radial-gradient(circle, ${activeProduct.color}18 0%, transparent 70%)`,
                    pointerEvents: 'none', transition: 'background 0.35s',
                  }} />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProduct.id}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                      style={{ position: 'relative', zIndex: 1, height: '100%' }}
                    >
                      <Visual />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer */}
              <div style={{ padding: '0.85rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.73rem', color: 'rgba(255,255,255,0.28)' }}>
                  All products integrate into a single unified platform
                </span>
                <button style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.73rem', fontWeight: 600,
                  color: 'var(--accent-blue)', background: 'rgba(0,194,255,0.07)',
                  border: '1px solid rgba(0,194,255,0.18)', borderRadius: '8px',
                  padding: '0.38rem 1rem', cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,194,255,0.13)'; e.currentTarget.style.borderColor = 'rgba(0,194,255,0.32)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,194,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(0,194,255,0.18)' }}
                >
                  View All Products →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{ position: 'fixed', inset: 0, zIndex: 1001, background: 'rgba(8,10,13,0.98)', backdropFilter: 'blur(20px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflowY: 'auto', paddingBottom: '2rem' }}
          >
            {navLinks.map(link =>
              link === 'Products' ? (
                <div key={link} style={{ width: '80%' }}>
                  <button onClick={() => setMobileProductsOpen(p => !p)} style={{
                    fontFamily: 'var(--font-ui)', fontSize: '1.3rem', fontWeight: 500,
                    color: 'var(--text)', background: 'none', border: 'none',
                    borderBottom: '1px solid var(--border)', cursor: 'pointer',
                    padding: '1.1rem 0', width: '100%', textAlign: 'center',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  }}>
                    Products
                    <ChevronDown size={16} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                  </button>
                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', padding: '0.75rem 0 1rem' }}>
                          {products.map(p => {
                            const Icon = p.Icon
                            return (
                              <div key={p.id} onClick={() => { if (p.href) { setMenuOpen(false); window.location.assign(p.href) } }} style={{ borderRadius: '10px', border: `1px solid ${p.href ? p.color + '30' : 'rgba(255,255,255,0.08)'}`, background: 'rgba(255,255,255,0.025)', padding: '0.85rem', cursor: p.href ? 'pointer' : 'default' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${p.color}18`, border: `1px solid ${p.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                                  <Icon size={16} color={p.color} />
                                </div>
                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem' }}>{p.name}</div>
                                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: p.href ? p.color : 'rgba(255,255,255,0.38)', lineHeight: 1.5 }}>{p.href ? '→ Open' : p.tag}</div>
                              </div>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-ui)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--text)', textDecoration: 'none', padding: '1.1rem 0', width: '80%', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
                  {link}
                </a>
              )
            )}
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{ marginTop: '2rem', fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 600, color: '#080a0d', background: 'var(--accent-blue)', padding: '0.75rem 2rem', borderRadius: '10px', textDecoration: 'none', width: '80%', textAlign: 'center' }}>
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          #main-nav { width: calc(100% - 1.5rem) !important; padding: 0.5rem 1rem !important; }
        }
      `}</style>
    </>
  )
}