import { InputHTMLAttributes } from "react";
export type ToggleSize = "sm" | "md" | "lg";
export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label?: string;
    size?: ToggleSize;
    fullWidth?: boolean;
}
export declare const Toggle: import("react").ForwardRefExoticComponent<ToggleProps & import("react").RefAttributes<HTMLInputElement>>;
