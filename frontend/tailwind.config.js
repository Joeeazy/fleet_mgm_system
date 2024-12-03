export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        secondary: "#FFF8DC",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FFD700",
          "primary-content": "#000000",
          secondary: "#FFF8DC",
          accent: "#FFD700",
          "base-100": "#FFFFFF",
          "base-200": "#FFF8DC",
          "base-300": "#FFE4B5",
        },
      },
    ],
  },
};
