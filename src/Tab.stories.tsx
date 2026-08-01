import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { User, CreditCard, Lock } from "lucide-react";
import { TabGroup, TabList, Tab, TabPanel } from "./Tab";
import { Badge } from "./Badge";
import { Button } from "./Button";

const meta = {
  title: "Components/Tab",
  component: TabGroup,
  args: { children: null },
} satisfies Meta<typeof TabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div className="max-w-md">
      <TabGroup defaultValue="profile">
        <TabList>
          <Tab value="profile" icon={User}>
            Profile
          </Tab>
          <Tab value="billing" icon={CreditCard}>
            Billing
          </Tab>
          <Tab value="security" icon={Lock} disabled>
            Security
          </Tab>
        </TabList>

        <TabPanel value="profile">
          Update your name, timezone, and language preferences.
        </TabPanel>
        <TabPanel value="billing">
          Manage your payment methods and view invoices.
        </TabPanel>
        <TabPanel value="security">
          Manage two-factor authentication and active sessions.
        </TabPanel>
      </TabGroup>
    </div>
  ),
};

/** Tab accepts a string (wrapped in Text) or arbitrary ReactNode. */
export const CustomTrigger: Story = {
  render: () => (
    <div className="max-w-md">
      <TabGroup defaultValue="billing">
        <TabList>
          <Tab value="profile">Profile</Tab>
          <Tab value="billing">
            <div className="flex items-center gap-2">
              <span>Billing</span>
              <Badge variant="info">New</Badge>
            </div>
          </Tab>
        </TabList>

        <TabPanel value="profile">
          Update your name, timezone, and language preferences.
        </TabPanel>
        <TabPanel value="billing">
          Manage your payment methods and view invoices.
        </TabPanel>
      </TabGroup>
    </div>
  ),
};

/** TabGroup is controllable — pass `value` and `onValueChange`. Here, external buttons drive it. */
const ControlledShowcase = () => {
  const [value, setValue] = useState("profile");

  return (
    <div className="flex max-w-md flex-col gap-3">
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outlined"
          onClick={() => setValue("profile")}
        >
          Show profile
        </Button>
        <Button
          size="sm"
          variant="outlined"
          onClick={() => setValue("billing")}
        >
          Show billing
        </Button>
      </div>

      <TabGroup value={value} onValueChange={setValue}>
        <TabList>
          <Tab value="profile" icon={User}>
            Profile
          </Tab>
          <Tab value="billing" icon={CreditCard}>
            Billing
          </Tab>
        </TabList>

        <TabPanel value="profile">
          Update your name, timezone, and language preferences.
        </TabPanel>
        <TabPanel value="billing">
          Manage your payment methods and view invoices.
        </TabPanel>
      </TabGroup>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledShowcase />,
};
