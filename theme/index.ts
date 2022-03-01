import { Awaretrain } from './awaretrain';
import { CycleCenter } from './cycleCenter';

export interface Colors {
    primary: string;
    white: string;
    black: string;
    text: string;
    blue: string;
    lightBlue: string;
    green: string;
    lightGreen: string;
    grey: string;
    background: string;
    dot: string;
    button: string;
    awaretrain: Awaretrain;
    cycleCenter: CycleCenter;
}

export { default as ThemeLight } from './light';
export { default as ThemeDark } from './dark';
