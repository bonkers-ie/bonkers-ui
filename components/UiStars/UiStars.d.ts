import { default as React } from '../../../node_modules/react';
import { EStarsSize } from './_types';
import { EColors } from '../../_types/colors';
interface IUiStars {
    starsFilled?: number;
    size?: EStarsSize;
    count?: number;
    color?: EColors;
    name?: string;
    className?: string;
    showOutline?: boolean;
}
export declare const UiStars: ({ starsFilled, size, count, className, color, name, showOutline }: IUiStars) => React.JSX.Element;
export {};
