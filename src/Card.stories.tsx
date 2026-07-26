import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardSize, CardVariant } from "./Card";
import { Text } from "./Text";

const meta = {
  title: "Components/Card",
  component: Card,
  args: { children: "Card content" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const VARIANTS: CardVariant[] = [
  "default",
  "selected",
  "success",
  "secondary",
  "errored",
  "deleted",
  "warning",
];

const SIZES: CardSize[] = ["sm", "md", "lg"];

const Showcase = () => (
  <div className="flex max-w-md flex-col gap-2">
    {VARIANTS.map((variant) => (
      <Card key={variant} variant={variant}>
        <Text variant="h4">{variant}</Text>
      </Card>
    ))}
  </div>
);

export const Variants: Story = {
  render: () => <Showcase />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-2">
      {SIZES.map((size) => (
        <Card key={size} size={size}>
          <Text>Size {size}</Text>
        </Card>
      ))}
    </div>
  ),
};

/**
 * Hover states are compound variants — only `default`, `selected` and
 * `secondary` define one. `secondary` exercises the
 * `--color-background-secondary-hover` token.
 */
export const Hoverable: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-2">
      {(["default", "selected", "secondary"] as CardVariant[]).map((v) => (
        <Card key={v} variant={v} hover>
          <Text>Hover me — {v}</Text>
        </Card>
      ))}
      <Card clickable disabled onClick={() => undefined}>
        <Text>Clickable but disabled</Text>
      </Card>
    </div>
  ),
};
