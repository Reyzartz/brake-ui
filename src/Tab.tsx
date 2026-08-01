import {
  ButtonHTMLAttributes,
  createContext,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
  useContext,
  useId,
  useState,
} from "react";
import { clsx } from "clsx";
import { LucideIcon } from "lucide-react";
import { Icon } from "./Icon";
import { Text } from "./Text";

interface TabGroupContextValue {
  value: string;
  setValue: (value: string) => void;
  idPrefix: string;
}

const TabGroupContext = createContext<TabGroupContextValue | null>(null);

const useTabGroupContext = () => {
  const context = useContext(TabGroupContext);
  if (!context) {
    throw new Error("Tab/TabList/TabPanel must be used within a TabGroup");
  }
  return context;
};

export interface TabGroupProps {
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export const TabGroup = ({
  children,
  defaultValue = "",
  value: controlledValue,
  onValueChange,
  className,
}: TabGroupProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const idPrefix = useId();

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const setValue = (next: string) => {
    if (!isControlled) setUncontrolledValue(next);
    onValueChange?.(next);
  };

  return (
    <TabGroupContext.Provider value={{ value, setValue, idPrefix }}>
      <div className={className}>{children}</div>
    </TabGroupContext.Provider>
  );
};

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const TabList = ({ children, className, ...props }: TabListProps) => {
  return (
    <div
      role="tablist"
      className={clsx("border-border flex gap-1 border-b", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export interface TabProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "children" | "disabled"
> {
  value: string;
  children: ReactNode;
  icon?: LucideIcon;
  disabled?: boolean;
}

export const Tab = ({
  value,
  children,
  icon: IconComponent,
  disabled = false,
  className,
  ...props
}: TabProps) => {
  const { value: activeValue, setValue, idPrefix } = useTabGroupContext();
  const isActive = activeValue === value;
  const tabId = `${idPrefix}-tab-${value}`;
  const panelId = `${idPrefix}-panel-${value}`;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    const tabs = Array.from(
      event.currentTarget
        .closest('[role="tablist"]')
        ?.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)') ??
        []
    );
    const currentIndex = tabs.indexOf(event.currentTarget);
    if (currentIndex === -1) return;

    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(currentIndex + delta + tabs.length) % tabs.length];
    next?.focus();
    next?.click();
  };

  return (
    <button
      type="button"
      id={tabId}
      role="tab"
      onClick={() => setValue(value)}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      className={clsx(
        "-mb-px flex items-center gap-2 border-b-2 px-3 py-2 transition-colors",
        disabled
          ? "cursor-not-allowed opacity-60"
          : "hover:border-border cursor-pointer",
        isActive ? "border-primary" : "border-transparent",
        className
      )}
      {...props}
    >
      {IconComponent && (
        <Icon
          icon={IconComponent}
          size="sm"
          color={isActive ? "default" : "muted"}
        />
      )}

      {typeof children === "string" ? (
        <Text as="span" variant="h4" color={isActive ? "default" : "muted"}>
          {children}
        </Text>
      ) : (
        children
      )}
    </button>
  );
};

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

export const TabPanel = ({
  value,
  children,
  className,
  ...props
}: TabPanelProps) => {
  const { value: activeValue, idPrefix } = useTabGroupContext();
  const isActive = activeValue === value;

  if (!isActive) return null;

  return (
    <div
      id={`${idPrefix}-panel-${value}`}
      role="tabpanel"
      aria-labelledby={`${idPrefix}-tab-${value}`}
      tabIndex={0}
      className={clsx("text-text-secondary py-3 text-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
};
