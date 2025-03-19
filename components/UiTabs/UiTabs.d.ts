import { default as React } from '../../../node_modules/react';
type UiTabsProps = {
    tabs: string[];
    tabsModel: string;
    className: string;
    onTabChange: (val: string) => void;
};
export declare const UiTabs: React.FC<UiTabsProps>;
export {};
