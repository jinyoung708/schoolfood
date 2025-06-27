const config = {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'aspect-[16/9]',
    'aspect-[4/3]',
    'aspect-[1/1]',
    'aspect-[4/5]',
    'aspect-[328/583]',
    'aspect-[375/468]',
    'aspect-[576/720]',
    'top-[60px]',
    'lg:top-[118px]',
    'lg:top-[0px]',
    'scroll-mt-[120px]',
    'lg:scroll-mt-[200px]',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.25rem' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.375rem' }], // 14px
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        xl: ['1.25rem', { lineHeight: '2rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }], // 24px
        10: ['0.625rem', { lineHeight: '1.125rem' }], // 10px
        22: ['1.375rem', { lineHeight: '2.125rem' }], // 22px
        28: ['1.75rem', { lineHeight: '2.375rem' }], // 28px
        34: ['2.125rem', { lineHeight: '3rem' }], // 34px
      },
      screens: {
        xs: '320px',
      },
      colors: {
        gray: {
          50: '#F9F9F9',
          100: '#F4F4F4',
          200: '#EEE',
          300: '#DDD',
          350: '#CCC',
          400: '#BBB',
          450: '#999',
          500: '#777',
          600: '#555',
          700: '#333',
          800: '#222',
        },
        amber: {
          50: '#FFF9EF',
        },
        primary: '#884A35',
        secondary: '#FF7D20',
        'point-green': '#0F851A',
        'point-pink': '#FF2F5C',
        'point-red': '#FF0000',
        'point-yellow': '#FFC300',
        placeholder: '#BBB',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
