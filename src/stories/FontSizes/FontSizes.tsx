import React from "react";
import { getThemeTokens } from "../../helper";

export const FontSizes: React.FC = () => {
	const { fontSizes } = getThemeTokens();

	return (
		<ul className="flex flex-row flex-wrap gap-md">
			{ fontSizes.map(({ name, value }) => {
				const varName = name.split("-").pop();
				return (
					<li key={ name } style={ {
						fontSize: value
					} }
					className="grid gap-sm border p-md">
						<b>{ varName }</b>
						<p>{ value }</p>
						<p>{ `var(${name})` }</p>
					</li>
				);
			}) }
		</ul>
	);
};
