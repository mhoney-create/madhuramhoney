import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        honey: {
          light: "#F8E0A1", // Light honey shade
          DEFAULT: "#F1C40F", // Classic golden honey shade
          dark: "#C6980A", // Darker honey shade
          normal: "#F7941D",
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
