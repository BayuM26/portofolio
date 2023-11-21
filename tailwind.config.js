/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        verticalMe: "verticalMe ease-in-out",
        horizontalMe: "horizontalMe ease-in-out",
        verticalL: "verticalL ease-in-out",
        verticalR: "verticalR ease-in-out",
        opacityMe: "opacityMe ease-in-out",
        opacityNameTop: "opacityNameTop ease-in-out",
        opacityNameMiddle: "opacityNameMiddle ease-in-out",
        opacityFooter: "opacityFooter ease-in-out",
      },
      keyframes : {
        // foto atas

            opacityNameTop:{
              "0%": {
                opacity: 0
              },
              "20%": {
                opacity: 1
              },
            },
            opacityNameMiddle:{
              "0%": {
                opacity: 1
              },
              "20%": {
                opacity: 0
              },
            },

            verticalMe: {
              "0%": {
                transform: "translateY(0)",
              },
              "20%": {
                transform: "translateY(-500px)",
              },
            },

            horizontalMe: {
              "0%": {
                transform: "translateX(-100px)",
              },
              "10%": {
                transform: "translateX(0)",
              },
            },
        // end foto atas

        // abaoutme
            opacityMe:{
              "0%,5%": {
                opacity: 0
              },
              "30%": {
                opacity: 1
              },
            },
        // end abaout me

        // footer
          opacityFooter:{
            "0%,95%": {
              transform: "scaleX(0)"
            },
            "102%": {
              transform: "scaleX(1)"
            },
          },
        // end footer

        // bahasa pemograman
            verticalL:{
              "0%,30%": {
                transform: "translateX(-90px)",
              },
              "50%": {
                transform: "translateX(0px)",
              },
            },

            verticalR:{
              "0%,30%": {
                transform: "translateX(90px)",
              },
              "50%": {
                transform: "translateX(0px)",
              },
            },
        // end bahasa pemograman

        blob: {
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(1.1)"
          },
          "66%": {
            transform: "scale(0.9)"
          },
          "100%": {
            transform: "scale(1)"
          },
        }
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}

