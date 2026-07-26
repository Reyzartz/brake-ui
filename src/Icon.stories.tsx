import type { Meta, StoryObj } from "@storybook/react-vite";
import { Command } from "lucide-react";
import { Icon, IconColor, IconSize } from "./Icon";

const meta = {
  title: "Components/Icon",
  component: Icon,
  args: { icon: Command },
  argTypes: {
    icon: { control: false },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    color: {
      control: "select",
      options: [
        "default",
        "secondary",
        "muted",
        "success",
        "error",
        "warning",
        "info",
      ],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const SIZES: IconSize[] = ["xs", "sm", "md", "lg", "xl"];

const COLORS: IconColor[] = [
  "default",
  "secondary",
  "muted",
  "success",
  "error",
  "warning",
  "info",
];

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {SIZES.map((size) => (
        <Icon key={size} icon={Command} size={size} />
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {COLORS.map((color) => (
        <Icon key={color} icon={Command} color={color} />
      ))}
    </div>
  ),
};
