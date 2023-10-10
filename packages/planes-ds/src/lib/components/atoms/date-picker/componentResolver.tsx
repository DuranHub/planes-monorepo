import React from 'react';
import { DatePickerDemo } from './index';
import { DatePickerWithRange } from './dateRange';

// Define the schema for the date components
const schema = [
    {
        type: 'date',
    },
    {
        type: 'date-range',
    }
]

// Define the types that dateType can take
type DateType = 'date' | 'date-range';

// Define the props for the ComponentResolver component
interface ComponentResolverProps {
    dateType: DateType; 
}

// Define the ComponentResolver component
const ComponentResolver: React.FC<ComponentResolverProps> = ({ dateType }) => {
    return (
        <>
            {schema.map((item, index) => { // Iterate over each item in the schema
                if(item.type === dateType){ // If the type of the item matches the dateType prop
                    if(dateType === 'date'){ // If dateType is 'date'
                        return <DatePickerDemo/>
                    }
                    if(dateType === 'date-range'){ // If dateType is 'date-range'
                        return <DatePickerWithRange/>
                    }
                }
                return null; // If none of the conditions are met, return null
            })}
        </>
    );
}

// Export the ComponentResolver component
export default ComponentResolver;
