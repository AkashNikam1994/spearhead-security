import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand system sampled from the Spearhead Security Service brochure/logo:
        // navy blue · burgundy · orange
        navy: {
          950: "#0A2540",
          900: "#123F62",
          800: "#164A74",
          700: "#1A5686",
          600: "#216398",
          500: "#2A74AC",
        },
        maroon: {
          700: "#5A1024",
          600: "#79162D",
          500: "#8F1D38",
        },
        orange: {
          600: "#D96A15",
          500: "#F17B24",
          400: "#F59253",
          300: "#F8B183",
          100: "#FCE9DB",
        },
        ink: "#253242",
        body: "#5B6B7C",
        mist: "#F0F1F1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        card: "0 6px 24px -8px rgba(18, 63, 98, 0.12)",
        cardHover: "0 20px 44px -12px rgba(18, 63, 98, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
