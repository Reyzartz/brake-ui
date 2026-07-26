import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";
import { Text } from "./Text";

const meta = {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
    spacing: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

const Showcase = () => (
  <div className="max-w-md">
    <Text>Above</Text>
    <Divider spacing="md" />
    <Text>Below</Text>
    <Divider spacing="lg" />
    <div className="flex h-8 items-center gap-3">
      <Text>Left</Text>
      <Divider orientation="vertical" className="h-full" />
      <Text>Right</Text>
    </div>
  </div>
);

export const SpacingAndOrientation: Story = {
  render: () => <Showcase />,
};
