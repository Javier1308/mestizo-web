import { useState } from 'react'
import { marinos, piqueos } from '../data/menu'

type Tab = 'marinos' | 'piqueos'

interface MenuItem {
  name: string
  desc: string
  price: number
}

function DishCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-brown/20 last:border-0 group">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-amber-brand text-xs">🍲</span>
          <h4 className="font-semibold text-brown-dark group-hover:text-brown transition-colors text-base">
            {item.name}
          </h4>
        </div>
        {item.desc && (
          <p className="text-brown/60 text-sm mt-0.5 ml-5">{item.desc}</p>
        )}
      </div>
      <span className="text-brown font-bold text-lg shrink-0">
        S/. {item.price}
      </span>
    </div>
  )
}

export default function MenuSection() {
  const [tab, setTab] = useState<Tab>('marinos')

  const tabs: { key: Tab; label: string; emoji: string }[] = [
    { key: 'marinos', label: 'Marinos', emoji: '🦑' },
    { key: 'piqueos', label: 'Piqueos', emoji: '🍗' },
  ]

  const items = tab === 'marinos' ? marinos : piqueos

  return (
    <section id="carta" className="relative py-20 bg-cream overflow-hidden">
      {/* Llama watermark — right side */}
      <img
        src="/llama2.png"
        alt=""
        aria-hidden="true"
        className="absolute -right-16 top-1/2 -translate-y-1/2 h-[90%] opacity-[0.07] select-none pointer-events-none"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <p className="text-amber-brand text-sm tracking-[0.3em] uppercase font-medium text-center mb-3">
          Platos a la Carta
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-dark text-center mb-10 uppercase">
          Nuestra Carta
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                tab === t.key
                  ? 'bg-brown text-cream shadow-md'
                  : 'bg-cream-dark text-brown hover:bg-brown/10'
              }`}
            >
              {t.emoji} {t.label}
            </button>
          ))}
        </div>

        {/* Dishes */}
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
          {items.map(item => (
            <DishCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

