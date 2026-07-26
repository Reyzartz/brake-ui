import type { Meta, StoryObj } from "@storybook/react-vite";
import { Globe } from "lucide-react";
import { Select, SelectSize } from "./Select";

const meta = {
  title: "Components/Select",
  component: Select,
  args: {
    label: "Trigger",
    children: (
      <>
        <option value="click">Click</option>
        <option value="hover">Hover</option>
        <option value="focus">Focus</option>
      </>
    ),
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    icon: { control: false },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const SIZES: SelectSize[] = ["sm", "md", "lg"];

const Showcase = () => (
  <div className="flex max-w-sm flex-col gap-4">
    <Select label="Trigger" defaultValue="click">
      <option value="click">Click</option>
      <option value="hover">Hover</option>
      <option value="focus">Focus</option>
    </Select>
    <Select label="Locale" icon={Globe} info="Used for date formatting.">
      <option>en-GB</option>
      <option>en-US</option>
    </Select>
    <Select label="Broken" error="Pick a valid option.">
      <option>—</option>
    </Select>
    <Select label="Disabled" disabled>
      <option>Locked</option>
    </Select>
  </div>
);

export const States: Story = {
  render: () => <Showcase />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4">
      {SIZES.map((size) => (
        <Select key={size} size={size} label={`Size ${size}`}>
          <option>{size}</option>
        </Select>
      ))}
    </div>
  ),
};
