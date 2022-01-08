import React from 'react';
import { Colors, TextSize, TextWeight } from '../common';
import classNames from 'classnames';
import styles from './Text.module.scss';

export interface TextProps {
    textSize: TextSize;
    weight?: TextWeight;
    color?: Colors;
    width?: number;
    useSpan?: boolean;
}

const Text = (props: TextProps & React.HTMLProps<HTMLParagraphElement>) => {
    const { textSize, weight, color, width, useSpan, ...rest } = props;

    const textStyles = classNames(styles.Text, {
        [styles.Heading1]: textSize === 'heading-1',
        [styles.Heading2]: textSize === 'heading-2',
        [styles.Heading3]: textSize === 'heading-3',
        [styles.Heading4]: textSize === 'heading-4',
        [styles.Heading5]: textSize === 'heading-5',
        [styles.Heading6]: textSize === 'heading-6',
        [styles.Subtitle]: textSize === 'subtitle',
        [styles.Body]: textSize === 'body',
        [styles.BodySmall]: textSize === 'body-small',
        [styles.Footnote]: textSize === 'footnote',
        [styles.SemiBold]: weight === 'semibold',
        [styles.Primary]: color === 'primary',
        [styles.Accent]: color === 'accent',
        [styles.Danger]: color === 'danger'
    });

    if (useSpan) {
        return (
            <span className={textStyles} style={{ maxWidth: width ?? 'inherit' }} {...rest}>
                {props.children}
            </span>
        );
    }

    switch (textSize) {
        case 'heading-1':
            return (
                <h1 className={textStyles} style={{ maxWidth: width ?? 'inherit' }} {...rest}>
                    {props.children}
                </h1>
            );
        case 'heading-2':
            return (
                <h2 className={textStyles} style={{ maxWidth: width ?? 'inherit' }} {...rest}>
                    {props.children}
                </h2>
            );
        case 'heading-3':
            return (
                <h3 className={textStyles} style={{ maxWidth: width ?? 'inherit' }} {...rest}>
                    {props.children}
                </h3>
            );
        case 'heading-4':
            return (
                <h4 className={textStyles} style={{ maxWidth: width ?? 'inherit' }} {...rest}>
                    {props.children}
                </h4>
            );
        case 'heading-5':
            return (
                <h5 className={textStyles} style={{ maxWidth: width ?? 'inherit' }} {...rest}>
                    {props.children}
                </h5>
            );
        case 'heading-6':
            return (
                <h6 className={textStyles} style={{ maxWidth: width ?? 'inherit' }} {...rest}>
                    {props.children}
                </h6>
            );
        case 'subtitle':
            return (
                <h6 className={textStyles} style={{ maxWidth: width ?? 'inherit' }} {...rest}>
                    {props.children}
                </h6>
            );
        case 'body':
            return (
                <p className={textStyles} style={{ maxWidth: width ?? 'inherit' }} {...rest}>
                    {props.children}
                </p>
            );
        case 'body-small':
            return (
                <p className={textStyles} style={{ maxWidth: width ?? 'inherit' }} {...rest}>
                    {props.children}
                </p>
            );
        case 'footnote':
            return (
                <p className={textStyles} style={{ maxWidth: width ?? 'inherit' }} {...rest}>
                    {props.children}
                </p>
            );
    }
};

export { Text };
