import { TextareaHTMLAttributes } from "react";
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string | null;
    fullWidth?: boolean;
    containerClassName?: string;
}
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
