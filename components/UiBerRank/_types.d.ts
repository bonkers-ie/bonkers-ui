type Ran<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R["length"] extends T ? R[number] : _Range<T, [R["length"], ...R]>;
export type TBerPropNumber = Ran<typeof berRankDictionary.length>;
export type TBerPropString = `${TBerPropNumber}`;
export type TBerRank = typeof berRankDictionary[TBerPropNumber]["text"];
export declare const berRankDictionary: readonly [{
    readonly text: "N/A";
    readonly color: "text-secondary-alt";
}, {
    readonly text: "G";
    readonly color: "text-[#ed1c24]";
}, {
    readonly text: "F";
    readonly color: "text-[#f37021]";
}, {
    readonly text: "E2";
    readonly color: "text-[#fdb913]";
}, {
    readonly text: "E1";
    readonly color: "text-[#f37021]";
}, {
    readonly text: "D2";
    readonly color: "text-[#fff200]";
}, {
    readonly text: "D1";
    readonly color: "text-[#fff200]";
}, {
    readonly text: "C3";
    readonly color: "text-[#bfd730]";
}, {
    readonly text: "C2";
    readonly color: "text-[#bfd730]";
}, {
    readonly text: "C1";
    readonly color: "text-[#bfd730]";
}, {
    readonly text: "B3";
    readonly color: "text-[#51b848]";
}, {
    readonly text: "B2";
    readonly color: "text-[#51b848]";
}, {
    readonly text: "B1";
    readonly color: "text-[#51b848]";
}, {
    readonly text: "A3";
    readonly color: "text-[#00a651]";
}, {
    readonly text: "A2";
    readonly color: "text-[#00a651]";
}, {
    readonly text: "A1";
    readonly color: "text-[#00a651]";
}];
export declare enum EBerSize {
    SMALL = "small",
    MEDIUM = "medium"
}
export {};
