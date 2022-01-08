import React from 'react';
import { Meta } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'Data Entry/Input',
    component: Input
} as Meta;

export const Default = () => <Input placeholder="Hello, world!" />;
