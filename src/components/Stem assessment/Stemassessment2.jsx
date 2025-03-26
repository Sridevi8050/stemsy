

import React from "react";
import Header from "../Header";

function Stemassessment2() {
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
        <button className="rounded-sm px-4 py-2 text-[#3066BE] border border-[#3066BE] hover:bg-[#3066BE] hover:text-white">
          Saved Challenges
        </button>
      </div>

      {/* Main Container */}
      <div className="flex flex-wrap justify-center p-6">
        <div className="bg-[#3066BE] text-white p-6 rounded-lg w-full max-w-[600px]">
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
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

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mt-6">
            <span className="text-[#FFCD5D]">Create</span> an architectural model{" "}
            <span className="text-[#FFCD5D]">of</span> a Library
          </h1>

          {/* Challenge Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <button className="rounded-sm px-4 py-2 border border-white text-white hover:bg-white hover:text-[#5183D5]">
              New Challenge
            </button>
            <button className="rounded-sm px-4 py-2 border border-white text-white hover:bg-white hover:text-[#5183D5]">
              Save Challenge
            </button>
          </div>

          {/* About Assessment */}
          <div className="mt-6">
            <h2 className="text-2xl text-center">About Assessment</h2>
            <p className="mt-4 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stemassessment2;
