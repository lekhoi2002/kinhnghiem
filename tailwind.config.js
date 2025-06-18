/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
    "./assets/**/*.{js,css}",
    "./static/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        warmgray: {
          700: '#2f3335',
          800: '#1e2022',
          900: '#181a1b'
        }
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            '[class~="lead"]': {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            'ol > li::before': {
              color: 'inherit',
            },
            'ul > li::before': {
              backgroundColor: 'currentColor',
            },
            hr: {
              borderColor: 'currentColor',
              opacity: '0.1',
            },
            blockquote: {
              color: 'inherit',
              borderLeftColor: 'currentColor',
              opacity: '0.8',
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            'figure figcaption': {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            'a code': {
              color: 'inherit',
            },
            pre: {
              color: 'inherit',
              backgroundColor: 'transparent',
            },
            thead: {
              color: 'inherit',
              borderBottomColor: 'currentColor',
            },
            'tbody tr': {
              borderBottomColor: 'currentColor',
              opacity: '0.1',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
  // Tối ưu hóa cho production
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  }
}
