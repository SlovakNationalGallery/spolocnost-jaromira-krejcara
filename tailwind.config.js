const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '1': '.125rem',
        '2': '.25rem',
      },
      colors: {
        blue: '#0089ff',
        linen: '#f0eee7',
      },
      fontFamily: {
        display: ["SJK", ...defaultTheme.fontFamily.sans],
        sans: ["GTPressura", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'sm': ['0.875rem', {
          lineHeight: 1.15,
        }],
        '2xl': ['1.75rem', {
          letterSpacing: '.025em',
          lineHeight: 1.25,
        }]
      },
      lineHeight: {
        14: '3.5rem',
      },
      underlineThickness: {
        'sans': '2px',
      },
      underlineOffset: {
        'sans': '10%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-underline-utils'),
  ],
}
