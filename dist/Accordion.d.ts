import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
export interface AccordionGroupProps {
    children: ReactNode;
    allowMultiple?: boolean;
    defaultOpenIds?: string[];
    openIds?: string[];
    onOpenIdsChange?: (ids: string[]) => void;
    className?: string;
}
export declare const AccordionGroup: ({ children, allowMultiple, defaultOpenIds, openIds: controlledOpenIds, onOpenIdsChange, className, }: AccordionGroupProps) => import("react").JSX.Element;
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
    children: ReactNode;
    disabled?: boolean;
}
export declare const Accordion: ({ id, children, disabled, className, ...props }: AccordionProps) => import("react").JSX.Element;
export interface AccordionTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children" | "disabled"> {
    children: ReactNode;
    icon?: LucideIcon;
}
export declare const AccordionTrigger: ({ children, icon: IconComponent, className, ...props }: AccordionTriggerProps) => import("react").JSX.Element;
export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export declare const AccordionContent: ({ children, className, ...props }: AccordionContentProps) => import("react").JSX.Element;
