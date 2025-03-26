

import React, { useState } from "react";
import Image1 from "../Courses/Image1";
import FilterDropdown from "../FilterDropdown";
import { AiFillAudio } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { TbMessageChatbot } from "react-icons/tb";
import Streaks from "../../assets/streaks.png"
import { Link } from "react-router-dom";
import Upcomingevents from "../../assets/upcomingevents.png"
import Stemsylog from "../../assets/stemsylog.png"
// import Header from "../Header";

function Home1() {
   const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
  return (

<div className="relative min-h-screen flex flex-col sm:flex-row">
      
      
      <div className="flex-1 flex flex-col items-center w-full  ">

      {/* <Header/> */}
          <div className="bg-[#3066BE] min-h-24 w-full sm:min-w-[1275px] sm:h-20 flex items-center justify-between px-4 sm:px-8  relative">
               
                <div className="flex relative right-3 items-start space-x-1 flex-shrink-0">
                  <button onClick={() => setMenuOpen(!menuOpen)}>
                    <HiBars3 className="text-white text-2xl sm:text-3xl" />
                  </button>
                  <img src={Stemsylog} alt=""/>
                  <span className="text-white text-xl sm:text-2xl font-semibold">Stemsy</span>
                </div>
          
               
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
          
                <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0 mt-2 sm:mt-0 ml-auto">
                  <select className="text-white bg-transparent hover:bg-white hover:text-[#3066BE] p-1 rounded text-sm sm:text-base">
                    <option>English</option>
                  </select>
          
                  
                  <div className="relative">
                    <button
                      className="bg-white w-7 h-7 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <img
                        className="w-full h-full object-cover"
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
                        //   className="p-2 text-black hover:bg-[#3066BE] rounded-md cursor-pointer block hover:text-white"
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

        {/* Hero Section */}
        <div className="w-full max-w-[880px] sm:mt-6 bg-[#e3b552] px-4 sm:px-10 py-4 sm:py-6 rounded-sm shadow-lg text-center  sm:text-left  sm:relative right-30">
          <h1 className="text-base sm:text-2xl font-bold">STEM Initiative For Rural Kids</h1>
          <p className="text-gray-800 text-sm sm:text-base">
            "Empowering young minds with STEM education to innovate and shape the future."
          </p>
        </div>

        {/* Section: "All you needed in one place" */}
        <div className="w-full max-w-[880px] mt-8 sm:mt-12 px-4 sm:px-10 flex flex-col sm:flex-row  justify-between items-center sm:relative right-30 ">
          <h1 className="text-base sm:text-2xl font-semibold text-center sm:text-left">All you needed in one place</h1>
          <FilterDropdown />
        </div>

        {/* Image1 Component */}
        <div className="w-full max-w-[880px] mt-6  px-4 sm:px-0 sm:relative right-30  ">
          <Image1 className="w-full h-52 sm:h-[400px] rounded-sm shadow-sm" />
        </div>

        {/* Section: "Most Popular" */}
        <div className="w-full max-w-[880px] mt-10 sm:mt-2 flex flex-col items-center px-4 sm:px-0  sm:relative right-30 ">
          <h1 className="text-base sm:text-2xl font-semibold mb-4 ">Most Popular</h1>
          <div className="flex flex-wrap justify-center gap-4 ">
            {["Courses", "Events", "Sessions", "Mentor"].map((item, index) => (
              <button key={index} className="shadow-sm px-4 py-1 text-[#3066BE] border border-[#3066BE] rounded-md hover:text-white hover:bg-blue-600 text-sm sm:text-base">
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Image1 Component */}
        <div className="w-full max-w-[880px] mt-6 px-4 sm:px-0 sm:relative right-30 ">
          <Image1 className="w-full h-52 sm:h-[400px] rounded-sm shadow-sm" />
        </div>
      </div>

      {/* Sidebar - Right Side Content */}
      <div className="sm:w-[200px] flex-shrink-0  sm:mt-16 pr-0 pl-0 hidden sm:flex flex-col items-center sm:relative right-45">
        <div className="bg-blue-100  w-[280px] h-[610px] rounded-sm shadow-md sm:relative top-15 right-15">
        <img src={Streaks} alt="" className="w-full h-full object-cover rounded-sm" />
          <Link to="/ai">
            <button className="h-10 w-10 bg-[#0040a5] text-2xl text-white absolute top-[500px] left-1/2 -translate-x-1/2 rounded-full">
              <TbMessageChatbot />
            </button>
          </Link>
        </div>
        <div className="bg-blue-100 w-[280px] h-[415px] rounded-sm shadow-md mt-6 sm:relative top-15 right-15 ">
          <img src={Upcomingevents} className="h-[415px]"></img>
        </div>
      </div>

      {/* Mobile Chatbot Button */}
      <div className="fixed bottom-6 right-6 sm:hidden">
        <Link to="/ai">
          <button className="h-12 w-12 bg-[#0040a5] text-3xl text-white rounded-full shadow-md">
            <TbMessageChatbot />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home1;
