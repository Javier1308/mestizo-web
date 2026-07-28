import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { WHATSAPP, INSTAGRAM, LINKTREE } from '../links'

function Info({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 items-start">
      <span className="shrink-0 rounded-2xl p-3" style={{ background: 'var(--lime)', color: 'var(--ink)' }}>{icon}</span>
      <div>
        <p className="font-bold" style={{ color: 'var(--cream-text)' }}>{label}</p>
        <div className="text-sm mt-0.5" style={{ color: 'var(--muted-cream)' }}>{children}</div>
      </div>
    </div>
  )
}

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 md:py-28" style={{ background: 'var(--forest-800)' }}>
      <div className="max-w-5xl mx-auto px-5">
        <Reveal>
          <p className="kicker mb-3 text-center" style={{ color: 'var(--copper-bright)' }}>Encuéntranos</p>
          <h2 className="display text-6xl md:text-8xl text-center" style={{ color: 'var(--cream-text)' }}>
            Tu mesa te <span style={{ color: 'var(--lime)', textShadow: '3px 3px 0 var(--fucsia)' }}>espera</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
          <Reveal className="space-y-6">
            <Info
              label="Dirección"
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
            >
              Calle Mariano de los Santos 192<br />San Isidro, Lima
            </Info>
            <Info
              label="Horario"
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            >
              Lunes a Sábado<br />Mediodía – Cierre
            </Info>
            <Info
              label="WhatsApp"
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" /></svg>}
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--lime-bright)' }}>Reserva tu mesa aquí</a>
            </Info>
            <Info
              label="Instagram"
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>}
            >
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--lime-bright)' }}>@mestizo_peru</a>
            </Info>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[1.5rem] overflow-hidden shadow-lg h-72 md:h-80" style={{ border: '1px solid color-mix(in srgb, var(--copper) 40%, transparent)' }}>
              <iframe
                title="Ubicación de Mestizo Restobar en San Isidro"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3!2d-77.037!3d-12.097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+Mariano+de+los+Santos+192%2C+San+Isidro!5e0!3m2!1ses!2spe!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        {/* CTAs */}
        <Reveal delay={120} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-lime text-base">Reservar por WhatsApp</a>
          <a href={LINKTREE} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-base">Visita nuestro Linktree</a>
        </Reveal>
      </div>
    </section>
  )
}
