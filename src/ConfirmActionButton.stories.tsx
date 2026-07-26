import type { Meta, StoryObj } from "@storybook/react-vite";
import { Trash2 } from "lucide-react";
import { ConfirmActionButton } from "./ConfirmActionButton";

const meta = {
  title: "Components/ConfirmActionButton",
  component: ConfirmActionButton,
  args: {
    children: "Delete",
    title: "Delete macro?",
    message: "This cannot be undone.",
    confirmText: "Delete",
    isDestructiveAction: true,
    color: "danger",
    onConfirm: () => undefined,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "ghost", "text"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "danger", "success"],
    },
    onConfirm: { control: false },
  },
} satisfies Meta<typeof ConfirmActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const Showcase = () => (
  <div className="flex items-center gap-3">
    <ConfirmActionButton
      title="Delete macro?"
      message="This cannot be undone."
      confirmText="Delete"
      isDestructiveAction
      color="danger"
      icon={Trash2}
      onConfirm={() => undefined}
    >
      Delete
    </ConfirmActionButton>

    <ConfirmActionButton
      title="Publish changes?"
      message="Your edits will be applied immediately."
      confirmText="Publish"
      variant="outlined"
      onConfirm={() => undefined}
    >
      Publish
    </ConfirmActionButton>
  </div>
);

/** `isDestructiveAction` only recolours the confirm button, not the trigger. */
export const DestructiveAndSafe: Story = {
  render: () => <Showcase />,
};
