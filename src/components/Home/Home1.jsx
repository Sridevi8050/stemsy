// import React from "react";
// import Image1 from "../Courses/Image1";
// import FilterDropdown from "../FilterDropdown";
// import { TbMessageChatbot } from "react-icons/tb";
// import Header from "../Header";
// import {Link} from "react-router-dom"

// function Home1() {
//   return (
//     <div className="relative min-h-screen">
//       {/* Navbar */}
//       <Header/>

//       {/* Hero Section */}
//       <div className="w-[880px] h-[150px] absolute top-[70px] left-[32px] bg-[#e3b552] px-10 pt-8 rounded-sm shadow-lg">
//         <h1 className="text-2xl font-bold">STEM Initiative For Rural Kids</h1>
//         <p className="text-gray-800">
//           "Empowering young minds with STEM education to innovate and shape the future."
//         </p>
//       </div>

//       {/* Section: "All you needed in one place" */}
//       <div className="flex justify-between items-center w-[880px] mt-[250px] mx-auto px-10 relative right-45">
//         <h1 className="text-2xl font-semibold">All you needed in one place</h1>
//         <FilterDropdown />
//       </div>

//       {/* Image1 Component */}
//       <div className="flex justify-center  mt-1 relative right-45">
//         <Image1 className="w-[880px] h-[400px] rounded-sm shadow-sm " />
//       </div>

//       {/* Section: "Most Popular" */}
//       <div className="flex flex-col items-center mt-12 relative right-45">
//         <h1 className="text-2xl font-semibold mb-4">Most Popular</h1>
//         <div className="flex space-x-6">
//           <button className="shadow-sm px-4 py-1 text-blue-600 border border-blue-600 rounded-md hover:text-white hover:bg-blue-600">
//             Courses
//           </button>
//           <button className="shadow-sm px-4 py-1 text-blue-600 border border-blue-600 rounded-md hover:text-white hover:bg-blue-600">
//             Events
//           </button>
//           <button className="shadow-sm px-4 py-1 text-blue-600 border border-blue-600 rounded-md hover:text-white hover:bg-blue-600">
//             Sessions
//           </button>
//           <button className="shadow-sm px-4 py-1 text-blue-600 border border-blue-600 rounded-md hover:text-white hover:bg-blue-600">
//             Mentor
//           </button>
//         </div>
//       </div>

//       {/* Image1 Component */}
//       <div className="flex justify-center mt-1 relative right-45">
//         <Image1 className="w-[880px] h-[400px] rounded-sm shadow-sm" />
//       </div>

//       {/* Sidebar - Right Side Content */}
//       <div className="absolute top-[180px] right-[100px]">
//         <div className="bg-blue-100 opacity-30 w-[300px] h-[610px] rounded-sm shadow-md relative left-20 bottom-27">
//           <img src="Eduwebsite/client/src/assets/stricks.png" alt="Stricks" />
//           <Link to="/ai"><button className="h-10 w-10 bg-[#0040a5] text-2xl text-white relative top-120 left-50 place-items-center rounded-full"><TbMessageChatbot /></button></Link>
//         </div>
//         <div className="bg-blue-100 w-[300px] h-[458px] rounded-sm shadow-md mt-6 relative left-20 bottom-27"></div>
//       </div>
//     </div>
//   );
// }

// export default Home1;
// import React from "react";
// import Image1 from "../Courses/Image1";
// import FilterDropdown from "../FilterDropdown";
// import { TbMessageChatbot } from "react-icons/tb";
// import Header from "../Header";
// import { Link } from "react-router-dom";

// function Home1() {
//   return (
//     <div className="relative min-h-screen w-full">
//       {/* Navbar */}
//       <Header />

//       {/* Hero Section */}
//       <div className="w-full sm:w-[880px] h-auto sm:h-[150px] absolute top-[70px] left-[5%] sm:left-[32px] bg-[#e3b552] px-6 sm:px-10 py-4 sm:pt-8 rounded-sm shadow-lg">
//         <h1 className="text-lg sm:text-2xl font-bold text-center sm:text-left">
//           STEM Initiative For Rural Kids
//         </h1>
//         <p className="text-gray-800 text-sm sm:text-base text-center sm:text-left">
//           "Empowering young minds with STEM education to innovate and shape the future."
//         </p>
//       </div>

//       {/* Section: "All you needed in one place" */}
//       <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[880px] mt-[250px] mx-auto px-6 sm:px-10">
//         <h1 className="text-lg sm:text-2xl font-semibold text-center sm:text-left">
//           All you needed in one place
//         </h1>
//         <FilterDropdown />
//       </div>

//       {/* Image1 Component */}
//       <div className="flex justify-center mt-4">
//         <Image1 className="w-full sm:w-[880px] h-[250px] sm:h-[400px] rounded-sm shadow-sm" />
//       </div>

