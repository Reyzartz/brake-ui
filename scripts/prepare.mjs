// dist/ is committed so that git-dependency installs work without a build step
// (not every package manager reliably runs `prepare` for git deps). This script
// is the fallback for the ones that do: build only when dist is missing, and
// never fail the install if the toolchain is not available.
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

if (existsSync(resolve(root, "dist/index.js"))) {
  process.exit(0);
}

try {
  execSync("npm run build", { cwd: root, stdio: "inherit" });
} catch {
  console.warn("broke-ui: prepare build skipped (toolchain unavailable)");
}
