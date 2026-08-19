# Decisiones — SYNAPTICA

La portada implementa `SYNAPTICA Home.dc.html`, el diseño del proyecto de
Claude Design. **El diseño manda.** Este archivo no propone un sistema
alternativo: registra el que el diseño ya define, y anota exactamente
dónde y por qué la implementación se separa de él.

La regla que gobierna esas separaciones: sólo se cambia lo que impide que
alguien use la página. Contraste por debajo del mínimo, una rejilla de
cinco columnas en un teléfono, contenido que sólo existe si corre un
script. Nada de gusto.

---

## El sistema, tal como lo define el diseño

### Paleta

| Rol | Token | Valor |
|---|---|---|
| Marfil, fondo de página | `ground` | `#fbf9f5` |
| Hueso, secciones alternas | `band` | `#f2eee7` |
| Tinta | `ink` | `#26221f` |
| Tinta secundaria | `ink-2` | `#6a6764` |
| Regla | `rule` / `rule-strong` | `#dfdcd6` · `#d3cec6` |
| Borde de control | `edge` | `#8b8884` |
| Salmón, relleno | `accent` | `#d98a6c` |
| Salmón, texto | `accent-ink` | `#a2563d` |
| Salmón sobre petróleo | `accent-warm` | `#e0987d` |
| Petróleo | `deep` | `#22363a` |
| Tinta sobre petróleo | `deep-ink` / `deep-ink-2` | `#f2eee7` · `#b8bab7` |

El brief lo pide por nombre: marfil, hueso, arena, piedra caliza, con el
salmón como acento cuidadosamente racionado y el petróleo reducido a un
gesto. En la portada el petróleo aparece exactamente una vez, en los 21
días. Sin modo oscuro: la marca es luz, y un modo oscuro sería una
decisión de marca, no un ajuste técnico.

### Tipografía

Cormorant Garamond 300 para todo lo que debe resonar; Inter 300–500 para
todo lo que debe leerse sin esfuerzo. Es el par del diseño. Ambas
self-hosted por `next/font`, sin petición a Google en tiempo de ejecución.

Nota honesta: Inter aparece en las listas de «tipografías de monocultivo»
del skill Anti-Slop. La regla de ese skill es de proporción y contexto, no
un veto por nombre — y la instrucción del cliente manda sobre el skill.
Aquí Inter no hace el trabajo de display: lo hace Cormorant. Inter es
cuerpo y utilidad, que es exactamente el uso que el propio skill considera
legítimo.

Escala: `micro 12` · `small 13.5` · `card 15` · `body 16` · `lead → 19` ·
`quote 20` · `stat 30` · `title → 48` · `recognition → 52` · `opening → 84`
· `numeral → 300`. Pocos escalones, mucha diferencia entre ellos.

### Espacio, forma y movimiento

- Ritmo de sección `clamp(110px, 14vw, 170px)`, y `180px` en el petróleo.
  Canal lateral `clamp(24px, 6vw, 80px)`. Apertura `clamp(140px, 20vh, 210px)`.
- Dentro de un componente: 12 / 22 / 34 px, con 56 y 64 para agrupar
  bloques. Dos escalas distintas a propósito: una sola afirmaría que todo
  en la página pesa lo mismo.
- Radios: 18 px en medios, 16 px en tarjetas, píldora en botones.
- Una sola sombra en todo el sitio, la del video:
  `0 24px 80px -24px rgba(38,34,31,.18)`. Es acromática y con
  desplazamiento real — oclusión, no emisión.
- Curva única `cubic-bezier(0.22, 1, 0.36, 1)`. Apertura escalonada a
  0.15 / 0.45 / 0.85 / 1.2 / 1.8 s; entradas por scroll a 900 ms.

---

## Dónde la implementación se separa del diseño, y por qué

### 1 · Contraste

El diseño construye la jerarquía con tintas de alfa decreciente. Varias
caen por debajo del mínimo AA, y siempre en el texto más pequeño:

