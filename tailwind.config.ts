import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#080C14',
          800: '#0B1020',
          700: '#0D1424',
        },
        brand: {
          blue: '#2563FF',
          cyan: '#60D8FF',
          violet: '#7C4DFF',
          silver: '#C7D4E5',
          white: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        sora: ['var(--font-sora)', 'Sora', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563FF 0%, #60D8FF 50%, #7C4DFF 100%)',
        'radial-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      keyframes: {
        'drift': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-1.5%, 1%) rotate(1.5deg)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.9' },
        },
        'orbit-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'drift-slow': 'drift 40s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'orbit-spin-slow': 'orbit-spin 120s linear infinite',
        'orbit-spin-slower': 'orbit-spin 200s linear infinite reverse',
      },
    },
  },
  plugins: [],
};

export default config;
