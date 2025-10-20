import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils'; // Assuming cn is imported correctly from your utility library

interface TextWrapperProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

const TaglineTextWrapper = forwardRef<HTMLDivElement, TextWrapperProps>(({ className, children, ...rest }, ref) => {
    return (
        <div className={cn(" font-sans text-[#121345] text-center italic opacity-80 text-md md:text-lg lg:text-2xl ", className)} ref={ref} {...rest}>
            {children}
        </div>
    );
});

TaglineTextWrapper.displayName = 'TaglineTextWrapper'; // Set display name for eslintreact/display-name

const HeadingTextWrapper = forwardRef<HTMLDivElement, TextWrapperProps>(({ className, children, ...rest }, ref) => {
    return (
        <div className={cn(" font-sans text-[#121345] text-3xl font-semibold text-center md:text-3xl lg:text-5xl lg:font-bold", className)} ref={ref} {...rest}>
            {children}
        </div>
    );
});

HeadingTextWrapper.displayName = 'HeadingTextWrapper'; // Set display name for eslintreact/display-name

const NormalTextWrapper = forwardRef<HTMLDivElement, TextWrapperProps>(({ className, children, ...rest }, ref) => {
    return (
        <div className={cn(" font-sans text-start text-sm lg:text-lg", className)} ref={ref} {...rest}>
            {children}
        </div>
    );
});

NormalTextWrapper.displayName = 'NormalTextWrapper'; // Set display name for eslintreact/display-name

const RandomTextWrapper = forwardRef<HTMLDivElement, TextWrapperProps>(({ className, children, ...rest }, ref) => {
    return (
        <div className={cn(" font-sans", className)} ref={ref} {...rest}>
            {children}
        </div>
    );
});

RandomTextWrapper.displayName = 'RandomTextWrapper'; // Set display name for eslintreact/display-name

export { TaglineTextWrapper, HeadingTextWrapper, NormalTextWrapper, RandomTextWrapper };