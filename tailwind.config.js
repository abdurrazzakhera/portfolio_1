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
          primary: "#6e99dd",

          secondary: "#4cdb9f",

          accent: "#b7452c",

          neutral: "#1E1B22",

          "base-100": "#E7E7E9",

          info: "#2880EB",

          success: "#73DECC",

          warning: "#F3DC68",

          error: "#F02854",
        },
      },
    ],
  },
};
