/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#151419",
          lava: "#F56E0F",
          gluon: "#1B1B1E",
          slate: "#262626",
          dusty: "#878787",
          snow: "#FBFBFB",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
        card: "0 12px 40px rgba(21,20,25,0.06)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};