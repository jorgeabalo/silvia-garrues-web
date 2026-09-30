import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',      // blanco
        cream: '#F5F8FC',      // blanco azulado
        mist: '#EEF3FA',       // gris azulado muy claro
        line: '#DEE6F1',
        ink: '#0B1830',        // azul casi negro
        abyss: '#0F2A5C',      // azul profundo
        intense: '#1F56D6',    // azul intenso
        atlantic: '#3A6FB5',   // azul medio
        night: '#07142B',      // azul noche
        haze: '#C9DAF3',       // azul muy claro
        sky: '#6FA8FF',        // acento azul luminoso
      },
      fontFamily: {
        sans: ['"Inter Tight Variable"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: { tightest: '-0.045em' },
      boxShadow: {
        soft: '0 1px 2px rgba(11,26,48,.04), 0 12px 40px -12px rgba(11,26,48,.14)',
        lift: '0 2px 4px rgba(11,26,48,.05), 0 30px 60px -20px rgba(10,30,66,.28)',
      },
      maxWidth: { page: '1320px' },
    },
  },
  plugins: [],
} satisfies Config
