import { default as React } from '../../../node_modules/react';
import { EButtonSizes, EButtonTypes, EButtonWeight } from './_types.ts';
type TButtonType = "button" | "submit" | "reset";
type TButtonTypeProps<T extends React.ElementType> = [T] extends ["button"] ? {
    type: TButtonType;
} : unknown;
type PolymorphicProps<T extends React.ElementType> = {
    tag?: T;
    kind?: EButtonTypes;
    size?: EButtonSizes;
    fullWidth?: boolean;
    weight?: EButtonWeight;
    className?: string;
} & React.ComponentPropsWithoutRef<T> & TButtonTypeProps<T>;
export declare function UiButton<T extends React.ElementType = "button">({ kind, size, fullWidth, disabled, weight, className, onClick, tag, ...rest }: PolymorphicProps<T>): React.JSX.Element;
export {};
