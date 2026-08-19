# Medios pendientes

Cada archivo corresponde a un hueco declarado en `content/media.ts` — los
tres `<image-slot>` del diseño más la pieza de video. Mientras no exista,
el sitio dibuja un bloque tonal que dice qué va dentro y con qué
especificación. No un placeholder genérico, no stock, no la foto de otra
persona.

**Para sustituir uno:** deja el archivo aquí con el nombre exacto de la
tabla y cambia `available: false` a `true` en `content/media.ts`. El layout
no se mueve: la caja ya está reservada.

| Archivo | Dónde | Forma |
|---|---|---|
| `pelicula.mp4` | Apertura | 16:9, la pieza de 90–150 s |
| `pelicula-poster.jpg` | Apertura | 16:9, fotograma fijo |
| `naturaleza.jpg` | La idea | vertical, alto `clamp(380px, 48vw, 600px)` |
| `retrato.jpg` | Quién acompaña | vertical, alto `clamp(420px, 52vw, 640px)` |

---

## Brief de producción del video

De la propuesta. Compártelo con quien produzca la pieza; si algo de esto
cambia, la apertura deja de funcionar como está diseñada.

**Duración.** 90 a 150 segundos. Los primeros quince abren con la
pregunta, sin mencionar terapia ni hipnosis.

**Formato.** 16:9 horizontal, 1080p mínimo —4K preferible—, H.264. Y una
versión vertical 9:16 para redes.

**Loop de apertura.** Además de la pieza: 6 a 10 segundos sin voz, un
plano contemplativo, para que la página tenga movimiento silencioso antes
de que el visitante decida reproducir.

**Póster.** Un fotograma fijo en alta resolución. Es lo primero que se ve
y lo que sostiene el bloque de la apertura: tiene que funcionar solo.

**Subtítulos.** Archivo `.srt` en español y en inglés. Buena parte de las
visitas ocurre en silencio.

**Paleta en cámara.** Neutros cálidos y luz orgánica. Si el color del
video pelea con el marfil de la página, la apertura se rompe.

## Fotografía

Luz natural, profundidad de campo, arquitectura contemporánea y
naturaleza. Retratos honestos: presencia antes que perfección. Sin stock
corporativo y sin manos sosteniendo luz.
