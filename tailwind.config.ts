import type { Config } from "tailwindcss";

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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'hero-pattern': "url('../images/hero/Polygon.svg')",
      },
    },
    screens: {
      'sm': '390px',
      // => @media (min-width: 390px) { ... }

      'md': '834px',
      // => @media (min-width: 834px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

    }
  },
  plugins: [],
};
export default config;
