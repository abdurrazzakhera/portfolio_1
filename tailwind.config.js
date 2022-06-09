// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   themes: [
//     {
//       mythime2: {
//         primary: "#f7e11b",

//         secondary: "#8a50ba",

//         accent: "#e5695e",

//         neutral: "#272735",

//         "base-100": "#2E3C57",

//         info: "#53B7D5",

//         success: "#37CDA0",

//         warning: "#EEC144",

//         error: "#DD3C5C",
//       },
//     },
//   ],
//   plugins: [require("daisyui")],
// };
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
          primary: "#f7e11b",

          secondary: "#8a50ba",

          accent: "#e5695e",

          neutral: "#272735",

          "base-100": "#2E3C57",

          info: "#53B7D5",

          success: "#37CDA0",

          warning: "#EEC144",

          error: "#DD3C5C",
        },
      },
    ],
  },
};
