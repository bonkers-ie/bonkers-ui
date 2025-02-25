// copy files to dist for publishing
Bun.write("./dist/package.json", Bun.file("./package.json"));
Bun.write("./dist/bonkers.css", Bun.file("./bonkers.css"));
Bun.write("./dist/eslint.config.mjs", Bun.file("./eslint.config.mjs"));
// Bun.write("./dist/.stylelintrc", Bun.file("./.stylelintrc"));
Bun.write("./dist/README.md", Bun.file("./README.md"));
Bun.write("./dist/LICENCE", Bun.file("./LICENCE"));
