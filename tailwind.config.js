module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#38a5d8",

          secondary: "#2fb0c4",

          accent: "#a03021",

          neutral: "#1D1D2B",

          "base-100": "#32373E",

          info: "#3467EA",

          success: "#20A761",

          warning: "#F2BA2C",

          error: "#E14167",
        },
      },
    ],
  },
};
