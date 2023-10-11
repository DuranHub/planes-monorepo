import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "../../../utils";
import { Button } from "../button/index"
import { Calendar } from "../calendar/index"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../popover/index"

// Define the DateInput function component
export function DateInput({
    className, // className prop for styling
    mode, // mode prop to determine if the date picker is in 'single' or 'range' mode
}: React.HTMLAttributes<HTMLDivElement> & { mode: "single" | "range" }) {
    // Use React's useState hook to create state variables for singleDate and dateRange
    const [singleDate, setSingleDate] = React.useState<Date>()
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
        from: new Date(2023, 0, 20),
        to: addDays(new Date(2023, 0, 20), 20),
    })

    // Determine which date state variable to use based on the mode
    const date = mode === "single" ? singleDate : dateRange

    return (
        <div className={cn("grid gap-2", className)}>
        <Popover>
            <PopoverTrigger asChild>
            <Button
                id="date"
                variant={"outline"}
                className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
                )}
            >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {/* Display the selected date(s) or a placeholder text if no date is selected */}
                {date instanceof Date ? (
                    format(date, "LLL dd, y")
                ) : date?.from ? (
                    date.to ? (
                        <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                        </>
                    ) : (
                        format(date.from, "LLL dd, y")
                    )
                ) : (
                    <span>Pick a date</span>
                )}
            </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
            {/* Render the appropriate Calendar component based on the mode */}
            {mode === "single" ? (
                <Calendar
                    initialFocus
                    mode={mode}
                    defaultMonth={singleDate}
                    selected={singleDate}
                    onSelect={setSingleDate}
                    numberOfMonths={1}
                />
            ) : (
                <Calendar
                    initialFocus
                    mode={mode}
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                />
            )}
            </PopoverContent>
        </Popover>
        </div>
    )
}
