import { WHATSAPP, asset } from '../links'

const proof = [
  { k: 'Buffet Criollo', v: '38.90' },
  { k: 'Barra Libre', v: '3 h ilimitadas' },
  { k: 'After Office', v: 'Lun — Sáb' },
]

export default function Hero() {
  return (
    <section id="contenido" className="relative overflow-hidden" style={{ background: 'var(--forest)' }}>
      {/* Set-table photograph */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${asset('mesa-mestiza-hero.png')}')` }}
        aria-hidden="true"
      />
      {/* Forest wash for legibility + identity */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(30,42,38,0.72) 0%, rgba(30,42,38,0.55) 38%, rgba(30,42,38,0.9) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-16 pb-12 md:pt-24 md:pb-16 min-h-[92vh] flex flex-col justify-center">
        <p className="kicker mb-5" style={{ color: 'var(--lime-bright)' }}>
          Restobar · Cocina Criolla · San Isidro
        </p>

        <h1 className="leading-none">
          <img
            src={asset('MestizoNegativo.png')}
            alt="Mestizo Restobar"
            className="w-full max-w-[14rem] md:max-w-md object-contain -ml-1 drop-shadow-2xl"
          />
        </h1>

        <p
          className="mt-6 md:mt-8 max-w-2xl text-xl md:text-3xl font-semibold"
          style={{ color: 'var(--cream-text)' }}
        >
          La cocina de nuestras abuelas y la barra de la noche, en una sola mesa.{' '}
          <span style={{ color: 'var(--lime-bright)' }}>Momentos que se disfrutan.</span>
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-lime text-base">
            Reservar por WhatsApp
          </a>
          <a href="#carta" className="btn btn-outline text-base">
            Ver la Carta
          </a>
        </div>

        {/* Proof ticker */}
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          {proof.map((p, i) => (
            <div key={p.k} className="flex items-center gap-8">
              <div>
                <p className="kicker" style={{ color: 'var(--copper-bright)' }}>{p.k}</p>
                <p className="display text-2xl md:text-3xl mt-1" style={{ color: 'var(--cream-text)' }}>{p.v}</p>
              </div>
              {i < proof.length - 1 && (
                <span className="hidden sm:block h-9 w-px" style={{ background: 'color-mix(in srgb, var(--copper) 55%, transparent)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#buffet"
        aria-label="Bajar a Buffet Criollo"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        style={{ color: 'var(--lime-bright)' }}
      >
        <svg className="w-7 h-7 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
