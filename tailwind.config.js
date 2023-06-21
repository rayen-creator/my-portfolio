/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons:"burtons",
        Poppins_Regular:"Poppins_Regular",
        Poppins_SemiBold:"Poppins_SemiBold"
      },
      colors:{
        primary:'#0aff9d',
      }
    },
  },
  plugins: [],
};
