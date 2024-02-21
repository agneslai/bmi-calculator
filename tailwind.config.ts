import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'dark-blue': '#253347',
        'blue-grey': '#5E6E85',
        'blue': '#345FF6',
        'grey': '#D8E2E7',
      },
      letterSpacing: {
        '-5': '-0.05em',
      },
      lineHeight: {
        '110': '110%',
        '150': '150%',
      },
      boxShadow: {
        default: '16px 32px 56px #8FAECF40',
      },
      borderRadius: {
        'result-container-lg': '160px 999px 999px 160px',
      },
    },
  },
  plugins: [],
};
export default config;
