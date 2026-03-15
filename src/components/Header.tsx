import { useState } from 'react'

const navLinks = [
  { label: 'Buffet', href: '#buffet' },
  { label: 'Carta', href: '#carta' },
  { label: 'Bebidas', href: '#bebidas' },
  { label: 'Promociones', href: '#promociones' },
  { label: 'After Office', href: '#after-office' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brown shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/Llama1.jpeg" alt="Mestizo llama" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-white font-display font-bold text-2xl tracking-widest uppercase">
            Me<span className="text-amber-brand">s</span>tizo
          </span>
          <span className="text-cream text-xs font-light tracking-widest hidden sm:block">| Barra Criolla</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream hover:text-amber-brand transition-colors text-sm font-medium tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.link/53taq2"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-amber-brand text-brown-dark font-semibold text-sm px-4 py-2 rounded-full hover:bg-amber-light transition-colors"
        >
          Reservar
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brown-dark px-4 pb-4 flex flex-col gap-3">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream hover:text-amber-brand text-sm font-medium py-1 border-b border-brown"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.link/53taq2"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center bg-amber-brand text-brown-dark font-semibold text-sm px-4 py-2 rounded-full"
          >
            Reservar por WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
