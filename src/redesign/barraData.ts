// Carta de la Barra — fiel a public/CartaTragosMestizo.pdf.
// Dataset propio del rediseño para no alterar src/data/menu.ts (sitio actual).

export interface Drink {
  name: string
  price?: number   // precio único
  vaso?: number    // precio por vaso (jugos, frozen, refrescos)
  jarra?: number   // precio por jarra
  note?: string
}

export const cocteles: Drink[] = [
  { name: 'Piña Colada', price: 28 },
  { name: 'Algarrobina', price: 28 },
  { name: 'Gin Tonic', price: 27 },
  { name: 'Bombay Sapphire', price: 35 },
  { name: "Hendrick's", price: 40 },
  { name: 'Moscow Mule', price: 35 },
  { name: 'Negroni', price: 35 },
  { name: 'Zamboni', price: 28 },
  { name: 'Caipirinha', price: 25 },
  { name: 'Amaretto Sour', price: 30 },
  { name: 'Margarita', price: 25 },
  { name: 'Paloma', price: 35 },
  { name: 'Carajillo', price: 32 },
  { name: 'Aperol Spritz', price: 28 },
  { name: 'Cuba Libre', price: 20 },
  { name: 'Fernet cola', price: 25 },
  { name: 'Capitán', price: 30 },
  { name: 'Campari Tonic', price: 25 },
  { name: 'Pisco Punch', price: 28 },
]

export const whisky: Drink[] = [
  { name: "Jack Daniel's", price: 30 },
  { name: 'Jim Beam', price: 30 },
  { name: 'Jameson', price: 30 },
  { name: 'Old Fashioned', price: 35 },
  { name: 'Espresso Martini', price: 30 },
  { name: 'Cosmopolitan', price: 28 },
  { name: 'Apple Martini', price: 28 },
  { name: 'Manhattan', price: 30 },
]

export const shots: Drink = {
  name: 'Shots',
  price: 20,
  note: 'Jägermeister · Pisco Portón · Tequila Olmeca · Anís Nájar',
}

export const cervezas: Drink[] = [
  { name: 'Pilsen', price: 15 },
  { name: 'Cusqueña', price: 16, note: 'Dorada · Trigo' },
  { name: 'Corona', price: 17 },
  { name: 'Heineken', price: 17 },
  { name: 'Stella Artois', price: 17 },
  { name: 'Estrella Damm', price: 17 },
  { name: 'Caños del Santero', price: 19, note: 'Artesanal' },
  { name: 'Corona · Estrella · Cusqueña Trigo', price: 14, note: 'Cero alcohol' },
]

export const baldes: Drink[] = [
  { name: 'Balde x6 · Pilsen', price: 80 },
  { name: 'Balde x6 · Importadas', price: 90 },
]

export const botellas: Drink[] = [
  { name: 'Jägermeister', price: 200 },
  { name: "Gin Hendrick's", price: 280 },
  { name: 'Tequila Olmeca', price: 200 },
  { name: 'Ron Mandatario 6 Años', price: 150 },
  { name: 'Ron Flor de Caña 7 Años', price: 250 },
  { name: 'Ron Botrán 12 Años', price: 280 },
  { name: 'Ron Diplomático', price: 300 },
  { name: 'Tequila Don Julio Blanco', price: 300 },
  { name: 'Ricadonna Ruby', price: 160 },
  { name: 'Pisco Portón Italia', price: 200 },
  { name: 'Pisco Portón Quebranta', price: 200 },
  { name: 'Pisco Caravedo', price: 150 },
]

export const vinos: Drink[] = [
  { name: 'Las Moras Malbec', price: 70 },
  { name: 'Doña Julia Malbec', price: 90 },
  { name: 'Casillero del Diablo', price: 110 },
  { name: 'El Enemigo Malbec', price: 300 },
  { name: 'Intipalka Blanco', price: 70 },
]

export const mocktails: Drink[] = [
  { name: 'Piña Colada Virgen', price: 25 },
]

export const jugos: Drink[] = [
  { name: 'Maracuyá', vaso: 10, jarra: 20 },
  { name: 'Tuna', vaso: 12, jarra: 22 },
  { name: 'Piña con Hierba Luisa', vaso: 12, jarra: 22 },
  { name: 'Maracumango', vaso: 12, jarra: 22 },
  { name: 'Frutos Rojos', vaso: 10, jarra: 22 },
  { name: 'Chicha', vaso: 7, jarra: 20 },
]

export const frozen: Drink[] = [
  { name: 'Piña con Hierba Luisa', vaso: 10, jarra: 22 },
  { name: 'Tuna', vaso: 13, jarra: 25 },
  { name: 'Maracumango', vaso: 12, jarra: 24 },
  { name: 'Maracuyá', vaso: 10, jarra: 20 },
]

export const varios: Drink[] = [
  { name: 'Agua sin gas', price: 6.5 },
  { name: 'Agua con gas', price: 6.5 },
  { name: 'Inka Cola', price: 7 },
  { name: 'Inka Cero', price: 7 },
  { name: 'Coca Cola', price: 7 },
  { name: 'Coca Cola Cero', price: 7 },
  { name: 'Redbull', price: 15 },
  { name: 'ZipZodah', price: 12 },
  { name: 'Limonada', vaso: 7, jarra: 17 },
  { name: 'Naranjada', vaso: 10, jarra: 20 },
  { name: 'Hierba Luisa', vaso: 7, jarra: 17 },
  { name: 'Kion y Menta', vaso: 7, jarra: 17 },
]

export const cafe: Drink[] = [
  { name: 'Americano', price: 9 },
  { name: 'Espresso', price: 9 },
  { name: 'Espresso Doble', price: 10 },
  { name: 'Espresso Cortado', price: 10 },
  { name: 'Capuccino', price: 9 },
  { name: 'Matha', price: 16 },
  { name: 'Macchiato', price: 10 },
  { name: 'Iced Coffe', price: 10 },
  { name: 'Ice Tea', price: 10 },
  { name: 'Ice Tea Naranja', price: 12 },
  { name: 'Ice Tea Frutos Rojos', price: 13 },
  { name: 'Infusiones Fidelia', price: 7 },
  { name: 'Infusiones de la casa', price: 6 },
  { name: 'Infusiones Tetera', price: 10 },
]
