// import React from "react";
// import Header from "../Header";
// import FilterDropdown from "../FilterDropdown";
// import { CiCalendar } from "react-icons/ci";
// import { HiOutlineClock } from "react-icons/hi";
// import {Link} from "react-router-dom"


// function Course(){
//     return(
// <div>
//     <Header/>
//     <div className="bg-amber-400 h-10 flex justify-center">
//         <span className="text-2xl">Course</span>
        
//     </div>
//     <div className="h-15 shadow-sm flex align-middle justify-center">
//         <div className="h-10 flex justify-center space-x-10">
//         <button className="rounded-sm mt-2 px-2 py-1 text-blue-600 border border-blue-600 shadow-blue-600 hover:bg-blue-600 hover:text-white">
//   Information-Technology
// </button>
//             <button className="rounded-sm mt-2 px-2 py-1 text-blue-600 border border-blue-600 shadow-blue-600 hover:bg-blue-600 hover:text-white">Maths</button>
//             <button className="rounded-sm mt-2 px-2 py-1 text-blue-600 border border-blue-600 shadow-blue-600 hover:bg-blue-600 hover:text-white">Science</button>
//             <button className="rounded-sm mt-2 px-2 py-1 text-blue-600 border border-blue-600 shadow-blue-600 hover:bg-blue-600 hover:text-white">Artificial-Intelligence</button>
//         </div>
//         </div>
//         <div className="h-15 shadow-sm flex align-middle justify-center">
//          <div className="h-10 flex justify-center space-x-10">
//           <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">WebDevelopment</button>
//           <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">Java</button>
//           <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">C++</button>
//           <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">Design</button>
//           <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">Python</button>
//           <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">Datascience</button>
//           <div className="mt-2 inline">
//           <FilterDropdown  />
//           </div>
//         </div>
//         </div>
//         <div className=" grid grid-cols-3 pl-10 pt-10 gap-0">
//                       <div className=" bg-white h-75 w-65 shadow-sm">
//                        <img className="rounded-lg  w-60 h-40 place-self-center pt-5" src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dwk2nGxXBnatB12kvFPbN9lGYsIDOH49qxka3gAypciFUsOOXhXcsb3TAn2syCv9Ze86b7Ev1LILk7jnW6xnw7MLifiQBHL9d0ZyPbZ2GcW1c6zJc6IZTtHYsZCWLr3yK3mbrgChI9jpIcCEgRYuqmR8ducnVcxloGo7tSYu5SzloZB1sExo~bzZeaAsJHawiaRaqHZzH0vOWfZntIkQ9QUMXCPYJ7pVC95K3GdV7wgl8fl0~d91cufMK3X2aRpQPm3lAAjQIbGM5IFhEgqcps7~Ie~BAB9pq7p8hBr00YXu~vVOf4GjdU54U9o6WYlRvY3bmWkWerF9sHrl2mktQA__"></img>
//                        <div className="pl-3">
//                        <h1>Developing kids website from scratch</h1>
//                        <p className=""><span className="opacity-40">Course by:</span>Ravikanth Ratore</p>
                      
//                       <div className="flex align-middle justify-between pt-3">
//                       <ul className="flex align-middle justify-between space-x-20">
//                       <li><HiOutlineClock className="inline  text-blue-600"/><span>7 hrs</span></li>
//                        <li><CiCalendar className="inline  text-blue-600"/> <span>modules</span></li>
                       
//                        </ul>
                      
//                        </div> 
//                        </div>
                         
//                        </div>
                      
//                       <div className=" bg-white h-75 w-65 shadow-sm">
//                        <img className="rounded-sm  w-60 h-40 place-self-center pt-5" src="https://s3-alpha-sig.figma.com/img/6e49/c50d/3d7d595e7200861bb9e48026c6716f3c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MBHCt3saznCBH-HMT8KDeFDbc-zvTOMwLiKy9p7M6ZBBxAhBy58~unVOkBaKghXSdsTy8xaArKirDhjW1FhmVzMCMDowiPDDXv00csTFdwhYyj~Lxro9IyIK3wrTKJGBRmMeHX7vzAfIXDGnvBMpDbd-mZBXvYCZpwkv5JV7yypsjwA5xCkeYbv2FRuFD013QuuPnbH0-5n4kgS6DdtybfGxnUy4vrNmhWPTwJhBM09FPYy1eiGJ7uTvxhcNA9~GgJp0sA2sdUVoGf8juJ9b6nPQN1Sk6Q3Y3xYUY0VHv5vt7~fwCqyEdj~Uw03IGEDVPIcQx-xboxLQ0MuUB6dzfA__"></img>
//                       <div className="pl-3">
//                        <h1>Developing kids website from scratch</h1>
//                        <p className=""><span className="opacity-40">Course by:</span>Ravikanth Ratore</p></div>
//                        <div className="flex align-middle justify-between pt-3">
//                       <ul className="flex align-middle justify-between space-x-20 pl-3">
//                       <li><HiOutlineClock className="inline text-blue-600"/><span>7 hrs</span></li>
//                        <li><CiCalendar className="inline  text-blue-600"/> <span>modules</span></li>
                       
