import type { Config } from 'tailwindcss';
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#e07594"
        },
        secondary: {
          100: "#f8cbcb",
          400: "#f2b1ae",
          DEFAULT: "#f2a09d"
        },
        accent: {
          ToTop: "#80d3ff",
          100: "#F2FBFF",
          300: "#a6daf3",
          DEFAULT: "#63bdeb"
        },

        text: {
          DEFAULT: "#3a3c42"

        },
        background: {
          DEFAULT: "#fff7f9",
          loading: "#fafdff"
        },
      },

      primary: colors.primary,
      secondary: colors.secondary,
      accent: colors.accent,
      text: colors.text,
      background: colors.background,

      fontFamily: {
        body: [
          'var(--font-ZenMaruGothic)',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          }
        ],

        copyRight: [
          'Kozuka Gothic Pr6N', 'sans-serif',
        ],
      },

      padding: {
        '0.2rem': '0.2rem',
        '0.3rem': '0.3rem',
        '0.7rem': '0.7rem',
        '0.8rem': '0.8rem',
        '1.1rem': '1.1rem',
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, transparent 60%, #a6daf3 60%)',
        'primary-gradient': 'linear-gradient(to right, #e07494, #f2a09d, #c0a6d2, #64bdeb)',
      },

      dropShadow: {
        'white-shadow': '4px 4px 0px rgba(255, 255, 255, 1)',
        'custom-secondary': '1px 2px 2px rgba(242,160,157,1)',
        'toTop-shadow': '0px 1px 0.5px rgba(255, 255, 255, 1)',

      },

      screens: {
        sm: "0px",
        md: "340px",
        ml: "450px",
        lg: "900px"
      },

      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50.5%)' },
        },

        moveUp: {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(-8800px)'
          },
        },


      },
      animation: {
        wave: 'wave 30s linear infinite',
        moveUp: 'moveUp 200s linear infinite',
      },

    },
  },
  plugins: [
    function ({ addBase }: { addBase: (base: Record<string, Record<string, string>>) => void }) {
      addBase({
        'html': {
          'scroll-behavior': 'smooth',
        },
      });
    },
  ],
};
export default config;
