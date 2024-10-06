"use client";
import {
  Button,
  DatePicker,
  Label,
  Popover,
  PopoverAction,
  PopoverContent,
} from "keep-react";

const PickDate = ({ date, setDate, label }: any) => {
  const day = date ? new Date(date).getDate() : "";
  const month = date
    ? new Date(date).toLocaleString("default", { month: "long" })
    : "";
  const weekday = date
    ? new Date(date).toLocaleString("default", { weekday: "long" })
    : "";
  const year = date ? new Date(date).getFullYear() : "";

  return (
    <div>
      <Label className="text-primary-500">{label}</Label>
      <Popover showArrow={false} placement="bottom-start">
        <PopoverAction asChild>
          <Button
            color="secondary"
            size="lg"
            className="flex items-center justify-start gap-3 text-secondary-main border-none dark:hover:text-secondary-main dark:text-secondary-main dark:hover:bg-white overflow-hidden py-1 hover:text-secondary-main bg-white  rounded-md text-left text-sm w-full h-[60px] font-normal"
            variant="outline"
          >
            <div className="min-w-[40px] max-w-[40px]">
              <h1 className="font-bold uppercase  text-lg">
                {day.toString().padStart(2, "0")}
              </h1>
            </div>

            <div className="w-[1px] self-stretch bg-[#a5a6a8]"></div>
            <div className="truncate w-full">
              <h3 className=" font-semibold capitalize">{month}</h3>
              <p className="">{`${weekday}, ${year}`}</p>
            </div>
          </Button>
        </PopoverAction>
        <PopoverContent className="z-50 max-w-min">
          <DatePicker
            mode="single"
            selected={date}
            onSelect={setDate}
            showOutsideDays={true}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PickDate;
