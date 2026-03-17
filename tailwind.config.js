/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1A2C4E",
        "geosang-navy": "#1A2C4E",
        "forest-green": "#166534",
        "heritage-gold": "#C5A059",
        "blue-soft": "#3b82f6",
        "background-light": "#f6f7f8",
        "background-dark": "#14181e",
      },
      fontFamily: {
        "display": ["Inter", "Noto Sans KR", "sans-serif"],
        "body": ["Inter", "Pretendard", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "full": "9999px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
