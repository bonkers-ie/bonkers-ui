import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { EBerSize } from "./_types";
import { UiBerRank } from "./UiBerRank";

const BER_DICTIONARY = [
	{
		text: "G",
		color: "text-[#ed1c24]",
	},
	{
		text: "F",
		color: "text-[#f37021]",
	},
	{
		text: "E",
		color: "text-[#f37021]",
	},
	{
		text: "D",
		color: "text-[#fff200]",
	},
	{
		text: "C",
		color: "text-[#bfd730]",
	},
	{
		text: "B",
		color: "text-[#51b848]",
	},
	{
		text: "A0",
		color: "text-[#00a651]",
	},
	{
		text: "A",
		color: "text-[#00a651]",
	}
];

const meta = {
	title: "Components/UiBerRank",
	component: UiBerRank,
	argTypes: {
		rank: {
			control: {
				type: "range",
				min: 0,
				max: BER_DICTIONARY.length - 1,
			},
			description: "The Element rank, indexing into the provided dictionary",
		},
		size: {
			control: {
				type: "select"
			},
			options: Object.values(EBerSize),
			description: "The size of the rank",
		},
		dictionary: {
			control: {
				type: "object"
			},
			description: "Rank dictionary mapping each numeric rank to its label and color",
		}
	},
	args: {
		rank: 0,
		size: EBerSize.MEDIUM,
		dictionary: BER_DICTIONARY
	},
} satisfies Meta<typeof UiBerRank>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args)=>(
		<UiBerRank
			rank={ args.rank }
			size={ args.size }
			dictionary={ args.dictionary }
		/>
	)
};
