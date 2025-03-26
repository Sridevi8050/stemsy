
import React from "react";
import Image1 from "../Courses/Image1";
import FilterDropdown from "../FilterDropdown";
import { AiFillAudio } from "react-icons/ai";
import { TbMessageChatbot } from "react-icons/tb";
import { Link } from "react-router-dom";
import Streaks from "../../assets/streaks.png"
import Upcomingevents from "../../assets/upcomingevents.png"
import Stemsylog from "../../assets/stemsylog.png"

function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col sm:flex-row ">
      {/* Left Side Container */}
      <div className="flex-1 flex flex-col items-center w-full ">

        {/* Navbar */}
        <div className="bg-[#3066BE] h-auto sm:h-16 sm:w-[1290px] flex items-center px-4 sm:px-10 justify-between py-2">
  <div className="flex">
  <img src={Stemsylog}/>
  <span className="text-white text-lg sm:text-2xl font-semibold">Stemsy</span>
  </div>
  <div className="flex relative left-6 sm:flex-nowrap items-center gap-1  sm:gap-4 min-w-0 mt-2 sm:mt-0">
    <button className="bg-white rounded-sm px-2 sm:px-4 py-1 text-sm sm:text-base whitespace-nowrap">Explore</button>

    <input
      type="search"
      placeholder="Search..."
      className="bg-white rounded-sm py-1 px-1 w-10 sm:w-64 text-sm sm:text-base min-w-0"
    />

    <button className="p-1 text-white shadow-sm rounded-full hover:text-[#3066BE] hover:bg-white text-lg sm:text-xl">
      <AiFillAudio />
    </button>
  </div>

  <div className="flex relative left-5 items-end  place-items-end gap-1 sm:gap-4 min-w-0 mt-2 sm:mt-0">
    <Link to="/login">
      <button className="rounded-sm text-white hover:bg-white hover:text-[#3066BE] px-1 py-1 shadow-sm text-sm sm:text-base whitespace-nowrap">
        Sign In
      </button>
    </Link>

    <Link to="/signup">
      <button className="rounded-sm text-white hover:bg-white hover:text-[#3066BE] px-1 py-1 shadow-sm text-sm sm:text-base whitespace-nowrap">
        Sign Up
      </button>
    </Link>

    <select className="text-white shadow-sm px-1 py-1 bg-transparent border border-white rounded-sm text-xs sm:text-base">
      <option>English</option>
    </select>
  </div>
</div>


        {/* Hero Section */}
        <div className="w-full max-w-[880px] sm:mt-6 bg-[#e3b552] px-4 sm:px-10 py-4 sm:py-6 rounded-sm shadow-lg text-center  sm:text-left  sm:relative right-30">
          <h1 className="text-base sm:text-2xl font-bold">STEM Initiative For Rural Kids</h1>
          <p className="text-gray-800 text-sm sm:text-base">
            "Empowering young minds with STEM education to innovate and shape the future."
          </p>
        </div>

        {/* Section: "All you needed in one place" */}
        <div className="w-full max-w-[880px] mt-8 sm:mt-12 px-4 sm:px-10 flex flex-col sm:flex-row sm:relative right-35 justify-between items-center">
          <h1 className="text-base sm:text-2xl font-semibold text-center sm:text-left">All you needed in one place</h1>
          <FilterDropdown />
        </div>

        {/* Image1 Component */}
        <div className="w-full max-w-[880px] mt-6 sm:relative right-35 px-4 sm:px-0">
          <Image1 className="w-full h-52 sm:h-[400px] rounded-sm shadow-sm" />
        </div>

        {/* Section: "Most Popular" */}
        <div className="w-full max-w-[880px] mt-10 sm:mt-2 flex flex-col items-center px-4 sm:px-0">
          <h1 className="text-base sm:text-2xl font-semibold mb-4 sm:relative right-45">Most Popular</h1>
          <div className="flex flex-wrap justify-center gap-4 sm:relative right-45">
            {["Courses", "Events", "Sessions", "Mentor"].map((item, index) => (
              <button key={index} className="shadow-sm px-4 py-1 text-[#3066BE] border border-[#3066BE] rounded-md hover:text-white hover:bg-blue-600 text-sm sm:text-base">
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Image1 Component */}
        <div className="w-full max-w-[880px] mt-6 px-4 sm:px-0 sm:relative right-35">
          <Image1 className="w-full h-52 sm:h-[400px] rounded-sm shadow-sm" />
        </div>
      </div>

      {/* Sidebar - Right Side Content */}
      <div className="sm:w-[200px] flex-shrink-0 sm:relative top-1 sm:mt-16 pr-0 pl-0 hidden sm:flex flex-col items-center">
        <div className="bg-blue-100  w-[280px] h-[610px] rounded-sm shadow-md sm:relative top-7 right-60">
          <img src={Streaks} alt="" className="w-full h-full object-cover rounded-sm" />
          <Link to="/ai">
            <button className="h-10 w-10 bg-[#0040a5] text-2xl text-white absolute top-[500px] left-1/2 -translate-x-1/2 rounded-full">
              <TbMessageChatbot />
            </button>
          </Link>
        </div>
        <div className="bg-blue-100 w-[280px] h-[415px] rounded-sm shadow-md mt-6 sm:relative top-7 right-60 ">
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

export default Home;
