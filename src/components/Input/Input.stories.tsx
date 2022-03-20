import React from 'react';
import { Meta } from '@storybook/react';
import { Input } from './Input';
import { Card } from '../Card/Card';

export default {
    title: 'Data Entry/Input',
    component: Input
} as Meta;

export const Default = () => <Input placeholder="Hello, world!" />;

export const WithinCard = () => (
    <Card>
        <Input placeholder="Hello, world!" />
    </Card>
);
