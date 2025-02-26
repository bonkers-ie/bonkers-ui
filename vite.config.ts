import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "node:path";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { globSync } from "glob";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		libInjectCss(), // inject module.css files imported in the components
		dts({
			staticImport: true,
			insertTypesEntry: true,
			tsconfigPath: "./tsconfig.app.json",
			include: ["src/**/*.ts", "src/**/*.tsx"],
			exclude: [
				"**/*.test.ts",
				"**/*.stories.ts",
				"**/*.stories.tsx",
				"src/stories/*"
			]
		}),
		tailwindcss()
	],
	build: {
		emptyOutDir: true,
		copyPublicDir: false,
		sourcemap: true,
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			formats: ["es"]
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime", "tailwindcss", "classnames", "prop-types", "react-is", "@fortawesome/fontawesome-svg-core", "@fortawesome/react-fontawesome"],
			// Note: Using an array of entry points over using preserveModules to ensure proper tree-shaking and code splitting
			// and also to ensure the libInjectCss works properly for module.css files imported in the components
			input: Object.fromEntries(
				[
					// glob for all ts/tsx files in src/components
					...globSync("src/components/*/*.{ts,tsx}", {
						ignore: ["src/components/**/*.d.ts", "src/components/**/*.stories.ts", "src/components/**/*.stories.tsx"]
					}),
					// glob for all ts files in src/_types
					...globSync("src/_types/**/*.ts", {
						ignore: ["src/_types/**/*.d.ts"]
					})
				].map(file => {
					// Remove the file extension.
					const fileWithoutExt = file.slice(0, file.length - path.extname(file).length);
					// name is the relative path from src, so src/components/<name>
					const name = path
						.relative("src", fileWithoutExt);
					// return the name and file path
					return [name, fileURLToPath(new URL(file, import.meta.url))];
				})
			),
			output: {
				assetFileNames: "assets/[name][extname]",
				entryFileNames: "[name].js",
			},
			treeshake: true,
		}
	}
});
