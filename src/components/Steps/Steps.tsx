import React from 'react';
import styles from './Steps.module.scss';
import classNames from 'classnames';

type StepState = 'default' | 'active' | 'done';

interface StepsProps {
    children: React.ReactElement<StepProps>[];
    activeStep?: number;
}

export const Steps = (props: StepsProps) => {
    const { activeStep, children, ...rest } = props;

    return (
        <div className={styles.Steps} {...rest}>
            {React.Children.map(children, (child, i) => {
                let state: StepState = 'default';

                // If the active step is
                if (activeStep && i < activeStep) {
                    state = 'done';
                }

                if (activeStep === i) {
                    state = 'active';
                }

                return React.cloneElement(child, {
                    children: child.props.children ?? i + 1,
                    state: state
                });
            })}
        </div>
    );
};

interface StepProps {
    label: string;
    children?: React.ReactNode;
    state?: StepState;
}

Steps.Step = (props: StepProps) => {
    const stepStyles = classNames(styles.Step, {
        [styles.Active]: props.state === 'active',
        [styles.Done]: props.state === 'done'
    });

    return (
        <div className={stepStyles}>
            <div className={styles.StepCircle}>{props.children}</div>
            <div className={styles.StepLabel}>{props.label}</div>
        </div>
    );
};
