/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#e0e0e0",
          300: "#cdcdcd",
          400: "#a8a8a8",
          500: "#878787",
          600: "#606060",
          700: "#4d4d4d",
          800: "#2f2f2f",
          900: "#0f0f0f",
        },
        secondary: {
          50: "#ffe8ef",
          100: "#ffc5d3",
          200: "#f98b99",
          300: "#f25770",
          400: "#ff014d",
          500: "#ff0031",
          600: "#f70031",
          700: "#e5002a",
          800: "#d80022",
          900: "#c90016",
        },
        primary: {
          50: "#f7fbff",
          100: "#f2f6fc",
          200: "#edf1f6",
          300: "#dfe3e9",
          400: "#bdc1c6",
          500: "#9ea2a7",
          600: "#75797e",
          700: "#616569",
          800: "#42454a",
          900: "#212428",
        },
      },
      backgroundImage: {
        hero: "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(61, 33, 36, 1) 54%, rgba(172, 8, 58, 1) 100%)",
       
      },
    },
  },
  plugins: [],
};
