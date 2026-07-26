import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, TextColor, TextVariant } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  args: { children: "The quick brown fox jumps over the lazy dog" },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const VARIANTS: TextVariant[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "body",
  "small",
  "xs",
  "caption",
];

const COLORS: TextColor[] = [
  "default",
  "muted",
  "success",
  "error",
  "warning",
  "info",
  "inverse",
];

const ColorShowcase = () => (
  <div className="flex flex-col gap-2">
    {COLORS.map((color) => (
      // `inverse` is meant for dark surfaces, so give it one.
      <div
        key={color}
        className={color === "inverse" ? "bg-text w-fit rounded px-2" : ""}
      >
        <Text color={color}>{color} — The quick brown fox</Text>
      </div>
    ))}
  </div>
);

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {VARIANTS.map((variant) => (
        <Text key={variant} variant={variant}>
          {variant} — The quick brown fox
        </Text>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => <ColorShowcase />,
};
