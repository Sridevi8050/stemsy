
import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Bulb from "../../assets/bulb.png"

function Stemassessment() {
  return (
    <div>
      <Header />
      {/* Title Bar */}
      <div className="bg-amber-400 h-10 flex justify-center items-center">
        <span className="text-2xl">STEM Assessment</span>
      </div>

      {/* Category Buttons */}
      <div className="shadow-sm flex flex-wrap justify-center gap-4 p-4">
        <button className="rounded-sm px-4 py-2 text-[#3066BE] border border-[#3066BE] hover:bg-[#3066BE] hover:text-white">
          Information-Technology
        </button>
        <button className="rounded-sm px-4 py-2 text-[#3066BE] border border-[#3066BE] hover:bg-[#3066BE] hover:text-white">
          Maths
        </button>
        <button className="rounded-sm px-4 py-2 text-[#3066BE] border border-[#3066BE] hover:bg-[#3066BE] hover:text-white">
          Science
        </button>
        <button className="rounded-sm px-4 py-2 text-[#3066BE] border border-[#3066BE] hover:bg-[#3066BE] hover:text-white">
          Artificial-Intelligence
        </button>
        <Link to="/stemassessment1">
          <button className="rounded-sm px-4 py-2 text-[#3066BE] border border-[#3066BE] hover:bg-[#3066BE] hover:text-white">
            Saved Challenges
          </button>
        </Link>
      </div>

      {/* Main Content Section */}
      <div className="bg-[#3066BE] rounded-xl p-5 h-[500px] md:p-10 lg:p-14 mx-auto max-w-5xl mt-6 mb-10">
        {/* Subcategory Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="rounded-sm px-4 py-2 border border-white text-white hover:bg-[#5183D5]">
            Maths
          </button>
          <button className="rounded-sm px-4 py-2 border border-white text-white hover:bg-[#5183D5]">
            Science
          </button>
          <button className="rounded-sm px-4 py-2 border border-white text-white hover:bg-[#5183D5]">
            Artificial-Intelligence
          </button>
        </div>
          
        {/* Challenge Heading */}
        <h1 className="text-3xl md:text-4xl text-white mb-6 max-w-xl">
          <span className="text-[#FFCD5D]">Invent </span>an automated tool
          <span className="text-[#FFCD5D]"> to </span> grow food indoors
        </h1>

        {/* Challenge Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="rounded-sm px-4 py-2 border border-white text-white hover:bg-white hover:text-[#5183D5]">
            New Challenge
          </button>
          <button className="rounded-sm px-4 py-2 border border-white text-white hover:bg-white hover:text-[#5183D5]">
            Save Challenge
          </button>
        </div>
        
        {/* About Assessment Section */}
        <h1 className="text-white text-2xl mb-3">About Assessment</h1>
        <p className="text-white max-w-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting.
        </p>
        
        <img src={Bulb} className="z-50 relative left-180 bottom-35"></img>
        
      </div>
    </div>
  );
}

export default Stemassessment;
