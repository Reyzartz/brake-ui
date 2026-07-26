import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Toggle, ToggleSize } from "./Toggle";
import { Text } from "./Text";

/** Toggle is controlled-only — its track/thumb read `props.checked`. */
const meta = {
  title: "Components/Toggle",
  component: Toggle,
  args: { label: "Enabled", checked: true },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

const SIZES: ToggleSize[] = ["sm", "md", "lg"];

const Showcase = () => {
  const [checked, setChecked] = useState<Record<ToggleSize, boolean>>({
    sm: true,
    md: false,
    lg: true,
  });

  return (
    <div className="flex max-w-sm flex-col gap-4">
      {SIZES.map((size) => (
        <Toggle
          key={size}
          size={size}
          label={`Size ${size}`}
          checked={checked[size]}
          onChange={(e) =>
            setChecked((prev) => ({ ...prev, [size]: e.target.checked }))
          }
        />
      ))}
      <Toggle label="Disabled" checked disabled onChange={() => undefined} />
      <Text variant="small" color="muted">
        Toggle is controlled — pass `checked` and `onChange`.
      </Text>
    </div>
  );
};

export const SizesAndStates: Story = {
  render: () => <Showcase />,
};
