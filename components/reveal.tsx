'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * La entrada por scroll del diseño, como mejora y nunca como condición.
 *
 * El servidor manda el contenido visible. Sólo en el cliente, y sólo para
 * lo que aún no ha entrado en pantalla, se arma la animación. Si el
 * observer no dispara —un error de script, un navegador que restaura el
 * scroll más abajo, un bot, alguien con JS apagado— el texto ya estaba
 * ahí. El fallo contrario, `opacity: 0` en el CSS base con una clase que
 * el JS nunca pone, publica una página cuyo contenido no existe.
 *
 * El diseño resuelve esto con un bucle de rAF que recorre todo el DOM cada
 * 120 ms; aquí es un IntersectionObserver por bloque, que hace lo mismo
 * sin trabajo por frame.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'li' | 'section' | 'article';
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    // Ya visible al montar: se deja como está. Animar lo que el lector
    // está mirando produce un parpadeo, no una entrada.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.dataset.enter = 'pending';
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.dataset.enter = 'in';
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{ '--enter-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
