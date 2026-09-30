import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFBF6',      // blanco cálido (base)
        cream: '#FBF4EA',      // crema suave
        mist: '#F4EDE3',       // arena muy clara (antes gris frío)
        line: '#EADFD1',
        ink: '#172238',        // azul casi negro, cálido
        abyss: '#15315F',      // azul profundo cálido
        intense: '#2A5BC4',    // azul intenso
        atlantic: '#3C6C9E',   // azul medio
        night: '#0E1D38',      // footer
        haze: '#C9D8EE',       // azul muy claro
        gold: '#C8964F',       // acento cálido (uso mínimo)
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
