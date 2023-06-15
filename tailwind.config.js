/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "red-kokumi": "#ff7774",
        "base-title": "#272221",
        "base-sub-title": "#403937",
        "base-text": "#574f4d",
        "base-label": "#8d8686",
        "base-hover": "#d7d5d5",
        "base-button": "#e6e5e5",
        "base-input": "#ededed",
        "base-card": "#f3f2f2",
      },
    },
  },
  plugins: [],
};
