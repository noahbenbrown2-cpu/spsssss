import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C8102E",
          black: "#0A0A0A",
          cream: "#F7F3EE",
          charcoal: "#171717"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.12)"
      }
    }
  },
  plugins: []
};

export default config;
