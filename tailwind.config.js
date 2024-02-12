/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
        "primary": "#DB4444",
        "secondary": "#f6d860",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
        "textColor-2": "#000000"
      },
    },
    "dark",
    "cupcake",
  ],
  plugins: [require("daisyui")],
}

