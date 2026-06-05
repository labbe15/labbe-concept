'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function PageIntro() {
  const pathname = usePathname()
  const [show, setShow] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (pathname !== '/') return
    if (sessionStorage.getItem('lc_intro')) return
    sessionStorage.setItem('lc_intro', '1')

    setShow(true)
    // Allow initial render at opacity 0 before triggering the transition
    const t0 = setTimeout(() => setFadeIn(true), 20)
    // Hold ends at 500 (fadeIn) + 800 (hold) = 1300ms
    const t1 = setTimeout(() => setLeaving(true), 1300)
    // Unmount at 1300 + 400 (fadeOut) = 1700ms
    const t2 = setTimeout(() => setShow(false), 1700)

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [pathname])

  if (!show) return null

  const opacity = leaving ? 0 : fadeIn ? 1 : 0
  const transform = leaving ? 'translateY(-20px)' : 'translateY(0)'
  const transition = leaving
    ? 'opacity 0.4s ease, transform 0.4s ease'
    : 'opacity 0.5s ease'

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: '#fef8e6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        opacity,
        transform,
        transition,
        pointerEvents: 'none',
      }}
    >
      <Image
        src="/logo.png"
        width={80}
        height={80}
        alt="Labbe Concept"
        className="object-contain"
        priority
      />
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <p style={{
          fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
          fontWeight: 700,
          fontSize: '18px',
          color: '#5a5c51',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}>
          LABBE CONCEPT
        </p>
        <p style={{
          fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
          fontStyle: 'italic',
          fontSize: '14px',
          color: '#c9924f',
        }}>
          Fermetures &amp; Aménagements
        </p>
      </div>
    </div>
  )
}
