import { TransitionProps } from '../common';

const transitionProps: TransitionProps = {
    enter: 'transition duration-300 ease-out',
    enterFrom: 'transform scale-y-80 opacity-0',
    enterTo: 'transform scale-y-100 opacity-100 scale-y-100',
    leave: 'transition duration-300 ease-out',
    leaveFrom: 'transform scale-y-100 opacity-100',
    leaveTo: 'transform scale-y-80 opacity-0'
};

export { transitionProps };
