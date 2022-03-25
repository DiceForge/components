import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { Colors } from '../common';

export type ButtonType = 'default' | 'solid';
export type ButtonColor = Colors;

export interface ButtonProps {
    type?: ButtonType;
    color?: ButtonColor;
    small?: boolean;
}

const Button = (props: ButtonProps & React.HTMLProps<HTMLButtonElement>) => {
    const { type, color, small, children, ...rest } = props;

    const buttonStyles = classNames({
        [styles.DefaultButton]: !type || type === 'default',
        [styles.SolidButton]: type === 'solid',
        [styles.DefaultColorButton]: !color || color === 'default',
        [styles.PrimaryButton]: color === 'primary',
        [styles.AccentButton]: color === 'accent',
        [styles.DangerButton]: color === 'danger',
        [styles.SmallButton]: small
    }, props.className);

    return (
        <button {...rest} className={buttonStyles}>
            {props.children}
        </button>
    );
};

export { Button };
