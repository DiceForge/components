import React from 'react';
import { Meta } from '@storybook/react';
import { Steps } from './Steps';

export default {
    title: 'Navigation/Steps',
    component: Steps
} as Meta;

export const Default = () => (
    <Steps activeStep={0}>
        <Steps.Step label="First Step" />
        <Steps.Step label="Second Step" />
        <Steps.Step label="Third Step" />
        <Steps.Step label="Fourth Step" />
        <Steps.Step label="Fifth Step" />
        <Steps.Step label="Sixth Step" />
    </Steps>
);
