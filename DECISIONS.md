# Decisiones — Carol Leyva

La portada nació de `SYNAPTICA Home.dc.html`, el diseño del proyecto de
Claude Design, y **la junta del 29 de agosto de 2026 lo reencuadró**: se
cayó la marca «Sináptica» y el eje pasó del método a la persona. Este
archivo registra el sistema que el diseño define, dónde la implementación
se separa de él y por qué, y lo que la junta cambió encima.

## Lo que cambió la junta

- **Se cae «Sináptica».** Hay una clínica en Barcelona con ese nombre que
  trata trastornos mentales con psicodélicos: mismo sector, misma
  búsqueda, choque de identidad y de posicionamiento.
- **El eje pasa a la marca personal.** «Que la fuerza de esto no sea tanto
  el método, sino tú, y que a través de ti conozcan eso.» La portada se
  reordenó: ella abre, y «Quién acompaña» subió del sexto movimiento al
  segundo.
- **El método se queda sin nombre.** NADS quedó descartado por la lectura
  de sus siglas en inglés y no hay sustituto. El copy dice «el método»
  hasta que ella lo nombre; el día que lo haga se pone en `methodName`
  (`content/brand.ts`) y nada más cambia.
- **Entra `/escuelas`**, el protocolo de cinco semanas, con su propia
  entrada en la barra: se dirige a direcciones escolares, no a pacientes.
- **Los legales van en subpágina**, enlazados desde el pie.

## Lo que cambió la revisión de la sección 1

- **Vuelve el hero original**, «Tal vez nunca hubo nada roto en ti»: Carol
  lo percibe más emocional y directo que la pregunta que lo sustituyó. La
  pregunta volvió a abrir «Quién acompaña», que sigue en el segundo
  movimiento.
- **Su nombre vive sólo en la barra**, arriba a la izquierda, con «Founder •
  Clinical Hypnotherapist • RTT» debajo. La barra creció de 64 a 84 px, y
  su fondo pasó de 78 % a 92 % de opacidad: con 78 %, al cruzar las
  secciones en petróleo, ese texto pequeño caía a 3.54:1.
- **El nombre del método o su slogan irá siempre en inglés.** Concepto en
  estudio: «Neural Recalibration Therapy». Sigue pendiente.
- **El menú dice «Schools»**, y «Young Minds» queda como nombre del programa
  dentro de la página.
- **El selector de idioma espera** a que se cierren los textos en español,
  para traducir una sola vez.

## Lo que se tomó de las referencias de Carol

Carol mandó cinco referencias con un análisis en buena parte hecho con
ChatGPT. Se revisaron los sitios vivos:

- **Marisa Peer**: la persona va primero y el método aparece como su
  creación; eso ya lo hace este sitio. Se tomó la arquitectura de
  *puertas* —hoy «Sesiones individuales» y «Schools»; la formación sería la
  tercera—. No se tomó nada de su embudo de venta (descuentos, cuentas
  regresivas, regalos), que contradice el brief.
- **Esther Perel**: no ofrece sesiones; es un ecosistema de medios. Es
  visión a 5–10 años. No se construyen secciones de contenido vacías.
- **Maren & Co. (Dribbble)**: el método y los 21 días se contaron como un
  ritmo en una sola banda oscura; una palabra en itálica por titular; una
  sola cita grande en vez del relato.
- **Woven**: confirma el nombre centrado y un solo botón suave.
- **Project Mindset**: clínica con equipo; estructura genérica, no aplica.

La secuencia que propone el análisis —persona → filosofía → enfoque →
metodología → método propio— ya era la del sitio. El cambio fue
aligerarlo: la portada pasó de 9 bloques a 8, con una sola banda en
petróleo.

Lo que la junta **validó y no se tocó**: la estructura limpia y corta, la
paleta y el registro elegante con calidez.

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

Tres tipografías con tres trabajos, elegidas por Carol sobre una lámina de
referencia:

