import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-pattern': "url('../images/hero/Polygon.svg')",
        'staysafe-pattern': "url('../images/staysafe/Polygon2.svg')",
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      },
    },
    screens: {
      'sm': '390px',
      'md': '834px',
      'xl': '1440px',
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.clip-path-custom-clip': {
          'clip-path': 'polygon(0 0, 100% 5%, 100% 95%, 0% 100%)',
        },
        '.clip-path-custom-clip-none': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        },
        '.clip-path-custom-clip-desktop': {
          'clip-path': 'polygon(0 0, 100% 7%, 100% 75%, 0% 100%)',
        }
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;