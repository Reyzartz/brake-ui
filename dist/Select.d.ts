import { SelectHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";
export type SelectSize = "sm" | "md" | "lg";
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    label?: string;
    info?: string;
    error?: string;
    fullWidth?: boolean;
    size?: SelectSize;
    icon?: LucideIcon;
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
