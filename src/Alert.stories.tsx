import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertVariant } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  args: { children: "Something worth reading." },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const VARIANTS: AlertVariant[] = ["success", "error", "warning", "info"];

const Showcase = () => (
  <div className="flex max-w-md flex-col gap-2">
    {VARIANTS.map((variant) => (
      <Alert key={variant} variant={variant}>
        This is a {variant} alert with its default icon.
      </Alert>
    ))}
    <Alert variant="info" showIcon={false}>
      No icon.
    </Alert>
  </div>
);

export const Variants: Story = {
  render: () => <Showcase />,
};
