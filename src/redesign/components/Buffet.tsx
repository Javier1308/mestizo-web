import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { WHATSAPP, asset } from '../links'

const platos = [
  { nombre: 'Ají de Gallina', img: 'AjiGallina.jpeg' },
  { nombre: 'Carapulcra con Sopa Seca', img: 'CarapulcraSopaseca.jpeg' },
  { nombre: 'Cau Cau', img: 'CauCau.jpeg' },
  { nombre: 'Chanfainita', img: 'Chanfainita.jpeg' },
  { nombre: 'Olluquito con Carapulcra', img: 'OlluquitoCarapulcra.jpeg' },
  { nombre: 'Papa a la Huancaína', img: 'PapaHuancaina.jpeg' },
  { nombre: 'Seco con Frejoles', img: 'SecoFrejoles.jpeg' },
]

export default function Buffet() {
  const [current, setCurrent] = useState(0)
  const [auto, setAuto] = useState(true)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!auto) return
    timer.current = setInterval(() => setCurrent((p) => (p + 1) % platos.length), 3200)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [auto])

  const go = (i: number) => { setAuto(false); setCurrent((i + platos.length) % platos.length) }

  return (
    <section id="buffet" className="relative overflow-hidden py-20 md:py-28" style={{ background: 'var(--forest)' }}>
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy side */}
          <Reveal>
            <p className="kicker mb-4" style={{ color: 'var(--copper-bright)' }}>Experiencia ilimitada</p>
            <h2 className="display text-6xl md:text-8xl" style={{ color: 'var(--cream-text)' }}>
              Buffet<br />
              <span style={{ color: 'var(--lime)', textShadow: '3px 3px 0 var(--forest-deep)' }}>Criollo</span>
            </h2>

            <div className="mt-6 flex items-center gap-4">
              <span className="btn btn-lime !cursor-default text-lg">38.90</span>
              <span className="text-sm" style={{ color: 'var(--muted-cream)' }}>por persona</span>
            </div>

            <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: 'var(--muted-cream)' }}>
              Disfruta nuestra <strong style={{ color: 'var(--lime-bright)' }}>Gran Mesa Mestiza</strong>: una barra
              fresca de ceviches, causas y entradas criollas, seguida de nuestras tradicionales ollas de barro.
            </p>

            <p className="mt-4 text-sm italic" style={{ color: 'var(--muted-cream)' }}>
              Incluye mesa de postres:{' '}
              <span style={{ color: 'var(--lime-bright)' }}>Mazamorra Morada</span> y{' '}
              <span style={{ color: 'var(--lime-bright)' }}>Arroz con Leche</span>.
            </p>

            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-lime mt-8">
              Reserva tu mesa
            </a>
          </Reveal>

          {/* Carousel side */}
          <Reveal delay={120}>
            <div className="relative">
              <div
                className="relative overflow-hidden rounded-[1.75rem] aspect-[4/3] shadow-2xl"
                style={{ background: 'var(--forest-deep)', border: '1px solid color-mix(in srgb, var(--copper) 40%, transparent)' }}
              >
                {platos.map((p, i) => (
                  <img
                    key={p.nombre}
                    src={asset(p.img)}
                    alt={`${p.nombre} — plato del buffet criollo de Mestizo`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: i === current ? 1 : 0 }}
                    loading="lazy"
                  />
                ))}
                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5" style={{ background: 'linear-gradient(0deg, rgba(30,42,38,0.92), transparent)' }}>
                  <h3 className="display text-2xl md:text-3xl" style={{ color: 'var(--cream-text)' }}>
                    {platos[current].nombre}
                  </h3>
                </div>

                {/* Arrows */}
                <button
                  onClick={() => go(current - 1)}
                  aria-label="Plato anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(30,42,38,0.7)', color: 'var(--lime-bright)', border: '1px solid rgba(169,217,46,0.4)' }}
                >
                  ‹
                </button>
                <button
                  onClick={() => go(current + 1)}
                  aria-label="Plato siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(30,42,38,0.7)', color: 'var(--lime-bright)', border: '1px solid rgba(169,217,46,0.4)' }}
                >
                  ›
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {platos.map((p, i) => (
                  <button
                    key={p.nombre}
                    onClick={() => go(i)}
                    aria-label={`Ver ${p.nombre}`}
                    aria-current={i === current}
                    className="h-2.5 rounded-full transition-all"
                    style={{
                      width: i === current ? '1.6rem' : '0.625rem',
                      background: i === current ? 'var(--lime)' : 'rgba(245,240,228,0.3)',
                    }}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
