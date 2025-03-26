
import React from "react";
import Header from "../Header";
import { GoPlay } from "react-icons/go";
import Playbutton from "../../assets/playbutton.png"
import Videobutton from "../../assets/videobutton.png"
import Line from "../../assets/line.png"

function Video() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="bg-amber-400 h-10"></div>

      {/* Responsive Layout */}
      <div className="relative  flex flex-col lg:flex-row items-start lg:items-start justify-center gap-6 lg:gap-8 p-6 sm:pt-8">
        
        {/* Lessons List */}
        <div className="w-full max-w-sm">
          <h1 className="text-xl sm:text-2xl mb-4">Lessons In This Class</h1>

          {Array(4).fill(null).map((_, index) => (
            <div key={index} className="bg-white shadow-md h-12 w-full rounded-sm flex items-center px-4 mb-3">
              <GoPlay />
              <div className="flex justify-between w-full px-4 text-sm sm:text-base">
                <h1>Introduction</h1>
                <h2>7:34</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="w-[1800px] ">
          <h1 className="text-lg sm:text-xl font-semibold mb-2 text-center lg:text-left">
            Developing Kids Website from Scratch .. Introduction
          </h1>
          <div>
          <img src={Playbutton} className="relative top-60 left-100 z-50"/>
          <img src={Line} className="relative top-90 z-50"/>
            <img src={Videobutton} className="relative top-95 z-50"/>
          <img
            className="w-[1800px] h-auto rounded-lg shadow-lg relative bottom-33"
            src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMLeuz~RWy8arG9Evv9tB43CemXrFWsTcCYDjhmCT7oGXe2OX0KdO3gwPfcBNJCKaKKFX2f172ryEqK1NoiorVOUUKFBWCf4cQBpQHagg6dYpQhPUXVKKAln3PLQXtiytWbaeEMg-Q0s50-iF93ji7zrKp5oc230KP-QO5C3Umab78sWyqt4Z7mNvrEKT9k7Gn~fAR7SSFsg4FZfDTR8WhQR4J~Ud~Msmpta3OqJbB3JtH5d3nlbcmYBiVr04kyVCkfGnekY0ceCdX-6DXWIeemvkkQTYIy5uQ7byMMfHGBuxognVnJrw8qc54vnp1R~aHnRqloSID5SH2vm8QoHsA__"
            alt="Video Thumbnail"
          
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
