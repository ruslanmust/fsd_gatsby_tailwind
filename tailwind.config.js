module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'display': ["Playfair Display", 'ui-serif', 'Georgia'],
      'body': ["Open Sans", 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      maxWidth: {
        '7.5xl': '75rem',
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
