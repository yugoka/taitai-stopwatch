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
      "time-color": "#0af",
    },
    fontSize: {
      "time-size-lg": "11vw",
      "time-size-sm": "7.7vw",
      "time-size-lg-fixed": "3rem",
      "time-size-sm-fixed": "2.1rem",
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
