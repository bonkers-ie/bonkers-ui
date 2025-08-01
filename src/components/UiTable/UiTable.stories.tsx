import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { UiTable, UiTableRow, UiTableCell } from "./index.ts";
import { ETableKind } from "./_types";
import { EColors, ETextWeight, ETypographySizes, UiTypography } from "../UiTypography";

const meta = {
	title: "Components/UiTable",
	component: UiTable,
	argTypes: {
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(ETableKind),
			description: "The row kind",
		},
	},
	args: {
		kind: ETableKind.DEFAULT,
	},
} satisfies Meta<typeof UiTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {

		const defaultList = {
			text1: "some text",
			text2: "some text2",
			text3: "some text3",
			extraText: false
		};

		const list = [
			defaultList,
			defaultList,
			defaultList,
			defaultList,
			defaultList,
			{
				...defaultList,
				extraText: true
			}
		];

		const subText = (
			<>
				<p>23.620 cent x</p>
				<p>4,200 kWh</p>
			</>
		);

		const head = (
			<UiTableRow>
				{ ["Header 1", "Header 2", "Header 3"].map((header, index) => (
					<UiTableCell key={ index } weight={ ETextWeight.SEMI_BOLD }>
						<UiTypography
							tag="div"
							size={ ETypographySizes.MD }
							color={ EColors.PRIMARY_ALT_700 }
						>
							{ header }
						</UiTypography>
					</UiTableCell>
				))
				}
			</UiTableRow>
		);

		return (
			<UiTable className="w-full" kind={ args.kind } header={ head }>
				{ list.map((row, index) => (
					<UiTableRow key={ index }>
						<UiTableCell weight={ ETextWeight.SEMI_BOLD }>
							{ row.text1 }
						</UiTableCell>
						<UiTableCell>
							{ row.text2 }
						</UiTableCell>

						<UiTableCell weight={ ETextWeight.SEMI_BOLD } subText={ row.extraText && (subText) }>
							{ row.text3 }
						</UiTableCell>
					</UiTableRow>
				)) }
			</UiTable>
		);
	}
};
