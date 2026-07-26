import type { Meta, StoryObj } from "@storybook/react-vite";
import { Plus, Trash2, ArrowRight } from "lucide-react";
import { Button, ButtonColor, ButtonVariant, ButtonSize } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: { children: "Button" },
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "ghost", "text"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "danger", "success"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const VARIANTS: ButtonVariant[] = ["filled", "outlined", "ghost", "text"];
const COLORS: ButtonColor[] = ["primary", "secondary", "danger", "success"];
const SIZES: ButtonSize[] = ["sm", "md", "lg"];

/** The full 4x4 variant/color grid — the fastest way to spot a broken token. */
const Showcase = () => (
  <div className="flex flex-col gap-4">
    {VARIANTS.map((variant) => (
      <div key={variant} className="flex items-center gap-3">
        <span className="text-text-muted w-20 text-xs">{variant}</span>
        {COLORS.map((color) => (
          <Button key={color} variant={variant} color={color}>
            {color}
          </Button>
        ))}
      </div>
    ))}
  </div>
);

export const VariantsAndColors: Story = {
  render: () => <Showcase />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {SIZES.map((size) => (
        <Button key={size} size={size}>
          Size {size}
        </Button>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button icon={Plus}>Add step</Button>
      <Button icon={ArrowRight} iconPosition="right" variant="outlined">
        Continue
      </Button>
      <Button icon={Trash2} color="danger" variant="ghost" />
      <Button icon={Plus} iconFilled color="success" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button fullWidth className="max-w-40">
        Full width
      </Button>
    </div>
  ),
};