//                        </ul>
                      
//                        </div> 
//                        </div>
//                       <div className="bg-white h-75 w-65 shadow-sm">
//                        <img className="rounded-sm  w-60 h-40 place-self-center pt-5" src="https://s3-alpha-sig.figma.com/img/c269/fb99/73dd2f60946ff2cdba3d15894cfed467?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XODALYqRyuUNcc~XLUSBeGs1rDmYLF7Hb2K~Uk3f6TFiO-5Cu9km0g0SLJ8AXbkwW~hKFVBMSn3pQo8S1uXHclyG7bJ6rvsnTI3n8SQonI7WqL3OQ2vZvNi0Sq69vVyTILkri9Vvd~BRXBf9tWbY3NLaZmaZ6e0~sRlmcg32bIOVbKxoKSxpwaUWdSg19m-TSl7QzesiJxpyhipdnQ1yHVXo3IL4EUWPofRneCwnDC1fdCDYCDsTaGoWSOrSP54yHBQHaMT2Ts-m31BruyT5C74rLjvowFFNdyccTTmmI3xiOPUVWgf8sUP2inQkCo-Wf0dAp6ppL83vWnmI~sTDuw__"></img>
//                        <div className="pl-3">
//                        <h1>Developing kids website from scratch</h1>
//                        <p className=""><span className="opacity-40">Course by:</span>Ravikanth Ratore</p></div>
//                        <div className="flex align-middle justify-between pt-3">
//                       <ul className="flex align-middle justify-between space-x-20 pl-3">
//                       <li><HiOutlineClock className="inline  text-blue-600"/><span>7 hrs</span></li>
//                        <li><CiCalendar className="inline  text-blue-600"/> <span>modules</span></li>
                       
//                        </ul>
                      
//                        </div> 
//                        </div>
//                </div>
//                <div className="flex align-middle justify-center pt-10">
//             <Link to="/allcourses"><button className="bg-blue-800 text-white p-1 rounded-sm">See all Courses</button></Link>
//                </div>
//             </div>


//     )
// }
// export default Course




// import React from "react";
// import Header from "../Header";
// import FilterDropdown from "../FilterDropdown";
// import { CiCalendar } from "react-icons/ci";
// import { HiOutlineClock } from "react-icons/hi";
// import { Link } from "react-router-dom";

// function Course() {
//   return (
//     <div>
//       <Header />
//       <div className="bg-amber-400 h-10 flex justify-center items-center">
//         <span className="text-lg sm:text-xl md:text-2xl font-semibold">Course</span>
//       </div>

//       {/* Category Buttons */}
//       <div className="h-auto shadow-sm flex flex-wrap justify-center gap-3 p-3">
//         {["Information-Technology", "Maths", "Science", "Artificial-Intelligence"].map((category, index) => (
//           <button
//             key={index}
//             className="rounded-sm px-3 py-1 text-[#3066BE] border border-[#3066BE] shadow-md hover:bg-[#3066BE] hover:text-white transition"
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Subcategory Buttons */}
//       <div className="h-auto shadow-sm flex flex-wrap justify-center gap-3 p-3">
//         {["Web Development", "Java", "C++", "Design", "Python", "Data Science"].map((sub, index) => (
//           <button
//             key={index}
//             className="px-3 py-1 opacity-60 hover:opacity-100 hover:underline transition"
//           >
//             {sub}
//           </button>
//         ))}
//         <div>
//           <FilterDropdown />
//         </div>
//       </div>

