import React from "react";

const FilterBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full bg-white p-4 border-b shadow flex items-center ">
      <input
        type="text"
        placeholder="Search by city, address, or title..."
        className="w-full  md:w-96 p-2 border rounded mx-auto lg:mx-0"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default FilterBar;
