import * as React from "react"
import { ZodError, z } from "zod";
import { useState } from "react";

//import { cn } from "@/lib/utils"
import { cn } from "../../../utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
        isRequired: boolean;
    }

const AlphabeticInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, isRequired, ...props }, ref) => {
    
    const [error, setError] = useState(null); //Hook to manage error state

    // This function is called whenever the input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Define the schema for alphabetic input, with a regular expression for both spanish and english characters
        const schema = z.string().regex(/^[a-zA-Z0-9\s\p{P}áéíóúÁÉÍÓÚñÑ]+$/, "Input must be alphabetic");    
        try {
            schema.parse(e.target.value); //If parsing is succesful, set error state to null
            setError(null);
        } catch (error: any) {
            setError(error.message); //If parsing fails, set error message
        }
    }

    return (
        <div>
        <input
            type={type}
            required={isRequired}
            className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 invalid:bg-red-500",
                className,
                error && "bg-red-500"
            )}
            ref={ref}
            onBlur={handleInputChange}
            {...props}
        />
        {/* Show error message */}
        {error && <p>{error}</p>}
        </div>
    )
    }
)

AlphabeticInput.displayName = "AlphabeticInput"

export { AlphabeticInput }