//       {/* Course Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 pt-6">
//         {[1, 2, 3, 4, 5, 6].map((item, index) => (
//           <Link to="/aboutcourse" key={index}>
//             <div className="bg-white shadow-md rounded-lg p-4">
//               <img
//                 className="rounded-lg w-full h-40 object-cover"
//                 src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMLeuz~RWy8arG9Evv9tB43CemXrFWsTcCYDjhmCT7oGXe2OX0KdO3gwPfcBNJCKaKKFX2f172ryEqK1NoiorVOUUKFBWCf4cQBpQHagg6dYpQhPUXVKKAln3PLQXtiytWbaeEMg-Q0s50-iF93ji7zrKp5oc230KP-QO5C3Umab78sWyqt4Z7mNvrEKT9k7Gn~fAR7SSFsg4FZfDTR8WhQR4J~Ud~Msmpta3OqJbB3JtH5d3nlbcmYBiVr04kyVCkfGnekY0ceCdX-6DXWIeemvkkQTYIy5uQ7byMMfHGBuxognVnJrw8qc54vnp1R~aHnRqloSID5SH2vm8QoHsA__"
//                 alt="Course Thumbnail"
//               />
//               <div className="pt-3">
//                 <h1 className="text-lg font-semibold">Developing Kids Website from Scratch</h1>
//                 <p className="text-sm text-gray-500">Course by: Ravikanth Ratore</p>
//                 <div className="flex justify-between items-center pt-2">
//                   <span className="text-sm flex items-center">
//                     <HiOutlineClock className="text-[#3066BE] mr-1" /> 7 hrs
//                   </span>
//                   <span className="text-sm flex items-center">
//                     <CiCalendar className="text-[#3066BE] mr-1" /> Modules
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Course;

import React from "react";
import Header from "../Header";
import FilterDropdown from "../FilterDropdown";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";

const courseData = [
  {
    title: "Developing Kids Website from Scratch",
    instructor: "John Doe",
    duration: "10 hrs",
    image: "https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMLeuz~RWy8arG9Evv9tB43CemXrFWsTcCYDjhmCT7oGXe2OX0KdO3gwPfcBNJCKaKKFX2f172ryEqK1NoiorVOUUKFBWCf4cQBpQHagg6dYpQhPUXVKKAln3PLQXtiytWbaeEMg-Q0s50-iF93ji7zrKp5oc230KP-QO5C3Umab78sWyqt4Z7mNvrEKT9k7Gn~fAR7SSFsg4FZfDTR8WhQR4J~Ud~Msmpta3OqJbB3JtH5d3nlbcmYBiVr04kyVCkfGnekY0ceCdX-6DXWIeemvkkQTYIy5uQ7byMMfHGBuxognVnJrw8qc54vnp1R~aHnRqloSID5SH2vm8QoHsA__",
  },
  {
    title: "Developing Kids Website from Scratch",
    instructor: "Jane Smith",
    duration: "8 hrs",
    image: "https://s3-alpha-sig.figma.com/img/6e49/c50d/3d7d595e7200861bb9e48026c6716f3c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fRYup6fKFvQxaNcB27vIZOfa2m~X0tMdSTbVHVIU3WlNBT~tLRnhmi3P58HGD9JhDON7Ko6vkeMxmvR5GHSDrv0TL91RyZ5I2Yr-MShpic~SDFFXN5wCchArnXH0C~iQygH1KtI0kqEFmvCyzL4cV8p8oS-KTq99VZydcf3psegogzFyhA7RcJkKoD0-BNGjcLZdLIaoDywgis-yQQDuFQzwejm4G4hkwurCveVbYlqt44lRiLwQUgcnDW9hAMc325BaMXylRnFQcVdR4pTl8mk87EEdJnDQrLm5GQZKZNYvPiHC8qYd~zKmbCFwu4Z9~PewDIKl~8FecigUlEVwtQ__",
  },
  {
    title: "Developing Kids Website from Scratch",
    instructor: "Michael Johnson",
    duration: "6 hrs",
    image: "https://s3-alpha-sig.figma.com/img/c269/fb99/73dd2f60946ff2cdba3d15894cfed467?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AC1ctdoUt0PvEHPftVjWog-POIfOyul87lqjwqMPvVl-mnGclJ5ddnfV0h3vCNzIaYxHV778xfSDAHq-tMsLyRZD30MOXpVYCRVz3vgOQMD54L39s9We3-hSpBOvFrB2U9L89pdq-cqrK8gWPPTT7UzzucoeEwfPrvD2XCTClP3Ed3GGPoQ0SqUA2LGJYlBX6W7sgxk3MryqEExWM3SFtlgQDd85EtowwP-IEcTQAH1ljZYwtL6iUHSrUQZyusSghRaWhjuTWITPGNuepNx9Hy-yQzg-O9p9kLUZ7px06-ixrYxmxonXLEkbineWZtBuZL6khluY0VF022ZjiFlkgw__",
  },
  {
    title: "Developing Kids Website from Scratchs",
    instructor: "Emma Wilson",
    duration: "12 hrs",
    image: "https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMLeuz~RWy8arG9Evv9tB43CemXrFWsTcCYDjhmCT7oGXe2OX0KdO3gwPfcBNJCKaKKFX2f172ryEqK1NoiorVOUUKFBWCf4cQBpQHagg6dYpQhPUXVKKAln3PLQXtiytWbaeEMg-Q0s50-iF93ji7zrKp5oc230KP-QO5C3Umab78sWyqt4Z7mNvrEKT9k7Gn~fAR7SSFsg4FZfDTR8WhQR4J~Ud~Msmpta3OqJbB3JtH5d3nlbcmYBiVr04kyVCkfGnekY0ceCdX-6DXWIeemvkkQTYIy5uQ7byMMfHGBuxognVnJrw8qc54vnp1R~aHnRqloSID5SH2vm8QoHsA__",
  },
  {
    title: "Developing Kids Website from Scratch",
    instructor: "Robert Brown",
    duration: "9 hrs",
    image: "https://s3-alpha-sig.figma.com/img/6e49/c50d/3d7d595e7200861bb9e48026c6716f3c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fRYup6fKFvQxaNcB27vIZOfa2m~X0tMdSTbVHVIU3WlNBT~tLRnhmi3P58HGD9JhDON7Ko6vkeMxmvR5GHSDrv0TL91RyZ5I2Yr-MShpic~SDFFXN5wCchArnXH0C~iQygH1KtI0kqEFmvCyzL4cV8p8oS-KTq99VZydcf3psegogzFyhA7RcJkKoD0-BNGjcLZdLIaoDywgis-yQQDuFQzwejm4G4hkwurCveVbYlqt44lRiLwQUgcnDW9hAMc325BaMXylRnFQcVdR4pTl8mk87EEdJnDQrLm5GQZKZNYvPiHC8qYd~zKmbCFwu4Z9~PewDIKl~8FecigUlEVwtQ__",
  },
  {
    title: "Developing Kids Website from Scratch",
    instructor: "Alice Davis",
    duration: "7 hrs",
    image: "https://s3-alpha-sig.figma.com/img/dd98/852f/abc600267ef14cec873839c4d3d2cbc5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hwlyXDEyqinHdkTjWtwZEep6tY~fbqK4iZAfp0DTDXcr9JKfNLlwIEsXt9dUBjgbgMmKgzfpU2St3wllE-nqqKWhwQEUBNzjwzWyC67is0v51r43GGxJtYlvAQcphjPhOIMdMAOv9jL-HwJShNlh34KfYFd1kvRM18JwXnzRJAt4egDEXk9HSX6f1KX5gwrDwFX3lkKLpCIg2DfIO5vz7UjQNEFNaunhBD8Nea78b08G195U3VwoUpEi0Jc5b1HtSqydRAGUXb-YPNjxFuYYaqL6AAldr6MUGn9118CzrGA6i4BPNDOsf2xJCQOh2bkTLP4eQ4tEl~fZF~PvV~BdcA__",
  },
];