| Rol | Tipografía |
|---|---|
| Nombre / marca | **Newsreader 600**, versalitas espaciadas |
| Titulares y hero | **Newsreader 400**, con eje óptico e itálica real |
| Etiquetas, menú, botones, cifras | **Montserrat 500**, versalitas |
| Texto corrido | **Lora 400** |

Cómo se llegó aquí, porque el camino explica la decisión. El diseño traía
Cormorant Garamond + Inter, que Carol encontró «un poquito comunes».
Petrona se fue al lado opuesto: una serif de texto, cálida y gruesa. Noto
Serif Display, finísima, acertó el registro editorial de sus referencias
(GT Super, Canela, Ivar, Silver Editorial) pero la página terminó
viéndose, en sus palabras, **«demasiado femenina»**.

El diagnóstico real no era la serif: era que **una sola serif muy fina
hacía de nombre, titular, etiqueta y texto a la vez**. Sin contraste entre
roles, todo se leía igual de delicado. La combinación actual lo resuelve
con tres saltos: el semibold del nombre, la geometría en versalitas de
Montserrat para lo funcional, y una serif de lectura con más cuerpo en los
párrafos.

Newsreader tiene itálica real, que la página necesita para la palabra en
cursiva de cada titular.

`/tipografia` (sin enlazar, sin indexar) compara la combinación actual con
Neuton en el cuerpo y con Libre Caslon Display en los titulares, que es la
otra que le llamó. Cambiarla son tres llamadas en `app/layout.tsx` y tres
variables en `app/globals.css`.

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
numeral en la serif de display a 38–60 px y filete de separación. El numeral grande
es el mismo recurso que ya usa la sección de los 21 días, así que la
página gana una rima en vez de un idioma nuevo, y en un teléfono apila
sola. Referencias: [Trawelt](https://mobbin.com/sites/sections/629aae31-4a94-46df-a97f-3180a6ae22e0),
[Dovetail](https://mobbin.com/sites/sections/0c8a622e-7ba8-4695-8e33-c1a6138dda78).

**Historias.** El diseño parte el caso en dos tarjetas lado a lado —«lo
que descubrió» y «lo que cambió»— y eso convierte un relato en una
comparación: las dos mitades se leen a la vez y se pierde el antes y el
después. Ahora es una sola columna: entrada, los dos pasajes con su
rótulo en versalitas como entradilla, y la frase de cierre en la serif de display a
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
- Llamarla «Dra.»: en la junta dijo que todavía no tiene doctorado.
- Inventar el contenido de las cinco semanas del protocolo escolar. Es
  material que se va a aplicar con menores en un aula; los cinco huecos se
  declaran y esperan.
- Rellenar los legales con una plantilla genérica. Un aviso de privacidad
  inventado es peor que su ausencia: afirma compromisos que nadie revisó y
  que ella tendría que sostener frente a un paciente.
- Un botón de reproducción sobre el póster mientras no haya video: un play
  que no reproduce nada es un control muerto.
- shadcn/ui, que habría traído `rounded-2xl`, Geist y Lucide a 1.333 px de
  trazo dentro de los botones.
- Publicar el caso de la sección Historias sin autorización. Ver README.

---

## 23 de septiembre — revisión visual en PC y en móvil

Primera revisión hecha mirando la página renderizada de verdad (Chrome sin
interfaz, midiendo el DOM) y no sólo el código. Salieron tres cosas.

**El token `--spacing-block` rompía la página entera.** Tailwind v4 genera
una utilidad por cada token de espaciado, así que `inline-block` dejaba de
ser un valor de `display` y pasaba a significar `inline-size: 4rem`. Todos
los enlaces de la barra y del pie medían 64 px: «El método» se partía en
dos líneas y, en el pie, «Consentimiento» y «Uso de testimonios» se
encimaban. El token se llama ahora `--spacing-major`. Regla que queda:
ningún token de espaciado puede llamarse como una palabra de `display`
—block, flex, grid, table, contents—.

**El titular de «Quién acompaña» rompía mal.** Era la pregunta más larga de
la portada y llevaba un corte escrito a mano que dejaba «verdad,» sola en
una línea, con medio ancho vacío al lado. Ahora es una sola cadena que se
reparte con `text-balance`: dos líneas parejas.

**Los logos de acreditación son el bloque más flojo.** Diez marcas con
pesos ópticos muy distintos, en filas de 3, 4 y 3. Pendiente de rehacer:
altura óptica igualada y rejilla pareja, o dejar sólo los dos sellos de
Carol y poner el resto como una línea de texto.

---

## 28 de septiembre — Didot + Proxima Nova

Carol cerró la tipografía: Didot para el logo y los titulares, Proxima Nova
para el cuerpo y las etiquetas. Es la sexta vuelta (Cormorant, Petrona, Noto
Serif Display, el trío Newsreader/Montserrat/Lora) y es la mejor de todas,
por una razón estructural: pone la didona sólo donde es grande y deja que
una sans haga todo el trabajo de lectura. Las anteriores le pedían a una
serif fina que hiciera de nombre, titular, etiqueta y párrafo a la vez.

**Cómo quedó montada.**

- Didot se sirve desde el propio dominio: `app/fonts`, subconjunto latino,
  tres cortes de ~19 kB. Regular e itálica para titulares, Bold para el
  nombre.
- El nombre va en **Bold**, no en el corte de texto ni en «Didot Title». A
  20 px con 4 px de separación, los trazos finos de una didona se quedan en
  un hilo y la marca se ve descolorida. «Didot Title» se descartó por otra
  razón: a tamaño de titular es indistinguible del regular.
- Proxima Nova viene del kit de Adobe Fonts de Nico, con `preconnect`.
- La cita de «La idea» subió de 20 a 21-24 px: es el cuerpo más pequeño en
  que aparece la didona y a 20 px se deshilachaba.
- Los botones y las etiquetas van en Semibold (600). El kit traía sólo 400 y
  700, con lo que un 500 lo resolvía el navegador saltando a 700 y la
  etiqueta se volvía un bloque; Nico añadió el Semibold al proyecto web el
  mismo día y es el peso que quedó.

**Dos cosas que hay que resolver antes de publicar.**

1. **La licencia del Didot.** El archivo que llegó no es el Didot de
   Linotype ni el de Hoefler: es «DietDidot», de A. Chekulaev / Double Alex
   Font Studio, distribuido con el nombre `Didot`. El paquete no trae
   ninguna licencia (ni cadena de licencia ni URL en los metadatos) y uno de
   los cuatro cortes lleva `fsType 4`, que restringe el empotrado a vista
   previa e impresión. Para una web comercial hace falta una licencia web
   explícita. Sirve para ver y decidir; no para publicar.
2. **A nombre de quién va el kit de Adobe.** Proxima Nova se sirve hoy desde
   el proyecto web de la cuenta de Nico. Cuando el sitio pase a Carol, la
   licencia debería colgar de la suya: si esa cuenta cambia o caduca, la
   página se queda sin su tipografía de lectura.

**Lo que no se hizo.** Cambiar a Bodoni Moda «porque es libre». La didona
que eligió Carol es la que eligió; lo que falta es su licencia, no otra
tipografía.

**Nota sobre la licencia del Didot (28 de septiembre).** El propio archivo
lo confirma: «Copyright (c) 2006 by Double Alex Font Studio. All rights
reserved.» Eso es un aviso de copyright, no una cesión de uso: reserva todos
los derechos y no concede ninguno, ni de escritorio ni de web. No hay letra
pequeña que leer porque no hay licencia en el paquete.

---

## 28 de septiembre (tarde) — la barra de dos filas

Carol comparó la versión actual con la primera que se le enviaba y prefirió
aquélla: más aire arriba, el nombre con su propio renglón y el botón sin
relleno. Tenía razón en las tres cosas.

- **La barra pasa a dos filas.** Nombre y llamado arriba, menú abajo, todo
  a la izquierda como pidió en la revisión de la sección 1. El alto sube de
  64 a 93-108 px según la pantalla.
- **Se quita el menú desplegable.** Con el segundo renglón, los tres
  enlaces caben incluso a 320 px (miden 178 px juntos). Un desplegable es
  el precio que se paga cuando no caben; aquí sólo añadía un toque y
  escondía de qué habla la página. `components/mobile-menu.tsx` se borra.
- **El botón, sin relleno.** La píldora salmón fue la respuesta a una barra
  que se veía apagada; con el aire de la segunda fila ya no hace falta
  gritar, y el contorno encaja mejor con el «cero urgencia» del encargo.
- **El hero pierde la palabra en itálica.** «Se ve más pacífico», dijo
  Carol. La cursiva es un dedo que señala y la frase que abre la página no
  necesita que le señalen dónde mirar. Es el único titular sin ella; en los
  demás se queda.
- **La etiqueta de la apertura dice ahora «Advanced Neuro-Subconscious
  Therapeutics»**, en lugar de «Terapia de reconfiguración profunda». Va en
  la apertura y no bajo el nombre en la barra: es lo que alguien pregunta
  la primera vez que llega, no algo que deba repetirse en todas las
  pantallas de todas las páginas, y son cuarenta y tantos caracteres en
  versalitas que bajo la marca, en un teléfono, no caben en una línea.
  Vive en `methodDescriptor`; `methodName` sigue en `null`.

---

## 30 de septiembre — barra centrada y menú en inglés

- **Nombre y menú centrados**, como la referencia de Woven que eligió
  Carol. La rejilla `1fr auto 1fr` deja el nombre en el centro real aunque
  los lados midan distinto.
- **El menú, todo en inglés**: About · Method · Schools · Stories. La
  mezcla anterior («El método / Schools / Historias») era lo que le
  molestaba; deshacerla en español chocaba con que «Escuelas» ya lo había
  descartado. Queda abierto si, con el selector ES | EN, el menú sigue al
  idioma o se queda siempre en inglés como decisión de marca.
- **«About» entra al menú** y va primero: el eje del sitio es la marca
  personal. Apunta a la sección de la portada donde ella se presenta, que
  a su vez enlaza la historia completa.
- **La barra se queda sin ninguna caja.** La píldora era el único
  elemento con contorno de toda la barra, en una página hecha de hairlines
  y tipografía: se leía como un cuerpo extraño, y además la píldora de
  verdad vive al cierre de la portada, donde la acción toca. «Agenda» pasa
  a ser el último elemento del menú, en salmón oscuro (5.08:1): se
  distingue por color y posición, no por un marco. De paso desaparece el
  desequilibrio del teléfono, porque ya no cuelga nada de un lado.
- **El hueco de la izquierda está reservado para ES | EN**, no vacío por
  descuido. Hoy no se dibuja el selector porque no existe la versión en
  inglés y un selector que no cambia el idioma es un control muerto — el
  mismo criterio que con el botón de reproducir y con la agenda.

**Se descartó la hamburguesa.** Se planteó meter menú, agenda e idioma
dentro de un desplegable a la derecha. Un desplegable es el precio que se
paga cuando los enlaces no caben, y estos cinco caben en una línea hasta en
360 px. En una portada de una sola página el menú *es* la presentación:
dice en un segundo que hay un método, trabajo con escuelas y casos reales;
escondido, quien llega sólo ve un nombre. Y meter dentro la agenda anula la
única razón de que viva en la barra, que es estar siempre a mano.

**Cómo se comporta al estrecharse.** A 360 y 390 px el menú va en una línea
y el nombre queda centrado exacto; la barra mide 95-103 px. Por debajo de
unos 344 px el menú se reparte en dos líneas centradas y la barra crece
—por eso es `min-h-nav` y no `h-nav`—. En ningún ancho aparece scroll
horizontal. Los enlaces miden 38 px de alto para el dedo.

---

## 3 de noviembre — reescritura de Carol (apertura, reconocimiento, origen, método)

**Apertura.** Sin punto final en la frase. Párrafo nuevo, suyo, y en Didot
como pidió — a 21-24 px y no a 16, porque los trazos finos de una didona a
tamaño de texto se quedan en un hilo. Mucho más aire: 56 px entre la
etiqueta y el titular, 64 px entre el titular y el párrafo, y la barra pasa
de 103 a 152 px en escritorio.

**La etiqueta de la terapia cabe en un renglón.** Lo que la ensanchaba no
era el cuerpo sino la separación entre letras: a 3.2 px fijos se comía un
tercio del ancho. En `em` encoge con la letra. En un teléfono mide 320 px
de los 342 disponibles.

**El reconocimiento.** Cuatro frases cortas en vez de un párrafo corrido, y
un punto más grandes. «No es falta de voluntad» queda sola a propósito.

**El origen.** La sección se llamaba «La idea». Párrafos justificados con
corte de palabra (`hyphens: auto`, que funciona porque el documento declara
`lang="es-MX"`): sin el corte, el justificado abre huecos enormes en una
columna estrecha.

**El método.** La etiqueta en salmón sobre el petróleo (5.41:1). El titular
sin itálica y todo en el mismo claro. Texto nuevo, más la línea entre
guiones. **Carol cambió el orden de IV y V**: antes Integración era el audio
e Instalación el seguimiento; ahora el audio instala y la integración es la
continuidad posterior, que es el orden en que ocurre.

**Correcciones de ortografía sobre los textos recibidos**, todas menores y
señaladas a Nico: «Sé» con acento y «por qué» separado; «patrón» con
acento; «esa huella», que es femenina; «veintiuna noches», que no se
apocopa delante de femenino; y los espacios delante de coma, que en español
no van.

**Queda por decidir.** Carol pidió quitar la itálica de los titulares de la
banda del método, y ya la había quitado de la apertura. En «El origen»
escribió «Es un mensaje» sin marcarla, pero se mantuvo. O el recurso se
retira de toda la página o se queda en las secciones claras: hoy está a
medias.

---

## 3 de noviembre (tarde) — marca, color y copy

**Se retiró la palabra en itálica de todos los titulares.** Carol la quitó
de la apertura, luego de la banda del método, luego de «Quién acompaña», y
reescribió «El origen» sin ella. Tenerla en la mitad de los títulos y no en
la otra se leía como descuido. `components/section.tsx` sigue entendiendo
`*palabra*` por si se quisiera recuperar en algún título suelto.

**Nombres nuevos.** El programa escolar se llama **Mettle Youngs · By RTT
Schools**, con «The Neuroconfidence Curriculum · 5-Week Protocol»;
sustituye a «Young Minds». El audio de los 21 días es el **Neuroplastic
Reinforcement Track**. Las sesiones pasan a ser una **experiencia
personalizada de 90 días**. El llamado se llama **Book Discovery Call**, en
inglés como el menú.

**Color.** El llamado principal cambia de salmón a **«Midnight Bordeaux»
#2a070c**, con el texto en marfil (17.6:1) y en Didot, en caja alta y baja:
es la única pieza de interfaz que lleva la letra de la marca.

Carol preguntó si el vino debía sustituir también al salmón en los
titulares y sobre el fondo petróleo. **En el petróleo, no**: el vino sobre
#22363a da 1.46:1, es decir, invisible. El reparto queda así, y es lo que
hace que el llamado destaque:

- **Vino** — sólo el botón de acción. No decora nada más.
- **Salmón oscuro** `#a2563d` — etiquetas, numerales y enlaces sobre claro.
- **Salmón cálido** `#e0987d` — lo mismo sobre la banda oscura.

**El pie pasa a petróleo**, el mismo de la banda del método. Carol lo quería
«negro o burgundy»; de la paleta que mandó, «Dark Night» es prácticamente
este color, y añadir un cuarto oscuro sólo para el pie habría partido la
gama. Se añadió el par `deep-ink-2 / deep` al verificador y una variante de
`.link-quiet` para el fondo oscuro: el gris medio caía a 2.1:1.

**El sello RTT for Schools** entra en las certificaciones propias. Llegó
como captura de pantalla, con fondo verde agua y un filete negro de 1 px en
dos bordes; va recortado al anillo, cuadrado y teñido en la tinta del sitio
como los otros doce. Si se vuelve a tocar, hay que borrar `.next/cache/images`:
el optimizador cachea por URL y seguía sirviendo la versión anterior.


---

## 3 de noviembre (noche) — el alto de la barra y las páginas internas

El token `--spacing-nav` seguía valiendo lo que medía la barra de una sola
fila. Con la barra de dos filas se quedaba 50 px corto, y como de él
dependen el arranque de las páginas internas y el margen de las anclas, a
768 px el título de `/historias` aparecía a **4 px** del borde de la barra.
Afectaba a todas las páginas internas, no sólo a esa.

Ahora el token vale lo que la barra mide de verdad: 8.5 rem en el teléfono
y 9.5 rem desde `sm`. No es un `clamp` por ancho porque la barra da un
salto en ese punto de quiebre —el nombre pasa de 16 a 20 px y la separación
entre filas de 22 a 34—, y un clamp continuo volvía a quedarse corto justo
en las anchuras intermedias. Verificado a 390, 768 y 1440: 63 px de aire en
los tres.

**Lo que no se tocó.** Se probó subir el borgoña del llamado a `#6e1b2a`,
porque `#2a070c` tiene tan poca luz que se lee como negro. Se revirtió: el
color lo eligió Carol y lo tiene que ver como lo pidió. También se revirtió
centrar la cabecera de las páginas internas — era una decisión de diseño
que nadie había pedido.

---

## 7 de noviembre — aire en la apertura, itálicas y reconocimiento en dos párrafos

Sobre la base del 5 de noviembre, que se mantiene entera: vino mauve, pie
en gris piedra, copy corto y «RTT School Programs».

**La apertura, «muy aireada».** El párrafo vuelve a la sans —Carol probó la
didona y prefirió la letra de contraste, la del menú: «transmite mejor»— y
baja de 21-24 px a 16-19.

El aire de arriba estaba mal medido: `pt-hero` se contaba desde el borde de
la página y, como la barra es fija, se comía la mitad. En un teléfono la
etiqueta del método quedaba a 32 px del menú. Ahora el padding es
`nav + clamp(56px, 7vw, 104px)` y el hueco es real.

**Vuelven tres itálicas**, que el 5 de noviembre se habían quitado: la cita
de «El origen», la del caso y la línea entre guiones del método. Las pidió
Carol expresamente. La pregunta grande del reconocimiento se queda sin
itálica, porque de ésa no dijo nada.

**La línea del método** se saca del bloque del titular —640 px de ancho, su
«centro» caía a un tercio de la banda— y pasa a centrarse en la banda
entera.

**El reconocimiento** conserva el texto corto del 5 de noviembre, repartido
en dos párrafos justificados bajo la pregunta centrada.

**Incidencia.** Esta sesión trabajó varias horas sobre el estado del 3 de
noviembre sin saber que existía el commit del día 5, y llegó a desplegar
esa versión a producción: durante ese rato el sitio sirvió el vino oscuro,
el pie en petróleo y el copy largo. Se detectó al hacer `push`, que fue
rechazado. Lo de hoy se rehízo sobre el commit del día 5 en vez de forzar
el rebase. Para la próxima: `git pull` antes de empezar, no al terminar.
