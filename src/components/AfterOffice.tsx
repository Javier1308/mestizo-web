export default function AfterOffice() {
  return (
    <section id="after-office" className="relative overflow-hidden">
      {/* Background — AfterOffice1 con overlay oscuro */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/AfterOffice1.jpeg')" }}
      />
      <div className="absolute inset-0 bg-brown-dark/80" />

      {/* Llama watermark — right */}
      <img
        src="/llama2.png"
        alt=""
        aria-hidden="true"
        className="absolute -right-16 top-1/2 -translate-y-1/2 h-[90%] opacity-10 select-none pointer-events-none"
        style={{ filter: 'brightness(10)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Text side */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-amber-brand text-sm tracking-[0.3em] uppercase font-medium mb-3">
              De miércoles a sábado
            </p>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white uppercase mb-6 leading-tight">
              After<br />Office
            </h2>
            <p className="text-cream/85 text-lg leading-relaxed mb-8 max-w-lg">
              Después del trabajo, es momento de relajarse. Disfruta nuestro After Office con buena música,
              tragos y el ambiente perfecto para compartir y cerrar el día de la mejor manera.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
              {['Buena música', 'Tragos artesanales', 'Ambiente íntimo', 'Happy Hour'].map(tag => (
                <span
                  key={tag}
                  className="border border-amber-brand/60 text-amber-brand text-xs font-semibold px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://wa.link/53taq2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-brand text-brown-dark font-bold px-8 py-3 rounded-full hover:bg-amber-light transition-colors"
            >
              Reserva tu lugar
            </a>
          </div>

          {/* Image side — AfterOffice2 */}
          <div className="w-full md:w-72 shrink-0">
            <img
              src="/AfterOffice2.jpeg"
              alt="After Office en Mestizo"
              className="w-full rounded-3xl shadow-2xl object-cover"
              style={{ maxHeight: '480px', objectPosition: 'center top' }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
