
import type { Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightForeground: "var(--light-foreground)",
      },
      fontFamily: {
        teko: ['var(--font-teko)'],
      },
    },
  },
  plugins: [],
};
export default config;
