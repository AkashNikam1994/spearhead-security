import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#081524",
          900: "#0D2035",
          800: "#122A45",
          700: "#173D5B",
          600: "#1E4E75",
          500: "#2A6190",
        },
        gold: {
          600: "#A8843F",
          500: "#C29A51",
          400: "#D4B072",
          300: "#E3C896",
          100: "#F5EBD8",
        },
        ink: "#202B38",
        body: "#637083",
        mist: "#F3F5F7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        card: "0 6px 24px -8px rgba(13, 32, 53, 0.12)",
        cardHover: "0 20px 44px -12px rgba(13, 32, 53, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
