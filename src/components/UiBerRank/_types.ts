type Ran<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R["length"] extends T ? R[number] : _Range<T, [R["length"], ...R]>;

export type TBerPropNumber = Ran<typeof berRankDictionary.length>
export type TBerPropString = `${TBerPropNumber}`;
export type TBerRank = typeof berRankDictionary[TBerPropNumber]["text"];

export const berRankDictionary = [
	{
		text: "N/A",
		color: "text-secondary-alt",
	},
	{
		text: "G",
		color: "text-[#ed1c24]",
	},
	{
		text: "F",
		color: "text-[#f37021]",
	},
	{
		text: "E2",
		color: "text-[#fdb913]",
	},
	{
		text: "E1",
		color: "text-[#f37021]",
	},
	{
		text: "D2",
		color: "text-[#fff200]",
	},
	{
		text: "D1",
		color: "text-[#fff200]",
	},
	{
		text: "C3",
		color: "text-[#bfd730]",
	},
	{
		text: "C2",
		color: "text-[#bfd730]",
	},
	{
		text: "C1",
		color: "text-[#bfd730]",
	},
	{
		text: "B3",
		color: "text-[#51b848]",
	},
	{
		text: "B2",
		color: "text-[#51b848]",
	},
	{
		text: "B1",
		color: "text-[#51b848]",
	},
	{
		text: "A3",
		color: "text-[#00a651]",
	},
	{
		text: "A2",
		color: "text-[#00a651]",
	},
	{
		text: "A1",
		color: "text-[#00a651]",
	},
] as const;

export enum EBerSize {
	SMALL = "small",
	MEDIUM = "medium",
}
