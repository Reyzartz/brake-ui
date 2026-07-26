import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  args: {
    label: "Notes",
    rows: 4,
    placeholder: "Anything worth remembering…",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

const Showcase = () => (
  <div className="flex max-w-sm flex-col gap-4">
    <Textarea
      label="Notes"
      rows={4}
      placeholder="Anything worth remembering…"
    />
    <Textarea
      label="Payload"
      rows={3}
      defaultValue="{ unclosed:"
      error="Invalid JSON."
    />
    <Textarea label="Disabled" rows={2} defaultValue="Read only" disabled />
  </div>
);

export const States: Story = {
  render: () => <Showcase />,
};
