import typography from 'windicss/plugin/typography';
import animations from '@windicss/plugin-animations';
import heropatterns from '@windicss/plugin-heropatterns';

const heropatternsConfig = {
  // the list of patterns you want to generate a class for
  // the names must be in kebab-case
  // an empty array will generate all 87 patterns
  patterns: ['bank-note', 'falling-triangles', 'signal', 'bubbles'],

  // The foreground colors of the pattern
  colors: {
    'default': '#778899',
    'blue-dark': '#112233', // also works with rgb(0,0,205)
  },

  // The foreground opacity
  opacity: {
    100: '0.1',
    200: '0.2',
    300: '0.3',
    default: '0.4',
    500: '0.5',
    600: '0.6',
    700: '0.7',
    800: '0.8',
    900: '0.9',
    1000: '1.0'
  },
};


export default {
  extract: {
    include: [
      './src/pages/**/*.{js,ts,jsx,tsx,css,scss}',
      './src/components/**/*.{js,ts,jsx,tsx,css,scss}'
    ],
    exclude: [
      'node_modules',
      '.vercel',
      '.git',
      '.next',
      '.vscode',
      'public'
    ]
  },
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    typography,
    animations,
    heropatterns(heropatternsConfig)
  ],
}
