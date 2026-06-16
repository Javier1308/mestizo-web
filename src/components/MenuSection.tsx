import { useState } from 'react'
import { abrebocas, entradas, masBuscados, menuKids, makis } from '../data/menu'

type Tab = 'abrebocas' | 'entradas' | 'masBuscados' | 'kids' | 'makis'

interface MenuItem {
  name: string
  desc: string
  price: number | { chico: number; grande: number }
}

function DishCard({ item }: { item: MenuItem }) {
  return (
    <div
      className="flex items-start justify-between gap-4 py-4 last:border-0 group"
      style={{ borderBottom: '1px solid rgba(212, 201, 181, 0.5)' }}
    >
      <div className="flex-1">
        <h4
          className="font-bold text-sm tracking-wide uppercase transition-colors"
          style={{ color: '#5C3D2E', letterSpacing: '0.05em' }}
        >
          {item.name}
        </h4>
        {item.desc && (
          <p className="text-sm mt-1 leading-relaxed" style={{ color: '#7A5C40' }}>{item.desc}</p>
        )}
      </div>
      {typeof item.price === 'object' ? (
        <div className="text-right shrink-0">
          <div className="text-xs font-semibold" style={{ color: '#7A5C40' }}>Chico <span className="font-bold text-base" style={{ color: '#5C3D2E' }}>{item.price.chico}</span></div>
          <div className="text-xs font-semibold" style={{ color: '#7A5C40' }}>Grande <span className="font-bold text-base" style={{ color: '#5C3D2E' }}>{item.price.grande}</span></div>
        </div>
      ) : (
        <span className="font-bold text-lg shrink-0" style={{ color: '#5C3D2E' }}>
          {item.price}
        </span>
      )}
    </div>
  )
}

export default function MenuSection() {
  const [tab, setTab] = useState<Tab>('abrebocas')

  const tabs: { key: Tab; label: string }[] = [
    { key: 'abrebocas',   label: 'Abrebocas' },
    { key: 'entradas',    label: 'Entradas' },
    { key: 'masBuscados', label: 'Los Más Buscados' },
    { key: 'kids',        label: 'Menú Kids' },
    { key: 'makis',       label: 'Makis' },
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
    <section id="carta" className="relative py-20 overflow-hidden" style={{ backgroundColor: '#F5F0E8' }}>
      {/* Llama watermark */}
      <img
        src="/llama2.png"
        alt=""
        aria-hidden="true"
        className="absolute -right-16 top-1/2 -translate-y-1/2 h-[90%] opacity-[0.05] select-none pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Encabezado estilo carta del PDF */}
        <div className="text-center mb-10">
          <p className="font-display italic text-3xl md:text-4xl mb-1" style={{ color: '#5C3D2E' }}>
            Platos
          </p>
          <h2
            className="font-display font-bold text-5xl md:text-6xl uppercase tracking-wide mb-2"
            style={{ color: '#6B7F5E' }}
          >
            Criollos
          </h2>
          <p className="text-sm tracking-[0.4em] uppercase font-semibold" style={{ color: '#7A5C40' }}>
            Fusión
          </p>

          {/* Ornamento */}
          <div className="flex items-center justify-center gap-3 mt-4 mb-6">
            <div className="h-px w-16" style={{ backgroundColor: '#D4C9B5' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#8DC63F' }} />
            <div className="h-px w-16" style={{ backgroundColor: '#D4C9B5' }} />
          </div>
        </div>

        {/* Botón PDF */}
        <div className="flex justify-center mb-8">
          <a
            href="https://mestizo.pe/CartaDigitalMestizo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold px-6 py-2.5 rounded-full text-sm transition-colors shadow-md"
            style={{ backgroundColor: '#5C3D2E', color: '#F5F0E8' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
            </svg>
            Carta en PDF
          </a>
        </div>

        {/* Tabs — estilo badges del menú */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="font-bold text-sm tracking-wide uppercase px-5 py-2 rounded-sm transition-all"
              style={
                tab === t.key
                  ? { backgroundColor: '#6B7F5E', color: '#FFFFFF' }
                  : { backgroundColor: '#D4C9B5', color: '#5C3D2E' }
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Nota makis */}
        {tab === 'makis' && (
          <p className="text-center text-sm mb-6 italic" style={{ color: '#7A5C40' }}>
            10 cortes · Disponible lunes a viernes de 5pm a 10pm
          </p>
        )}

        {/* Dishes — estilo hoja de carta con borde decorativo */}
        <div
          className="rounded-sm p-6 md:p-10 shadow-sm"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #D4C9B5',
            boxShadow: '0 2px 16px rgba(92,61,46,0.06)',
          }}
        >
          {items.map(item => (
            <DishCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
