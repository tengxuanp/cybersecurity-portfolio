module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: {hovering:"hovering 5s infinite", shadowing:"shadowing 5s infinite"}, 
      keyframes: {
        hovering:{
          "0%": {transform: "translateY(-7%)",},
          "50%": {transform: "translateY(0%)",},
          "100%": {transform: "translateY(-7%)",},
        },
        shadowing:{
          "0%": {transform: "scale(1)", opacity:"0.5"},
          "50%": {transform: "scale(0.3)",opacity:"1"},
          "100%": {transform: "scale(1)",opacity:"0.5"},
        }
      }
      
    },     
  },
  plugins: [],
}
