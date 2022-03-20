import React from 'react';
import { Meta } from '@storybook/react';
import { Table } from './Table';

export default {
    title: 'Layout/Table',
    component: Table
} as Meta;

const items = [
    {
        id: 1,
        name: 'Test User',
        phoneNumber: '404-404-4040',
        email: 'test@testuser.com'
    },
    {
        id: 2,
        name: 'Test User',
        phoneNumber: '404-404-4040',
        email: 'test@testuser.com'
    },
    {
        id: 3,
        name: 'Test User',
        phoneNumber: '404-404-4040',
        email: 'test@testuser.com'
    },
    {
        id: 4,
        name: 'Test User',
        phoneNumber: '404-404-4040',
        email: 'test@testuser.com'
    }
];

export const Default = () => (
    <Table activeRows={[1]} hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
            </tr>
        </thead>

        <tbody>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
        </tbody>
    </Table>
);
