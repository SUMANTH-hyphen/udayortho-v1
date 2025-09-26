import { cn } from "@/lib/utils";
import React, { ReactNode, forwardRef } from "react";

interface ScreenWrapperProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

const ScreenWrapper = forwardRef<HTMLDivElement, ScreenWrapperProps>(
  ({ className, children, ...props }, ref) => {
    return (
      // cn() is used to insert new styles with default styles, className styles can overwrite the default styles given 
      <div ref={ref} className={cn("min-h-screen w-full mx-auto px-2.5 md:px-10 lg:px-20", className)} {...props}>
        {children}
      </div>
    );
  }
);

ScreenWrapper.displayName = "ScreenWrapper";

export default ScreenWrapper;