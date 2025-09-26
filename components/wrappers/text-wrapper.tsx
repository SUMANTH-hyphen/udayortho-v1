import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils'; // Assuming cn is imported correctly from your utility library

interface TextWrapperProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

const CursiveTextWrapper = forwardRef<HTMLDivElement, TextWrapperProps>(({ className, children, ...rest }, ref) => {
    return (
        <div className={cn("font-cursive", className)} ref={ref} {...rest}>
            {children}
        </div>
    );
});

CursiveTextWrapper.displayName = 'CursiveTextWrapper'; // Set display name for eslintreact/display-name

const HeadingTextWrapper = forwardRef<HTMLDivElement, TextWrapperProps>(({ className, children, ...rest }, ref) => {
    return (
        <div className={cn(" text-center text-xl font-bold text-slate-700 md:text-3xl lg:text-4xl dark:text-slate-300", className)} ref={ref} {...rest}>
            {children}
        </div>
    );
});

HeadingTextWrapper.displayName = 'HeadingTextWrapper'; // Set display name for eslintreact/display-name

const NormalTextWrapper = forwardRef<HTMLDivElement, TextWrapperProps>(({ className, children, ...rest }, ref) => {
    return (
        <div className={cn("font-normal", className)} ref={ref} {...rest}>
            {children}
        </div>
    );
});

NormalTextWrapper.displayName = 'NormalTextWrapper'; // Set display name for eslintreact/display-name

export { CursiveTextWrapper, HeadingTextWrapper, NormalTextWrapper };