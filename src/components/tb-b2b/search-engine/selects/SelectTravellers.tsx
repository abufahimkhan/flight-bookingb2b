"use client";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { Button } from "keep-react";
import TravellerCount from "./TravellerCount"; // Import the separated component

type Setter = React.Dispatch<React.SetStateAction<number>>;

export function SelectTravellers() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [adultCount, setAdultCount] = useState<number>(0);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [kidsCount, setKidsCount] = useState<number>(0);
  const [infantsCount, setInfantsCount] = useState<number>(0);

  const totalCount = adultCount + childrenCount + kidsCount + infantsCount;

  const increment = (setter: Setter) => () =>
    setter((count: number) => count + 1);
  const decrement = (setter: Setter) => () =>
    setter((count: number) => Math.max(0, count - 1));

  const resetCounts = () => {
    setAdultCount(1);
    setChildrenCount(0);
    setKidsCount(0);
    setInfantsCount(0);
  };

  const handleDoneClick = () => {
    setIsOpen(false);
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative px-5" ref={dropdownRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full border border-gray-300 rounded-md p-2 hover:bg-slate-300 md:bg-transparent md:border-0 lg:border-0"
      >
        <span className="flex items-center text-black font-normal">
          Travellers
          <FaAnglesRight size={12} className="ml-1" />
        </span>
        <span className="ml-2 text-black font-normal">{totalCount}</span>
      </Button>
      {isOpen && (
        <div className="absolute z-10 w-auto lg:w-auto mr-52 bg-white border border-gray-200 rounded-md shadow-md mt-2">
          <div className="flex flex-col p-5">
            <TravellerCount
              title="Adults"
              subTitle="12 years & above"
              counts={adultCount}
              onClickIncrement={increment(setAdultCount)}
              onClickDecrement={decrement(setAdultCount)}
            />
            <TravellerCount
              title="Children"
              subTitle="From 5 to under 12"
              counts={childrenCount}
              onClickIncrement={increment(setChildrenCount)}
              onClickDecrement={decrement(setChildrenCount)}
            />
            <TravellerCount
              title="Kids"
              subTitle="From 2 to under 5"
              counts={kidsCount}
              onClickIncrement={increment(setKidsCount)}
              onClickDecrement={decrement(setKidsCount)}
            />
            <TravellerCount
              title="Infants"
              subTitle="Under 2 years"
              counts={infantsCount}
              onClickIncrement={increment(setInfantsCount)}
              onClickDecrement={decrement(setInfantsCount)}
            />
          </div>

          <div className="flex justify-between p-4 border-t border-gray-200 bg-gray-50">
            <Button
              className="px-4 py-2 border border-gray-300 rounded-md text-white bg-secondary-500 hover:bg-gray-100"
              onClick={resetCounts}
            >
              Reset
            </Button>
            <Button
              className="px-4 py-2 border border-gray-300 rounded-md text-white bg-secondary-500 hover:bg-gray-100"
              onClick={handleDoneClick}
            >
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
