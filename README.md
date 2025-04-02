<div align="center"><a name="readme-top">Bonkers-UI Design System</a></div>

<br/>

<div align="center" style="display:flex; flex-direction: column;">
	<a href="https://bonkers-ie.github.io/bonkers-ui" target="_blank">
		<img width="300" src="https://web-assets.bonkers.ie/packs/static/logo/bonkers_logo-279f0cff5a9b71e3059a.svg">
	</a>

<h4>The design system used internally at <a href="https://www.bonkers.ie" target="_blank">bonkers.ie</a> for consistent styling across platforms</a>

<br/>
<br/>

<div align="center">
	<a href="https://bonkers-ie.github.io/bonkers-ui/"  target="_blank">  
		<img alt="Bonkers storybook" src="https://img.shields.io/badge/Bonkers-UI-green.svg?logo=storybook" />  
	</a>
	<img src="https://img.shields.io/npm/v/bonkers-ui?color=green">
	<img src="https://img.shields.io/npm/l/bonkers-ui">
	<img src="https://img.shields.io/npm/dw/bonkers-ui">
	<img src="https://img.badgesize.io/https:/unpkg.com/bonkers-ui/?label=Brotli%20size%3A%20JS&compression=brotli">
</div>
</div>

## Recommended IDE Setup

- [Webstorm](https://www.jetbrains.com/webstorm/)
- [VS Code](https://code.visualstudio.com/)
    - [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
    - [Tailwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Setup project

- Use bun to install all dependencies with the frozen lockfile

    ```bash
    bun i
    ```

- To run the storybook

    ```bash
    bun dev
    ```

- open [http://localhost:6006/](http://localhost:6006/)

## For use in a consuming project

- Install the component library with your desired package manager.

	- This projects uses TailwindCSS @ v4, which does not require a tailwind.config.{js,ts} file. _Note:_ Please refer to the TailwindCSS documentation for more information and up-to-date instructions.
    - If the client is built with Next.js, please ensure `tailwindcss`, `@tailwindcss/postcss` and `postcss` are installed.
    - If the client is built with Vite, please ensure `tailwindcss` and `@tailwindcss/vite` are installed.

- Previously the Bonkers-UI tailwind plugin was implemented by adding it to the  `plugins` array of the tailwind config file. Now, all that is required is to add the Bonkers-UI CSS theme file to the styles entry point of the client.

- Ensure that the Bonkers-UI theme is included in the project's CSS entry point, eg. `src/app/globals.css` in a Next.js project or `src/styles.css` in a Vite project.
- It is also required, at time of writing, to add the Bonkers-UI library as a source in the CSS entry point. _Note:_ the path to the Bonkers-UI source files in the node_modules directory should be relative to the CSS entry point.

```css
@import 'bonkers-ui/theme';;
@source "../node_modules/bonkers-ui";
```

- Please ensure that your `tsconfig` file is configured with `moduleResolution` set to `Bundler` or `NodeNext` (depending on your project setup) to allow for the Bonkers-UI types to be resolved. Example:

```json
{
	"compilerOptions": {
		"target": "ES2020",
		"module": "ESNext",
		"strict": true /* Specify what module code is generated. */,
		"verbatimModuleSyntax": true,

		"esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
		"forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
		"skipLibCheck": true /* Skip type checking all .d.ts files. */,
		/* Bun Settings */
		"moduleResolution": "node",
		"noEmit": true,
		"allowImportingTsExtensions": true,
		"moduleDetection": "force",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"jsx": "preserve"
	},
	"include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx"],
	"references": [{ "path": "./tsconfig.node.json" }]
}
```

- Within a `Next.js` project, it is requiredd to add the Tailwind PostCSS plugin to the clients `postcss.config.mjs` file.

```tsx
/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: {
		"@tailwindcss/postcss": {},
	},
};

export default config;
```

- Bonkers-UI has been successfully installed to your project, now import any components you need!

```tsx
import React from "react";
import { UiButton, EButtonTypes, EButtonSizes } from "bonkers-ui/UiButton";
import { UiInput, EInputKind } from "bonkers-ui/UiInput";

export type TNewComponent = {
	placeholder: string;
	heading: string;
	subLabel?: string;
	children: React.ReactNode;
};

export const NewComponent: React.FC<TNewComponent> = ({
	children,
	placeholder,
	heading,
	subLabel,
	...props
}) => (
	<div {...props}>
		<UiButton size={EButtonSizes.LARGE} kind={EButtonTypes.PRIMARY}>
			{children}
		</UiButton>

		<UiInput
			kind={EInputKind.PRIMARY}
			placeholder={placeholder}
			full-width
			className="mb-md"
			heading={heading}
			sub-label={subLabel}
		/>
	</div>
);
```

## Flow to develop

- We use only the <b>develop</b> branch as a base for creating new branches
- Ensure to pull the latest changes before creating a new branch
- Preferred naming of branches:
    - `feature/[feature-name]`
    - `hotfix/[fix-name]`
- Preferred commit message
    - `update([file[s]-name]): [message]` for example - `update(main.css, header.tsx): change header to .header`
    - `fix([file[s]-name]): [message]`
    - `add([file[s]-name]): [message`
- When you are ready to push just `merge` (do not `rebase`) develop into the current branch
- Fix any merge conflicts that this creates
- Next create pull request to develop (you can squash multiple commits when merging)
- After the pull request is merged to develop you can see it in staging [https://bonkers-ie.github.io/bonkers-ui](https://bonkers-ie.github.io/bonkers-ui/?path=/docs/example-introduction--docs)
- Only after reviewing and testing the changes in staging, then create a merge request from `develop` to `master`
- After you merge to master, the patch version will upgrade x.x.^x and you can use this version in the package
