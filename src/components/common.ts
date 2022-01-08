export type Colors = 'default' | 'primary' | 'accent' | 'danger';
export const colorTypes = {
    options: ['default', 'primary', 'accent', 'danger'],
    control: {
        type: 'select'
    }
};

export type Surface = 'default' | 'level-1' | 'level-2' | 'color';
export const surfaceTypes = {
    options: ['default', 'level-1', 'level-2', 'color'],
    control: {
        type: 'select'
    }
};

export type TextSize =
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'heading-5'
    | 'heading-6'
    | 'subtitle'
    | 'body'
    | 'body-small'
    | 'footnote';
export const textSizeTypes = {
    options: [
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'heading-6',
        'subtitle',
        'body',
        'body-small',
        'footnote'
    ],
    control: {
        type: 'select'
    }
};

export type TextWeight = 'default' | 'semibold';
