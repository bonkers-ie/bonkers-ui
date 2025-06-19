import React from "react";
import { getCSSVariables, getThemeTokens } from "../../helper";

export const Spacings = () => {
	const allTokens = getCSSVariables();

	const { spacings } = getThemeTokens(allTokens);

	return (
		<ul
			className="flex flex-row flex-wrap gap-md"
		>
			{
				spacings.map(({ name, value }) => (
					<li key={ name } className="grid gap-sm border border-black p-md">
						<div>
							<b>
								{ name.split("-").pop() }
							</b>
							<br />
							<br />
							{ value }
							<br />
							{ `var(${name})` }
						</div>
						<div
							className="border border-black bg-primary-alt-400"
							style={ {
								width: value,
								height: value,
							} }
						/>
					</li>
				))
			}
		</ul>
	);
};
