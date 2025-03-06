import React from "react";
import { getCssVariableValue } from "../../helper";
import { ETextWeight, ETypographySizes, UiTypography } from "../../components/UiTypography";

export default function FontSizes() {
	const fontSizes = [
		"--font-size-xxs",
		"--font-size-xs",
		"--font-size-sm",
		"--font-size-md",
		"--font-size-lg",
		"--font-size-xl",
		"--font-size-2xl",
		"--font-size-3xl",
		"--font-size-4xl",
		"--font-size-5xl",
	];

	return (
		<>
			<UiTypography
				lineHeight
				weight={ ETextWeight.BOLD }
				size={ ETypographySizes.XXXXL }
			>
				Font Sizes
			</UiTypography>
			<ul className="flex flex-row flex-wrap gap-md">
				{ fontSizes.map((size) => {
					const varName = size.split("-").pop();
					const value = getCssVariableValue(size);
					return (
						<li
							key={ value }
							style={ {
								fontSize: `var(${size})`
							} }
							className="grid gap-sm border p-md"
						>
							<b>{ varName }</b>
							<p>{ size }</p>
							<p>{ value }</p>
						</li>
					);
				}) }
			</ul>
		</>
	);
};
