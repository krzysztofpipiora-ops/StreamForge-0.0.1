import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glassBase: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        glassGlow: '0 0 20px rgba(157, 92, 255, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
