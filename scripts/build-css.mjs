// Copies src/styles/theme.css to dist/theme.css, prepending a Tailwind v4
// `@source` directive.
//
// Tailwind v4 skips node_modules during automatic source detection, so a
// consumer importing "brake-ui/theme.css" would otherwise get zero utility
// classes for the markup inside our components. dist/theme.css sits next to
// dist/index.js, so "./index.js" resolves correctly from any consumer with no
// configuration on their side.
//
// The directive lives here rather than in src/styles/theme.css so Storybook can
// import the source file directly (where ./index.js does not exist).
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const theme = readFileSync(resolve(root, "src/styles/theme.css"), "utf8");

const TAILWIND_IMPORT = `@import "tailwindcss";`;
const SOURCE_DIRECTIVE = `\n\n/* Let Tailwind scan the bundled components for class names. */\n@source "./index.js";`;

if (!theme.includes(TAILWIND_IMPORT)) {
  throw new Error(
    `Expected src/styles/theme.css to contain ${TAILWIND_IMPORT} — cannot place @source directive.`
  );
}

// Must go *after* the @import: CSS drops @import rules that follow other rules.
writeFileSync(
  resolve(root, "dist/theme.css"),
  theme.replace(TAILWIND_IMPORT, TAILWIND_IMPORT + SOURCE_DIRECTIVE)
);
console.log("dist/theme.css written");
