module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      primary: "#3EB489",
      secondary: "#192338",
      white: "#FFFFFF",
      black: "#1B1C1E",
      gray: "#ADADAD",
      lightgray: "#E0E0E0",
      darkgray: "#1F1F1F",
      red: "#841F27",
      pink: "#F96995"
    },
    fontSize: {
      'xxs': '.6rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      fontSize: {
        dynamic: "clamp(.6rem, 1.25vw, 1.25rem)",
        eventhome: "clamp(.6rem, 1.5vw, 1.5rem)",
        eventrow: "clamp(.6rem, .7vw, .7rem)",
        toptext: "clamp(.6rem, 1vw, 1rem)"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
