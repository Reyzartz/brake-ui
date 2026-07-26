import type { Preview } from "@storybook/react-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/styles/theme.css";

const preview: Preview = {
  decorators: [
    // Maps the toolbar toggle straight onto the theme's own
    // `[data-theme="dark"]` selector — no extra theming machinery.
    withThemeByDataAttribute({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
    (Story) => (
      <div className="bg-background text-text min-h-screen p-6">
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: { disable: true },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};

export default preview;
