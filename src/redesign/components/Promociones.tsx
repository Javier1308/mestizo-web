import Reveal from './Reveal'
import { WHATSAPP } from '../links'

const promoTragos = [
  'Chilcanos Clásicos · Maracuyá y Frutos Rojos',
  'Tinto de Verano',
  'Piña Colada',
  'Cuba Libre',
  'Mojito',
  'Gin Tonic',
  'Screwdriver',
  'Clericot',
  'Sangría',
]

const otherPromos = [
  {
    title: 'Happy Hour',
    subtitle: 'Todos los días',
    price: '2 x 35',
    items: promoTragos,
    accent: 'var(--orange)',
  },
  {
    title: 'Mocktails',
    subtitle: 'Sin alcohol',
    price: '2 x 25',
    items: ['Esmeralda Oriental', 'Jamaica Beach', 'Susurro de Maracuyá', 'Piña Colada Virgen'],
    accent: 'var(--lime)',
  },
]

export default function Promociones() {
  return (
    <section id="promociones" className="relative overflow-hidden py-20 md:py-28" style={{ background: 'var(--forest-deep)' }}>
      <div className="absolute inset-0 rays opacity-70 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <Reveal>
          <p className="kicker mb-3 text-center" style={{ color: 'var(--lime-bright)' }}>Ofertas del momento</p>
          <h2 className="chicha text-6xl md:text-8xl text-center">Promociones</h2>
        </Reveal>

        {/* Barra Libre — hero promo */}
        <Reveal delay={80} className="mt-12">
          <div
            className="rounded-[1.75rem] overflow-hidden p-7 md:p-10"
            style={{ background: 'var(--forest)', border: '2px solid var(--lime)', boxShadow: '0 24px 60px -30px rgba(147,192,31,0.5)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="kicker" style={{ color: 'var(--copper-bright)' }}>Barra Libre · 6:00 p. m. a 12:00 a. m.</p>
                <h3 className="chicha text-5xl md:text-7xl mt-2">Bebe sin<br />límites</h3>
                <p className="mt-3 text-sm italic" style={{ color: 'var(--muted-cream)' }}>3 horas de tragos ilimitados.</p>
              </div>

              <div className="flex gap-3 items-stretch">
                <div className="rounded-2xl px-5 py-4 text-center flex flex-col justify-center" style={{ background: 'var(--forest-deep)' }}>
                  <p className="kicker text-[0.6rem]" style={{ color: 'var(--muted-cream)' }}>Lun · Mar · Mié</p>
                  <p className="display text-4xl mt-1" style={{ color: 'var(--lime-bright)' }}>49.90</p>
                </div>
                <div className="relative rounded-2xl px-5 py-4 text-center flex flex-col justify-center" style={{ background: 'var(--lime)' }}>
                  {/* Distintivo de promoción especial */}
                  <span
                    className="absolute -top-3 -right-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.6rem] font-extrabold uppercase tracking-wide rotate-6 shadow-lg"
                    style={{ background: 'var(--fucsia)', color: '#fff' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-3.5 h-3.5 shrink-0">
                      <path d="M6 2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3h2a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-2V4a2 2 0 0 0-2-2H6zm8 5h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2V7z" />
                    </svg>
                    Incluye Pilsen
                  </span>
                  <p className="kicker text-[0.6rem]" style={{ color: 'var(--ink)' }}>Jue · Vie · Sáb</p>
                  <p className="display text-4xl mt-1" style={{ color: 'var(--forest-deep)' }}>69.90</p>
                </div>
              </div>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {promoTragos.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted-cream)' }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--lime)' }} />
                  {item}
                </li>
              ))}
            </ul>

            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-lime mt-8">
              Reservar mi barra libre
            </a>
          </div>
        </Reveal>

        {/* Secondary promos */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {otherPromos.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="h-full rounded-[1.5rem] p-7" style={{ background: 'var(--forest)', border: `2px solid ${p.accent}` }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="display text-3xl" style={{ color: 'var(--cream-text)' }}>{p.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--muted-cream)' }}>{p.subtitle}</p>
                  </div>
                  <span className="display text-3xl rounded-full px-5 py-2" style={{ background: p.accent, color: 'var(--forest-deep)' }}>{p.price}</span>
                </div>
                <ul className="mt-5 space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted-cream)' }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
