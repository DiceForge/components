import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Card, CardProps } from './Card';

export default {
    title: 'Layout/Card',
    component: Card
} as Meta;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
    <Card {...args}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus asperiores assumenda aut dolor ducimus,
        error esse et explicabo, facilis hic inventore nam nemo nobis placeat quis reiciendis vero. Officia?
    </Card>
);

export const Default = Template.bind({});
Default.args = {
    surface: 'default'
};
