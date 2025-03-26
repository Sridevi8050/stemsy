
import React, { useState, useEffect, useRef } from "react";
import { IoFilter } from "react-icons/io5";

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 text-blue-600 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
      >
        <span>Filter</span>
        <IoFilter className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 md:right-0 z-10 mt-2 min-w-[160px] w-auto bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            {["Recommended", "Top Rated", "Newly Uploaded", "Most Viewed", "Short Courses"].map(
              (category) => (
                <button key={category} className="w-full text-left" onClick={() => setIsOpen(false)}>
                  <li className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 transition duration-200">
                    {category}
                  </li>
                </button>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
