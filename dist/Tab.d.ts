import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
export interface TabGroupProps {
    children: ReactNode;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
}
export declare const TabGroup: ({ children, defaultValue, value: controlledValue, onValueChange, className, }: TabGroupProps) => import("react").JSX.Element;
export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export declare const TabList: ({ children, className, ...props }: TabListProps) => import("react").JSX.Element;
export interface TabProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children" | "disabled"> {
    value: string;
    children: ReactNode;
    icon?: LucideIcon;
    disabled?: boolean;
}
export declare const Tab: ({ value, children, icon: IconComponent, disabled, className, ...props }: TabProps) => import("react").JSX.Element;
export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    children: ReactNode;
}
export declare const TabPanel: ({ value, children, className, ...props }: TabPanelProps) => import("react").JSX.Element | null;
