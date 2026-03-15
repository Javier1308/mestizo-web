export default function Footer() {
  return (
    <footer className="bg-brown-dark text-cream/60 py-8 text-center text-sm">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-display font-bold text-cream text-xl mb-1 tracking-widest uppercase">
          Me<span className="text-amber-brand">s</span>tizo
        </p>
        <p className="text-xs tracking-widest mb-4">Barra Criolla · San Isidro</p>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.instagram.com/mestizo_peru/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-brand transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.link/53taq2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-brand transition-colors"
          >
            WhatsApp
          </a>
          <a href="#carta" className="hover:text-amber-brand transition-colors">
            Carta
          </a>
        </div>
        <p className="text-xs text-cream/30">
          © {new Date().getFullYear()} Mestizo | Barra Criolla. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
