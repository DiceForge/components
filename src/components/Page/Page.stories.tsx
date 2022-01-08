import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Page } from './Page';
import gradient4 from '../../assets/gradient4.png';

export default {
    title: 'Layout/Page',
    component: Page
} as Meta;

export const Default = () => (
    <Page background={gradient4}>
        <h1>Hello World!</h1>
    </Page>
);
