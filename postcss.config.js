module.exports = {
  plugins: {
    "postcss-import": {},
    "@tailwindcss/postcss": {},
    "autoprefixer": {},
    ...(process.env.NODE_ENV === 'production' ? {
      "cssnano": {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          colormin: true,
          convertValues: true,
          discardDuplicates: true,
          discardEmpty: true,
          mergeRules: true,
          minifyFontValues: true,
          minifyParams: true,
          minifySelectors: true,
          reduceIdents: false, // Keep for Hugo compatibility
          zindex: false, // Keep z-index values as-is
        }]
      }
    } : {})
  },
};
