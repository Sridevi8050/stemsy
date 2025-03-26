import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

// Dummy images, replace with your actual assets
import AiIcon from "../../assets/AiIcon.png";
import StoryIcon from "../../assets/StoryTelling.png";
import Tutor from "../../assets/tutor.png";

function Aidropdown({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("AI Category");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (category) => {
    setSelectedOption(category.name);
    setIsOpen(false);
    onSelect(category.name);
  };

  const categories = [
    { name: "AI chatbot", color: "bg-[#3066BE]", icon: AiIcon },
    { name: "Story telling", color: "bg-[#5250B5]", icon: StoryIcon },
    { name: "Tutor", color: "bg-[#3FA600]", icon: Tutor },
  ];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 text-white bg-[#3066BE] border border-gray-300 rounded-md shadow-sm focus:outline-none"
      >
        <span>{selectedOption}</span>
        <IoMdArrowDropdown className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            {categories.map((category) => (
              <li
                key={category.name}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-white cursor-pointer ${category.color}`}
                onClick={() => handleSelect(category)}
              >
                <img src={category.icon} alt={category.name} className="h-8 w-8 rounded-full" />
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Aidropdown;
