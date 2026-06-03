import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import formsPlugin from '@tailwindcss/forms'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/glass/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'bg-[#9146FF]', 'bg-[#FF0000]', 'bg-[#53FC18]', 'bg-[#1877F2]', 'bg-[#FF0050]', 'bg-[#5865F2]',
    'text-[#9146FF]', 'text-[#FF0000]', 'text-[#53FC18]', 'text-[#1877F2]', 'text-[#FF0050]', 'text-[#5865F2]'
  ],
  theme: {
    extend: {
      colors: {
        background: '#070711',
        accentPurple: '#9D5CFF',
        accentCyan: '#00E5FF',
        accentMagenta: '#FF2D7B',
        successGreen: '#00FF88',
        warningGold: '#FFB800',
        textPrimary: 'rgba(255, 255, 255, 0.95)',
        textSecondary: 'rgba(255, 255, 255, 0.55)',
        twitch: '#9146FF',
        youtube: '#FF0000',
        kick: '#53FC18',
        facebook: '#1877F2',
        tiktok: '#FF0050',
        discord: '#5865F2'
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        sans: ['Satoshi', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      borderRadius: {
        glass: '20px'
      },
      boxShadow: {
        glassBase: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
        glassGlow: '0 0 24px rgba(157, 92, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
      },
      keyframes: {
        shimmerEffect: {
          '100%': { transform: 'translateX(100%)' }
        },
        floatAnimation: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        shimmer: 'shimmerEffect 2.5s infinite',
        float: 'floatAnimation 4s ease-in-out infinite'
      }
    }
  },
  plugins: [animatePlugin, formsPlugin]
}

export default config
