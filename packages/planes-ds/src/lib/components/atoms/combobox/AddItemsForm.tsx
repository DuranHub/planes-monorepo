import * as React from "react"
import { Button } from "../button/index"
import { Input } from "../input/index"
import { Combobox, Item } from "./index" // Import Combobox and Item type from the index file

// Define the AddItemsForm component
export function AddItemsForm() {
    // Initialize state variables for items and newItemLabel
    const [items, setItems] = React.useState<Item[]>([]) 
    const [newItemLabel, setNewItemLabel] = React.useState("")

    // Define a function to handle adding a new item
    const handleAddItem = () => {
        // Generate the value from the label by converting it to lowercase and replacing spaces with underscores
        const newItemValue = newItemLabel.toLowerCase().replace(/ /g, "_");

        // Add the new item to the items array and reset newItemLabel
        setItems([...items, {value: newItemValue, label: newItemLabel}]);
        setNewItemLabel("");
    }

    // Render the component
    return (
        <div>
            {/* Render the Combobox component with the current items */}
            <Combobox 
                items={items} 
                selectLabel="Select an item" 
                searchLabel="Search items" 
                notFoundMessage="No items found" 
                autoComplete={false} 
            />

            {/* Form to add new items */}
            <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
                {/* Input field for the label of the new item */}
                <Input type="text" placeholder="Label" isRequired= {false} value={newItemLabel} onChange={(e) => setNewItemLabel(e.target.value)} />
                {/* Button to add the new item */}
                <Button type="submit" onClick={handleAddItem}>Add Item</Button>
            </div>
        </div>
    )
}
