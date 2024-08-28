/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      colors: {
        'green' : '#2E4053',
        'greenish' : '#73A9AD',
        // 'blue' : '#2c3e50',
        // 'gray':'#888',
             },

            fontFamily: {
              workSans: ['"Work Sans"', 'sans-serif'],
            },

    },
  },
  plugins: [],
}

