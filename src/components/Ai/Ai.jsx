import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function Aidropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("AI category"); // Default text
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

  // Handle selection and close dropdown
  const handleSelect = (category) => {
    setSelectedOption(category); // Update text when clicked
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 text-white bg-[#3066BE] border border-gray-300 rounded-md shadow-sm focus:outline-none"
      >
        <span>{selectedOption}</span> {/* Show default or selected option */}
        <IoMdArrowDropdown className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            {["AI chatbot", "Story telling", "Tutor"].map((category) => (
              <li
                key={category}
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelect(category)} // Update selection
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Aidropdown;
