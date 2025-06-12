import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-white rounded-md shadow-sm border border-gray-300 w-[600px] max-w-full ml-6"
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-4 py-2 text-black placeholder-gray-500 focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition"
      >
        <HiMagnifyingGlass className="h-5 w-5 text-gray-700" />
      </button>
    </form>
  );
}

export default SearchBar;
