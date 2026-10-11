import type { NextConfig } from "next";

// Export statique : le dossier out/ s'héberge n'importe où (GitHub Pages, Vercel, Netlify).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Page 404 commune aux deux langues (app/global-not-found.tsx)
  experimental: { globalNotFound: true },
};

export default nextConfig;
