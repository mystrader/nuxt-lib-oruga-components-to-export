const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: colors.gray[700],
          dark: '#ffffff',
        },
        primary: {
          DEFAULT: '#1fb6ff',
          dark: '#ffffff',
        },
        highlight: {
          DEFAULT: colors.red[700],
          dark: colors.violet[800],
        },
        'highlight-background': {
          DEFAULT: colors.yellow[400],
          dark: '#1fb6ff',
        },
        'tahiti': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },


      },
    },
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  },
  plugins: [],
}

// "color": {
//   "white": {
//     "value": "#fff",
//     "description": "white",
//     "type": "color"
//   },
//   "grey-25": {
//     "value": "#F9F9F9",
//     "description": "",
//     "type": "color"
//   },
//   "grey-50": {
//     "value": "#f4f4f4",
//     "description": "",
//     "type": "color"
//   },
//   "grey-100": {
//     "value": "#EAEAEA",
//     "description": "",
//     "type": "color"
//   },
//   "grey-200": {
//     "value": "#BCBCBC",
//     "description": "",
//     "type": "color"
//   },
//   "grey-300": {
//     "value": "#6E6E6E",
//     "description": "grey 300",
//     "type": "color"
//   },
//   "grey-400": {
//     "value": "#323232",
//     "description": "",
//     "type": "color"
//   },
//   "black": {
//     "value": "#000",
//     "description": "",
//     "type": "color"
//   },
//   "violet-400": {
//     "value": "#5D2786",
//     "description": "",
//     "type": "color"
//   },
//   "violet-300": {
//     "value": "#7933AC",
//     "description": "",
//     "type": "color"
//   },
//   "violet-200": {
//     "value": "#8E3CCB",
//     "description": "",
//     "type": "color"
//   },
//   "violet-100": {
//     "value": "#B24BFF",
//     "description": "primary 100",
//     "type": "color"
//   },
//   "orange-400": {
//     "value": "#C14726",
//     "description": "",
//     "type": "color"
//   },
//   "orange-300": {
//     "value": "#E3542D",
//     "description": "",
//     "type": "color"
//   },
//   "orange-200": {
//     "value": "#FF5E32",
//     "description": "",
//     "type": "color"
//   },
//   "orange-100": {
//     "value": "#FF8C32",
//     "description": "",
//     "type": "color"
//   },
//   "red-400": {
//     "value": "#B32E34",
//     "description": "",
//     "type": "color"
//   },
//   "red-300": {
//     "value": "#D7373F",
//     "description": "",
//     "type": "color"
//   },
//   "red-200": {
//     "value": "#E34850",
//     "description": "",
//     "type": "color"
//   },
//   "red-100": {
//     "value": "#FC5059",
//     "description": "",
//     "type": "color"
//   },
//   "yellow-400": {
//     "value": "#D6A200",
//     "description": "",
//     "type": "color"
//   },
//   "yellow-300": {
//     "value": "#F0B600",
//     "description": "warning 300",
//     "type": "color"
//   },
//   "yellow-200": {
//     "value": "#FFC200",
//     "description": "",
//     "type": "color"
//   },
//   "yellow-100": {
//     "value": "#FFD54E",
//     "description": "",
//     "type": "color"
//   },
//   "green-400": {
//     "value": "#1F7567",
//     "description": "",
//     "type": "color"
//   },
//   "green-300": {
//     "value": "#268E7D",
//     "description": "accent 300",
//     "type": "color"
//   },
//   "green-200": {
//     "value": "#39B29D",
//     "description": "Main color",
//     "type": "color"
//   },
//   "green-100": {
//     "value": "#39C7AF",
//     "description": "",
//     "type": "color"
//   },
//   "blue-400": {
//     "value": "#115DA3",
//     "description": "",
//     "type": "color"
//   },
//   "blue-300": {
//     "value": "#146DBF",
//     "description": "",
//     "type": "color"
//   },
//   "blue-200": {
//     "value": "#1678D1",
//     "description": "",
//     "type": "color"
//   }
// },
// "theme": {
//   "color-primary": {
//     "100": {
//       "value": "{color.violet-100}",
//       "type": "color"
//     },
//     "300": {
//       "value": "{color.violet-300}",
//       "type": "color"
//     },
//     "400": {
//       "value": "{color.violet-400}",
//       "type": "color"
//     },
//     "main": {
//       "value": "{color.violet-200}",
//       "type": "color"
//     }
//   },
//   "color-secondary": {
//     "100": {
//       "value": "{color.orange-100}",
//       "type": "color"
//     },
//     "300": {
//       "value": "{color.orange-300}",
//       "type": "color"
//     },
//     "400": {
//       "value": "{color.orange-400}",
//       "type": "color"
//     },
//     "main": {
//       "value": "{color.orange-200}",
//       "type": "color"
//     }
//   },
//   "color-neutral": {
//     "25": {
//       "value": "{color.grey-25}",
//       "type": "color"
//     },
//     "50": {
//       "value": "{color.grey-50}",
//       "type": "color"
//     },
//     "100": {
//       "value": "{color.grey-100}",
//       "type": "color"
//     },
//     "200": {
//       "value": "{color.grey-200}",
//       "type": "color"
//     },
//     "300": {
//       "value": "{color.grey-300}",
//       "type": "color"
//     },
//     "400": {
//       "value": "{color.grey-400}",
//       "type": "color"
//     },
//     "black": {
//       "value": "{color.black}",
//       "type": "color"
//     },
//     "white": {
//       "value": "{color.white}",
//       "type": "color"
//     }
//   },
//   "color-negative": {
//     "100": {
//       "value": "{color.red-100}",
//       "type": "color"
//     },
//     "300": {
//       "value": "{color.red-300}",
//       "type": "color"
//     },
//     "400": {
//       "value": "{color.red-400}",
//       "type": "color"
//     },
//     "main": {
//       "value": "{color.red-200}",
//       "type": "color"
//     }
//   },
//   "color-warning": {
//     "100": {
//       "value": "{color.yellow-100}",
//       "type": "color"
//     },
//     "300": {
//       "value": "{color.yellow-300}",
//       "type": "color"
//     },
//     "400": {
//       "value": "{color.yellow-400}",
//       "type": "color"
//     },
//     "main": {
//       "value": "{color.yellow-200}",
//       "type": "color"
//     }
//   },
//   "color-accent": {
//     "100": {
//       "value": "{color.green-100}",
//       "type": "color"
//     },
//     "300": {
//       "value": "{color.green-300}",
//       "type": "color"
//     },
//     "400": {
//       "value": "{color.green-400}",
//       "type": "color"
//     },
//     "main": {
//       "value": "{color.green-200}",
//       "type": "color"
//     }
//   },
//   "color-informative": {
//     "100": {
//       "value": "#1B92FF",
//       "type": "color"
//     },
//     "300": {
//       "value": "{color.blue-300}",
//       "type": "color"
//     },
//     "400": {
//       "value": "{color.blue-400}",
//       "type": "color"
//     },
//     "main": {
//       "value": "{color.blue-200}",
//       "type": "color"
//     }
//   }
// },
