/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C8DBC",      // Azul Serenity
        secondary: "#E6F4FA",    // Azul Ice
        accent: "#A8D5BA",       // Apoio/Realce
        text: "#2E3A44",         // Cor de texto principal
        white: "#FFFFFF",        // Branco
      },
      fontFamily: {
        title: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"], // Para títulos
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],    // Para corpo de texto
      },
      fontWeight: {
        extrabold: 800,
        bold: 700,
        medium: 500,
        regular: 400,
      },
    },
  },
  plugins: [],
}
