import type { Meta, StoryObj } from "@storybook/react-vite";
import { MoreVertical, Pencil, Copy, Trash2 } from "lucide-react";
import { Dropdown } from "./Dropdown";
import { Button } from "./Button";

const ITEMS = [
  { label: "Edit", icon: Pencil, onClick: () => undefined },
  { label: "Duplicate", icon: Copy, onClick: () => undefined },
  {
    label: "Delete",
    icon: Trash2,
    variant: "danger" as const,
    onClick: () => undefined,
  },
];

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {
    items: ITEMS,
    trigger: <Button icon={MoreVertical} variant="ghost" color="secondary" />,
  },
  argTypes: {
    items: { control: false },
    trigger: { control: false },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Popper places the menu bottom-end, so anchor the trigger to the right. */
const Showcase = () => (
  <div className="flex justify-end">
    <Dropdown
      trigger={<Button icon={MoreVertical} variant="ghost" color="secondary" />}
      items={ITEMS}
    />
  </div>
);

export const WithDangerItem: Story = {
  render: () => <Showcase />,
};