function Course() {
  return (
    <div>
      <Header />
      <div className="bg-amber-400 h-10 flex justify-center items-center">
        <span className="text-lg sm:text-xl md:text-2xl font-semibold">Course</span>
      </div>

      {/* Category Buttons */}
      <div className="h-auto shadow-sm flex flex-wrap justify-center gap-3 p-3">
        {["Information-Technology", "Maths", "Science", "Artificial-Intelligence"].map((category, index) => (
          <button
            key={index}
            className="rounded-sm px-3 py-1 text-blue-600 border border-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Subcategory Buttons */}
      <div className="h-auto shadow-sm flex flex-wrap justify-center gap-3 p-3">
        {["Web Development", "Java", "C++", "Design", "Python", "Data Science"].map((sub, index) => (
          <button key={index} className="px-3 py-1 opacity-60 hover:opacity-100 hover:underline transition">
            {sub}
          </button>
        ))}
        <div>
          <FilterDropdown />
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 pt-6">
        {courseData.map((course, index) => (
          <Link to="/aboutcourse" key={index}>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img className="rounded-lg w-full h-40 object-cover" src={course.image} alt={course.title} />
              <div className="pt-3">
                <h1 className="text-lg font-semibold">{course.title}</h1>
                <p className="text-sm text-gray-500">Course by: {course.instructor}</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm flex items-center">
                    <HiOutlineClock className="text-blue-600 mr-1" /> {course.duration}
                  </span>
                  <span className="text-sm flex items-center">
                    <CiCalendar className="text-blue-600 mr-1" /> Modules
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Course;
