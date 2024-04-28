/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#F9F2F1",
          100: "#F2E1DF",
          200: "#E4C3BE",
          300: "#D7A49E",
          400: "#CB8A81",
          500: "#BD6B61",
          600: "#A95246",
          700: "#894239",
          800: "#5A2C25",
          900: "#2F1713",
          950: "#160A09",
        },
        "accent-dark": {
          50: "#F8FCFB",
          100: "#ECF8F6",
          200: "#D6F0EA",
          300: "#BCE6DD",
          400: "#A5DED2",
          500: "#87D3C3",
          600: "#5FC4AE",
          700: "#3FAC94",
          800: "#35917E",
          900: "#26685A",
          950: "#1D4E44",
        },

        base: {
          50: "#F5F5F5",
          100: "#EDEDED",
          200: "#D9D9D9",
          300: "#BFBFBF",
          400: "#A6A6A6",
          500: "#828282",
          600: "#757575",
          700: "#666666",
          800: "#545454",
          900: "#383838",
          950: "#262626",
        },
      },
    },
  },
  plugins: [],
};
