import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // El directorio personal del usuario tiene un package-lock.json suelto y
  // Turbopack lo toma como raíz del workspace. Se ancla aquí para que el
  // build no dependa de qué haya fuera del proyecto.
  turbopack: { root: import.meta.dirname },

  // «Contrato de sesión» vivió en /contrato hasta que llegó el documento
  // real, que es la plantilla de términos y condiciones de RTT.
  async redirects() {
    return [{ source: '/contrato', destination: '/terminos', permanent: true }];
  },
};

export default nextConfig;
