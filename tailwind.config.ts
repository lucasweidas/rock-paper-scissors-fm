import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          500: 'hsl(217, 16%, 45%)',
          700: 'hsl(229, 25%, 31%)',
        },
        blue: {
          500: 'hsl(229, 64%, 46%)',
        },
      },
      backgroundImage: {
        'linear-1':
          'linear-gradient(90deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'linear-2':
          'linear-gradient(90deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'linear-3':
          'linear-gradient(90deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'radial-1':
          'radial-gradient(circle at 50% 0%, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
      },
    },
  },
  plugins: [],
};
export default config;
