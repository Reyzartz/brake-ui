import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Settings, Bell, Shield } from "lucide-react";
import {
  AccordionGroup,
  Accordion,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";
import { Badge } from "./Badge";
import { Button } from "./Button";

const meta = {
  title: "Components/Accordion",
  component: AccordionGroup,
  args: { children: null },
} satisfies Meta<typeof AccordionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleOpen: Story = {
  render: () => (
    <div className="max-w-md">
      <AccordionGroup defaultOpenIds={["general"]}>
        <Accordion id="general">
          <AccordionTrigger icon={Settings}>General</AccordionTrigger>
          <AccordionContent>
            Update your name, timezone, and language preferences.
          </AccordionContent>
        </Accordion>

        <Accordion id="notifications">
          <AccordionTrigger icon={Bell}>Notifications</AccordionTrigger>
          <AccordionContent>
            Choose which emails and push notifications you receive.
          </AccordionContent>
        </Accordion>

        <Accordion id="security" disabled>
          <AccordionTrigger icon={Shield}>Security</AccordionTrigger>
          <AccordionContent>
            Manage two-factor authentication and active sessions.
          </AccordionContent>
        </Accordion>
      </AccordionGroup>
    </div>
  ),
};

export const AllowMultiple: Story = {
  render: () => (
    <div className="max-w-md">
      <AccordionGroup
        allowMultiple
        defaultOpenIds={["general", "notifications"]}
      >
        <Accordion id="general">
          <AccordionTrigger icon={Settings}>General</AccordionTrigger>
          <AccordionContent>
            Update your name, timezone, and language preferences.
          </AccordionContent>
        </Accordion>

        <Accordion id="notifications">
          <AccordionTrigger icon={Bell}>Notifications</AccordionTrigger>
          <AccordionContent>
            Choose which emails and push notifications you receive.
          </AccordionContent>
        </Accordion>
      </AccordionGroup>
    </div>
  ),
};

/** AccordionTrigger accepts a string (wrapped in Text) or arbitrary ReactNode. */
export const CustomTrigger: Story = {
  render: () => (
    <div className="max-w-md">
      <AccordionGroup defaultOpenIds={["notifications"]}>
        <Accordion id="notifications">
          <AccordionTrigger>
            <div className="flex flex-1 items-center gap-2">
              <span>Notifications</span>
              <Badge variant="info">3 new</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Choose which emails and push notifications you receive.
          </AccordionContent>
        </Accordion>
      </AccordionGroup>
    </div>
  ),
};

/** AccordionGroup is controllable — pass `openIds` and `onOpenIdsChange`. Here, external buttons drive it. */
const ControlledShowcase = () => {
  const [openIds, setOpenIds] = useState<string[]>(["general"]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex max-w-md flex-col gap-3">
      <div className="flex gap-2">
        <Button size="sm" variant="outlined" onClick={() => toggle("general")}>
          {openIds.includes("general") ? "Hide" : "Show"} general
        </Button>
        <Button
          size="sm"
          variant="outlined"
          onClick={() => toggle("notifications")}
        >
          {openIds.includes("notifications") ? "Hide" : "Show"} notifications
        </Button>
      </div>

      <AccordionGroup
        allowMultiple
        openIds={openIds}
        onOpenIdsChange={setOpenIds}
      >
        <Accordion id="general">
          <AccordionTrigger icon={Settings}>General</AccordionTrigger>
          <AccordionContent>
            Update your name, timezone, and language preferences.
          </AccordionContent>
        </Accordion>

        <Accordion id="notifications">
          <AccordionTrigger icon={Bell}>Notifications</AccordionTrigger>
          <AccordionContent>
            Choose which emails and push notifications you receive.
          </AccordionContent>
        </Accordion>
      </AccordionGroup>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledShowcase />,
};
