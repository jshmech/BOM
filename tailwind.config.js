/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7C9A8A',
          light: '#A8C2B5',
          dark: '#5A7A6A',
          muted: '#F0F5F2',
        },
        ink: '#1C2220',
        line: '#E3E6E4',
      },
      fontFamily: {
        serif: ['"IBM Plex Sans KR"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans KR"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
