/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/core/dictionary.ts',
  ],
  theme: {
    extend: {
      colors: {
        'secondary-border': '#1D1D29',
        accent: '#fc3ac2',
        'accent-muted': '#bd2a91',
        error: '#FF5E4F',
        subtle: '#85828B',
        'gray-dark': '#0f131f',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
        '19': 'repeat(19, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      width: {
        '9/25': '36%',
      },
      blur: {
        xs: '2px',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
    },
  }
}