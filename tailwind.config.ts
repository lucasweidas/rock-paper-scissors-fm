import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlowSemiCondensed: [
          'var(--font-barlow-semi-condensed)',
          ...fontFamily.sans,
        ],
      },
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
        'radial-2':
          'radial-gradient(circle at 50% 50%, hsl(0, 0%, 100%, 0.09) 40%, hsl(0, 0%, 100%, 0.06) 40%, hsl(0, 0%, 100%, 0.06) 55%, hsl(0, 0%, 100%, 0.03) 55%)',
        triangle: 'url("/images/bg-triangle.svg")',
      },
      boxShadow: {
        'option-b': 'inset 0 -6px 0 hsla(0, 0%, 0%, 0.3)',
        'option-t': 'inset 0 6px 0 hsla(0, 0%, 0%, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
