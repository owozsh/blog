/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Source Code Pro", "ui-monospace"],
      },
      colors: {
        accent: {
          50: "#FFE5EE",
          100: "#FFCCDC",
          200: "#FF94B6",
          300: "#FF6193",
          400: "#FF2E70",
          500: "#F5004E",
          600: "#C2003D",
          700: "#8C002C",
          800: "#5C001D",
          900: "#2E000F",
          950: "#190008",
        },
        "accent-dark": {
          50: "#F2FDFD",
          100: "#E0FBFA",
          200: "#BCF6F5",
          300: "#f09a79",
          400: "#4CE6E4",
          500: "#1ED7D4",
          600: "#1BC1BE",
          700: "#18AAA8",
          800: "#138B89",
          900: "#0E6766",
          950: "#0A4847",
        },

        base: {
          50: "#CFCCC8",
          100: "#AEA09E",
          200: "#999383",
          300: "#6F876F",
          400: "#627F78",
          500: "#4A5967",
          600: "#413F4E",
          700: "#373340",
          800: "#2e2933",
          900: "#1c181b",
          950: "#181316",
        },
        "base-dark": {
          50: "#CFCCC8",
          100: "#AEA09E",
          200: "#999383",
          300: "#6F876F",
          400: "#627F78",
          500: "#4A5967",
          600: "#413F4E",
          700: "#373340",
          800: "#2e2933",
          900: "#1c181b",
          950: "#181316",
        },
      },
    },
  },
  plugins: [],
};
