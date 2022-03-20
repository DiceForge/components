import React from 'react';
import { Meta } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

export default {
    title: 'Navigation/Dropdown',
    component: Dropdown
} as Meta;

export const Default = () => {
    return (
        <Dropdown
            button={
                <Button type="solid" color="primary">
                    Dropdown
                </Button>
            }
        >
            <Dropdown.Item>Option 1</Dropdown.Item>
            <Dropdown.Item>Option 2</Dropdown.Item>
            <Dropdown.Item>Option 3</Dropdown.Item>
            <Dropdown.Item>Option 4</Dropdown.Item>
        </Dropdown>
    );
};
