import React from 'react';
import { Meta } from '@storybook/react';
import { Navbar } from './Navbar';
import { Text } from '../Text/Text';

export default {
    title: 'Layout/Navbar',
    component: Navbar
} as Meta;

export const Default = () => (
    <Navbar>
        <Text textSize="subtitle" weight="semibold">
            DiceForge
        </Text>
    </Navbar>
);
