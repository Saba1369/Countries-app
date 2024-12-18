/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html,css}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "550px",
        md: "850px",
        lg:"1024px"
      },
    },
  },
  plugins: [],
};
