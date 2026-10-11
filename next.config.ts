import type { NextConfig } from "next";

// Export statique : le dossier out/ s'héberge n'importe où (GitHub Pages, Vercel, Netlify).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
