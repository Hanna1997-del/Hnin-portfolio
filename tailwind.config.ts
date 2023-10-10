/** @type {import('tailwindcss').Config} */

module.exports= {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        ShadowBlur : "3px 3px 12px 3px rgba(255,255,255,0.075)"
      },
     
      colors: {
        White: "#ffffff",
        Black: "#000000",
        Orange: "#eeb844",
        WhiteGray: "#b3b2b1",
        Blur: "rgba(255,255,255,0.075)",
        Glass: "rgba(255,255,255,0.15)",
        Purple: "#4a1e9e",
        LightPink: "#ff9999",
        Candy: "#ffeec9"
      }
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"

    },
  },
  plugins: [],
}
