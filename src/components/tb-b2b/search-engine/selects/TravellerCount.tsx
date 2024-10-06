import React from "react";
import { Button } from "keep-react";

interface TravellerCountProps {
  counts: number;
  title: string;
  subTitle: string;
  onClickIncrement: () => void;
  onClickDecrement: () => void;
}

const TravellerCount: React.FC<TravellerCountProps> = ({
  counts,
  title,
  subTitle,
  onClickIncrement,
  onClickDecrement,
}) => {
  return (
    <div className="flex justify-between items-center gap-10">
      <div>
        <div className="font-semibold mb-1">{title}</div>
        <div className="text-sm w-[120px]">{subTitle}</div>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          className="px-4 py-1 bg-secondary-500 rounded-md text-white"
          onClick={onClickDecrement}
        >
          -
        </Button>
        <span className="text-lg w-5">{counts}</span>
        <Button
          className="px-4 py-1 bg-secondary-500 rounded-md text-white"
          onClick={onClickIncrement}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default TravellerCount;
