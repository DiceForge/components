import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Text, { TextProps } from './Text';
import { textSizeTypes } from '../common';

export default {
    title: 'General/Text',
    component: Text,
    argTypes: {
        textSize: textSizeTypes
    }
} as Meta;

const Template: ComponentStory<typeof Text> = (args: TextProps) => (
    <Text {...args}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur ipsam laudantium natus quae! Assumenda,
        delectus eaque eius excepturi, impedit nihil, quam quibusdam quidem suscipit ullam vel voluptatem voluptatibus?
        Reprehenderit!
    </Text>
);

export const Default = Template.bind({});
Default.args = {
    textSize: 'heading-1',
    weight: 'default',
    color: 'default',
    useSpan: false
};

export const SpanExample = () => (
    <Text textSize="body" width={600}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        <Text textSize="body" weight="semibold" color="primary" useSpan>
            Accusantium amet aspernatur deleniti
        </Text>{' '}
        dicta dignissimos eaque eos, laboriosam libero modi odio omnis pariatur possimus reiciendis rem tempora tempore
        ullam unde vitae.
    </Text>
);
