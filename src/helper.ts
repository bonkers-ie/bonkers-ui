export type TColor ={
	name: string;
	value: string;
	hex: string;
}

export type TGroupedColor ={
	groupTitle: string;
	groupColors: TColor[];
}

export const getCssVariableValue = (variable: string) => {
	// const cssVariable = variable.match(/\((.*)\)/)?.pop() || "";
	return window.getComputedStyle(document.documentElement).getPropertyValue(variable);
};

// get base variables from css theme
export const getBaseVariables = () => {
	const frame = document.getElementById("storybook-preview-iframe") as HTMLIFrameElement;
	console.log("frame", frame);
	const styles = window.getComputedStyle(frame?.contentDocument?.documentElement || document.documentElement);
	console.log(Array.from(styles));

	return Object.values(styles).filter(key => key.startsWith("--")).map(key => {
		return ({
			name: key,
			value: styles.getPropertyValue(key)
		});
	});
};

// helper to split up the css variables into groups for displaying in Colors story
export const groupColors = (colors: TColor[]): TGroupedColor[] => {
	const groups = colors.reduce<Record<string, TGroupedColor>>((acc, color) => {
		let groupKey: string;
		if (["WHITE", "BLACK", "TRANSPARENT", "CURRENT"].includes(color.name)) {
			groupKey = "BASE";
		} else {
			const parts = color.name.split("_");
			if (!/_[0-9]{3}$/.test(color.name)) color.name = "DEFAULT"; // Set name to DEFAULT for the default colors

			if (parts.length > 1 && /^\d+$/.test(parts[parts.length - 1])) { // test if the last part is a number e.g. "PRIMARY_500" or "SECONDARY_ALT_300"
				groupKey = parts.slice(0, -1).join("-");
				color.name = parts[parts.length - 1];
			} else {
				groupKey = parts.join("-"); // Secondary-Alt, Accent-Alt and Primary-Alt
			}
		}

		if (!acc[groupKey]) {
			acc[groupKey] = {
				groupTitle: groupKey,
				groupColors: []
			};
		}
		acc[groupKey].groupColors.push(color);
		return acc;
	}, {});

	return Object.values(groups);
};
