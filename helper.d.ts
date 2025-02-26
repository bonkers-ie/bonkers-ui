export type TColor = {
    name: string;
    value: string;
};
export type TGroupedColor = {
    groupTitle: string;
    groupColors: {
        shade: string;
        value: string;
        name: string;
    }[];
};
export declare const getCssVariableValue: (variable: string) => string;
export declare const getBaseVariables: () => {
    name: string;
    value: string;
}[];
export declare const getThemeTokens: () => {
    fontSizes: {
        name: string;
        value: string;
    }[];
    spacings: {
        name: string;
        value: string;
    }[];
    groupedColors: TGroupedColor[];
    baseColors: {
        name: string;
        value: string;
    }[];
};
