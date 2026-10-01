import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tema "Leome" en azul: fondo marino profundo + acento hielo
        paper: '#071A33',      // fondo principal (azul marino)
        cream: '#0A2140',      // superficies
        mist: '#0E2A50',       // superficies suaves
        line: '#24426E',       // líneas finas
        ink: '#E4EEFF',        // texto principal (claro)
        abyss: '#A9D1FF',      // acento hielo (botones / enlaces)
        intense: '#A9D1FF',    // acento hielo
        atlantic: '#86A9D6',   // texto secundario azul
        night: '#04122A',      // azul noche
        haze: '#C9DAF3',
        sky: '#A9D1FF',
        ice: '#A9D1FF',
        navy: '#071A33',
      },
      fontFamily: {
        sans: ['"Manrope Variable"', 'system-ui', 'sans-serif'],
        serif: ['"Manrope Variable"', 'system-ui', 'sans-serif'],
      },      letterSpacing: { tightest: '-0.035em' },
      boxShadow: {
        soft: '0 1px 0 rgba(169,209,255,.04)',
        lift: '0 2px 4px rgba(11,26,48,.05), 0 30px 60px -20px rgba(10,30,66,.28)',
      },
      maxWidth: { page: '1320px' },
    },
  },
  plugins: [],
} satisfies Config
