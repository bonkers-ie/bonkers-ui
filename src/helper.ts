export type TColor ={
	name: string;
	value: string;
}

export type TGroupedColor ={
	groupTitle: string;
	groupColors: {
		shade: string;
		value: string;
		name: string;
	}[];
}

export const getCssVariableValue = (variable: string) => {
	const cssVariable = variable.match(/\((.*)\)/)?.pop() || "";
	return globalThis.getComputedStyle(document.body).getPropertyValue(cssVariable);
};

// get base variables from css theme
export const getBaseVariables = () => {
	const styles = globalThis.getComputedStyle(document.documentElement);
	if (!styles) return [];

	return Object.values(styles).filter(key => key.startsWith("--")).map(key => {
		return ({
			name: key,
			value: styles.getPropertyValue(key)
		});
	});
};

// get the base theme tokens from css theme
export const getThemeTokens = () => {
	const variables = getBaseVariables();

	const fontSizes = variables.filter(variable => variable.name.includes("--font-size"));
	const spacings = variables.filter(variable => variable.name.includes("--spacing"));
	const colors = variables.filter(variable => variable.name.includes("--color"));
	const baseColors  = colors.filter(({ name }) => name.includes("white") || name.includes("black") || name.includes("transparent") || name.includes("current"));

	return {
		fontSizes,
		spacings,
		groupedColors: groupColors(colors),
		baseColors
	};
};

// helper to split up the css variables into groups for displaying in Colors story
const groupColors = (colors: TColor[]): TGroupedColor[] => {
	const baseNames = ["transparent", "current", "black", "white"];
	// Filter out base colors.
	const filteredColors = colors.filter(({ name }) => {
		const trimmedName = name.replace("--color-", "");
		return !baseNames.includes(trimmedName);
	});

	const groups = filteredColors.reduce<Record<string, TGroupedColor>>((acc, { name, value }) => {
		// Remove the prefix and split the name.
		const trimmedName = name.replace("--color-", "");
		const segments = trimmedName.split("-");
		const lastSegment = segments[segments.length - 1];

		// Determine groupTitle and shade.
		let groupTitle: string;
		let shade: string;
		if (!isNaN(parseInt(lastSegment)) && /^\d+$/.test(lastSegment)) {
			shade = lastSegment;
			groupTitle = segments.slice(0, -1).join("-");
		} else {
			shade = "DEFAULT";
			groupTitle = trimmedName;
		}

		if (!acc[groupTitle]) {
			acc[groupTitle] = {
				groupTitle,
				groupColors: []
			};
		}
		acc[groupTitle].groupColors.push({
			shade,
			value,
			name
		});
		return acc;
	}, {});

	return Object.values(groups);
};
