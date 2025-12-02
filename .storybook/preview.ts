import type { Preview } from "@storybook/react-vite";
// import { DocsContainer } from "./docsContainer";
import "../src/main.css";
import setupFontAwesome from "../fontAwesome";

setupFontAwesome();

const preview: Preview = {
    parameters: {
		options: {
			storySort: {
				method: "",
				order: [
					"Example",
					"Components",
				],
				locales: "",
			},
		},
		stylePreview: true,
		actions: {
			argTypesRegex: "^on[A-Z].*"
		},
		backgrounds: {
            options: {
                bonkers: {
					name: "Bonkers",
					value: "url(https://web-assets.bonkers.ie/maverick/img/about.0ed347c.png)",
				}
            }
        }
	},

    tags: ["autodocs"],

    initialGlobals: {
        backgrounds: {
            value: "bonkers"
        }
    }
};

export default preview;
