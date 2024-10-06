"use client";
import { useState } from "react";
import MulticityInputs from "./MulticityInputs";
import { nanoid } from "nanoid";
import { Button } from "keep-react";
import { IconSearchEngine } from "@/interfaces/icons";

const MultiCity = () => {
  const [newSearch, setNewSearch] = useState<string[]>([]);

  const handleAddNewSearchInputs = () => {
    setNewSearch((prev) => [...prev, nanoid()]);
  };

  const handleRemoveNewSearchInputs = (id: string) => {
    setNewSearch((prev) => prev.filter((ID) => ID !== id));
  };

  return (
    <>
      {/* Always show two Multicity Inputs */}
      <MulticityInputs key={nanoid()} />
      <MulticityInputs key={nanoid()} />

      {/* Dynamically added Multicity Inputs with their own cross button */}
      {newSearch.map((id) => (
        <div key={id} className="relative">
          <MulticityInputs />

          <Button
            className="absolute top-2 right-1 bg-transparent text-white text-xs px-2 py-1 rounded-full"
            onClick={() => handleRemoveNewSearchInputs(id)}
          >
            ✖
          </Button>
        </div>
      ))}

      {/* Button to add new flight input */}
      <Button
        onClick={handleAddNewSearchInputs}
        className="bg-primary-500 w-fit mt-4"
      >
        <IconSearchEngine.AddNew className="mr-2 mt-1" />
        Add Another Flight
      </Button>
    </>
  );
};

export default MultiCity;
