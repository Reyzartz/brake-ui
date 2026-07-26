import { LucideIcon } from "lucide-react";
export interface DropdownItem {
    label: string;
    onClick: () => void;
    variant?: "default" | "danger";
    icon?: LucideIcon;
}
export interface DropdownProps {
    items: DropdownItem[];
    trigger: React.ReactNode;
}
export declare const Dropdown: ({ items, trigger }: DropdownProps) => import("react").JSX.Element;
