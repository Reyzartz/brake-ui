import { ButtonProps } from "./Button";
export interface ConfirmActionButtonProps extends ButtonProps {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onClick?: () => void;
    onConfirm: () => void;
    onCancel?: () => void;
    isDestructiveAction?: boolean;
}
declare const ConfirmActionButton: import("react").NamedExoticComponent<ConfirmActionButtonProps>;
export { ConfirmActionButton };
