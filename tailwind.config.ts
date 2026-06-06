import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          50: '#FFFEF9',
          100: '#FAF7F2',
          200: '#F2EDE3',
          300: '#EDE8DF',
          400: '#E0D8CB',
        },
        wine: {
          DEFAULT: '#2D6475',
          light: '#3B7A8E',
          dark: '#1E4D5C',
          deeper: '#0F2E38',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#DEC068',
          dark: '#A8882E',
          muted: '#D4B86A',
        },
        brown: {
          DEFAULT: '#5C3D2E',
          light: '#7A5240',
          dark: '#3D2720',
        },
        charcoal: {
          DEFAULT: '#1A1210',
          light: '#2D2220',
        },
        beige: {
          DEFAULT: '#EDE8DF',
          warm: '#E8E0D0',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },  
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(45, 100, 117, 0.08), 0 1px 2px rgba(45, 100, 117, 0.04)',
        'warm-md': '0 4px 16px rgba(45, 100, 117, 0.10), 0 2px 6px rgba(45, 100, 117, 0.06)',
        'warm-lg': '0 10px 40px rgba(45, 100, 117, 0.12), 0 4px 16px rgba(45, 100, 117, 0.06)',
        'warm-xl': '0 20px 60px rgba(45, 100, 117, 0.15), 0 8px 24px rgba(45, 100, 117, 0.08)',
        'gold': '0 4px 20px rgba(201, 168, 76, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, #FAF7F2 0%, #EDE8DF 100%)',
        'gradient-wine': 'linear-gradient(135deg, #1E4D5C 0%, #2D6475 50%, #3B7A8E 100%)',
        'gradient-gold': 'linear-gradient(135deg, #A8882E 0%, #C9A84C 50%, #DEC068 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
