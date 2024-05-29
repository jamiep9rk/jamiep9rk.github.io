/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        pc: "1300px",
        tablet: { max: "1300px", min: "930px" },
        mobile: { max: "930px" },
      },
    },
  },
  plugins: [],
};
