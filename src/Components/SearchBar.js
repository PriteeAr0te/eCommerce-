import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Use_my_state } from "../Context/Data/DataState";

const SearchBar = () => {
  const {
    addedProducts: { searchkey },
    dispatch,
  } = Use_my_state();

  const [input, setInput] = useState("");
  return (
    <div className="flex bg-white border-2 border-green-500 px-2">
      <FaSearch id="search-icon" className="text-blue-500 m-auto" />
      <input
        className="border-none focus:outline-none w-[30vw] p-2"
        type="text"
        placeholder="Search for Products, Brands and More"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          dispatch({
            type: "SEARCH",
            payload: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default SearchBar;
