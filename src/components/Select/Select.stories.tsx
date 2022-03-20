import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Select from './Select';

export default {
    title: 'Data Entry/Select',
    component: Select
} as Meta;

interface Person {
    id: number;
    name: string;
}

const people: Person[] = [
    { id: 0, name: 'Wade Cooper' },
    { id: 1, name: 'Arlene Mccoy' },
    { id: 2, name: 'Devon Webb' },
    { id: 3, name: 'Tom Cook' },
    { id: 4, name: 'Tanya Fox' },
    { id: 5, name: 'Hellen Schmidt with a Really Long Name' }
];

export const Default = () => {
    const [val, setVal] = useState<number>();

    return (
        <Select value={val} onChange={(value) => setVal(value)} placeholder="Hello World!">
            {people.map((p) => (
                <Select.Option value={p.id} key={p.id}>
                    {p.name}
                </Select.Option>
            ))}
        </Select>
    );
};
