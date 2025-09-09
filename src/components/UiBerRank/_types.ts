import { EColors } from "../../_types/colors.ts";

type Ran<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R["length"] extends T ? R[number] : _Range<T, [R["length"], ...R]>;

export type TBerPropNumber = Ran<typeof berRankDictionary.length>
export type TBerPropString = `${TBerPropNumber}`;
export type TBerRank = typeof berRankDictionary[TBerPropNumber]["text"];

export const berRankDictionary = [
	{
		text: "N/A",
		color: EColors.SECONDARY_ALT,
	},
	{
		text: "G",
		color: EColors.BER_RED,
	},
	{
		text: "F",
		color: EColors.BER_DARK_ORANGE,
	},
	{
		text: "E2",
		color: EColors.BER_MID_ORANGE,
	},
	{
		text: "E1",
		color: EColors.BER_MID_ORANGE,
	},
	{
		text: "D2",
		color: EColors.BER_YELLOW,
	},
	{
		text: "D1",
		color: EColors.BER_YELLOW,
	},
	{
		text: "C3",
		color: EColors.BER_BRIGHT_GREEN,
	},
	{
		text: "C2",
		color: EColors.BER_BRIGHT_GREEN,
	},
	{
		text: "C1",
		color: EColors.BER_BRIGHT_GREEN,
	},
	{
		text: "B3",
		color: EColors.BER_MID_GREEN,
	},
	{
		text: "B2",
		color: EColors.BER_MID_GREEN,
	},
	{
		text: "B1",
		color: EColors.BER_MID_GREEN,
	},
	{
		text: "A3",
		color: EColors.BER_DARK_GREEN,
	},
	{
		text: "A2",
		color: EColors.BER_DARK_GREEN,
	},
	{
		text: "A1",
		color: EColors.BER_DARK_GREEN,
	},
] as const;

export const berRanksList = berRankDictionary.map(({ text }) => text);

export enum EBerSize {
	SMALL = "small",
	MEDIUM = "medium",
}
