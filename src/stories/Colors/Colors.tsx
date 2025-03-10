import React from "react";
import { getThemeTokens } from "../../helper";

const { groupedColors, baseColors } = getThemeTokens();

export const Colors = () => {

	return (
		<div>
			<div className="mb-md">
				<h2 className="mb-sm text-3xl font-bold">Base Colors:</h2>

				<ul className="color_wrapper grid gap-md">
					{ baseColors.map(({ name, value }) => (
						<li key={ name } className="grid gap-xs">
							<div className="color_circle relative m-auto size-xxxxxl rounded-full" style={ {
								backgroundColor: value,
							} }>
							</div>
							<b className="text-center text-lg">{ name }</b>
							<div className="text-center">({ value })</div>
							<div className="text-nowrap text-center text-md">{ value }</div>
						</li>
					)) }
				</ul>
			</div>
			<hr className="my-sm"/>

			{ groupedColors.map(({ groupTitle, groupColors }) => (
				<div className="mb-md" key={ groupTitle }>
					<h2 className="mb-sm text-3xl font-bold">{ groupTitle }:</h2>
					<ul className="color_wrapper grid gap-xxl">
						{ groupColors.map(({ shade, value, name }) => (
							<li key={ `${groupTitle}-${shade}-${name}` } className="grid gap-xs">
								<div className="color_circle relative m-auto size-xxxxxl rounded-full" style={ {
									backgroundColor: `var(${name})`,
								} }>
								</div>
								<b className="text-center text-lg">{ shade }</b>
								<div className="text-center">({ value })</div>
								<div className="text-nowrap text-center text-md">var({ name })</div>
							</li>
						)) }
					</ul>
					<hr className="my-sm"/>
				</div>
			)) }
		</div>
	);
};
