import { themes } from '@storybook/theming';
import '../src/index.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    backgrounds: {
        default: 'gray-1',
        values: [
            {
                name: 'gray-1',
                value: '#161618'
            },
            {
                name: 'gray-2',
                value: '#1D1D20'
            }
        ]
    },
    darkMode: {
        dark: { ...themes.dark, appBg: '#1D1D20' },
        current: 'dark'
    }
};
