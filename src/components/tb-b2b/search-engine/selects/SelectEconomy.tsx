"use client";
import { useEffect, useRef, useState } from "react";

export function SelectEconomy() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<string>("Economy");

  const options = ["Economy", "Premium Economy", "Business", "First Class"];
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
    <div className="relative w-44 text-black" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>{selectedClass}</button>
      {isOpen && (
        <div className="absolute z-10 bg-white border border-gray-200 overflow-hidden rounded-md shadow-md mt-2">
          <div className="flex flex-col px-5 py-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedClass(option);
                  setIsOpen(false);
                }}
                className="w-full text-left p-2 duration-300 hover:bg-gray-300"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
