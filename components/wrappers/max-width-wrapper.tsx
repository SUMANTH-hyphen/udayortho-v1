import { cn } from "@/lib/utils";
import React, { ReactNode, forwardRef } from "react";


interface MaxWidthWrapperProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

const MaxWidthWrapper = forwardRef<HTMLDivElement, MaxWidthWrapperProps>(
    ({ className, children, ...props }, ref) => {
        return ( // cn() is used to insert new styles with default styles, className styles can overwrite the default styles given 
            <div className={cn(" w-full max-w-screen-xl mx-auto px-2.5 md:px-20 ", className)} {...props} ref={ref}>
                {children}
            </div>
        )
    }
)

MaxWidthWrapper.displayName = "MaxWidthWrapper";

export default MaxWidthWrapper;