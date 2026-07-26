import { HTMLAttributes } from "react";
export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
    orientation?: "horizontal" | "vertical";
    spacing?: "none" | "sm" | "md" | "lg";
}
export declare const Divider: ({ orientation, spacing, className, ...props }: DividerProps) => import("react").JSX.Element;
