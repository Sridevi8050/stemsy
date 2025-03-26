
import React, { useState } from "react";
import { AiFillAudio } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Stemsylog from "../assets/stemsylog.png"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-[#3066BE] min-h-24 min-w-full sm:h-20 flex items-center justify-between px-4 sm:px-8 relative">
      {/* Left - Menu and Stemsy */}
      <div className="flex items-center relative right-4 space-x-2 flex-shrink-0">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <HiBars3 className="text-white text-2xl sm:text-3xl" />
        </button>
        <img src={Stemsylog} alt=""></img>
        <span className="text-white text-xl sm:text-2xl font-semibold">Stemsy</span>
      </div>

      {/* Center - Explore, Search, Audio */}
      <div className="flex items-center space-x-2 sm:space-x-4 flex-grow justify-center min-w-0 mt-2 sm:mt-0">
                        <button className="bg-white text-xs sm:text-base rounded px-1 sm:px-4 py-1 flex-shrink-0">Explore</button>
                        <input
                       type="search"
                     placeholder="Search..."
                      className="bg-white rounded-sm py-1 px-1 w-10 sm:w-64 text-sm sm:text-base min-w-0"
                     />
                        <button className=" text-white rounded-full hover:text-[#3066BE] hover:bg-white flex-shrink-0">
                          <AiFillAudio size={20} />
                        </button>
                      </div>

      {/* Right - Language and Profile Image */}
      <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0 mt-2 sm:mt-0 ml-auto">
        <select className="text-white bg-transparent hover:bg-white hover:text-[#3066BE] p-1 rounded text-sm sm:text-base">
          <option>English</option>
        </select>

        {/* Profile image - responsive */}
        <div className="relative">
          <button
            className="bg-white w-5 h-5 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              className="w-full h-full object-cover "
              src="https://s3-alpha-sig.figma.com/img/027c/5c82/5bf85922c6965220c96ac141f0374b7b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X~jMNLPhTwEg23x12kPm3saAQ4znk3a1eLxlm62ToKbti~VXPDzKAK9H1IaOFljnhYufRQkSqVYxePrce5C6yVG~NjVOofq95utIOVECxELEMyyZVSrpjfkjXR8wil7cdNlrR6L7nZtjOW~cKpfd8XE6wA7tQrU0dY2wgRH8GfCP6LeFEUUwfFkxGdmiNA6PJemjKC77rRNC-deHkltKHRPMTDqecYH0ntWC4xiZzpxjRB8k6k5jYgYGTMJc9DsD3iTrYVuslU1qFcIMWLCWx2H7D-KvcmPxGCQBM22uunkqjm-E3yQTbjP0H2EwMDadBpsoDG-gD2Z2ne7IM8CJVw__"
              alt="User"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
              <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Profile
              </Link>
              <Link to="/homewithoutlogin">
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
                  Logout
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-4 bg-white shadow-md rounded-md w-56 p-2 z-50 mt-2">
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/homefirst" },
              { name: "Courses", path: "/courses" },
              { name: "Event", path: "/event" },
              { name: "Whiteboard", path: "/whiteboard" },
              { name: "Assessment", path: "/stemassessment" },
              { name: "Library", path: "/library" },
              { name: "Help", path: "/help" },
              { name: "Setting", path: "/settings" },
            ].map((item) => (
              // <li
              //   key={item.name}
              //   className="p-2 text-black hover:bg-[#3066BE] rounded-md cursor-pointer hover:text-white"
              // >
              //   <Link className="w-full" to={item.path}>{item.name}</Link>
              // </li>
              <Link key={item.name} to={item.path} className="block p-2 text-black hover:bg-[#3066BE] rounded-md cursor-pointer hover:text-white">
                {item.name}
              </Link>

            ))}
          </ul>
          <hr />
          <Link to="/logout">
            <button className="text-red-600 w-full text-left p-2 hover:bg-gray-100 rounded-md">
              Logout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
