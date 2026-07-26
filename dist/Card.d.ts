import { HTMLAttributes, ReactNode, ElementType } from "react";
export type CardVariant = "default" | "selected" | "success" | "secondary" | "errored" | "deleted" | "warning";
export type CardSize = "sm" | "md" | "lg";
export interface CardProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    variant?: CardVariant;
    size?: CardSize;
    hover?: boolean;
    clickable?: boolean;
    as?: ElementType;
    autoScroll?: boolean;
    disabled?: boolean;
}
export declare const Card: import("react").ForwardRefExoticComponent<CardProps & import("react").RefAttributes<HTMLElement>>;
