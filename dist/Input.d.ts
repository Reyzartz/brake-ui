import { InputHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";
export type InputSize = "sm" | "md" | "lg";
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    info?: string;
    error?: string;
    fullWidth?: boolean;
    size?: InputSize;
    icon?: LucideIcon;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
