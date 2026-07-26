import { HTMLAttributes } from "react";
export type BadgeVariant = "default" | "success" | "error" | "warning" | "info";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    children: React.ReactNode;
}
export declare const Badge: ({ variant, children, className, ...props }: BadgeProps) => import("react").JSX.Element;
