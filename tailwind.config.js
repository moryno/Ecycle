/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bg: "#024731",
        bgHeavy: "#023625",
        bgLight: "#DAE4E1",
        button: "#1C8200",
        section: "#F8F8F2",
        card: "#EFEFE4",
      },
      colors: {
        text: "#024731",
        textLight: "#DAE4E1",
        link: "#1F7B4F",
        textHeavy: "#023625",
        orange: "#EBA900",
        yellow: "#E8F733",
        card: "#4F4F58",
      },
      fontSize: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "40px",
      },
      height: {
        mdScreen: "500px",
        lgScreen: "600px",
        smView: "40vh",
        mdView: "70vh",
      },
      width: {
        medium: "23%",
        large: "30%",
      },
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
