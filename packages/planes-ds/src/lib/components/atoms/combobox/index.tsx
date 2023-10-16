"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../../../utils";
import { Button } from "../button/index"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "../command/index"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../popover/index"

export type Item = {
    value: string;
    label: string;
};

type ComboboxProps = {
    items: Item[],
    selectLabel: string,
    searchLabel: string,
    notFoundMessage: string,
    autoComplete: boolean,
};

export function Combobox({ items, selectLabel, searchLabel, notFoundMessage, autoComplete}: ComboboxProps) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
            >
            {value
                ? items.find((item) => item.value === value)?.label
                : selectLabel}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
            <Command>
            {autoComplete ? <CommandInput placeholder={searchLabel}/> : null}
            <CommandEmpty> {notFoundMessage} </CommandEmpty>
            <CommandGroup>
            {items.map((item) => (
                <CommandItem
                    key={item.value}
                    onSelect={() => {
                        setValue(item.value)
                        setOpen(false)
                    }}
                >
                    <Check
                        className={cn(
                            "mr-2 h-4 w-4",
                            value === item.value ? "opacity-100" : "opacity-0"
                        )}
                    />
                    {item.label}
                </CommandItem>
                ))}
            </CommandGroup>
            </Command>
        </PopoverContent>
        </Popover>
    )
}
