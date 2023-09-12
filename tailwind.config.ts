import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "var(--montserrat-font)",
      },
      padding: {
        "3vw": "3vw",
        "header-offset": "5rem",
      },
      height: {
        header: "4rem",
      },
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        md: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
