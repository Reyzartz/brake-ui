import { LucideIcon } from "lucide-react";
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconColor = "default" | "secondary" | "muted" | "success" | "error" | "warning" | "info";
export interface IconProps {
    icon: LucideIcon;
    size?: IconSize;
    color?: IconColor;
    className?: string;
}
export declare const Icon: ({ icon: LucideIconComponent, size, color, className, filled, }: IconProps & {
    filled?: boolean;
}) => import("react").JSX.Element;
