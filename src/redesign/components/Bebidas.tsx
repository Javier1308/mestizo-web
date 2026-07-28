import { useState } from 'react'
import Reveal from './Reveal'
import { CARTA_BEBIDAS_PDF, asset } from '../links'
import {
  type Drink,
  cocteles, whisky, shots, cervezas, baldes,
  botellas, vinos, mocktails, jugos, frozen, varios, cafe,
} from '../barraData'

type Tab = 'cocteles' | 'whisky' | 'cervezas' | 'botellas' | 'sinalcohol'
const tabs: { key: Tab; label: string }[] = [
  { key: 'cocteles', label: 'Cócteles' },
  { key: 'whisky', label: 'Whisky' },
  { key: 'cervezas', label: 'Cervezas' },
  { key: 'botellas', label: 'Botellas' },
  { key: 'sinalcohol', label: 'Sin Alcohol' },
]

function DrinkRow({ d }: { d: Drink }) {
  return (
    <div className="flex justify-between items-start gap-4 py-3" style={{ borderBottom: '1px solid rgba(245,240,228,0.1)' }}>
      <div>
        <p className="font-semibold" style={{ color: 'var(--cream-text)' }}>{d.name}</p>
        {d.note && <p className="text-xs mt-0.5" style={{ color: 'var(--muted-cream)' }}>{d.note}</p>}
      </div>
      {d.vaso !== undefined ? (
        <div className="text-right shrink-0 flex gap-3">
          <span className="text-xs" style={{ color: 'var(--muted-cream)' }}>
            Vaso <b className="display text-base" style={{ color: 'var(--lime-bright)' }}>{d.vaso}</b>
          </span>
          {d.jarra !== undefined && (
            <span className="text-xs" style={{ color: 'var(--muted-cream)' }}>
              Jarra <b className="display text-base" style={{ color: 'var(--lime-bright)' }}>{d.jarra}</b>
            </span>
          )}
        </div>
      ) : d.price !== undefined ? (
        <span className="display text-xl shrink-0" style={{ color: 'var(--lime-bright)' }}>{d.price}</span>
      ) : null}
    </div>
  )
}

function Group({ title, items }: { title: string; items: Drink[] }) {
  return (
    <div>
      <h3 className="kicker mb-2" style={{ color: 'var(--copper-bright)' }}>{title}</h3>
      <div className="grid sm:grid-cols-2 sm:gap-x-10">
        {items.map((d) => <DrinkRow key={`${title}-${d.name}`} d={d} />)}
      </div>
    </div>
  )
}

export default function Bebidas() {
  const [tab, setTab] = useState<Tab>('cocteles')

  return (
    <section id="bebidas" className="relative overflow-hidden py-20 md:py-28" style={{ background: 'var(--forest-deep)' }}>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: 'var(--fucsia)' }} aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: 'var(--lime)' }} aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-5">
        <Reveal>
          <p className="kicker mb-3 text-center" style={{ color: 'var(--copper-bright)' }}>Para compartir en la barra</p>
          <h2 className="display text-6xl md:text-8xl text-center" style={{ color: 'var(--cream-text)' }}>
            La <span style={{ color: 'var(--lime)', textShadow: '3px 3px 0 var(--fucsia)' }}>Barra</span>
          </h2>

          <div className="flex justify-center mt-6">
            <a href={asset(CARTA_BEBIDAS_PDF)} target="_blank" rel="noopener noreferrer" className="btn btn-outline !py-2.5 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
              </svg>
              Carta de Bebidas en PDF
            </a>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="mt-9 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Categorías de la barra">
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
                  background: active ? 'var(--lime)' : 'transparent',
                  color: active ? 'var(--ink)' : 'var(--cream-text)',
                  border: active ? '2px solid var(--lime)' : '2px solid rgba(245,240,228,0.25)',
                }}
              >
                {t.label}
              </button>
            )
          })}
        </div>

        <Reveal key={tab} className="mt-8">
          <div className="rounded-3xl p-6 md:p-9 space-y-8" style={{ background: 'var(--forest-800)', border: '1px solid color-mix(in srgb, var(--copper) 30%, transparent)' }}>
            {tab === 'cocteles' && (
              <div className="grid sm:grid-cols-2 sm:gap-x-10">
                {cocteles.map((d) => <DrinkRow key={d.name} d={d} />)}
              </div>
            )}

            {tab === 'whisky' && (
              <>
                <div className="grid sm:grid-cols-2 sm:gap-x-10">
                  {whisky.map((d) => <DrinkRow key={d.name} d={d} />)}
                </div>
                <DrinkRow d={shots} />
              </>
            )}

            {tab === 'cervezas' && (
              <>
                <div className="grid sm:grid-cols-2 sm:gap-x-10">
                  {cervezas.map((d) => <DrinkRow key={d.name} d={d} />)}
                </div>
                <Group title="Baldes" items={baldes} />
              </>
            )}

            {tab === 'botellas' && (
              <>
                <Group title="Destilados · incluyen complementos" items={botellas} />
                <Group title="Vinos" items={vinos} />
              </>
            )}

            {tab === 'sinalcohol' && (
              <>
                <Group title="Mocktails" items={mocktails} />
                <Group title="Jugos" items={jugos} />
                <Group title="Frozen y Cremoladas" items={frozen} />
                <Group title="Bebidas" items={varios} />
                <Group title="Café e Infusiones" items={cafe} />
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
