import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',                // Exportation statique pour GitHub Pages
    images: { unoptimized: true },   // Désactive l'optimisation serveur des images
    basePath: '/mon-projet',        
    assetPrefix: '/mon-projet/',
};

export default nextConfig;
