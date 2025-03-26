

import React, { useState, useEffect, useRef } from "react";
import { IoFilter } from "react-icons/io5";

function FilterDropdownevent() {
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
        className="flex items-center gap-2 px-4 py-2 text-blue-600 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none
        sm:px-3 sm:py-1"
      >
        <span className="text-sm sm:text-xs">Filter</span>
        <IoFilter className="w-5 h-5 sm:w-4 sm:h-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg 
        sm:w-40 sm:left-0 sm:right-auto">
          <ul className="py-1">
            {["Science", "Information Technology", "Artificial Intelligence", "Mathematics", "All"].map((category) => (
              <button key={category} className="w-full text-left" onClick={() => setIsOpen(false)}>
                <li className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 text-sm sm:text-xs">
                  {category}
                </li>
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FilterDropdownevent;
