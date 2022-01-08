import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
    size?: 'default' | 'large';
}

const Input = (props: InputProps & React.HTMLProps<HTMLInputElement>) => {
    const { size, ...rest } = props;

    return <input className={styles.Input} {...rest} />;
};

export { Input };
