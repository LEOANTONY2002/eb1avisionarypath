import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /^(bg|text|border|rounded|p|m|flex|grid|gap|w|h|items|justify|hover|transition|duration|ease|transform|scale|translate|rotate|opacity|shadow|backdrop-blur|from|to|via)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
