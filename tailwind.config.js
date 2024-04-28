/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkslategray: {
          "100": "#333",
          "200": "rgba(51, 51, 51, 0.09)",
        },
        "neutral-dark-gray": "#505050",
        gray: "rgba(255, 255, 255, 0)",
        gainsboro: "#d9d9d9",
        whitesmoke: "#f2f2f2",
      },
      spacing: {},
      fontFamily: {
        "text-small-link": "Roboto",
        "text-regular-normal":"Roboto",
        inter: "Inter",
        inherit: "inherit",
        "open-sans": "'Open Sans'",
        hannari: "Hannari",
        "league-spartan": "'League Spartan'",
        poppins: "Poppins",
      },
    },

    borderRadius: {
      "41xl": "60px",
      "4xs": "9px",
      "17xl": "36px",
    },

    zIndex: {
      '-3': '-3',
      '-2':'-2'
      // Add more negative values as needed
    },

    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xs: "0.75rem",
      lg: "1.125rem",
      "29xl": "3rem",
      "19xl": "2.375rem",
      "10xl": "1.813rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      "5xl": "1.5rem",
      inherit: "inherit",
      lg: "1.125rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "11xl": "1.875rem",
      "29xl": "3rem",
      "19xl": "2.375rem",
      "10xl": "1.813rem",
      "45xl": "4rem",
      "32xl": "3.188rem",
      "23xl": "2.625rem",
      "15xl": "2.125rem",
      "6xl": "1.563rem",
      "3xl": "1.375rem",
      "53xl": "4.5rem",
      "39xl": "3.625rem",
      "24xl": "2.688rem",
      xl: "1.25rem",

      "9xl": "1.75rem",
      "61xl": "5rem",
      "21xl": "2.5rem",
      inherit: "inherit",
    },

    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1400: {
        raw: "screen and (min-width: 1325px)",
      },
      mq751: {
        raw: "screen and (min-width: 750px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq725: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq1275:{
raw:"screen and (max-width: 1275px)"
      },

    },
  },
  corePlugins: {
    preflight: false,
  },
};