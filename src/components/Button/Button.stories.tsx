import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { colorTypes } from '../common';

export default {
    title: 'General/Button',
    component: Button,
    argTypes: {
        color: colorTypes,
        type: {
            options: ['default', 'solid'],
            control: {
                type: 'select'
            }
        }
    }
} as Meta;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
    type: 'solid',
    small: false,
    disabled: false
};

export const WithClasses = () => (
    <Button type="solid" color="primary" className="w-full">Beeeeg button</Button>
)
