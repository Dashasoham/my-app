/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/src/media/landing-image.jpg')",
      },
      backgroundColor: {
        background: '#EDDBC4',
        stripe: '#AFA86F',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
      },
    },
  },
  plugins: [],
};

// backgroundImage: {
//   'landing-image': "./src/media/landing-image.jpg",
// },
