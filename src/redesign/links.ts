// Product-truth links & assets — preserved verbatim from the current site.
export const WHATSAPP = 'https://wa.link/53taq2'
export const INSTAGRAM = 'https://www.instagram.com/mestizo_peru/'
export const LINKTREE = 'https://linktr.ee/MestizoRestobar'
export const CARTA_BEBIDAS_PDF = 'CartaTragosMestizo.pdf'
export const CARTA_DIGITAL_URL = 'https://mestizo.pe/CartaDigitalMestizo.pdf'

// Resolve a public/ asset under whatever base Vite builds with (/ or /mestizo-web/).
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '')
