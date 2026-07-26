import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      // Everything the components import stays external — consumers dedupe
      // React and friends against their own copy.
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "clsx",
        "class-variance-authority",
        "lucide-react",
        "react-popper",
        "@popperjs/core",
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
