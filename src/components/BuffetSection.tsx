import { useEffect, useState } from 'react'

const platos = [
  { nombre: 'Ají de Gallina',            img: '/AjiGallina.jpeg' },
  { nombre: 'Carapulcra con Sopa Seca',  img: '/CarapulcraSopaseca.jpeg' },
  { nombre: 'Cau Cau',                   img: '/CauCau.jpeg' },
  { nombre: 'Chanfainita',               img: '/Chanfainita.jpeg' },
  { nombre: 'Lomo Saltado',              img: '/LomoSaltado.jpeg' },
  { nombre: 'Olluquito con Carapulcra',  img: '/OlluquitoCarapulcra.jpeg' },
  { nombre: 'Papa a la Huancaína',       img: '/PapaHuancaina.jpeg' },
  { nombre: 'Seco con Frejoles',         img: '/SecoFrejoles.jpeg' },
]

export default function BuffetSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % platos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="buffet" className="relative py-20 bg-brown text-cream overflow-hidden">
      {/* Llama watermark — left side */}
      <img
        src="/llama2.png"
        alt=""
        aria-hidden="true"
        className="absolute -left-16 top-1/2 -translate-y-1/2 h-[90%] opacity-10 select-none pointer-events-none"
        style={{ filter: 'brightness(10)', transform: 'scaleX(-1) translateY(-50%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <p className="text-amber-brand text-sm tracking-[0.3em] uppercase font-medium text-center mb-3">
          Experiencia Ilimitada
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-center mb-4 uppercase tracking-wide">
          Buffet Criollo
        </h2>

        <div className="flex justify-center mb-8">
          <span className="bg-amber-brand text-brown-dark font-bold text-3xl px-8 py-3 rounded-full">
            S/ 38.90
          </span>
        </div>

        <p className="text-center text-cream/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Disfrute nuestra <strong className="text-amber-brand">Gran Mesa Mestiza</strong>, con una barra fresca
          de Ceviches, Causas y Entradas Criollas, seguida de nuestras tradicionales ollas de barro.
        </p>

        {/* Carrusel */}
        <div className="relative w-full max-w-2xl mx-auto mb-8">
          {/* Imagen */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-brown-dark shadow-2xl">
            {platos.map((plato, i) => (
              <div
                key={plato.nombre}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <img
                  src={plato.img}
                  alt={plato.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Flecha izquierda */}
            <button
              onClick={() => setCurrent(prev => (prev - 1 + platos.length) % platos.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
              aria-label="Plato anterior"
            >
              &#8592;
            </button>

            {/* Flecha derecha */}
            <button
              onClick={() => setCurrent(prev => (prev + 1) % platos.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
              aria-label="Plato siguiente"
            >
              &#8594;
            </button>
          </div>

          {/* Título independiente */}
          <div className="bg-brown-dark border border-amber-brand/40 rounded-xl px-6 py-3 mt-3 text-center">
            <h3 className="text-amber-brand font-display text-xl font-bold tracking-wide">
              {platos[current].nombre}
            </h3>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-3">
            {platos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{ background: i === current ? 'var(--color-amber-brand, #D4A017)' : 'rgba(255,255,255,0.3)' }}
                aria-label={`Ver ${platos[i].nombre}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center border-t border-cream/20 pt-6">
          <p className="text-cream/60 text-sm italic">
            * Incluye mesa de postres tradicionales:
            <span className="text-amber-brand font-medium"> Mazamorra Morada</span> y
            <span className="text-amber-brand font-medium"> Arroz con Leche</span>
          </p>
        </div>
      </div>
    </section>
  )
}
