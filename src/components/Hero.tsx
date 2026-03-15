export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/fachada.jpeg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brown-dark/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto w-full">
        <h1 className="font-display font-extrabold text-7xl md:text-9xl text-white tracking-widest uppercase leading-none drop-shadow-lg mb-2">
          Me<span className="text-amber-brand">s</span>tizo
        </h1>
        <p className="text-cream text-sm md:text-base tracking-[0.4em] uppercase font-light mt-1 drop-shadow">
          Barra Criolla · San Isidro
        </p>

        <p className="text-cream/90 text-xl md:text-2xl font-display italic mt-8 mb-10 leading-relaxed drop-shadow">
          "Una experiencia ilimitada que honra<br className="hidden sm:block" /> la cocina de nuestras abuelas."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#carta" className="bg-amber-brand text-brown-dark font-semibold px-8 py-3 rounded-full text-base hover:bg-amber-light transition-colors">
            Ver Carta
          </a>
          <a href="#buffet" className="border-2 border-cream text-cream font-semibold px-8 py-3 rounded-full text-base hover:bg-cream hover:text-brown transition-colors">
            Buffet Criollo
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-cream/80 text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Mariano de los Santos 192, San Isidro
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Lunes a Sábado
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-amber-brand">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
