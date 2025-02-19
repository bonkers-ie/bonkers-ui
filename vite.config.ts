import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "node:path";
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { glob } from "glob";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		libInjectCss(),
		dts({
			staticImport: true,
			insertTypesEntry: true,
			include: ["src/**/*.ts", "src/**/*.tsx"],
			exclude: ["**/*.test.ts", "**/*.stories.ts"]
		}),
	],
	build: {
		emptyOutDir: true,
		copyPublicDir: false,
		// sourcemap: true,
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			formats: ["es"]
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime", "tailwindcss", "classnames", "prop-types", "react-is", "@fortawesome/fontawesome-svg-core", "@fortawesome/react-fontawesome"],
			input: Object.fromEntries(
				[
					// "src/index.ts",
					...glob.sync("src/components/*/*.{ts,tsx}", {
						ignore: ["src/components/**/*.d.ts", "src/components/**/*.stories.ts", "src/components/**/*.stories.tsx"]
					}),
					...glob.sync("src/_types/**/*.ts", {
						ignore: ["src/_types/**/*.d.ts"]
					})
				].map(file => {
					// Remove the file extension.
					const fileWithoutExt = file.slice(0, file.length - path.extname(file).length);
					const name = path
						.relative("src", fileWithoutExt)
					return [name, fileURLToPath(new URL(file, import.meta.url))];
				})
			),
			output: {
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js',
			}
			// treeshake: true,
			// output: [
			// 	{
			// 		format: "umd",
			// 		name: "bonkers-ui",
			// 		exports: "named",
			// 		globals: {
			// 			react: "React"
			// 		},
			// 	},
			// 	{
			// 		strict: true,
			// 		name: "bonkers-ui",
			// 		format: "es",
			// 		exports: "named",
			// 		entryFileNames: "[name].js",
			// 		preserveModules: true,
			// 		preserveModulesRoot: "src",
			// 	},
			// ],
		}
	}
});
