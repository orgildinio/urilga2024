/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      screens: {
        xxs: "320px",
        xs: "410px",
        s: "",
      },
      fontFamily: {
        adineue: "var(--font-adineue)",
      },
    },
  },
  plugins: [],
};
