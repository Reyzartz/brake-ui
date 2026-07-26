import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-themes"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    // The root vite.config.ts is a library build; Storybook needs an app build.
    delete config.build?.lib;
    delete config.build?.rollupOptions;
    return config;
  },
};

export default config;
