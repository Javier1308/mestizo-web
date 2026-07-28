import Reveal from './Reveal'
import { WHATSAPP, asset } from '../links'

const tags = ['Buena música', 'Tragos artesanales', 'Ambiente íntimo', 'Happy Hour']

export default function AfterOffice() {
  return (
    <section id="after-office" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${asset('AfterOffice1.jpeg')}')` }} aria-hidden="true" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(30,42,38,0.94) 0%, rgba(30,42,38,0.8) 45%, rgba(30,42,38,0.55) 100%)' }} aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-24 md:py-28">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <Reveal className="flex-1">
            <p className="kicker mb-4" style={{ color: 'var(--lime-bright)' }}>De lunes a sábado</p>
            <h2 className="chicha text-6xl md:text-8xl">After<br />Office</h2>
            <p className="mt-6 text-lg leading-relaxed max-w-lg" style={{ color: 'var(--cream-text)' }}>
              Terminó el trabajo, empieza el momento. Buena música, tragos de autor y el ambiente perfecto para
              cerrar el día con quienes valen la pena.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {tags.map((t) => (
                <span key={t} className="text-xs font-semibold px-4 py-1.5 rounded-full" style={{ border: '1px solid rgba(169,217,46,0.6)', color: 'var(--lime-bright)' }}>
                  {t}
                </span>
              ))}
            </div>

            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-lime mt-9">
              Reserva tu lugar
            </a>
          </Reveal>

          <Reveal delay={120} className="w-full md:w-80 shrink-0">
            <img
              src={asset('AfterOffice2.jpeg')}
              alt="Ambiente de After Office en Mestizo Restobar"
              className="w-full rounded-[1.75rem] shadow-2xl object-cover"
              style={{ maxHeight: '480px', objectPosition: 'center top', border: '1px solid color-mix(in srgb, var(--copper) 45%, transparent)' }}
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
