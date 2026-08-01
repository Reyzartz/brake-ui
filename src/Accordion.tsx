import {
  ButtonHTMLAttributes,
  createContext,
  HTMLAttributes,
  ReactNode,
  useContext,
  useId,
  useState,
} from "react";
import { clsx } from "clsx";
import { ChevronDown, LucideIcon } from "lucide-react";
import { Icon } from "./Icon";
import { Text } from "./Text";

interface AccordionGroupContextValue {
  openIds: string[];
  toggle: (id: string) => void;
}

const AccordionGroupContext = createContext<AccordionGroupContextValue | null>(
  null
);

const useAccordionGroupContext = () => {
  const context = useContext(AccordionGroupContext);
  if (!context) {
    throw new Error("Accordion must be used within an AccordionGroup");
  }
  return context;
};

export interface AccordionGroupProps {
  children: ReactNode;
  allowMultiple?: boolean;
  defaultOpenIds?: string[];
  openIds?: string[];
  onOpenIdsChange?: (ids: string[]) => void;
  className?: string;
}

export const AccordionGroup = ({
  children,
  allowMultiple = false,
  defaultOpenIds = [],
  openIds: controlledOpenIds,
  onOpenIdsChange,
  className,
}: AccordionGroupProps) => {
  const [uncontrolledOpenIds, setUncontrolledOpenIds] =
    useState<string[]>(defaultOpenIds);

  const isControlled = controlledOpenIds !== undefined;
  const openIds = isControlled ? controlledOpenIds : uncontrolledOpenIds;

  const toggle = (id: string) => {
    const isOpen = openIds.includes(id);
    const next = allowMultiple
      ? isOpen
        ? openIds.filter((openId) => openId !== id)
        : [...openIds, id]
      : isOpen
        ? []
        : [id];

    if (!isControlled) setUncontrolledOpenIds(next);
    onOpenIdsChange?.(next);
  };

  return (
    <AccordionGroupContext.Provider value={{ openIds, toggle }}>
      <div
        className={clsx(
          "bg-surface divide-border divide-y rounded border",
          className
        )}
      >
        {children}
      </div>
    </AccordionGroupContext.Provider>
  );
};

interface AccordionContextValue {
  isOpen: boolean;
  toggle: () => void;
  disabled: boolean;
  contentId: string;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "AccordionTrigger/AccordionContent must be used within an Accordion"
    );
  }
  return context;
};

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  children: ReactNode;
  disabled?: boolean;
}

export const Accordion = ({
  id,
  children,
  disabled = false,
  className,
  ...props
}: AccordionProps) => {
  const { openIds, toggle: toggleGroup } = useAccordionGroupContext();
  const contentId = useId();
  const isOpen = openIds.includes(id);

  const toggle = () => {
    if (!disabled) toggleGroup(id);
  };

  return (
    <AccordionContext.Provider value={{ isOpen, toggle, disabled, contentId }}>
      <div className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export interface AccordionTriggerProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "children" | "disabled"
> {
  children: ReactNode;
  icon?: LucideIcon;
}

export const AccordionTrigger = ({
  children,
  icon: IconComponent,
  className,
  ...props
}: AccordionTriggerProps) => {
  const { isOpen, toggle, disabled, contentId } = useAccordionContext();

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={disabled}
      aria-expanded={isOpen}
      aria-controls={contentId}
      className={clsx(
        "flex w-full items-center gap-2 px-3 py-2.5 text-left transition-colors",
        disabled
          ? "cursor-not-allowed opacity-60"
          : "hover:bg-surface-hover cursor-pointer",
        className
      )}
      {...props}
    >
      {IconComponent && <Icon icon={IconComponent} size="sm" color="muted" />}

      {typeof children === "string" ? (
        <Text variant="h4" className="flex-1">
          {children}
        </Text>
      ) : (
        <div className="flex-1">{children}</div>
      )}

      <Icon
        icon={ChevronDown}
        size="sm"
        color="muted"
        className={clsx("transition-transform", isOpen && "rotate-180")}
      />
    </button>
  );
};

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const AccordionContent = ({
  children,
  className,
  ...props
}: AccordionContentProps) => {
  const { isOpen, contentId } = useAccordionContext();

  return (
    <div
      id={contentId}
      role="region"
      className={clsx(
        "grid transition-[grid-template-rows] duration-200 ease-in-out",
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
    >
      <div className="overflow-hidden">
        <div
          className={clsx("text-text-secondary px-3 pb-3 text-sm", className)}
          {...props}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
