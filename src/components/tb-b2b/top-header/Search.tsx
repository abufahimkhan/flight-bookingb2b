import KeepInput from "@/components/keep-react/KeepInput";
import { InputIcon } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  console.log('search', search)
  return (
    <fieldset className="relative max-w-md mr-auto">
      <KeepInput
        placeholder="Search anything..."
        className="border ps-10"
        onChange={(data) => setSearch(data)}
      />
      <InputIcon>
        <MagnifyingGlass size={20} color="#AFBACA" />
      </InputIcon>
    </fieldset>
  );
};

export default Search;
