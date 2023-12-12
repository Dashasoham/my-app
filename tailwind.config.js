/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/src/media/landing-image.jpg')",
        manpage: "url('/src/media/pexels-andrea-piacquadio-842811.jpg')",
        womanpage: 'url(/src/media/pexels-vlada-karpovich-4668537.jpg)',
      },
      backgroundColor: {
        background: '#EDDBC4',
        stripe: '#AFA86F',
      },
      textColor: {
        visited: '#A5573F',
        background: "'#AFA86F'",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
      },
      colors: {
        beige: '#EDDBC4',
      },
    },
  },
  plugins: [],
};

// backgroundImage: {
//   'landing-image': "./src/media/landing-image.jpg",
// },
