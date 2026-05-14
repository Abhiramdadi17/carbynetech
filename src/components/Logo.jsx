import React from 'react'

export default function Logo({ size = 'md', showMark = true }) {
  const sizes = {
    sm: { mark: 22, wordmark: 'carbyne', sub: 'tech', fontSz: '1rem', subSz: '0.9rem' },
    md: { mark: 28, wordmark: 'carbyne', sub: 'tech', fontSz: '1.25rem', subSz: '1.1rem' },
    lg: { mark: 36, wordmark: 'carbyne', sub: 'tech', fontSz: '1.6rem', subSz: '1.4rem' },
  }
  const s = sizes[size]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', userSelect: 'none' }}>
      {showMark && (
        <svg width={s.mark} height={s.mark} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hexagon mark */}
          <polygon
            points="16,2 28,9 28,23 16,30 4,23 4,9"
            stroke="#00c2ff"
            strokeWidth="1.5"
            fill="none"
            opacity="0.9"
          />
          {/* Inner circuit node */}
          <circle cx="16" cy="16" r="3" fill="#00c2ff" opacity="0.9" />
          <line x1="16" y1="13" x2="16" y2="9" stroke="#00c2ff" strokeWidth="1" opacity="0.6" />
          <line x1="18.6" y1="14.5" x2="22" y2="12.5" stroke="#00c2ff" strokeWidth="1" opacity="0.6" />
          <line x1="18.6" y1="17.5" x2="22" y2="19.5" stroke="#00c2ff" strokeWidth="1" opacity="0.6" />
          <line x1="16" y1="19" x2="16" y2="23" stroke="#00c2ff" strokeWidth="1" opacity="0.6" />
          <line x1="13.4" y1="17.5" x2="10" y2="19.5" stroke="#00c2ff" strokeWidth="1" opacity="0.6" />
          <line x1="13.4" y1="14.5" x2="10" y2="12.5" stroke="#00c2ff" strokeWidth="1" opacity="0.6" />
          {/* Corner dots */}
          <circle cx="16" cy="9" r="1.2" fill="#00c2ff" opacity="0.5" />
          <circle cx="22" cy="12.5" r="1.2" fill="#00c2ff" opacity="0.5" />
          <circle cx="22" cy="19.5" r="1.2" fill="#00c2ff" opacity="0.5" />
          <circle cx="16" cy="23" r="1.2" fill="#00c2ff" opacity="0.5" />
          <circle cx="10" cy="19.5" r="1.2" fill="#00c2ff" opacity="0.5" />
          <circle cx="10" cy="12.5" r="1.2" fill="#00c2ff" opacity="0.5" />
        </svg>
      )}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1px' }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: s.fontSz,
          fontWeight: 800,
          color: '#f0f4f8',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}>
          carbyne
        </span>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: s.subSz,
          fontWeight: 400,
          color: '#6b7a90',
          letterSpacing: '0.01em',
          lineHeight: 1,
        }}>
          tech
        </span>
      </div>
    </div>
  )
}
