import React from 'react';
import styles from './Card.module.scss';
import { Surface } from '../common';
import classNames from 'classnames';

export interface CardProps {
    surface?: Surface;
    small?: boolean;
}

const Card = (props: CardProps & React.HTMLProps<HTMLDivElement>) => {
    const { surface, small, ...rest } = props;

    const cardStyles = classNames(styles.Card, {
        [styles.Default]: !surface || surface === 'default',
        [styles.Level1]: surface === 'level-1',
        [styles.Level2]: surface === 'level-2',
        [styles.Color]: surface === 'color',
        [styles.Small]: small
    });

    return (
        <div className={cardStyles} {...rest}>
            {props.children}
        </div>
    );
};

export { Card };
