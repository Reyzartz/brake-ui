import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoPopover } from "./InfoPopover";
import { Text } from "./Text";

const meta = {
  title: "Components/InfoPopover",
  component: InfoPopover,
  args: {
    content:
      "Popovers position with Popper and render in place — no portal, so they work inside a shadow root.",
  },
} satisfies Meta<typeof InfoPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2 pt-24">
      <Text>Hover the icon</Text>
      <InfoPopover {...args} />
    </div>
  ),
};
