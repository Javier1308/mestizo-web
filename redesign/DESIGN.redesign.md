# Design — "La Mesa Mestiza" (rediseño paralelo)

> Documenta **solo** el rediseño paralelo (`src/redesign/*`, entrada `redesign.html`).
> No reemplaza el `DESIGN.md` del sitio actual, que sigue siendo la verdad visual de `/`.
> Ground truth del mundo construido (impeccable new-work · seed `41d401e2` · index 3 · mode persuade).

## Tesis

El sitio **es una mesa criolla puesta**, no un hero-foto-con-overlay. Encarna que
"mestizo" = la mezcla hecha visible: una mesa refinada (verde noche, cobre, mayúsculas
anchas y tranquilas) que **estalla en energía de afiche chicha** (lime / fucsia / naranja,
display condensado que grita) exactamente en los momentos sociales. Rechaza el default de
restaurante: foto de fachada + overlay oscuro + logo centrado + "Ver Carta".

## Color (tokens en `src/redesign/styles.css`)

| Rol | Token | Valor | Uso |
|-----|-------|-------|-----|
| Mesa (oscuro) | `--forest` / `--forest-deep` / `--forest-800` | `#2f3f39` / `#1e2a26` / `#26332e` | Fondos de secciones oscuras, header, hero |
| Mantel (claro) | `--linen` / `--linen-2` | `#f2ecdd` / `#e8ddc7` | Fondo cálido de la Carta |
| Tinta | `--ink` | `#1a231f` | Texto sobre linen y sobre lime |
| Texto claro | `--cream-text` / `--muted-cream` | `#f5f0e4` / `#cdd6c9` | Texto sobre fondos oscuros |
| Texto secundario | `--muted` | `#56635a` | Descripciones sobre linen (AA ✓) |
| Acción | `--lime` / `--lime-bright` | `#93c01f` / `#a9d92e` | CTAs, acentos, precios de barra |
| Cobre | `--copper` / `--copper-bright` / `--copper-ink` | `#bb7f53` / `#d49a6c` / `#8a5a34` | Bordes (decorativo) / texto cobre sobre oscuro / texto cobre sobre linen (AA ✓) |
| Chicha | `--fucsia` / `--orange` / `--grape` | `#e5006e` / `#f26a1b` / `#5c2c86` | Reservado a Promos, Barra, After Office |

**Estrategia:** paleta plena. Ritmo alternando mesa oscura ↔ mantel claro
(Header/Hero oscuro → Buffet oscuro → Carta linen → Barra oscura → Promos chicha →
After Office oscuro → Contacto oscuro → Footer). El cobre `#bb7f53` es **decorativo**
(bordes/hairlines); para texto sobre linen se usa `--copper-ink`.

## Tipografía

- **Display / voz chicha:** `Big Shoulders Display` (600–900), condensada, poster. Clase
  `.display` (mayúsculas) y `.chicha` (relleno lime + sombras escalonadas fucsia/forest).
- **Cuerpo / UI:** `Archivo` (400–800). Legible, con carácter. Clase `.kicker` para labels
  tracked. (Se evitan a propósito los defaults saturados: Playfair, Fraunces, Space Grotesk,
  Inter/DM como display, etc.)

## Componentes clave

- Botones: `.btn` + `.btn-lime` / `.btn-outline` / `.btn-ink-outline` (pill, hover lift).
- Tabs/pills: `.pill` (Carta y Barra).
- `.chicha` (lettering poster), `.rays` (fondo radial de afiche en Promos).
- `.hairline` (divisor cobre translúcido en filas de la Carta).
- `Reveal` (IntersectionObserver): fade+lift al entrar; instantáneo con reduced-motion.
- Carrusel del Buffet (auto-rotación + flechas + dots).

## Motion

Transiciones 180–700 ms ease. Reveal on-scroll, hover-lift en botones, carrusel del buffet,
scroll cue en el hero. **Smooth scroll con Lenis** (`lenis@1.3.x`,
darkroomengineering/lenis) vía `src/redesign/useSmoothScroll.ts`: raf loop, anclas `#…`
enrutadas por `lenis.scrollTo` con offset `-72` (header sticky), import de `lenis/dist/lenis.css`
en `main.tsx`. Solo en el rediseño — el sitio actual no lo importa.
`@media (prefers-reduced-motion: reduce)` **no inicializa Lenis** y desactiva animaciones y
smooth-scroll; los `Reveal` quedan visibles.

## Accesibilidad

- Contraste AA verificado: cuerpo ≥4.5:1, texto grande ≥3:1. Cobre sobre linen migrado a
  `--copper-ink` (~5:1). Descripciones en `--muted`.
- Foco visible global (`:focus-visible` lime). Skip-link "Saltar al contenido".
- `section[id] { scroll-margin-top: 76px }` para que el header sticky no tape los títulos.
- Alt text con contexto en fotos de platos y ambiente; rays/glows marcados `aria-hidden`.
- Español como idioma primario; todos los CTA a WhatsApp (`wa.link/53taq2`).

## Assets

- `public/mesa-mestiza-hero.png` — **sintético** (generado, fondo del hero). Reemplazable por
  una foto real cenital de una mesa Mestiza.
- Reusa fotos reales existentes: buffet (`AjiGallina`…`SecoFrejoles`), `AfterOffice1/2`.
- `redesign/concepts/` — las 3 exploraciones de hero aprobadas (referencia).

## Verificación

`npm run dev` → `/` = sitio actual intacto · `/redesign.html` = rediseño.
`npm run build` emite `dist/redesign.html` (artefacto estático) + `dist/index.html` sin tocar
el sitio actual. `npm run lint` limpio.
