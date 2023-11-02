/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{tsx,css}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        background: "#0c1326",
        primary: {
          DEFAULT: "#99b6ff",
          dark: "#242e62",
          light: "#d2d9ff",
        },
      },
    },
  },
};
