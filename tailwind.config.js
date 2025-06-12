export const content = [
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {
    fontFamily: {
      vt323: ['VT323 Custom', 'monospace'],
      courier: ['Courier New Custom', 'monospace'],
    }
  }
};

export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/typography'),
];
