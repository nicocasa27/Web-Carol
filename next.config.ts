import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // El directorio personal del usuario tiene un package-lock.json suelto y
  // Turbopack lo toma como raíz del workspace. Se ancla aquí para que el
  // build no dependa de qué haya fuera del proyecto.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
