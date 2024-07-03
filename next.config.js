// next.config.js
module.exports = {
  output: 'export',  // Configura Next.js para exportación estática
  distDir: 'out',   // Define el directorio de salida como 'out'
  images: {
    unoptimized: true,  // Desactiva la optimización de imágenes, opcional
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
};
