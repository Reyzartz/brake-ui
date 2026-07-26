import { HTMLAttributes, ReactNode } from "react";
export type AlertVariant = "success" | "error" | "warning" | "info";
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    children: ReactNode;
    showIcon?: boolean;
}
export declare const Alert: ({ variant, children, showIcon, className, ...props }: AlertProps) => import("react").JSX.Element;
