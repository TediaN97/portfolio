/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Michroma']
      },
      animation: {
        move: 'move 8s linear infinite' 
      },
      keyframes: {
        move: {
          from: {
            strokeDashoffset: 4500, 
          },
          to: {
            strokeDashoffset: 0
          }
        }
      }
    },
  },
  plugins: []
}