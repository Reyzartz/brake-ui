import { HTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose?: () => void;
    children: ReactNode;
    maxWidth?: "sm" | "md" | "lg" | "xl";
    zIndex?: number;
}
export declare const Modal: ({ isOpen, onClose, children, maxWidth, zIndex, className, ...props }: ModalProps) => import("react").JSX.Element | null;
export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    icon?: LucideIcon;
}
export declare const ModalHeader: ({ children, className, title, icon, ...props }: ModalHeaderProps) => import("react").JSX.Element;
export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    borderless?: boolean;
}
export declare const ModalBody: ({ children, className, borderless, ...props }: ModalBodyProps) => import("react").JSX.Element;
export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    visible?: boolean;
}
export declare const ModalFooter: ({ children, className, visible, ...props }: ModalFooterProps) => import("react").JSX.Element;
