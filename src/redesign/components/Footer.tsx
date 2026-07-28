import { WHATSAPP, INSTAGRAM, LINKTREE, asset } from '../links'

export default function Footer() {
  return (
    <footer className="py-12 text-center" style={{ background: 'var(--forest-deep)' }}>
      <div className="max-w-4xl mx-auto px-5">
        <img src={asset('MestizoNegativo.png')} alt="Mestizo Restobar" className="h-16 w-auto object-contain mx-auto" />
        <p className="kicker mt-3" style={{ color: 'var(--copper-bright)' }}>Restobar · San Isidro</p>

        <div className="mt-6 flex justify-center flex-wrap gap-x-7 gap-y-2 text-sm font-semibold">
          {[
            { label: 'Instagram', href: INSTAGRAM },
            { label: 'WhatsApp', href: WHATSAPP },
            { label: 'Linktree', href: LINKTREE },
            { label: 'Carta', href: '#carta' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('#') ? undefined : '_blank'}
              rel={l.href.startsWith('#') ? undefined : 'noopener noreferrer'}
              className="transition-colors"
              style={{ color: 'var(--muted-cream)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--lime-bright)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-cream)')}
            >
              {l.label}
            </a>
          ))}
        </div>

        <p className="mt-7 text-xs" style={{ color: 'color-mix(in srgb, var(--cream-text) 40%, transparent)' }}>
          © {new Date().getFullYear()} Mestizo · Restobar. Todos los derechos reservados. · Momentos que se disfrutan.
        </p>
      </div>
    </footer>
  )
}
