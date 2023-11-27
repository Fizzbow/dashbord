const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        PT: ["PT Serif", "serif"],
      },
      boxShadow: {
        btn: "9px 9px 20px 1px rgba(0, 0, 0, 0.3), -7px -7px 20px 1px rgba(133, 138, 174, 0.38)",
        innerBtn:
          " inset 9px 9px 20px 1px rgba(0, 0, 0, 0.3), inset -7px -7px 20px 1px rgba(133, 138, 174, 0.38);",
      },
      textShadow: {
        lg: " 0px 8px 8px rgba(0, 0, 0, 0.25);",
      },
      fontSize: {
        xl: ["50px", "60px"],
      },
      backgroundImage: {
        btn: "linear-gradient(311deg, #3c446b 0%, #4a5176 88.79%)",
        ptBlueLinear: "linear-gradient(94deg, #638DFE 1.15%, #3E64E7 98.41%)",
        ptOrangeLinear: "linear-gradient(93deg, #FF9B8C 1.35%, #EE7E6D 99.08%)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (val) => ({
            textShadow: val,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
