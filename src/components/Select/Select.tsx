import { Listbox, Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import styles from './Select.module.scss';
import classNames from 'classnames';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

interface OptionProps<T> {
    value: T;
    children: React.ReactNode;
}

interface SelectProps<T> {
    placeholder?: string;
    value?: T;
    onChange: (value: T) => void;
    children: React.ReactElement<OptionProps<T>>[];
}

interface SelectOption<T> {
    value: T;
    label: React.ReactNode;
}

const Select = <T extends any>(
    props: SelectProps<T> & Omit<React.HTMLProps<HTMLSpanElement>, 'onChange' | 'value' | 'children'>
) => {
    const { placeholder, value, onChange, children, ...rest } = props;

    const [displayValue, setDisplayValue] = useState<React.ReactNode | undefined>();
    const [options, setOptions] = useState<SelectOption<T>[]>([]);

    useEffect(() => {
        const o: SelectOption<T>[] = [];

        React.Children.forEach(children, (child: React.ReactElement<{ value: T; children: React.ReactNode }>) => {
            o.push({
                label: child.props.children,
                value: child.props.value
            });
        });

        setOptions(o);
    }, [children]);

    const onSelect = (value: T) => {
        onChange(value);
        setDisplayValue(options.find((o) => o.value === value)?.label);
    };

    const cardStyles = classNames(styles.Card, styles.Small);

    return (
        <Listbox value={value} onChange={onSelect}>
            <Listbox.Button className={({ open }) => classNames(styles.Input, props.className, { [styles.Active]: open })}>
                <span {...rest} className={styles.InputLabel}>
                    {displayValue ? (
                        <span>{displayValue}</span>
                    ) : (
                        <span className={styles.Placeholder}>{placeholder}</span>
                    )}
                </span>

                <span className={styles.Icon}>
                    <SelectorIcon className="w-5 h-5 text-gray-6" aria-hidden="true" />
                </span>
            </Listbox.Button>

            <Transition
                enter="transition origin-top duration-200 ease-out"
                enterFrom="transform scale-y-75 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition origin-top duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-y-75 opacity-0"
            >
                <Listbox.Options className={cardStyles}>
                    {options.map((option, i) => (
                        <Listbox.Option
                            value={option.value}
                            key={i}
                            className={({ active }) => classNames(styles.Option, { [styles.Active]: active })}
                        >
                            {({ selected }) => (
                                <>
                                    <span>{option.label}</span>

                                    {selected && (
                                        <span className={styles.Icon}>
                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                        </span>
                                    )}
                                </>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    );
};

Select.Option = <T extends any>(props: OptionProps<T>) => {
    return <Listbox.Option value={props.value}>{props.children}</Listbox.Option>;
};

export { Select };
