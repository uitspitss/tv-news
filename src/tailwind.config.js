const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  // https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion#tailwind-config
  theme: {
    fontFamily: {
      sans: [
        'Helvetica Neue',
        'Segoe UI',
        'Hiragino Kaku Gothic ProN',
        'Hiragino Sans',
        'Meiryo',
        'sans-serif',
      ],
      // Noto Serif 使うときは _document.tsx の Web font を有効化する
      // serif: ['Noto Serif JP', 'serif'],
    },
    extend: {
      // See https://tailwindcss.com/docs/customizing-colors
      colors: {
        primary: colors.indigo,
        secondary: colors.pink,
        error: colors.red,
        warning: colors.yellow,
        info: colors.blue,
        success: colors.green,
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
