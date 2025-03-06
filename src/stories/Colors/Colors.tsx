import { ColorPalette, ColorItem } from "@storybook/blocks";
import React from "react";
import { getCssVariableValue, groupColors, type TGroupedColor } from "../../helper";
import { EColors } from "../../_types/colors";
import { ETextAlign, ETextWeight, ETypographySizes, UiTypography } from "../../components/UiTypography";

export default function Colors () {
	const colorsArray = Object.entries(EColors).map(([name, value]) => ({
		name,
		value,
		hex: getCssVariableValue(value),
	}));

	const groupedColors: TGroupedColor[] = groupColors(colorsArray);

	return (
		<ColorPalette>
			{ groupedColors.map(({ groupTitle, groupColors }) => (
				<div key={ groupTitle }>
					<div className="mb-md">
						<UiTypography
							lineHeight
							className="pr-sm"
							align={ ETextAlign.RIGHT }
							weight={ ETextWeight.BOLD }
							size={ ETypographySizes.XL }
						>
							{ groupTitle }
						</UiTypography>
						<hr/>
					</div>
					{ groupColors.map(({ name, value, hex }) => (
						<ColorItem
							key={ name }
							title={ name }
							subtitle={ hex }
							colors={ {
								[name]: `var(${value})`
							} }
						/>
					)) }
				</div>
			)) }
		</ColorPalette>
	);
};
