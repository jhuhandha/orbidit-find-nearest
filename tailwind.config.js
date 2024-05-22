/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#4f46e5",
      "blue-light": "#8184ff",
      "blue-dark": "#3c37b3",
      red: "#e5464f",
      green: "#4fe546",
      yellow: "#e5c646",
      pink: "#e546e1",
      "gray-dark": "#2f2f2f",
      gray: "#5f5f5f",
      "gray-light": "#d3d3d3",
      white: "#F8F8FF"
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [],
};
