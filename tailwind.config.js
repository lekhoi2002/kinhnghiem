/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{html,js}',
    './content/**/*.{md,html}',
    './assets/**/*.{js,css}',
    './static/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warmgray: {
          700: '#2f3335',
          800: '#1e2022',
          900: '#181a1b',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral[900]'),
            '--tw-prose-headings': theme('colors.neutral[950]'),
            '--tw-prose-lead': theme('colors.neutral[600]'),
            '--tw-prose-links': theme('colors.neutral[900]'),
            '--tw-prose-bold': theme('colors.neutral[900]'),
            '--tw-prose-counters': theme('colors.neutral[600]'),
            '--tw-prose-bullets': theme('colors.neutral[400]'),
            '--tw-prose-hr': theme('colors.neutral[200]'),
            '--tw-prose-quotes': theme('colors.neutral[900]'),
            '--tw-prose-quote-borders': theme('colors.neutral[200]'),
            '--tw-prose-captions': theme('colors.neutral[600]'),
            '--tw-prose-code': theme('colors.neutral[900]'),
            '--tw-prose-pre-code': theme('colors.neutral[100]'),
            '--tw-prose-pre-bg': theme('colors.neutral[800]'),
            '--tw-prose-th-borders': theme('colors.neutral[300]'),
            '--tw-prose-td-borders': theme('colors.neutral[200]'),
            '--tw-prose-invert-body': theme('colors.neutral[100]'),
            '--tw-prose-invert-headings': theme('colors.neutral[50]'),
            '--tw-prose-invert-lead': theme('colors.neutral[400]'),
            '--tw-prose-invert-links': theme('colors.neutral[100]'),
            '--tw-prose-invert-bold': theme('colors.neutral[100]'),
            '--tw-prose-invert-counters': theme('colors.neutral[400]'),
            '--tw-prose-invert-bullets': theme('colors.neutral[600]'),
            '--tw-prose-invert-hr': theme('colors.neutral[700]'),
            '--tw-prose-invert-quotes': theme('colors.neutral[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.neutral[700]'),
            '--tw-prose-invert-captions': theme('colors.neutral[400]'),
            '--tw-prose-invert-code': theme('colors.neutral[100]'),
            '--tw-prose-invert-pre-code': theme('colors.neutral[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.neutral[800]'),
            '--tw-prose-invert-th-borders': theme('colors.neutral[600]'),
            '--tw-prose-invert-td-borders': theme('colors.neutral[700]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  // Tối ưu hóa cho production
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
