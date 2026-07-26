import { HTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";
export type KbdSize = "sm" | "md" | "lg";
export interface KbdProps extends HTMLAttributes<HTMLSpanElement> {
    size?: KbdSize;
    icon?: LucideIcon;
    children?: React.ReactNode;
}
export declare const Kbd: ({ size, icon, children, className, ...props }: KbdProps) => import("react").JSX.Element;
