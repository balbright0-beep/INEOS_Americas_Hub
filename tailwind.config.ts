import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ineos: {
          red: "#FF4639",
          onyx: "#1D1D1D",
          charcoal: "#171717",
          mushroom: "#D9D7D0",
          "mushroom-light": "#FAFAF9",
          dove: "#E9E8E5",
          "iron-smoke": "#606060",
          "silver-dust": "#9F9F9F",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
