import { useEffect, useState } from 'react'
import { WHATSAPP, asset } from '../links'

const navLinks = [
  { label: 'Buffet', href: '#buffet' },
  { label: 'Carta', href: '#carta' },
  { label: 'Barra', href: '#bebidas' },
  { label: 'Promos', href: '#promociones' },
  { label: 'After Office', href: '#after-office' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 transition-shadow"
      style={{
        background: 'var(--forest-deep)',
        borderBottom: '1px solid color-mix(in srgb, var(--copper) 35%, transparent)',
        boxShadow: scrolled ? '0 10px 30px -18px rgba(0,0,0,0.8)' : 'none',
      }}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] btn btn-lime"
      >
        Saltar al contenido
      </a>

      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0" aria-label="Mestizo Restobar — inicio">
          <img
            src={asset('MestizoNegativo.png')}
            alt="Mestizo Restobar"
            className="h-11 md:h-12 w-auto object-contain"
          />
          <span className="kicker hidden sm:inline" style={{ color: 'var(--copper-bright)' }}>
            Restobar
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Principal">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide transition-colors"
              style={{ color: 'var(--cream-text)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--lime-bright)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cream-text)')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-lime hidden sm:inline-flex !py-2 !px-5 !text-sm">
            Reservar
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full"
            style={{ color: 'var(--cream-text)', border: '1px solid rgba(245,240,228,0.25)' }}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-5 pb-5 flex flex-col gap-1" style={{ background: 'var(--forest-deep)' }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-semibold"
              style={{ color: 'var(--cream-text)', borderBottom: '1px solid rgba(245,240,228,0.1)' }}
            >
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-lime mt-3">
            Reservar por WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
