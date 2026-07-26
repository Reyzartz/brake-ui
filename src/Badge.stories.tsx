import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, BadgeVariant } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: { children: "badge" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "error", "warning", "info"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const VARIANTS: BadgeVariant[] = [
  "default",
  "success",
  "error",
  "warning",
  "info",
];

const Showcase = () => (
  <div className="flex flex-wrap items-center gap-2">
    {VARIANTS.map((variant) => (
      <Badge key={variant} variant={variant}>
        {variant}
      </Badge>
    ))}
  </div>
);

export const Variants: Story = {
  render: () => <Showcase />,
};
