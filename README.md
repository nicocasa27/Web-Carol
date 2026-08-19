# SYNAPTICA — sitio fase 1

La portada implementa el diseño `SYNAPTICA Home.dc.html` del proyecto de
Claude Design; el resto sale de la propuesta y de la toma de
requerimientos de 27 preguntas. Next.js 16 (App Router) con Tailwind v4,
sin backend: las once rutas se prerenderizan.

La portada es de una sola página, con anclas (`#metodo`, `#quien`,
`#historias`), tal como está diseñada. Las cuatro páginas internas son
lecturas más profundas de lo que la portada resume, y se enlazan desde
dentro de la sección correspondiente — no desde la barra, que sigue
exactamente la del diseño.

Las decisiones de diseño —paleta, tipografía, espacio, movimiento y por qué
cada una es la que es— están en [`DECISIONS.md`](./DECISIONS.md). Ese
archivo es la especificación; este es el manual de operación.

## Arrancar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción, 11 rutas estáticas
```

## Verificar

Tres comprobaciones que se corren de verdad, no como intención:

```bash
npx tsc --noEmit                                   # tipos
npx eslint app components content scripts          # lint
node scripts/contrast.mjs                          # 19 pares de contraste WCAG
node "Anti-Slop (AJONAI)/scripts/check.mjs" app components content scripts --strict
```

`scripts/contrast.mjs` lee los tokens directamente de `app/globals.css`, así
que si alguien ajusta la paleta y rompe un mínimo, esto falla aquí en vez
de que el problema aparezca en una auditoría posterior. Las diferencias
entre el diseño y lo implementado están todas en `DECISIONS.md`, con las
dos cifras de contraste de cada una.

## Configuración

Copia `.env.example` a `.env.local`. Las tres variables son opcionales y el
sitio se comporta con honestidad sin ellas:

| Variable | Sin ella |
|---|---|
| `NEXT_PUBLIC_BOOKING_URL` | El llamado a agendar muestra «la agenda se abre en los próximos días» en lugar de un enlace muerto |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No aparece el correo en el pie ni la alternativa de escribir |
| `NEXT_PUBLIC_SITE_URL` | Los metadatos, el sitemap y el robots.txt apuntan a localhost |

## Estructura

```
app/            rutas y metadatos (icon, opengraph-image, sitemap, robots, manifest)
components/     chasis y piezas; el ritmo de sección vive en section.tsx
content/        todo el texto, tipado, fuera del JSX
public/media/   los archivos que faltan — ver el README de esa carpeta
scripts/        conversión OKLCH y verificación de contraste
```

Todo el copy está en `content/*.ts` y no incrustado en los componentes. La
fase 2 pide versión en inglés, y esa separación es lo único que la hace
barata.

## Pendientes

Cinco cosas dependen de material que todavía no existe. Las tres primeras
son bloqueantes para publicar.

**1 · Autorización del caso publicado.** `content/historias.ts` narra el
caso de duelo y ansiedad de la toma de requerimientos. Está anonimizado
—sin edad, lugar, oficio ni ningún dato que permita reconocerlo— pero el
anonimato no sustituye el consentimiento. **No publicar sin autorización
escrita de la persona.** La constante `consentPending` en ese archivo está
en `true`.

**2 · Nombre profesional.** La toma de requerimientos nunca da el nombre
completo ni el título con el que quiere firmar. `content/brand.ts` usa el
nombre de pila. Confirmar antes de publicar.

**3 · Enlace de agenda.** Sin `NEXT_PUBLIC_BOOKING_URL` no hay dónde
agendar. Confirmar si es Calendly u otro.

**4 · Medios provisionales.** Las tres imágenes del sitio son fotografías
de banco con licencia Pexels, puestas para poder enseñar la página
completa. **No son de SYNAPTICA y hay que sustituirlas antes de
publicar** — están marcadas con `provisional: true` en `content/media.ts`
y listadas con sus créditos en `public/media/README.md`, junto al brief de
producción del video, que sigue sin existir.

**5 · Isotipo.** `app/icon.svg` y `app/opengraph-image.tsx` son
provisionales: logotipo tipográfico, que es lo que la propuesta indica
hacer mientras el isotipo no exista.

## Fuera de alcance en esta etapa

Agenda propia y gestión de disponibilidad, pasarela de pagos, cuentas de
cliente, entrega automatizada de los audios de 21 días y panel
administrable de contenido. Todo eso necesita backend y se contempla como
proyecto aparte.

La versión en inglés es fase 2. No hay formulario de contacto: sin backend,
un formulario que no envía a ningún sitio es peor que un correo directo.

## Desplegar

```bash
npm i -g vercel     # no viene instalado
vercel              # preview
vercel --prod
```

Antes de producción: cargar las tres variables de entorno en el proyecto de
Vercel y resolver los pendientes 1, 2 y 3.
