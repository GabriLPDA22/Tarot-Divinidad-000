/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        '3xl': '2560px',
      },
      colors: {
        brand: {
          bg: "#101018",
          text: "#F2F0EA",
          gold: "#B8A26A",
          "gold-light": "#D4C28A",
          "gold-dark": "#8A7A4E",
        },
      },
      fontFamily: {
        heading: ['"Montserrat"', "sans-serif"],
        body: ['"Questrial"', "sans-serif"],
      },
      fontSize: {
        "hero-mobile": ["clamp(2.25rem, 6vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-desktop": ["clamp(3.5rem, 4.5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "hero-2k": ["clamp(4.5rem, 5vw, 6rem)", { lineHeight: "1.03", letterSpacing: "-0.03em" }],
      },
    },
  },
  plugins: [],
};
