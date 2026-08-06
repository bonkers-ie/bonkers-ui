import { default as React } from '../../../node_modules/react';
import { TBerPropNumber, TBerPropString, EBerSize, TBerRankDictionary } from './_types';
interface IUiBerRankProps {
    dictionary: TBerRankDictionary[];
    rank: TBerPropNumber | TBerPropString;
    size?: EBerSize;
    className?: string;
}
export declare const UiBerRank: React.FC<IUiBerRankProps>;
export {};
