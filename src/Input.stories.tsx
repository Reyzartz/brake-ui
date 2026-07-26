import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, Search } from "lucide-react";
import { Input, InputSize } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  args: { label: "Email", placeholder: "you@example.com" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    icon: { control: false },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const SIZES: InputSize[] = ["sm", "md", "lg"];

const Showcase = () => (
  <div className="flex max-w-sm flex-col gap-4">
    <Input label="Email" placeholder="you@example.com" icon={Mail} />
    <Input
      label="Selector"
      info="A CSS selector used to find the element on the page."
      placeholder="#submit-button"
    />
    <Input label="Search" icon={Search} placeholder="Filter macros…" />
    <Input
      label="Timeout"
      defaultValue="not-a-number"
      error="Must be a positive integer."
    />
    <Input label="Disabled" defaultValue="Read only" disabled />
  </div>
);

export const States: Story = {
  render: () => <Showcase />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4">
      {SIZES.map((size) => (
        <Input
          key={size}
          size={size}
          label={`Size ${size}`}
          placeholder={size}
        />
      ))}
    </div>
  ),
};
