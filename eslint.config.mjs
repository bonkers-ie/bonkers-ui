import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import stylisticPlugin from "@stylistic/eslint-plugin";
import storybook from "eslint-plugin-storybook";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

// Not compatible with tailwind v4: https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/325
// import pluginTailwind from "eslint-plugin-tailwindcss";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		plugins: {
			react,
			"@stylistic": stylisticPlugin,
			"better-tailwindcss": eslintPluginBetterTailwindcss
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			"better-tailwindcss": {
				entryPoint: "src/main.css",
			}
		},
		rules: {
			quotes: [
				"error",
				"double",
				{
					avoidEscape: true,
					allowTemplateLiterals: true,
				},
			],
			"no-multiple-empty-lines": [
				"error",
				{
					max: 1,
					maxEOF: 0,
				},
			],
			// indent: ["error", "tab"],
			"@typescript-eslint/no-explicit-any": "warn",
			"@stylistic/multiline-ternary": ["error", "always"],
			"@stylistic/space-infix-ops": "error",
			"object-curly-spacing": ["error", "always"],
			semi: ["error", "always"],
			"max-len": ["error", {
				"code": 120,
				"tabWidth": 4,
				"ignoreStrings": true,
				"ignoreTemplateLiterals": true,
				"ignoreRegExpLiterals": true,
				"ignoreUrls": true,
				"ignoreComments": true,
				"ignoreTrailingComments": true,
				ignorePattern: 'd="([\\s\\S]*?)"',
			}],
			"@stylistic/indent": ["error", "tab"],
			"@stylistic/no-mixed-spaces-and-tabs": "error",
			"@stylistic/eol-last": ["error", "always"],
			"react/jsx-curly-spacing": [2, {
				"when": "always",
				"children": true
			}],
			"react/jsx-indent": ["error", "tab"],
			"tailwindcss/no-custom-classname": "off",
			"object-curly-newline": ["error", {
				"ObjectExpression": {
					"multiline": true,
					"minProperties": 1,
				},
				"ImportDeclaration": {
					"multiline": true,
					"minProperties": 5,
				}
			}],
			"object-property-newline": "error",
			"space-before-blocks": ["error", "always"],
			"keyword-spacing": "error",
			"key-spacing": "error",
			"multiline-ternary": ["error", "always-multiline"],
			"operator-linebreak": ["error", "before"],
			"@typescript-eslint/no-duplicate-enum-values": 0,
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"error", // or "error"
				{
					"argsIgnorePattern": "^_",
					"varsIgnorePattern": "^_",
					"caughtErrorsIgnorePattern": "^_"
				}
			],
			...(eslintPluginBetterTailwindcss.configs["recommended-warn"]).rules,
			...(eslintPluginBetterTailwindcss.configs["recommended-error"]).rules,
			"better-tailwindcss/enforce-consistent-line-wrapping": [
				"error",
				{
					indent: "tab",
					printWidth: 140,
					classesPerLine: 1,
					preferSingleLine: true,
				},
			],
			"better-tailwindcss/no-restricted-classes": [
				"error",
				{
					restrict: [
						{
							pattern: "^.*!$",
							message: "No important classes allowed."

						}]
				}
			],
			"better-tailwindcss/no-unregistered-classes": [
				"warn",
			],
		},
	},
	...tseslint.configs.recommended,
	...storybook.configs["flat/recommended"]
];
