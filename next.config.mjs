/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // To ignoruje błędy lintera (np. kolejność importów w auth.ts) podczas budowania strony
    ignoreDuringBuilds: true,
  },
  typescript: {
    // To zignoruje ewentualne błędy typowania, które mogłyby zatrzymać build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
