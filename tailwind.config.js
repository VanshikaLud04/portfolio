/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F6F1E7',
        ink: '#1C1B19',
        sage: '#7C8B6F',
        sepia: '#9C7A54',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Playfair Display"', 'sans-serif'], // Just fallback for now
      },
      backgroundImage: {
        'notebook-texture': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231c1b19' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
