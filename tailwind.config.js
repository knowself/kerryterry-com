/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(199, 73, 59)',
          dark: 'rgb(167, 59, 46)',
          light: 'rgb(219, 102, 88)',
        },
        brown: {
          DEFAULT: 'rgb(131, 92, 82)',
          dark: 'rgb(49, 34, 30)',
          light: 'rgb(201, 168, 160)',
        },
        offwhite: {
          DEFAULT: '#F4EEEC',
          light: '#F8F4F3',
        },
        purple: {
          DEFAULT: 'rgb(103, 97, 168)',
          dark: 'rgb(75, 68, 133)',
          light: 'rgb(172, 168, 209)',
        },
      },
      fontFamily: {
        'eb-garamond': ['EB Garamond', 'serif'],
        'proza-libre': ['Proza Libre', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '810px',
        'lg': '1200px',
      },
      maxWidth: {
        'container': '1440px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(49, 34, 30)',
            h1: {
              fontFamily: 'EB Garamond',
            },
            h2: {
              fontFamily: 'EB Garamond',
            },
            h3: {
              fontFamily: 'EB Garamond',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}