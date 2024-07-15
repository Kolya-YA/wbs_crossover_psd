/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#355764',
        transparent: 'transparent',
        current: 'currentColor',
        bp: {
          green: '#355764;',
          yellow: '#f7c17b',
          darktext: '#292929',
          lighttext: '#ffffff'
        },
      }
    },
  },
  plugins: [],
}
  