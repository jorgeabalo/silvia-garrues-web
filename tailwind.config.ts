import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF8F4',      // blanco cálido
        mist: '#EEF2F7',       // gris muy claro
        line: '#DCE3EC',
        ink: '#0B1A30',        // texto azul casi negro
        abyss: '#0A1E42',      // azul profundo
        intense: '#1E4FD6',    // azul intenso
        atlantic: '#2D6A96',   // azul atlántico
        night: '#050F22',      // footer
        haze: '#9FB4D3',
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
