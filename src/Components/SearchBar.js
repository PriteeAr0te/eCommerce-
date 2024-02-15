import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex bg-white border-2 border-green-500">
      <FaSearch id="search-icon" className="text-green-600 m-auto mx-2" />
      <input
        className="border-none focus:outline-none w-[30vw] ml-2 p-2"
        type="text"
        placeholder="Search for Products, Brands and More"
      />
    </div>
  );
};

export default SearchBar;
