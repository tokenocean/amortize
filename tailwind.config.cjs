module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,svelte}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        brand: "#32429c",
        primary: "#0c1533",
        greyOne: "#d7dae5",
        greyTwo: "#575d66",
        turquoise: "#0ad4e3",
        lavender: "#a97fe6",
        blueberry: "#5082f7",
        lightblue: "#5082f7",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
  },
};
