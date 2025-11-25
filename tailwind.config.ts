import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Foster Greatness Brand Colors
        navy: "#1a2949",
        blue: "#0067a2",
        teal: "#00c8b7",
        orange: "#fa8526",
        yellow: "#faca2c",
        "light-blue": "#ddf3ff",

        // FG-prefixed colors (for updates page)
        'fg-navy': '#1a2949',
        'fg-teal': '#0067a2',  // Secondary blue color that supplements navy
        'fg-light-blue': '#ddf3ff',
        'fg-orange': '#fa8526',
        'fg-yellow': '#faca2c',
        'fg-accent-teal': '#00c8b7',  // Actual teal, used as accent only
        'fg-coral': '#ff6f61',

        // Neutrals
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Poppins", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
