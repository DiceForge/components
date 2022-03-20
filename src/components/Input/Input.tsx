import React from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

const Input = (props: React.HTMLProps<HTMLInputElement>) => {
    const inputStyles = classNames(styles.Input);

    return <input className={inputStyles} {...props} />;
};

export { Input };
