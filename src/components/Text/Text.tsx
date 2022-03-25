import React from 'react';
import { Colors, TextSize, TextWeight } from '../common';
import classNames from 'classnames';
import styles from './Text.module.scss';

export interface TextProps {
    textSize: TextSize;
    weight?: TextWeight;
    color?: Colors;
    width?: number;
    margin?: number;
    inline?: boolean;
}

type ElementMap = {
    [key in TextSize]: string;
};

const Text = (props: TextProps & React.HTMLProps<HTMLParagraphElement>) => {
    const { textSize, weight, color, width, margin, inline, ...rest } = props;

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
        [styles.Secondary]: color === 'secondary',
        [styles.Accent]: color === 'accent',
        [styles.Danger]: color === 'danger'
    }, props.className);

    if (inline) {
        return (
            <span
                {...rest}
                className={textStyles}
                style={{ maxWidth: width ?? 'inherit', marginBottom: margin ?? 'inherit', ...props.style }}
            >
                {props.children}
            </span>
        );
    }

    const elementMap: ElementMap = {
        'heading-1': 'h1',
        'heading-2': 'h2',
        'heading-3': 'h3',
        'heading-4': 'h4',
        'heading-5': 'h5',
        'heading-6': 'h6',
        subtitle: 'h6',
        body: 'p',
        'body-small': 'p',
        footnote: 'p'
    };

    return React.createElement(
        elementMap[textSize],
        {
            ...rest,
            className: textStyles,
            style: { maxWidth: width ?? 'inherit', marginBottom: margin ?? 'inherit', ...props.style }
        },
        props.children
    );
};

export { Text };
