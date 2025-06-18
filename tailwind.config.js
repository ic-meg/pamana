export const content = ["./src/**/*.{js,jsx,ts,tsx}"];

export const theme = {
  extend: {
    fontFamily: {
      vt323: ["VT323 Custom", "monospace"],
      courier: ["Courier New Custom", "monospace"],
      coustard: ["Coustard", "monospace"],
      prime: ["Prime", "monospace"],
    },
    keyframes: {
      scrollOpen: {
        "0%": { transform: "scaleY(0)", transformOrigin: "top" },
        "100%": { transform: "scaleY(1)", transformOrigin: "top" },
      },
    },
    animation: {
      scrollOpen: "scrollOpen 400ms ease-out forwards",
    },
  },
};

export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio"),
  require("@tailwindcss/typography"),
];
