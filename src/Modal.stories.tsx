import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Settings } from "lucide-react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "./Modal";
import { Button } from "./Button";
import { Text } from "./Text";

const meta = {
  title: "Components/Modal",
  component: Modal,
  args: { isOpen: false, children: null },
  argTypes: {
    maxWidth: { control: "select", options: ["sm", "md", "lg", "xl"] },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const MAX_WIDTHS = ["sm", "md", "lg", "xl"] as const;

const Showcase = () => {
  const [open, setOpen] = useState<(typeof MAX_WIDTHS)[number] | null>(null);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {MAX_WIDTHS.map((maxWidth) => (
        <Button key={maxWidth} onClick={() => setOpen(maxWidth)}>
          Open {maxWidth}
        </Button>
      ))}

      {open && (
        <Modal isOpen onClose={() => setOpen(null)} maxWidth={open}>
          <ModalHeader title={`Modal (${open})`} icon={Settings} />
          <ModalBody>
            <Text color="muted">
              The body caps at 70vh and scrolls. The modal renders in place with
              a high z-index rather than through a portal, so it also works
              inside a shadow root.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="text"
              color="secondary"
              onClick={() => setOpen(null)}
            >
              Cancel
            </Button>
            <Button onClick={() => setOpen(null)}>Save</Button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

export const Sizes: Story = {
  render: () => <Showcase />,
};

/** ModalFooter animates its max-height when `visible` flips. */
export const CollapsingFooter: Story = {
  render: function CollapsingFooterStory() {
    const [dirty, setDirty] = useState(false);

    return (
      <Modal isOpen maxWidth="md">
        <ModalHeader title="Edit macro" />
        <ModalBody>
          <Button variant="outlined" onClick={() => setDirty((d) => !d)}>
            {dirty ? "Discard changes" : "Make a change"}
          </Button>
        </ModalBody>
        <ModalFooter visible={dirty}>
          <Button variant="text" color="secondary">
            Cancel
          </Button>
          <Button>Save</Button>
        </ModalFooter>
      </Modal>
    );
  },
};
