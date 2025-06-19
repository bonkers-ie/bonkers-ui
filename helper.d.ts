export type TToken = {
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
export declare const getThemeTokens: (variables: TToken[]) => {
    fontSizes: TToken[];
    spacings: TToken[];
    groupedColors: TGroupedColor[];
    baseColors: TToken[];
};
export declare function getCSSVariables(): TToken[];
