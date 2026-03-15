import { useState } from 'react'
import { tragos, bebidas, mocktails, cervezas, vinos } from '../data/menu'

type Tab = 'tragos' | 'bebidas' | 'mocktails' | 'cervezas'

export default function BebidasSection() {
  const [tab, setTab] = useState<Tab>('tragos')

  const tabs: { key: Tab; label: string; emoji: string }[] = [
    { key: 'tragos', label: 'Tragos', emoji: '🍹' },
    { key: 'bebidas', label: 'Bebidas', emoji: '🥤' },
    { key: 'mocktails', label: 'Mocktails', emoji: '🍋' },
    { key: 'cervezas', label: 'Cervezas & Vinos', emoji: '🍺' },
  ]

  return (
    <section id="bebidas" className="relative py-20 bg-brown-dark text-cream overflow-hidden">
      {/* Llama watermark — left side */}
      <img
        src="/llama2.png"
        alt=""
        aria-hidden="true"
        className="absolute -left-16 top-1/2 -translate-y-1/2 h-[90%] opacity-10 select-none pointer-events-none"
        style={{ filter: 'brightness(10)', transform: 'scaleX(-1)' }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <p className="text-amber-brand text-sm tracking-[0.3em] uppercase font-medium text-center mb-3">
          Para Compartir
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-10 uppercase">
          Bebidas
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                tab === t.key
                  ? 'bg-amber-brand text-brown-dark'
                  : 'bg-brown/50 text-cream hover:bg-brown'
              }`}
            >
              {t.emoji} {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-brown rounded-2xl p-6 md:p-8">
          {tab === 'tragos' && (
            <div className="grid sm:grid-cols-2 gap-x-8">
              {tragos.map(t => (
                <div key={t.name} className="flex justify-between items-start py-3 border-b border-cream/10 last:border-0">
                  <div>
                    <p className="font-medium text-cream">{t.name}</p>
                    {t.desc && <p className="text-cream/50 text-xs mt-0.5">{t.desc}</p>}
                  </div>
                  <span className="text-amber-brand font-bold shrink-0 ml-4">S/. {t.price}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'bebidas' && (
            <div className="grid sm:grid-cols-2 gap-x-8">
              {bebidas.map(b => (
                <div key={b.name} className="flex justify-between items-start py-3 border-b border-cream/10 last:border-0">
                  <div>
                    <p className="font-medium text-cream">{b.name}</p>
                    {b.desc && <p className="text-cream/50 text-xs mt-0.5">{b.desc}</p>}
                  </div>
                  <span className="text-amber-brand font-bold shrink-0 ml-4">S/. {b.price}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'mocktails' && (
            <div className="grid sm:grid-cols-3 gap-4">
              {mocktails.map(m => (
                <div key={m.name} className="bg-brown-dark/40 rounded-xl p-5 text-center border border-amber-brand/20 hover:border-amber-brand transition-colors">
                  <p className="text-2xl mb-2">🍹</p>
                  <p className="font-semibold text-amber-brand mb-1">{m.name}</p>
                  <p className="text-cream/60 text-sm">{m.desc}</p>
                  <div className="mt-3 bg-amber-brand/20 rounded-full px-3 py-1 text-amber-brand text-xs font-bold">
                    2 x S/. 19.9
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'cervezas' && (
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-amber-brand font-bold uppercase tracking-widest text-xs mb-4">Cervezas</h4>
                {cervezas.map(c => (
                  <div key={c.name} className="flex justify-between py-3 border-b border-cream/10 last:border-0">
                    <div>
                      <span className="font-medium text-cream">{c.name}</span>
                      {'note' in c && c.note && <p className="text-cream/50 text-xs">{c.note}</p>}
                    </div>
                    <span className="text-amber-brand font-bold">S/. {c.price}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-amber-brand font-bold uppercase tracking-widest text-xs mb-4">Vinos & Sangría</h4>
                {vinos.map(v => (
                  <div key={v.name} className="flex justify-between py-3 border-b border-cream/10 last:border-0">
                    <div>
                      <span className="font-medium text-cream">{v.name}</span>
                      <p className="text-cream/50 text-xs">{v.desc}</p>
                    </div>
                    <span className="text-amber-brand font-bold">S/. {v.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
