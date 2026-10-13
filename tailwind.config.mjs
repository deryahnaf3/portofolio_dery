/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        accent: {
          400: '#34d399',
          500: '#10b981',
        },
        industrial: {
          gold: '#f59e0b',
          navy: '#0b132b',
          surface: '#111c38',
          card: '#162244',
          border: '#1f305e',
        }
      }
    },
  },
  plugins: [],
}
