export default function Promociones() {
  const promos = [
    {
      emoji: '🍻',
      title: 'Barra Libre',
      subtitle: 'Bebe Ilimitadamente',
      price: 'S/. 49.9',
      detail: 'Miércoles, Jueves y Viernes · 6:00pm a 10:00pm',
      items: ['Chilcanos', 'Piña Colada', 'Cuba Libre', 'Mojito', 'Tinto de Verano'],
      highlight: true,
    },
    {
      emoji: '⏰',
      title: 'Happy Hour',
      subtitle: 'Todos los días',
      price: '2 x S/. 25.9',
      detail: 'Válido todos los días de la semana',
      items: ['Chilcanos', 'Piña Colada', 'Cuba Libre', 'Mojito', 'Tinto de Verano'],
      highlight: false,
    },
    {
      emoji: '🍋',
      title: 'Mocktails',
      subtitle: 'Sin Alcohol',
      price: '2 x S/. 19.9',
      detail: 'Esmeralda Oriental · Jamaica Beach · Susurro de Maracuyá',
      items: ['Esmeralda Oriental', 'Jamaica Beach', 'Susurro de Maracuyá'],
      highlight: false,
    },
  ]

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

        <div className="grid md:grid-cols-3 gap-6">
          {promos.map(promo => (
            <div
              key={promo.title}
              className={`rounded-3xl overflow-hidden shadow-md transition-transform hover:-translate-y-1 ${
                promo.highlight
                  ? 'bg-brown text-cream ring-2 ring-amber-brand'
                  : 'bg-white text-brown-dark'
              }`}
            >
              <div className={`px-6 py-8 ${promo.highlight ? '' : ''}`}>
                <div className="text-4xl mb-3">{promo.emoji}</div>
                <h3 className={`font-display font-bold text-2xl uppercase mb-1 ${promo.highlight ? 'text-amber-brand' : 'text-brown'}`}>
                  {promo.title}
                </h3>
                <p className={`text-sm mb-4 ${promo.highlight ? 'text-cream/70' : 'text-brown/60'}`}>
                  {promo.subtitle}
                </p>

                {/* Price */}
                <div className={`inline-block rounded-full px-5 py-2 font-bold text-xl mb-5 ${
                  promo.highlight ? 'bg-amber-brand text-brown-dark' : 'bg-brown text-cream'
                }`}>
                  {promo.price}
                </div>

                {/* Items */}
                <ul className="space-y-1.5">
                  {promo.items.map(item => (
                    <li key={item} className={`flex items-center gap-2 text-sm ${promo.highlight ? 'text-cream/80' : 'text-brown/70'}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-brand shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Detail */}
                <p className={`mt-4 text-xs ${promo.highlight ? 'text-cream/50' : 'text-brown/40'} italic`}>
                  {promo.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
