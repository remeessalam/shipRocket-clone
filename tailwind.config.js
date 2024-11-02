/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        landingPageHeight: "calc(100vh - 86px)",
      },
      colors: {
        "gradient-start": "#ffc465",
        "gradient-end": "#5338ff",
      },
      keyframes: {
        bgPan: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      animation: {
        "bg-pan": "bgPan 25s linear infinite",
      },
      backgroundSize: {
        120: "120%", // Custom size
        150: "150%", // Another custom size if needed
      },
      backgroundImage: {
        "landing-page": "url('/src/assets/images/download.png')",
        "footer-texture": "url('/img/footer-texture.png')",
        "gradient-circle":
          "linear-gradient(153deg, rgba(255,210,88,1) 0%, rgba(134,68,216,1) 62%, rgba(112,47,235,1) 98%)",
        textColor:
          "linear-gradient(99deg, #ffc465 0%, #5338ff 100%) 0% 0% no-repeat",
        "custom-gradient":
          "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7861738445378151) 62%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          background: "linear-gradient(99deg, #ffc465, #5338ff)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
