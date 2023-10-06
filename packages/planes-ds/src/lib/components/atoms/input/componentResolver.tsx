import React from 'react';
import { Input } from './index';
import { AlphabeticInput } from './alphabetic';

// Define the schema for the components
const schema = [
    {
        type: 'text',
        unique: true,
    },
    {
        type: 'alphabetic',
        unique: false,
    }
]

// Define the types that inputType can take
type InputType = 'text' | 'alphabetic';

// Define the props for the ComponentResolver component
interface ComponentResolverProps {
    inputType: InputType; 
}

// Define the ComponentResolver component
const ComponentResolver: React.FC<ComponentResolverProps> = ({ inputType }) => {
    return (
        <>
            {schema.map((item, index) => { // Iterate over each item in the schema
                if(item.type === inputType){ // If the type of the item matches the inputType prop
                    if(inputType === 'text'){ // If inputType is 'text'
                        return <Input key={index} type="text" isRequired={item.unique}/>
                    }
                    if(inputType === 'alphabetic'){ // If inputType is 'alphabetic'
                        return <AlphabeticInput key={index} type="text" isRequired={item.unique}/>
                    }
                }
                return null; // If none of the conditions are met, return null
            })}
        </>
    );
}

// Export the ComponentResolver component
export default ComponentResolver;
