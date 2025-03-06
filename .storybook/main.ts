import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: [
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../src/**/*.mdx",
	],
	addons: [
		"@storybook/addon-essentials",
		"storybook-dark-mode",
		"@chromatic-com/storybook"
	],
	framework: "@storybook/react-vite",

	typescript: {
		reactDocgen: false
	},
	
};
export default config;
