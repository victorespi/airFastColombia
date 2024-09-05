/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // Agrega esta línea para incluir Flowbite
  ],
  theme: {
    extend: {
      colors: {
      primaryColor: '#ffaa01', // Puedes nombrarlo como quieras
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // Agrega el plugin de Flowbite
  ],


}

