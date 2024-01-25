/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#E21B5A",
      background: "#333333",
      secondary: "#444444",
      accent: "#FBFFE3",
    },
    extend: {
      fontFamily: {
        akshar: ["Akshar", "sans-serif"],
      },
    },
  },
  plugins: [],
};
