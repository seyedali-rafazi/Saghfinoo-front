/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },

      colors: {
        primary: "#cb1b1b",
        white: "#ffffff",
        black: "#0c0c0c",

        tint: {
          100: "#fdf1f1",
          200: "#fce8e8",
          300: "#f9d2d2",
          400: "#f6bbbb",
          500: "#fca197",
          600: "#f66262",
          700: "#e43434",
        },

        shade: {
          100: "#b41818",
          200: "#9e1515",
          300: "#871212",
          400: "#700f0f",
          500: "#5a0c0c",
          600: "#430909",
        },

        gray: {
          50: "#fafafa",
          100: "#f9f9f9",
          150: "#ededed",
          200: "#e1e1e1",
          250: "#d9d9d9",
          300: "#cbcbcb",
          350: "#adadad",
          400: "#909090",
          450: "#717171",
          500: "#505050",
          550: "#353535",
          600: "#212121",
          650: "#121212",
        },

        success: {
          100: "#F3FDFA",
          200: "#00BA88",
          300: "#00966D",
        },
        warning: {
          100: "#FFF8E1",
          200: "#F4B740",
          300: "#A9791C",
        },
        error: {
          100: "#FFF2F2",
          200: "#ED2E2E",
          300: "#C30000",
        },
      },

      fontFamily: {
        sans: ["Shabnam", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
