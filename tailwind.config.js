module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          10: '#FFFFFF',
          9: '#E0E0E6',
          8: '#B0B0BF',
          7: '#86869C',
          6: '#66667A',
          5: '#4D4D5B',
          4: '#393941',
          3: '#29292E',
          2: '#1D1D20',
          1: '#161618'
        },
        primary: {
          10: '#CFE6FC',
          9: '#A8D4FF',
          8: '#89C2FA',
          7: '#67B0F9',
          6: '#459EF7',
          5: '#258CF4',
          4: '#0C7AE9',
          3: '#0A69C7',
          2: '#0957A5',
          1: '#04294E'
        },
        accent: {
          10: '#D4F7E5',
          9: '#B5F2D4',
          8: '#97EDC2',
          7: '#79E7B0',
          6: '#5AE29E',
          5: '#3CDD8C',
          4: '#25D07A',
          3: '#1FB269',
          2: '#1A9357',
          1: '#0C4529'
        },
        danger: {
          10: '#FAD1D1',
          9: '#F6B1B1',
          8: '#F39191',
          7: '#EF7171',
          6: '#ED5A5A',
          5: '#EA3E3E',
          4: '#DC1818',
          3: '#BC1515',
          2: '#9C1111',
          1: '#7C0E0E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        footnote: '10px',
        'body-small': '14px',
        body: '16px',
        subtitle: '18px',
        'heading-6': '24px',
        'heading-5': '30px',
        'heading-4': '36px',
        'heading-3': '48px',
        'heading-2': '60px',
        'heading-1': '72px',
        title: '84px'
      },
      backgroundImage: (theme) => ({
        'primary-gradient': `linear-gradient(90deg, ${theme(
            'colors.primary.6'
        )} 0%, ${theme('colors.primary.4')} 100%);`,
        'accent-gradient': `linear-gradient(90deg, ${theme(
            'colors.accent.6'
        )} 0%, ${theme('colors.accent.4')} 100%);`,
        'danger-gradient': `linear-gradient(90deg, ${theme(
            'colors.danger.6'
        )} 0%, ${theme('colors.danger.4')} 100%);`
      }),
      borderRadius: {
        DEFAULT: '7px'
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        DEFAULT:
            '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        md: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        lg: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        xl: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      backgroundImage: ['disabled'],
      textColor: ['active'],
      borderColor: ['active'],
      dropShadow: ['hover', 'active'],
      boxShadow: ['hover', 'active']
    }
  },
  plugins: [],
  variantOrder: [
    'disabled',
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active'
  ]
};
