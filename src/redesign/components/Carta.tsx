import { useState } from 'react'
import Reveal from './Reveal'
import { CARTA_DIGITAL_URL } from '../links'
import { piqueos, abrebocas, entradas, masBuscados, menuKids, makis } from '../../data/menu'

type Price = number | { chico: number; grande: number }
interface MenuItem { name: string; desc?: string; price: Price }
type Tab = 'piqueos' | 'abrebocas' | 'entradas' | 'masBuscados' | 'kids' | 'makis'

const tabs: { key: Tab; label: string }[] = [
  { key: 'abrebocas', label: 'Abrebocas' },
  { key: 'entradas', label: 'Entradas' },
  { key: 'masBuscados', label: 'Los Más Buscados' },
  { key: 'kids', label: 'Menú Kids' },
  { key: 'makis', label: 'Makis' },
  { key: 'piqueos', label: 'Piqueos' },
]

const data: Record<Tab, MenuItem[]> = {
  piqueos,
  abrebocas,
  entradas,
  masBuscados,
  kids: menuKids,
  makis,
}

function Price({ price }: { price: Price }) {
  if (typeof price === 'object') {
    return (
      <div className="text-right shrink-0">
        <div className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
          Chico <span className="display text-lg" style={{ color: 'var(--copper-ink)' }}>{price.chico}</span>
        </div>
        <div className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
          Grande <span className="display text-lg" style={{ color: 'var(--copper-ink)' }}>{price.grande}</span>
        </div>
      </div>
    )
  }
  return <span className="display text-2xl shrink-0" style={{ color: 'var(--copper-ink)' }}>{price}</span>
}

function DishRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-5 py-4 hairline first:border-t-0">
      <div className="flex-1">
        <h4 className="font-bold text-[0.95rem] tracking-wide" style={{ color: 'var(--ink)' }}>{item.name}</h4>
        {item.desc && <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--muted)' }}>{item.desc}</p>}
      </div>
      <Price price={item.price} />
    </div>
  )
}

export default function Carta() {
  const [tab, setTab] = useState<Tab>('masBuscados')
  const items = data[tab]
  const mid = Math.ceil(items.length / 2)

  return (
    <section id="carta" className="py-20 md:py-28" style={{ background: 'var(--linen)' }}>
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="kicker mb-3" style={{ color: 'var(--copper-ink)' }}>Cocina criolla de autor</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-6xl md:text-8xl" style={{ color: 'var(--forest)' }}>La Carta</h2>
            <p className="max-w-sm text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Fusión criolla, mar y parrilla. Todo hecho en casa, para compartir en la mesa.
            </p>
          </div>

          <a
            href={CARTA_DIGITAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink-outline mt-7 !py-2.5 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
            </svg>
            Ver la carta digital en PDF
          </a>
        </Reveal>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2.5" role="tablist" aria-label="Categorías de la carta">
          {tabs.map((t) => {
            const active = tab === t.key
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.key)}
                className="pill"
                style={{
                  background: active ? 'var(--forest)' : 'transparent',
                  color: active ? 'var(--cream-text)' : 'var(--forest)',
                  border: active ? '2px solid var(--forest)' : '2px solid color-mix(in srgb, var(--forest) 30%, transparent)',
                }}
              >
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Dishes — two columns on desktop */}
        <Reveal key={tab} className="mt-9">
          <div className="grid md:grid-cols-2 md:gap-x-14">
            <div>{items.slice(0, mid).map((it) => <DishRow key={it.name} item={it} />)}</div>
            <div>{items.slice(mid).map((it) => <DishRow key={it.name} item={it} />)}</div>
          </div>
        </Reveal>

        <p className="mt-10 text-xs italic" style={{ color: 'var(--muted)' }}>
          Precios en soles. Consulta por variaciones del día con tu mesero.
        </p>
      </div>
    </section>
  )
}
