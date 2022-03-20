import React from 'react';
import classNames from 'classnames';
import styles from './Table.module.scss';

interface TableProps {
    bordered?: boolean;
    compact?: boolean;
    hover?: boolean;
    activeRows?: number[];
}

const Table = (props: TableProps & React.HTMLProps<HTMLTableElement>) => {
    const { bordered, compact, children, activeRows, hover, ...rest } = props;

    const tableStyles = classNames(styles.Table, {
        [styles.Compact]: compact,
        [styles.Hover]: hover
    });

    return (
        <div className={styles.TableWrapper}>
            <table className={tableStyles} {...rest}>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        if (child.type === 'tbody') {
                            return (
                                <tbody>
                                    {React.Children.map(child.props.children, (rowChild: React.ReactNode, rowIndex) => {
                                        if (React.isValidElement(rowChild)) {
                                            const rowStyles = classNames({
                                                [styles.ActiveRow]: activeRows && activeRows.includes(rowIndex)
                                            });

                                            return React.cloneElement(rowChild, {
                                                className: rowStyles
                                            });
                                        } else {
                                            return null;
                                        }
                                    })}
                                </tbody>
                            );
                        } else {
                            return child;
                        }
                    } else {
                        return null;
                    }
                })}
            </table>
        </div>
    );
};

export { Table };
