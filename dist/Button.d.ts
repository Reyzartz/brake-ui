import { ButtonHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";
export type ButtonVariant = "filled" | "outlined" | "ghost" | "text";
export type ButtonColor = "primary" | "secondary" | "danger" | "success";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    fullWidth?: boolean;
    icon?: LucideIcon;
    iconFilled?: boolean;
    iconPosition?: "left" | "right";
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
