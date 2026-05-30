import { useState } from 'react'
import { abrebocas, entradas, masBuscados, menuKids, makis } from '../data/menu'

type Tab = 'abrebocas' | 'entradas' | 'masBuscados' | 'kids' | 'makis'

interface MenuItem {
  name: string
  desc: string
  price: number
}

function DishCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-brown/20 last:border-0 group">
      <div className="flex-1">
        <h4 className="font-semibold text-brown-dark group-hover:text-brown transition-colors text-base">
          {item.name}
        </h4>
        {item.desc && (
          <p className="text-brown/60 text-sm mt-0.5">{item.desc}</p>
        )}
      </div>
      <span className="text-brown font-bold text-lg shrink-0">
        S/. {item.price}
      </span>
    </div>
  )
}

export default function MenuSection() {
  const [tab, setTab] = useState<Tab>('abrebocas')

  const tabs: { key: Tab; label: string; emoji: string }[] = [
    { key: 'abrebocas',   label: 'Abrebocas',     emoji: '🦪' },
    { key: 'entradas',    label: 'Entradas',       emoji: '🥗' },
    { key: 'masBuscados', label: 'Los Más Buscados', emoji: '⭐' },
    { key: 'kids',        label: 'Menú Kids',      emoji: '🧒' },
    { key: 'makis',       label: 'Makis',          emoji: '🍣' },
  ]

  const itemsMap: Record<Tab, MenuItem[]> = {
    abrebocas:   abrebocas,
    entradas:    entradas,
    masBuscados: masBuscados,
    kids:        menuKids,
    makis:       makis,
  }

  const items = itemsMap[tab]

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
          Platos Criollos Fusión
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-dark text-center mb-6 uppercase">
          Nuestra Carta
        </h2>

        {/* Botón PDF */}
        <div className="flex justify-center mb-6">
          <a
            href="https://mestizo.pe/CartaDigitalMestizo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brown text-cream font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-brown-dark transition-colors shadow-md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
            </svg>
            Carta en PDF
          </a>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                tab === t.key
                  ? 'bg-brown text-cream shadow-md'
                  : 'bg-cream-dark text-brown hover:bg-brown/10'
              }`}
            >
              {t.emoji} {t.label}
            </button>
          ))}
        </div>

        {/* Nota makis */}
        {tab === 'makis' && (
          <p className="text-center text-brown/60 text-sm mb-6 italic">
            10 cortes · Disponible lunes a viernes de 5pm a 10pm
          </p>
        )}

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
