import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowUp, Option } from "lucide-react";
import { Kbd, KbdSize } from "./Kbd";

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  args: { children: "K" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    icon: { control: false },
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

const SIZES: KbdSize[] = ["sm", "md", "lg"];

const Showcase = () => (
  <div className="flex flex-col gap-4">
    {SIZES.map((size) => (
      <div key={size} className="flex items-center gap-1.5">
        <Kbd size={size} icon={Option} />
        <Kbd size={size}>Q</Kbd>
        <Kbd size={size}>Shift</Kbd>
        <Kbd size={size} icon={ArrowUp} />
      </div>
    ))}
  </div>
);

export const Sizes: Story = {
  render: () => <Showcase />,
};
