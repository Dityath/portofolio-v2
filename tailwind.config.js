/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primario: "#5C62EC",
        hover: "#3C40AE",
        acento: "#85BFD1",
        gris: "#A0A0A1",
        blanco: "#FFFFFF",
        rellenos: "#1C1E22",
        bordes: "#26292D",
        fondos: "#171718",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
