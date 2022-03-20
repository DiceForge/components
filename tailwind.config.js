const colors = {
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
    red: {
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
    },
    orange: {
        10: '#FAF0D1',
        9: '#F6E5B1',
        8: '#F3DA91',
        7: '#EFD071',
        6: '#EDC85A',
        5: '#EABF3E',
        4: '#DCAB18',
        3: '#BC9215',
        2: '#9C7911',
        1: '#775D0D'
    },
    lime: {
        10: '#E5FAD1',
        9: '#D4F6B1',
        8: '#C2F391',
        7: '#B0EF71',
        6: '#A3ED5A',
        5: '#94EA3E',
        4: '#7ADC18',
        3: '#69BC15',
        2: '#579C11',
        1: '#42770D'
    },
    green: {
        10: '#D1FADB',
        9: '#B1F6C2',
        8: '#91F3A9',
        7: '#71EF90',
        6: '#5AED7E',
        5: '#30E85E',
        4: '#18DC49',
        3: '#15BC3F',
        2: '#119C34',
        1: '#0D7728'
    },
    teal: {
        10: '#D1FAFA',
        9: '#B1F6F6',
        8: '#91F3F3',
        7: '#71EFEF',
        6: '#5AEDED',
        5: '#30E8E8',
        4: '#18DCDC',
        3: '#15BCBC',
        2: '#119C9C',
        1: '#0D7777'
    },
    blue: {
        10: '#D1DBFA',
        9: '#B1C2F6',
        8: '#91A9F3',
        7: '#7190EF',
        6: '#5A7EED',
        5: '#3E69EA',
        4: '#1849DC',
        3: '#153FBC',
        2: '#11349C',
        1: '#0D2877'
    },
    purple: {
        10: '#E6D1FA',
        9: '#D4B1F6',
        8: '#C291F3',
        7: '#B071EF',
        6: '#A35AED',
        5: '#8C30E8',
        4: '#7A18DC',
        3: '#6915BC',
        2: '#57119C',
        1: '#420D77'
    },
    pink: {
        10: '#FAD1F0',
        9: '#F6B1E5',
        8: '#F391DA',
        7: '#EF71D0',
        6: '#EC51C5',
        5: '#E830BA',
        4: '#DC18AB',
        3: '#BC1592',
        2: '#9C1179',
        1: '#770D5D'
    }
};

module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'publish',
        content: ['./src/**/*.{js,jsx,ts,tsx}']
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                ...colors,
                primary: colors.blue,
                accent: colors.green,
                danger: colors.red
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
            backgroundImage: (theme) => {
                const gradients = {
                    'red-gradient': `linear-gradient(90deg, ${theme('colors.red.6')} 0%, ${theme(
                        'colors.red.5'
                    )} 100%);`,
                    'orange-gradient': `linear-gradient(90deg, ${theme('colors.orange.6')} 0%, ${theme(
                        'colors.orange.5'
                    )} 100%);`,
                    'lime-gradient': `linear-gradient(90deg, ${theme('colors.lime.6')} 0%, ${theme(
                        'colors.lime.5'
                    )} 100%);`,
                    'green-gradient': `linear-gradient(90deg, ${theme('colors.green.6')} 0%, ${theme(
                        'colors.green.5'
                    )} 100%);`,
                    'teal-gradient': `linear-gradient(90deg, ${theme('colors.teal.6')} 0%, ${theme(
                        'colors.teal.5'
                    )} 100%);`,
                    'blue-gradient': `linear-gradient(90deg, ${theme('colors.blue.6')} 0%, ${theme(
                        'colors.blue.5'
                    )} 100%);`,
                    'purple-gradient': `linear-gradient(90deg, ${theme('colors.purple.6')} 0%, ${theme(
                        'colors.purple.5'
                    )} 100%);`,
                    'pink-gradient': `linear-gradient(90deg, ${theme('colors.pink.6')} 0%, ${theme(
                        'colors.pink.5'
                    )} 100%);`
                };

                return {
                    ...gradients,
                    'primary-gradient': gradients['blue-gradient'],
                    'accent-gradient': gradients['green-gradient'],
                    'danger-gradient': gradients['red-gradient']
                };
            },
            borderRadius: {
                DEFAULT: '7px'
            },
            boxShadow: {
                sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                DEFAULT: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
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
