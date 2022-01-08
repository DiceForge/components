import React from 'react';
import styles from './Page.module.scss';

interface PageProps {
    background: string;
}

const Page = (props: PageProps & React.HTMLProps<HTMLDivElement>) => {
    const { background, ...rest } = props;

    return (
        <div className={styles.Page} style={{ backgroundImage: `url(${background})` }} {...rest}>
            <div className={styles.PageCard}>{props.children}</div>
        </div>
    );
};

export { Page };
