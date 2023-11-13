/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "280px", max: "480px" },
      md: { min: "481px", max: "795px" },
      lg: { min: "796px", max: "1024px" },
      xl: { min: "1025px", max: "1200px" },
      "2xl": { min: "1201px" },
    },
    extend: {},
  },
  plugins: [],
};
