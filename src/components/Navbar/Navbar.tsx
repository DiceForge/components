import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = (props: React.HTMLProps<HTMLDivElement>) => {
    return (
        <div className={styles.NavbarWrapper}>
            <div className={styles.Navbar}>{props.children}</div>

            <div className={styles.NavbarBottom} />
        </div>
    );
};

export { Navbar };
