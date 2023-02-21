/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        'phone': '37.5em',
        'tab-port': '56.5em',
        'tab-land': '75em',
        'big-desktop': '112.5em',
      }
    },
    colors: {
      primary: "#328da8",
      secondary: "#47acad",
      tertiary: "#2fa18a",
      quaternary: "#87369e",
      grey_light: "#efefef",
      grey_dark: "#333",
      color_hover: "#edf5f8",
      link_hover: "#ccc",
      color_paragraph: "#4a4a4a",
      color_green: "#34eb49",
      color_white: "#fff",
      color_black: "#fff",
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.725rem', { lineHeight: '1.75rem' }],
      xl: ['1.95rem', { lineHeight: '1.75rem' }],
      '2xl': ['2.1rem', { lineHeight: '2.7rem' }],
      '3xl': ['2.475rem', { lineHeight: '2.95rem' }],
      '4xl': ['2.65rem', { lineHeight: '3.2rem' }],
      '5xl': ['3.6rem', { lineHeight: '4.2rem' }],
      '6xl': ['4.6rem', { lineHeight: '5.2rem' }],
    },
  },
  plugins: [],
}