| Diseño | Contraste | Corrección |
|---|---|---|
| `rgba(38,34,31,.62)` a `.35` en textos de 11–16 px | 4.42:1 → 2.11:1 | una sola tinta secundaria `#6a6764` — 5.34:1 sobre marfil, 4.86:1 sobre hueso |
| `#c1755a` en etiquetas y numerales | 3.35:1 | `#a2563d`, mismo tono dos pasos más oscuro — 5.08:1 |
| Marfil sobre el relleno `#d98a6c` | 2.56:1 | el relleno se conserva; el texto pasa a tinta — 5.86:1 |
| Silueta del botón contra el fondo | 2.56:1 | una línea de `#a2563d` le da borde — 5.08:1 |
| `border: rgba(38,34,31,.35)` del botón contorneado | 2.11:1 | `#8b8884` — 3.35:1 |
| `rgba(242,238,231,.45)` sobre petróleo | 3.53:1 | usa la misma tinta que el cuerpo — 6.49:1 |

El relleno salmón **no** se oscureció. El brief lo describe como «luminoso
y refinado» y bajarlo a terracota habría traicionado más la intención que
cambiar el color del texto encima.

La jerarquía que sostenían esas alfas la sostienen ahora el tamaño y el
acento, que es donde el diseño ya la tenía de todos modos.

`scripts/contrast.mjs` verifica los 16 pares leyendo los tokens del propio
`globals.css`, así que la rampa y su verificación no pueden divergir.

### 2 · Rejillas en pantallas pequeñas

El diseño está dibujado a un solo ancho y fija `repeat(5,1fr)`,
`repeat(3,1fr)`, `1fr 1fr` y `auto 1fr` sin puntos de quiebre. Cinco
columnas de setenta píxeles no se leen en un teléfono, y el alcance
incluye la versión móvil de todas las páginas. Todas apilan por debajo de
su punto de quiebre y recuperan la forma del diseño en cuanto hay ancho.

Lo mismo con la barra: cuatro elementos no caben en una fila de 64 px a
390 px de ancho. Los enlaces bajan a una segunda fila en vez de
esconderse — esconderlos habría eliminado la navegación justo donde más
se usa.

### 3 · La entrada por scroll

El diseño la resuelve con un bucle de `requestAnimationFrame` que recorre
todo el DOM cada 120 ms y quita `opacity: 0` a lo que entra en pantalla.
Aquí es un `IntersectionObserver` por bloque, y el estado inicial lo pone
el JS en un atributo, nunca el CSS base.

La diferencia importa: con `opacity: 0` en el CSS, un error de script, un
navegador que restaura el scroll más abajo, un bot o alguien con JS
apagado se llevan una página en blanco. Verificado: `data-enter` no
aparece ni una vez en el HTML servido de ninguna de las cinco páginas.

### 4 · Estados de interacción

El diseño trae `style-hover`, que es un atributo del lienzo. En el sitio
eso se convierte en estados reales, y se añaden los que faltaban:

- `:active` en todo control, respondiendo en pointer-down y no al soltar.
- `:focus-visible` con anillo de 2 px a 5.08:1, que cambia al salmón claro
  sobre petróleo porque el oscuro ahí cae a 2.2:1.
- Las seis superficies que nadie tematiza: `::selection`, `caret-color`,
  el pulgar del scrollbar, el anillo de foco, el desplazamiento del
  subrayado y `color-scheme`.
- `prefers-reduced-motion`: se va el desplazamiento vestibular, el cambio
  de estado sigue siendo legible como fundido. No es un interruptor que
  apague todo.
- Semántica antes que ARIA: `<a>` para navegar, `<button>` para actuar,
  ningún `div` con click, ningún ARIA que duplique un rol nativo, enlace
  de salto al contenido, jerarquía de encabezados sin saltos y sin ids
  repetidos.

### 5 · El enlace de agenda

`{{ calendlyUrl }}` es un prop del lienzo con `https://calendly.com/` por
defecto. En el sitio es `NEXT_PUBLIC_BOOKING_URL`, y sin él el llamado
dice «Agenda en preparación» en vez de apuntar a un destino genérico. Una
página con acabado completo cuyos enlaces no llevan a ninguna parte
desperdicia justo a quien ya había decidido.

### 6 · Los `<image-slot>`

