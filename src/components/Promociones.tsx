const barraLibreItems = [
  'Chilcanos limón · maracuyá · frutos rojos',
  'Mojito',
  'Piña Colada',
  'Cuba Libre',
  'Tinto de Verano',
  'Gin tonic',
  'Vodka con naranja',
]

const otherPromos = [
  {
    emoji: '⏰',
    title: 'Happy Hour',
    subtitle: 'Todos los días',
    price: '2 x S/. 25.9',
    detail: 'Válido todos los días de la semana',
    items: ['Chilcanos', 'Piña Colada', 'Cuba Libre', 'Mojito', 'Tinto de Verano'],
  },
  {
    emoji: '🍋',
    title: 'Mocktails',
    subtitle: 'Sin Alcohol',
    price: '2 x S/. 19.9',
    detail: 'Esmeralda Oriental · Jamaica Beach · Susurro de Maracuyá',
    items: ['Esmeralda Oriental', 'Jamaica Beach', 'Susurro de Maracuyá'],
  },
]

export default function Promociones() {
  return (
    <section id="promociones" className="relative py-20 bg-cream overflow-hidden">
      {/* Llama watermark — right side */}
      <img
        src="/llama2.png"
        alt=""
        aria-hidden="true"
        className="absolute -right-16 top-1/2 -translate-y-1/2 h-[90%] opacity-[0.07] select-none pointer-events-none"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <p className="text-amber-brand text-sm tracking-[0.3em] uppercase font-medium text-center mb-3">
          Ofertas Especiales
        </p>
        <h2 className="relative font-display text-4xl md:text-5xl font-bold text-brown-dark text-center mb-12 uppercase">
          Promociones
        </h2>

        {/* Barra Libre — featured card full width */}
        <div className="rounded-3xl overflow-hidden shadow-lg bg-brown text-cream ring-2 ring-amber-brand mb-6">
          <div className="px-6 py-8 md:px-10">
            <div className="text-4xl mb-2">🍻</div>
            <h3 className="font-display font-bold text-3xl uppercase text-amber-brand mb-1">
              Bebe Sin Límites
            </h3>
            <p className="text-sm text-cream/70 mb-1">Barra Libre · 6:00pm a 10:00pm</p>
            <p className="text-xs text-cream/50 italic mb-5">
              Disfruta de 3 Horas de Tragos Ilimitados
            </p>

            {/* Two pricing blocks */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex-1 min-w-[140px] bg-brown-dark/40 rounded-2xl px-5 py-4 text-center">
                <p className="text-xs text-cream/60 uppercase tracking-widest mb-1">Lun · Mar · Mié</p>
                <p className="font-bold text-3xl text-amber-brand">S/. 49.90</p>
              </div>
              <div className="flex-1 min-w-[140px] bg-amber-brand rounded-2xl px-5 py-4 text-center">
                <p className="text-xs text-brown-dark/70 uppercase tracking-widest mb-1">Jue · Vie · Sáb</p>
                <p className="font-bold text-3xl text-brown-dark">S/. 69.90</p>
              </div>
            </div>

            {/* Items */}
            <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
              {barraLibreItems.map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-cream/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Other promos */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherPromos.map(promo => (
            <div
              key={promo.title}
              className="rounded-3xl overflow-hidden shadow-md bg-white text-brown-dark transition-transform hover:-translate-y-1"
            >
              <div className="px-6 py-8">
                <div className="text-4xl mb-3">{promo.emoji}</div>
                <h3 className="font-display font-bold text-2xl uppercase mb-1 text-brown">
                  {promo.title}
                </h3>
                <p className="text-sm mb-4 text-brown/60">{promo.subtitle}</p>

                <div className="inline-block rounded-full px-5 py-2 font-bold text-xl mb-5 bg-brown text-cream">
                  {promo.price}
                </div>

                <ul className="space-y-1.5">
                  {promo.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-brown/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-brand shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-brown/40 italic">{promo.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
