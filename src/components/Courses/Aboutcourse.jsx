
import React from "react";
import Header from "../Header";
import { CiBookmark } from "react-icons/ci";
import { GoPlay } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import Image1 from "./Image1";
import { Link } from "react-router-dom";

function Aboutcourse() {
  return (
    <div className="w-full">
      <Header className="shadow-sm" />
      <div className="bg-[#3066BE] h-auto p-6 md:h-60 flex flex-col md:flex-row items-center">
        <Link to="/video">
          <img
            className="w-90 h-32 md:w-50 md:h-50 pl-2 md:pl-9"
            src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMLeuz~RWy8arG9Evv9tB43CemXrFWsTcCYDjhmCT7oGXe2OX0KdO3gwPfcBNJCKaKKFX2f172ryEqK1NoiorVOUUKFBWCf4cQBpQHagg6dYpQhPUXVKKAln3PLQXtiytWbaeEMg-Q0s50-iF93ji7zrKp5oc230KP-QO5C3Umab78sWyqt4Z7mNvrEKT9k7Gn~fAR7SSFsg4FZfDTR8WhQR4J~Ud~Msmpta3OqJbB3JtH5d3nlbcmYBiVr04kyVCkfGnekY0ceCdX-6DXWIeemvkkQTYIy5uQ7byMMfHGBuxognVnJrw8qc54vnp1R~aHnRqloSID5SH2vm8QoHsA__"
            alt="Course Thumbnail"
          />
        </Link>
        <div className="mt-4 md:mt-0 md:ml-8">
          <h1 className="text-white text-lg md:text-2xl font-semibold">
            Developing Kids Website from Scratch
          </h1>
          <div className="text-white text-sm flex items-center mt-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/e92a/27d6/52ff9e313805fa726473c92522208b1b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-7J5wC~kLyzAwzsu~kWYARx6DLrBs8pasOV2nIg9rfJGoZBJo0Q6~qFPRrX8STsnvIffRqMGReOctfyhTPjJGNop8Zw2AZknM3Hwwj7wKmKnS05hVhxyg-YwOF05r06cz6PmOxPSD-Rp1-qcdHv4laWd7ZTz8GO6YUTeWoxdktI1tblgwjAJwijCsq4BnMyJkGWHt83lgRE63LBW3QIQmJR1Znt2SDDN8d3d2BxzudSEwMd~zDKAu0efJfFNf6ZCeE8PVVR3iFJZYXykZfYsN1s9HlWwZeYsoJ8C1FrQwOuHCYu2kiCc64resDllHE5a6OpUGAMeLcGwManuBrKaQ__"
              className="h-6 w-6 rounded-full"
              alt="Instructor"
            />
            <span className="ml-2">Lakshmi Pandit, Developer, Designer</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <button className="bg-[#3066BE] text-white border border-white hover:bg-orange-300 hover:text-black py-2 px-4 rounded">
              See all Courses
            </button>
            <button className="flex items-center bg-[#3066BE] text-white border border-white hover:bg-orange-300 hover:text-black py-2 px-4 rounded">
              <CiBookmark className="mr-2" />
              Save in Library
            </button>
          </div>
        </div>
      </div>

      {/* Lessons Section */}
      <div className="bg-[#FFCD5D] py-8 px-6 md:px-20">
        <h1 className="text-2xl font-semibold">Lessons in the Class</h1>
        <h2 className="text-lg">10 Lessons (2 hrs 32 mins)</h2>

        <div className="mt-4 space-y-3">
          {Array(3).fill().map((_, index) => (
            <div key={index} className="bg-white p-3 rounded flex items-center justify-between shadow-md">
              <GoPlay className="text-[#3066BE]" />
              <div className="flex justify-between w-full px-4">
                <h1>Introduction</h1>
                <h2>7:34</h2>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-[#FFCD5D] text-black border border-black p-2 rounded mt-4 shadow-lg">
          See all Courses
        </button>
      </div>

      {/* About the Class */}
      <div className="bg-white py-10 px-6 md:px-20">
        <h1 className="text-2xl font-semibold">About this class</h1>
        <p className="text-gray-600 w-[700px] text-sm sm:text-base leading-relaxed ">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

      </div>

      <hr className="w-3/4 mx-auto border-t border-gray-300 opacity-50 my-6" />

      {/* Meet Your Teacher */}
      <div className="bg-white py-10 px-6 md:px-20">
        <h1 className="text-2xl font-semibold">Meet your teacher</h1>
        <div className="flex items-center mt-4 space-x-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/e92a/27d6/52ff9e313805fa726473c92522208b1b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-7J5wC~kLyzAwzsu~kWYARx6DLrBs8pasOV2nIg9rfJGoZBJo0Q6~qFPRrX8STsnvIffRqMGReOctfyhTPjJGNop8Zw2AZknM3Hwwj7wKmKnS05hVhxyg-YwOF05r06cz6PmOxPSD-Rp1-qcdHv4laWd7ZTz8GO6YUTeWoxdktI1tblgwjAJwijCsq4BnMyJkGWHt83lgRE63LBW3QIQmJR1Znt2SDDN8d3d2BxzudSEwMd~zDKAu0efJfFNf6ZCeE8PVVR3iFJZYXykZfYsN1s9HlWwZeYsoJ8C1FrQwOuHCYu2kiCc64resDllHE5a6OpUGAMeLcGwManuBrKaQ__"
            className="h-12 w-12 rounded-full"
            alt="Teacher"
          />
          <div>
            <h3 className="text-lg font-bold">Lakshmi Pandit</h3>
            <h5 className="text-gray-500">Developer, Designer</h5>
          </div>
        </div>
        <p className="text-gray-600 mt-4 w-[700px]">
        Hello, I'm Siobhan (pronounced: Shivon ... an Irish name! )
My work spans the disciplines of Figure Drawing, Painting, Filmmaking and Animation. To say the least, my art journey has been varied, scenic and multi-faceted!! However, the one thing that was missing on this journey was a guide, a mentor, or someone who could advise and give me feedback.
Here's what my journey looked like:
Starting out, I studied Film in Dublin, and I spent a semester on a scholarship at the Tisch School of the Arts, at NYU, shooting 16mm short films in New York. Later, I studied Drawing and Animation. Since 2005, I've worked in studios in Vancouver and Dublin: I've worked as a professional Background and Environment Artist; I've worked as a Storyboard Artist, Concept Artist
        </p>
      </div>

      <hr className="w-3/4 mx-auto border-t border-gray-300 opacity-50 my-6" />

      {/* Class Review */}
      <div className="bg-white py-10 px-6 md:px-20">
        <h1 className="text-2xl font-semibold">Class Review</h1>
        <div className="flex space-x-4 mt-4">
          <button className="border border-[#3066BE]  hover:bg-[#3066BE] hover:text-white px-3 py-1 rounded  text-[#3066BE]">
            Highest
          </button>
          <button className="border border-[#3066BE]  hover:bg-[#3066BE] hover:text-white px-3 py-1 rounded  text-[#3066BE]">
            Lowest
          </button>
          <button className="border border-[#3066BE]  hover:bg-[#3066BE] hover:text-white px-3 py-1 rounded  text-[#3066BE]">
            Most Recent
          </button>
        </div>

        {/* Star Rating */}
        <div className="flex items-center mt-4">
          <CiStar className="text-4xl text-yellow-400" />
          <span className="text-2xl ml-2">4.2</span>
        </div>

        {/* Reviews */}
        {Array(2).fill().map((_, index) => (
          <div key={index} className="bg-white p-4 mt-6 shadow-lg rounded-md max-w-xl">
            <div className="flex items-center space-x-3">
              <img
                src="https://s3-alpha-sig.figma.com/img/dbb2/a5be/03f259b82a0fb223d92ccbc5e0fc9f10?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hd6Npsl4bh7yJNq8LXBRNK6f11o0qXVGjqW-0Gm5nKJt-hizqqTFNzuUvmBZl7ME39RKepA7bt3MJGmfoqc5d8StE1oFNkQlj0q8-w8QKnHpn-m5kANge7wPu90ap~zL92iuazNZjfh8Dbq2xbR4DmEK-dSAiL9JtoBOJ0y-PON-v9fbrqYqaFwOAdb9nZotYZYnzMyJzQTozoZCY6icwkN3RwesR-7bzS6BNSZrpN0bVd-pkBtuwqxNIGINcVmDte-af8EQdrrRuencRBqezEMcPHaAZh7vHvw~LR1PK~H61yHM0OA0WgBzpkzy6i87S-nPgmX8lJ8NfPn05TlAkw__"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex items-center space-x-4">
                <p className="font-bold">Komal</p>
                <div className="flex text-yellow-400">
                  {Array(4).fill().map((_, i) => <CiStar key={i} className="fill-current" />)}
                  <CiStar className="text-gray-300" />
                </div>
                <p className="text-gray-500 text-sm">Oct 18, 2020</p>
              </div>
            </div>
            <p className="text-gray-700 mt-2">
              The course was very comprehensive and easy to understand...
            </p>
          </div>
        ))}
      </div>

      {/* More Like This */}
      <div className="bg-white py-10 px-6 md:px-20">
        <h1 className="text-2xl font-semibold">More like this</h1>
        <Image1 className=""/>
      </div>
    </div>
  );
}

export default Aboutcourse;