Tres en el diseño: el póster del video, la fotografía de la sección de la
idea y el retrato. Aquí son `<MediaFrame>`, con la caja ya reservada y las
dimensiones intrínsecas puestas para que sustituir el archivo no mueva el
layout ni haga saltar la página al cargar.

**Los tres llevan hoy una fotografía de banco con licencia Pexels**, a
petición explícita, para poder enseñar la página completa antes de que
exista el material propio. Están marcadas `provisional: true` y listadas
con sus créditos en `public/media/README.md`. Es una decisión de
presentación, no de diseño: hay que sustituirlas antes de publicar.

Dos criterios gobernaron la elección. El primero, que la fotografía
sostenga la paleta —muro cálido con sombras de árbol, bosque en niebla
templada, ventana de luz alta— en vez de pelearse con el marfil, que es
justo lo que rompe una apertura. El segundo, que el retrato fuera **de
espaldas**: la licencia de Pexels prohíbe usar personas identificables de
forma que sugiera que respaldan algo, y una cara desconocida en «Quién
acompaña» afirmaría que esa persona es la terapeuta.

Sigue fuera lo que nunca entra: servicios de imagen falsa
(`placehold.co`, `pravatar`, `shadcn.png`), UI inventada hecha de `<div>`s
y stock corporativo de oficina.

### 7 · Tres secciones re-maquetadas

Estas tres no son correcciones de accesibilidad: son cambios de maqueta,
contrastados contra patrones reales en Mobbin. Revertirlas es volver a la
rejilla del `.dc.html`, que sigue siendo válida.

**El método.** El diseño lo resuelve en cinco columnas de una sola fila.
A 1280 px cada una mide ~230 px y el texto baja a 13.5 px; es la sección
que carga el contenido más importante y la que menos peso tiene en la
página. Ahora es una columna fija a la izquierda —etiqueta, título,
entrada— y a la derecha las cinco operaciones apiladas, cada una con su
numeral en Cormorant a 38–60 px y filete de separación. El numeral grande
es el mismo recurso que ya usa la sección de los 21 días, así que la
página gana una rima en vez de un idioma nuevo, y en un teléfono apila
sola. Referencias: [Trawelt](https://mobbin.com/sites/sections/629aae31-4a94-46df-a97f-3180a6ae22e0),
[Dovetail](https://mobbin.com/sites/sections/0c8a622e-7ba8-4695-8e33-c1a6138dda78).

**Historias.** El diseño parte el caso en dos tarjetas lado a lado —«lo
que descubrió» y «lo que cambió»— y eso convierte un relato en una
comparación: las dos mitades se leen a la vez y se pierde el antes y el
después. Ahora es una sola columna: entrada, los dos pasajes con su
rótulo en versalitas como entradilla, y la frase de cierre en Cormorant a
26–40 px rompiendo la medida de lectura, que es lo que la hace sonar.
Referencia: [Whereby](https://mobbin.com/sites/sections/56383313-4a3b-42ff-bb66-44860583d03f).

**La invitación.** Tres columnas iguales afirman que las tres dudas pesan
lo mismo y se leen en paralelo; se leen en serie. Ahora el título se queda
fijo a la izquierda y las tres bajan como lista con filetes.

Las respuestas siguen **abiertas**. El patrón dominante para esta sección
es el acordeón —[Teak](https://mobbin.com/sites/sections/71b84103-e862-4f0f-adaf-a6260f899849),
[Podia](https://mobbin.com/sites/sections/fcace04c-ea2f-4d51-b4b5-6e69d8ebe25b),
[Canva](https://mobbin.com/sites/sections/11a2f003-2f41-42b0-9327-dd464cf24435)—
y aquí se descartó a propósito: el brief pide responder las resistencias
mediante claridad, y un acordeón esconde justo la respuesta que la persona
había venido a buscar.

---

## Lo que este proyecto se negó a hacer

- Cifras redondas inventadas, muros de testimonios, insignias de confianza.
- Un botón de reproducción sobre el póster mientras no haya video: un play
  que no reproduce nada es un control muerto.
- shadcn/ui, que habría traído `rounded-2xl`, Geist y Lucide a 1.333 px de
  trazo dentro de los botones.
- Publicar el caso de la sección Historias sin autorización. Ver README.
