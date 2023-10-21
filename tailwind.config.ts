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
      },
    },
    colors: {
      primary: "#0af",
      secondary: "#3b82f6",
      "secondary-dark-1": "#2563eb",
      "secondary-dark-2": "#1d4ed8",
      white: "#ffffff",
      slate: "#f1f5f9",
    },
    fontSize: {
      base: "1rem",
      sm: "0.875rem",
      "time-lg": "11vw",
      "time-sm": "7.7vw",
      "time-lg-fixed": "3rem",
      "time-sm-fixed": "2.1rem",
    },
    fontFamily: {
      body: [
        "ヒラギノ角ゴ Pro W3",
        "Hiragino Kaku Gothic Pro",
        "メイリオ",
        "Meiryo",
        "Osaka",
        "ＭＳ Ｐゴシック",
        "MS PGothic",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
export default config;
