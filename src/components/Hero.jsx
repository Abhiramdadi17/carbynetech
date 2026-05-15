import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

const stats = [
  { label: '18 Countries', icon: '🌍' },
  { label: '100% Runtime', icon: '⚡' },
  { label: '05 Live OEE', icon: '📊' },
  { label: 'Live P&L', icon: '💹' },
  { label: '-78% Defect Rate', icon: '✅' },
]

export default function Hero() {
  const canvasRef = useRef(null)

  // Animated particle dot field
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach(d => {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 194, 255, ${d.opacity})`
        ctx.fill()
      })
      // Draw connections
      dots.forEach((d1, i) => {
        dots.slice(i + 1).forEach(d2 => {
          const dist = Math.hypot(d1.x - d2.x, d1.y - d2.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(d1.x, d1.y)
            ctx.lineTo(d2.x, d2.y)
            ctx.strokeStyle = `rgba(0, 194, 255, ${0.07 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--bg)',
      padding: '0',
      textAlign: 'left',
    }}>
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80vw',
        height: '60vh',
        background: 'radial-gradient(ellipse, rgba(0,194,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: 'none',
        margin: '0',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        paddingLeft: 'clamp(1rem, calc((100vw - 1280px) / 2 + 1rem), 7rem)',
        paddingRight: '2rem',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent-blue)',
              boxShadow: '0 0 8px var(--accent-blue)',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              color: 'var(--accent-blue)',
              textTransform: 'uppercase',
            }}>
              Manufacturing Intelligence Platform
            </span>
          </div>

          {/* Main headline */}
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3.5rem, 6vw, 6.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '1.5rem',
          }}>
            The intelligent{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00c2ff, #00ff88)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}><br />
              shop floor
            </span>
            {' '}platform
          </h1>

          {/* Subtext */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'var(--text-muted)',
            maxWidth: '620px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}>
            Unifies your entire production floor into one real-time intelligence layer — eliminating paper, enforcing quality at every step, connecting people, machines, and data.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <a href="#cta" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.8rem 1.8rem' }}>
              Book a Demo <ArrowRight size={16} />
            </a>
            <a href="#platform" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.8rem 1.8rem' }}>
              Explore Platform
            </a>
          </div>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.1rem',
                background: 'rgba(15,18,24,0.8)',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                cursor: 'default',
              }}
              whileHover={{
                borderColor: 'rgba(0,194,255,0.3)',
                boxShadow: '0 0 20px rgba(0,194,255,0.1)',
              }}
            >
              <Zap size={12} color="var(--accent-blue)" />
              <span style={{
                fontFamily: 'var(--font-ui)',
                fontWeight: 500,
                fontSize: '0.75rem',
                color: 'var(--text)',
                letterSpacing: '0.03em',
              }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to bottom, transparent, var(--bg))',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
