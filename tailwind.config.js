module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: { Poppins: ["Poppins", "sans-serif"] },
      boxShadow: {
        btn: "9px 9px 20px 1px rgba(0, 0, 0, 0.3), -7px -7px 20px 1px rgba(133, 138, 174, 0.38)",
        innerBtn:
          " inset 9px 9px 20px 1px rgba(0, 0, 0, 0.3), inset -7px -7px 20px 1px rgba(133, 138, 174, 0.38);",
      },
      backgroundImage: {
        btn: "linear-gradient(311deg, #3c446b 0%, #4a5176 88.79%)",
      },
    },
  },
  plugins: [],
};
