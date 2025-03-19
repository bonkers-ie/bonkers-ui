import { default as React } from '../../../node_modules/react';
import { EStarsSize, EStarColors } from './_types';
export declare const colorClasses: {
    default: string;
    primary: string;
    white: string;
    black: string;
    current: string;
};
interface IUiStars {
    starsFilled?: number;
    size?: EStarsSize;
    count?: number;
    color?: EStarColors;
    className?: string;
}
export declare const UiStars: ({ starsFilled, size, count, className, color }: IUiStars) => React.JSX.Element;
export {};
