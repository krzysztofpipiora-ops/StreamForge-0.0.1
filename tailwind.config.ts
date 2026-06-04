import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#9D5CFF',
          soft: '#7A3BFF',
          accent: '#00E5FF',
          punch: '#FF2D7B',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.12)',
          medium: 'rgba(255, 255, 255, 0.18)',
          strong: 'rgba(255, 255, 255, 0.24)',
        },
        twitch: '#9146FF',
        youtube: '#FF0000',
        kick: '#53FC18',
        facebook: '#1877F2',
        discord: '#5865F2',
        tiktok: '#000000',
      },
      borderRadius: {
        glass: '20px',
      },
      boxShadow: {
        glassBase: '0 18px 55px rgba(0, 0, 0, 0.22)',
        glassGlow: '0 0 36px rgba(157, 92, 255, 0.18)',
        glassSoft: '0 0 18px rgba(0, 229, 255, 0.14)',
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        pulseRing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.65' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.8s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
    },
  },
  safelist: [
    { pattern: /bg-(twitch|youtube|kick|facebook|discord|tiktok)/ },
    { pattern: /text-(twitch|youtube|kick|facebook|discord|tiktok)/ },
    { pattern: /border-(twitch|youtube|kick|facebook|discord|tiktok)/ },
  ],
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
}

export default config
