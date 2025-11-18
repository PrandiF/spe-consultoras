import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["es", "en"], // idiomas soportados
    defaultLocale: "es", // idioma por defecto
  },
};

export default nextConfig;
