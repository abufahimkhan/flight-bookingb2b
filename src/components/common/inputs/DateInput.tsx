import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover, PopoverAction, PopoverContent } from 'keep-react'


interface PropsTypes {
    date: Date,
    setDate: any
}

const DateInput: React.FC<PropsTypes> = ({ date, setDate }) => {
    return (
        <Popover showArrow={false} placement="bottom-start">
            <PopoverAction asChild>
                <Button
                    color="secondary"
                    className="w-full h-[45px] justify-start gap-2.5 text-body-4 rounded-md"
                    variant="outline">
                    <Calendar size={20} className="text-metal-400 dark:text-white" />
                    {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
                </Button>
            </PopoverAction>
            <PopoverContent className="z-50 max-w-min">
                <DatePicker mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
            </PopoverContent>
        </Popover>
    )
}
export default DateInput