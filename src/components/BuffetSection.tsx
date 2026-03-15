export default function BuffetSection() {
  const classics = [
    'Carapulcra', 'Seco Norteño', 'Ají de Pollo',
    'Cau Cau', 'Chanfainita', 'Olluquito', 'Pollo a la Brasa',
  ]

  return (
    <section id="buffet" className="relative py-20 bg-brown text-cream overflow-hidden">
      {/* Llama watermark — left side */}
      <img
        src="/llama2.png"
        alt=""
        aria-hidden="true"
        className="absolute -left-16 top-1/2 -translate-y-1/2 h-[90%] opacity-10 select-none pointer-events-none"
        style={{ filter: 'brightness(10)', transform: 'scaleX(-1)' }}
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
            S/. 38.90
          </span>
        </div>

        <p className="text-center text-cream/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Disfrute nuestra <strong className="text-amber-brand">Gran Mesa Mestiza</strong>, con una barra fresca
          de Ceviches, Causas y Entradas Criollas, seguida de nuestras tradicionales ollas de barro.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
          {classics.map(item => (
            <div
              key={item}
              className="bg-brown-dark/50 border border-amber-brand/30 rounded-xl px-4 py-3 text-center text-sm font-medium text-cream/90 hover:border-amber-brand hover:text-amber-brand transition-colors"
            >
              {item}
            </div>
          ))}
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
