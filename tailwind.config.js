/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
         orange: '#FF9F3E',
         hijau: '#47B096',
         hijau2:'#589687',
         hijau3:'#C0EEE2',
         hijau4:'#337564',
         hitam: '#1E1E1E',
        //  second color
         primary: '#00BA8B',
        secondary: '#FF9F3E',
        putih: '#ffffff',
        hijaumuda: '#93E9BE',
        hijautua: '#004930'
      },
    },
  },
  plugins: [],
}
