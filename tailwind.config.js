const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './resources/views/**/*.blade.php',
      './resources/js/**/*.vue',
      './resources/safelist.txt',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '1': '.125rem',
        '1.5': '.1875rem',
      },
      boxShadow: {
        menu: '0 0 .5rem .5rem #0089ff'
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
        'base': ['1rem', {
          lineHeight: 1.25,
        }],
        'lg': ['1.35rem', {
          lineHeight: 1.25,
        }],
        'xl': ['1.5rem', {
          lineHeight: 1.25,
        }],
        '2xl': ['1.8rem', {
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
