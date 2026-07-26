import { HTMLAttributes, ReactNode, ElementType } from "react";
export type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "xs" | "small" | "caption";
export type TextColor = "default" | "muted" | "success" | "error" | "warning" | "inverse" | "info";
export interface TextProps extends HTMLAttributes<HTMLElement> {
    variant?: TextVariant;
    color?: TextColor;
    children: ReactNode;
    as?: ElementType;
}
export declare const Text: ({ variant, color, children, as, className, ...props }: TextProps) => import("react").JSX.Element;
