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

    // Block scroll and mark html while intro is active
    document.documentElement.classList.add('intro-active')

    setShow(true)
    const t0 = setTimeout(() => setFadeIn(true), 20)
    const t1 = setTimeout(() => setLeaving(true), 1300)
    const t2 = setTimeout(() => {
      setShow(false)
      document.documentElement.classList.remove('intro-active')
    }, 1700)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
      document.documentElement.classList.remove('intro-active')
    }
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
        zIndex: 9999,
        backgroundColor: '#fef8e6',
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
        width={100}
        height={100}
        alt="Labbe Concept"
        className="object-contain"
        priority
        unoptimized
      />
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{
          fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
          fontWeight: 700,
          fontSize: '28px',
          color: '#5a5c51',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}>
          LABBE CONCEPT
        </p>
        <p style={{
          fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
          fontStyle: 'italic',
          fontSize: '16px',
          color: '#c9924f',
          lineHeight: 1,
        }}>
          Fermetures &amp; Aménagements
        </p>
      </div>
    </div>
  )
}
