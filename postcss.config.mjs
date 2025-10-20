// module.exports = {
//   plugins: {
//     "@tailwindcss/postcss": {},
//   },
// };

/** @type {import('postcss-load-config').Config} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rubik)", "sans-serif"],
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
}

export default config


// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;
