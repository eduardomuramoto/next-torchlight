
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
        lightBackground: "var(--light-background)",
        lightForeground: "var(--light-foreground)",
        extraLightForeground: "var(--xlight-foreground)",
        wellbeing1: "var(--course-wellbeing-1)",
        wellbeing2: "var(--course-wellbeing-2)",
        wellbeing3: "var(--course-wellbeing-3)",
        relationship1: "var(--course-relationship-1)",
        relationship2: "var(--course-relationship-2)",
        relationship3: "var(--course-relationship-3)",
        corporate1: "var(--course-corporate-1)",
        corporate2: "var(--course-corporate-2)",
        corporate3: "var(--course-corporate-3)",
        community1: "var(--course-community-1)",
        community2: "var(--course-community-2)",
        community3: "var(--course-community-3)",
      },
      fontFamily: {
        teko: ['var(--font-teko)'],
      },
    },
  },
  plugins: [],
};
export default config;