//       {/* Section: "Most Popular" */}
//       <div className="flex flex-col items-center mt-12">
//         <h1 className="text-lg sm:text-2xl font-semibold mb-4">Most Popular</h1>
//         <div className="flex flex-wrap justify-center gap-4">
//           {["Courses", "Events", "Sessions", "Mentor"].map((item, index) => (
//             <button
//               key={index}
//               className="shadow-sm px-4 py-1 text-blue-600 border border-blue-600 rounded-md hover:text-white hover:bg-blue-600 transition"
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Image1 Component */}
//       <div className="flex justify-center mt-4">
//         <Image1 className="w-full sm:w-[880px] h-[250px] sm:h-[400px] rounded-sm shadow-sm" />
//       </div>

//       {/* Sidebar - Right Side Content */}
//       <div className="flex flex-col items-center sm:absolute sm:top-[180px] sm:right-[50px] mt-10 sm:mt-0 w-full sm:w-auto">
//         <div className="bg-blue-100 opacity-30 w-full sm:w-[300px] h-[610px] rounded-sm shadow-md relative">
//           <img
//             src="Eduwebsite/client/src/assets/stricks.png"
//             alt="Stricks"
//             className="w-full h-full object-cover"
//           />
//           <Link to="/ai">
//             <button className="h-10 w-10 bg-[#0040a5] text-2xl text-white absolute top-[500px] left-[50%] transform -translate-x-1/2 rounded-full shadow-lg hover:bg-[#003080] transition">
//               <TbMessageChatbot />
//             </button>
//           </Link>
//         </div>
//         <div className="bg-blue-100 w-full sm:w-[300px] h-[458px] rounded-sm shadow-md mt-6"></div>
//       </div>
//     </div>
//   );
// }

// export default Home1;

import React from "react";
import Image1 from "../Courses/Image1";
import FilterDropdown from "../FilterDropdown";
import { TbMessageChatbot } from "react-icons/tb";
import Header from "../Header";
import { Link } from "react-router-dom";

function Home1() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <div className="w-full sm:w-[880px] h-auto sm:h-[150px] absolute top-[70px] left-[5%] sm:left-[32px] bg-[#e3b552] px-6 sm:px-10 py-4 sm:pt-8 rounded-sm shadow-lg">
        <h1 className="text-lg sm:text-2xl font-bold text-left">
          STEM Initiative For Rural Kids
        </h1>
        <p className="text-gray-800 text-sm sm:text-base text-left">
          "Empowering young minds with STEM education to innovate and shape the future."
        </p>
      </div>

      {/* Section: "All you needed in one place" */}
      <div className="flex flex-col sm:flex-row justify-start items-start w-full sm:w-[880px] mt-[250px] mx-auto px-6 sm:px-10">
        <h1 className="text-lg sm:text-2xl font-semibold text-left">
          All you needed in one place
        </h1>
        <div className="ml-auto sm:ml-6">
          <FilterDropdown />
        </div>
      </div>

      {/* Image1 Component */}
      <div className="flex justify-start mt-4 px-6 sm:px-10">
        <Image1 className="w-full sm:w-[880px] h-[250px] sm:h-[400px] rounded-sm shadow-sm" />
      </div>

      {/* Section: "Most Popular" */}
      <div className="flex flex-col items-start mt-12 px-6 sm:px-10">
        <h1 className="text-lg sm:text-2xl font-semibold mb-4 text-left">Most Popular</h1>
        <div className="flex flex-wrap gap-4">
          {["Courses", "Events", "Sessions", "Mentor"].map((item, index) => (
            <button
              key={index}
              className="shadow-sm px-4 py-1 text-[#3066BE] border border-[#3066BE] rounded-md hover:text-white hover:bg-[#3066BE] transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Image1 Component */}
      <div className="flex justify-start mt-4 px-6 sm:px-10">
        <Image1 className="w-full sm:w-[880px] h-[250px] sm:h-[400px] rounded-sm shadow-sm" />
      </div>

      {/* Sidebar - Right Side Content */}
      <div className="flex flex-col items-center sm:absolute sm:top-[180px] sm:right-[50px] mt-10 sm:mt-0 w-full sm:w-auto">
        <div className="bg-blue-100 opacity-30 w-full sm:w-[300px] h-[610px] rounded-sm shadow-md relative">
          <img
            src="Eduwebsite/client/src/assets/stricks.png"
            alt="Stricks"
            className="w-full h-full object-cover"
          />
          <Link to="/ai">
            <button className="h-10 w-10 bg-[#0040a5] text-2xl text-white absolute top-[500px] left-[50%] transform -translate-x-1/2 rounded-full shadow-lg hover:bg-[#003080] transition">
              <TbMessageChatbot />
            </button>
          </Link>
        </div>
        <div className="bg-blue-100 w-full sm:w-[300px] h-[458px] rounded-sm shadow-md mt-6"></div>
      </div>
    </div>
  );
}

export default Home1;
