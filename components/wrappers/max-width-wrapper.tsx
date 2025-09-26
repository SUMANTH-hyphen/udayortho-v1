import { cn } from "@/lib/utils"
import React from "react"
import { ReactNode } from "react"

const MaxWidthWrapper = ({ className, children }: { className?: string, children?: ReactNode }) => {

    return ( // cn() is used to insert new styles with default styles, className styles can overwrite the default styles given 
        <div className={cn(" w-full max-w-screen-xl mx-auto px-2.5 md:px-20 ", className)}>
            {children}
        </div>
    )

} 

export default MaxWidthWrapper;