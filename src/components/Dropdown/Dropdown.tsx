import { Menu, Transition } from '@headlessui/react';
import React from 'react';
import styles from './Dropdown.module.scss';
import classNames from 'classnames';

interface ItemProps {
    children: React.ReactNode;
    active?: boolean;
}

interface DropdownProps {
    children: React.ReactElement<ItemProps>[];
    button: React.ReactNode;
}

const Dropdown = (props: DropdownProps) => {
    const cardStyles = classNames(styles.Card, styles.Small);

    return (
        <Menu as="div">
            <Menu.Button as="div">{props.button}</Menu.Button>

            <Transition
                enter="transition origin-top duration-200 ease-out"
                enterFrom="transform scale-y-75 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition origin-top duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-y-75 opacity-0"
            >
                <Menu.Items className={cardStyles}>
                    {React.Children.map(props.children, (child) => {
                        return (
                            <Menu.Item as="div">
                                {({ active }) => React.cloneElement(child, { ...child.props, active })}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

Dropdown.Item = (props: ItemProps) => {
    const itemStyles = classNames(styles.MenuItem, {
        [styles.Active]: props.active
    });

    return <div className={itemStyles}>{props.children}</div>;
};

export { Dropdown };
