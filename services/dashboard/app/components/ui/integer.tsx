import * as React from "react"
import { z } from "zod"

import { cn } from "#app/utils/misc.tsx"
import { useState } from 'react';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
        isRequired: boolean;
    }

const IntegerInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, isRequired, value, ...props }, ref ) => {
        //Zod validation with regular expressions
        const schema = z.string().regex(/^\d*$/, 'Must be an Integer');
        //^\d*$ meaning 
        //"^" = start of string
        //"\d" = is any number digit (0-9)
        //"*" = 0 or more
        //"$" = Final of string

        //Constant using for show zod error
        const [error, setError] = useState(null);
        
        const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            //validation of value
            try{
                schema.parse(e.target.value); //zod validation
                setError(null); //Error is null if it is correct
                
            }catch(err: any){
                setError(err.message);  //If it doesn't correct

            }
        };
    //Input Component
    return (
        <div>        
        <input
            type={type}
            required={isRequired}
            inputMode="numeric"
            onBlur={handleInputChange}      //Here is the validation
            className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 invalid:border-red-500",
                className, 
                error && "border-red-500"   //If we have an error, the border will change to red
            )}
            ref={ref}
            {...props}
            
        />
        {/* Show error in case of it exists */}
        {error && <p>{error}</p>}   
        </div>
        
    )
    }
)
IntegerInput.displayName = "IntegerInput"

export { IntegerInput }
