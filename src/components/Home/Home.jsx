
// import React from "react";
// import Image1 from "../Courses/Image1";
// import FilterDropdown from "../FilterDropdown";
// import { AiFillAudio } from "react-icons/ai";
// import { TbMessageChatbot } from "react-icons/tb";
// import {Link} from "react-router-dom"


// function Home() {
//   return (
//     <div className="relative min-h-screen">
//       {/* Navbar */}
//       <div className="bg-blue-500 h-14 flex items-center px-10 justify-between">
//         <span className="text-white text-2xl font-semibold">Stemsy</span>
        
//         <div className="flex space-x-4">
//           <button className="bg-white rounded-sm px-5 py-1">Explore</button>
//           <input
//             type="search"
//             placeholder="Search..."
//             className="bg-white rounded-sm py-1 px-3 w-64"
//           />
//           <button className="p-2 text-white shadow-sm rounded-full hover:text-blue-600 hover:bg-white">
//             <AiFillAudio />
//           </button>
//         </div>

//         <div className="flex space-x-6 items-center">
//         <Link to="/login"><button className="rounded-sm text-white hover:bg-white hover:text-blue-500 px-5 py-1 shadow-sm">
//             Sign In
//           </button></Link>
//           <Link to="/signup"><button className="rounded-sm text-white hover:bg-white hover:text-blue-500 px-5 py-1 shadow-sm">
//             Sign Up
//           </button></Link>
//           <select className="text-white shadow-sm px-2 py-1 bg-transparent border border-white rounded-sm">
//             <option>English</option>
//           </select>
//         </div>
//       </div>

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
//           <img src="Eduwebsite/client/src/assets/stricks.png" alt="" />
//           <Link to="/ai"><button className="h-10 w-10 bg-[#0040a5] text-2xl text-white relative top-120 left-50 place-items-center rounded-full"><TbMessageChatbot /></button></Link>
//         </div>
//         <div className="bg-blue-100 w-[300px] h-[458px] rounded-sm shadow-md mt-6 relative left-20 bottom-27"></div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import Image1 from "../Courses/Image1";
// import FilterDropdown from "../FilterDropdown";
// import { AiFillAudio } from "react-icons/ai";
// import { TbMessageChatbot } from "react-icons/tb";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="relative min-h-screen">
//       {/* Navbar */}
//       <div className="bg-[#3066BE] h-14 flex items-center px-4 sm:px-10 justify-between">
//         <span className="text-white text-lg sm:text-2xl font-semibold">Stemsy</span>
        
//         <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
//           <button className="bg-white rounded-sm px-5 py-1">Explore</button>
//           <input
//             type="search"
//             placeholder="Search..."
//             className="bg-white rounded-sm py-1 px-3 w-full sm:w-64"
//           />
//           <button className="p-2 text-white shadow-sm rounded-full hover:text-[#3066BE] hover:bg-white">
//             <AiFillAudio />
//           </button>
//         </div>

//         <div className="flex space-x-4 sm:space-x-6 items-center">
//           <Link to="/login">
//             <button className="rounded-sm text-white hover:bg-white hover:text-[#3066BE] px-5 py-1 shadow-sm">
//               Sign In
//             </button>
//           </Link>
//           <Link to="/signup">
//             <button className="rounded-sm text-white hover:bg-white hover:text-[#3066BE] px-5 py-1 shadow-sm">
//               Sign Up
//             </button>
//           </Link>
//           <select className="text-white shadow-sm px-2 py-1 bg-transparent border border-white rounded-sm">
//             <option>English</option>
//           </select>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="w-full sm:w-[880px] mx-auto mt-6 bg-[#e3b552] px-6 sm:px-10 py-6 rounded-sm shadow-lg text-center sm:text-left">
//         <h1 className="text-lg sm:text-2xl font-bold">STEM Initiative For Rural Kids</h1>
//         <p className="text-gray-800 text-sm sm:text-base">
//           "Empowering young minds with STEM education to innovate and shape the future."
//         </p>
//       </div>

//       {/* Section: "All you needed in one place" */}
//       <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[880px] mx-auto mt-12 px-6 sm:px-10">
//         <h1 className="text-lg sm:text-2xl font-semibold text-center sm:text-left">All you needed in one place</h1>
//         <FilterDropdown />
//       </div>

//       {/* Image1 Component */}
//       <div className="flex justify-center mt-6">
//         <Image1 className="w-full sm:w-[880px] h-[300px] sm:h-[400px] rounded-sm shadow-sm" />
//       </div>

//       {/* Section: "Most Popular" */}
//       <div className="flex flex-col items-center mt-12">
//         <h1 className="text-lg sm:text-2xl font-semibold mb-4">Most Popular</h1>
//         <div className="flex flex-wrap justify-center gap-4">
//           {["Courses", "Events", "Sessions", "Mentor"].map((item, index) => (
//             <button key={index} className="shadow-sm px-4 py-1 text-[#3066BE] border border-[#3066BE] rounded-md hover:text-white hover:bg-[#3066BE]">
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Image1 Component */}
//       <div className="flex justify-center mt-6">
//         <Image1 className="w-full sm:w-[880px] h-[300px] sm:h-[400px] rounded-sm shadow-sm" />
//       </div>

//       {/* Sidebar - Right Side Content */}
//       <div className="flex flex-col items-center sm:absolute sm:top-[180px] sm:right-[100px] mt-10 sm:mt-0">
//         <div className="bg-blue-100 opacity-30 max-w-[300px] w-full h-[610px] rounded-sm shadow-md relative">
//           <img src="Eduwebsite/client/src/assets/stricks.png" alt="" />
//           <Link to="/ai">
//             <button className="h-10 w-10 bg-[#0040a5] text-2xl text-white absolute place-items-center top-[500px] left-[50%] transform -translate-x-1/2 rounded-full">
//               <TbMessageChatbot />
//             </button>
//           </Link>
//         </div>
//         <div className="bg-blue-100 max-w-[300px] w-full h-[458px] rounded-sm shadow-md mt-6"></div>
//       </div>
//     </div>
//   );
// }

// export default Home;



// import React from "react";
// import Image1 from "../Courses/Image1";
// import FilterDropdown from "../FilterDropdown";
// import { AiFillAudio } from "react-icons/ai";
// import { TbMessageChatbot } from "react-icons/tb";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="relative min-h-screen w-full">
//       {/* Navbar */}
//       <div className="bg-blue-500 h-14 flex items-center px-4 sm:px-10 justify-between w-full">
//         <span className="text-white text-lg sm:text-2xl font-semibold">Stemsy</span>
        
//         <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
//           <button className="bg-white rounded-sm px-5 py-1">Explore</button>
//           <input
//             type="search"
//             placeholder="Search..."
//             className="bg-white rounded-sm py-1 px-3 w-full sm:w-64"
//           />
//           <button className="p-2 text-white shadow-sm rounded-full hover:text-blue-600 hover:bg-white transition">
//             <AiFillAudio />
//           </button>
//         </div>

//         <div className="flex space-x-4 sm:space-x-6 items-center">
//           <Link to="/login">
//             <button className="rounded-sm text-white hover:bg-white hover:text-blue-500 px-5 py-1 shadow-sm">
//               Sign In
//             </button>
//           </Link>
//           <Link to="/signup">
//             <button className="rounded-sm text-white hover:bg-white hover:text-blue-500 px-5 py-1 shadow-sm">
//               Sign Up
//             </button>
//           </Link>
//           <select className="text-white shadow-sm px-2 py-1 bg-transparent border border-white rounded-sm">
//             <option>English</option>
//           </select>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="w-full sm:w-[880px] mx-auto mt-6 bg-[#e3b552] px-6 sm:px-10 py-6 rounded-sm shadow-lg text-center sm:text-left">
//         <h1 className="text-lg sm:text-2xl font-bold">STEM Initiative For Rural Kids</h1>
//         <p className="text-gray-800 text-sm sm:text-base">
//           "Empowering young minds with STEM education to innovate and shape the future."
//         </p>
//       </div>

//       {/* Section: "All you needed in one place" */}
//       <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[880px] mx-auto mt-12 px-6 sm:px-10">
//         <h1 className="text-lg sm:text-2xl font-semibold text-center sm:text-left">All you needed in one place</h1>
//         <FilterDropdown />
//       </div>

//       {/* Image1 Component */}
//       <div className="flex justify-center mt-6">
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
//       <div className="flex justify-center mt-6">
//         <Image1 className="w-full sm:w-[880px] h-[250px] sm:h-[400px] rounded-sm shadow-sm" />
//       </div>

//       {/* Sidebar - Right Side Content */}
//       <div className="flex flex-col items-center sm:absolute sm:top-[180px] sm:right-[50px] mt-10 sm:mt-0 w-full sm:w-auto">
//         <div className="bg-blue-100 opacity-30 max-w-full sm:max-w-[300px] w-full h-[610px] rounded-sm shadow-md relative">
//           <img
//             src="Eduwebsite/client/src/assets/stricks.png"
//             alt=""
//             className="w-full h-full object-cover"
//           />
//           <Link to="/ai">
//             <button className="h-10 w-10 bg-[#0040a5] text-2xl text-white absolute top-[500px] left-[50%] transform -translate-x-1/2 rounded-full shadow-lg hover:bg-[#003080] transition">
//               <TbMessageChatbot />
//             </button>
//           </Link>
//         </div>
//         <div className="bg-blue-100 max-w-full sm:max-w-[300px] w-full h-[458px] rounded-sm shadow-md mt-6"></div>
//       </div>
//     </div>
//   );
// }

// export default Home;




// import React from "react";
// import Image1 from "../Courses/Image1";
// import FilterDropdown from "../FilterDropdown";
// import { AiFillAudio } from "react-icons/ai";
// import { TbMessageChatbot } from "react-icons/tb";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center">
//       {/* Navbar */}
//       <div className="bg-blue-500 h-14 w-full flex items-center px-4 sm:px-10 justify-between">
//         <span className="text-white text-lg sm:text-2xl font-semibold">Stemsy</span>

//         <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
//           <button className="bg-white rounded-sm px-5 py-1">Explore</button>
//           <input
//             type="search"
//             placeholder="Search..."
//             className="bg-white rounded-sm py-1 px-3 w-full sm:w-64"
//           />
//           <button className="p-2 text-white shadow-sm rounded-full hover:text-blue-600 hover:bg-white">
//             <AiFillAudio />
//           </button>
//         </div>

//         <div className="flex space-x-4 sm:space-x-6 items-center">
//           <Link to="/login">
//             <button className="rounded-sm text-white hover:bg-white hover:text-blue-500 px-5 py-1 shadow-sm">
//               Sign In
//             </button>
//           </Link>
//           <Link to="/signup">
//             <button className="rounded-sm text-white hover:bg-white hover:text-blue-500 px-5 py-1 shadow-sm">
//               Sign Up
//             </button>
//           </Link>
//           <select className="text-white shadow-sm px-2 py-1 bg-transparent border border-white rounded-sm">
//             <option>English</option>
//           </select>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="w-full max-w-[880px] mt-6 bg-[#e3b552] px-6 sm:px-10 py-6 rounded-sm shadow-lg text-center sm:text-left">
//         <h1 className="text-lg sm:text-2xl font-bold">STEM Initiative For Rural Kids</h1>
//         <p className="text-gray-800 text-sm sm:text-base">
//           "Empowering young minds with STEM education to innovate and shape the future."
//         </p>
//       </div>

//       {/* Section: "All you needed in one place" */}
//       <div className="w-full max-w-[880px] mt-12 px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-center">
//         <h1 className="text-lg sm:text-2xl font-semibold text-center sm:text-left">All you needed in one place</h1>
//         <FilterDropdown />
//       </div>

//       {/* Image1 Component */}
//       <div className="w-full max-w-[880px] mt-6">
//         <Image1 className="w-full h-[300px] sm:h-[400px] rounded-sm shadow-sm" />
//       </div>

//       {/* Section: "Most Popular" */}
//       <div className="w-full max-w-[880px] mt-12 flex flex-col items-center">
//         <h1 className="text-lg sm:text-2xl font-semibold mb-4">Most Popular</h1>
//         <div className="flex flex-wrap justify-center gap-4">
//           {["Courses", "Events", "Sessions", "Mentor"].map((item, index) => (
//             <button key={index} className="shadow-sm px-4 py-1 text-blue-600 border border-blue-600 rounded-md hover:text-white hover:bg-blue-600">
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Image1 Component */}
//       <div className="w-full max-w-[880px] mt-6">
//         <Image1 className="w-full h-[300px] sm:h-[400px] rounded-sm shadow-sm" />
//       </div>

//       {/* Sidebar - Right Side Content */}
//       <div className="absolute top-[180px] right-[calc((100%-880px)/2 + 20px)] mt-10 sm:mt-0 w-[300px] hidden sm:flex flex-col items-center">
//         <div className="bg-blue-100 opacity-30 w-full h-[610px] rounded-sm shadow-md relative">
//           <img src="Eduwebsite/client/src/assets/stricks.png" alt="" className="w-full h-full object-cover rounded-sm" />
//           <Link to="/ai">
//             <button className="h-10 w-10 bg-[#0040a5] text-2xl text-white absolute top-[500px] left-1/2 -translate-x-1/2 rounded-full">
//               <TbMessageChatbot />
//             </button>
//           </Link>
//         </div>
//         <div className="bg-blue-100 w-full h-[458px] rounded-sm shadow-md mt-6"></div>
//       </div>

//       {/* Mobile Chatbot Button */}
//       <div className="fixed bottom-6 right-6 sm:hidden">
//         <Link to="/ai">
//           <button className="h-12 w-12 bg-[#0040a5] text-3xl text-white rounded-full shadow-md">
//             <TbMessageChatbot />
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import Image1 from "../Courses/Image1";
import FilterDropdown from "../FilterDropdown";
import { AiFillAudio } from "react-icons/ai";
import { TbMessageChatbot } from "react-icons/tb";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen flex">
      {/* Left Side Container */}
      <div className="flex-1 flex flex-col items-center">
        {/* Navbar */}
        <div className="bg-[#3066BE] h-14 w-320 flex items-center px-4 sm:px-10 justify-between">
  <span className="text-white text-lg sm:text-2xl font-semibold">Stemsy</span>

  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
    <button className="bg-white rounded-sm px-5 py-1 text-sm sm:text-base">Explore</button>
    <input
      type="search"
      placeholder="Search..."
      className="bg-white rounded-sm py-1 px-3 w-full sm:w-64 text-sm sm:text-base"
    />
    <button className="p-2 text-white shadow-sm rounded-full hover:text-[#3066BE] hover:bg-white text-lg sm:text-xl">
      <AiFillAudio />
    </button>
  </div>

  <div className="flex space-x-2 sm:space-x-4 items-center">
    <Link to="/login">
      <button className="rounded-sm text-white hover:bg-white hover:[#3066BE] px-3 py-1 shadow-sm text-sm sm:text-base">
        Sign In
      </button>
    </Link>
    <Link to="/signup">
      <button className="rounded-sm text-white hover:bg-white hover:text-[#3066BE] px-3 py-1 shadow-sm text-sm sm:text-base">
        Sign Up
      </button>
    </Link>
    <select className="text-white shadow-sm px-2 py-1 bg-transparent border border-white rounded-sm text-sm sm:text-base">
      <option>English</option>
    </select>
  </div>
</div>

        {/* Hero Section */}
        <div className="w-full max-w-[880px] mt-6 bg-[#e3b552] px-6 sm:px-10 py-6 rounded-sm shadow-lg text-center sm:text-left">
          <h1 className="text-lg sm:text-2xl font-bold">STEM Initiative For Rural Kids</h1>
          <p className="text-gray-800 text-sm sm:text-base">
            "Empowering young minds with STEM education to innovate and shape the future."
          </p>
        </div>

        {/* Section: "All you needed in one place" */}
        <div className="w-full max-w-[880px] mt-12 px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-lg sm:text-2xl font-semibold text-center sm:text-left">All you needed in one place</h1>
          <FilterDropdown />
        </div>

        {/* Image1 Component */}
        <div className="w-full max-w-[880px] mt-6">
          <Image1 className="w-full h-[300px] sm:h-[400px] rounded-sm shadow-sm" />
        </div>

        {/* Section: "Most Popular" */}
        <div className="w-full max-w-[880px] mt-12 flex flex-col items-center">
          <h1 className="text-lg sm:text-2xl font-semibold mb-4">Most Popular</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {["Courses", "Events", "Sessions", "Mentor"].map((item, index) => (
              <button key={index} className="shadow-sm px-4 py-1 text-[#3066BE] border border-[#3066BE] rounded-md hover:text-white hover:bg-blue-600">
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Image1 Component */}
        <div className="w-full max-w-[880px] mt-6">
          <Image1 className="w-full h-[300px] sm:h-[400px] rounded-sm shadow-sm" />
        </div>
      </div>

      {/* Sidebar - Right Side Content */}
      <div className="w-[300px] flex-shrink-0 mt-10 sm:mt-16 pr-6 pl-0 hidden sm:flex flex-col items-center">
        <div className="bg-blue-100 opacity-30 w-full h-[610px] rounded-sm shadow-md relative">
          <img src="Eduwebsite/client/src/assets/stricks.png" alt="" className="w-full h-full object-cover rounded-sm" />
          <Link to="/ai">
            <button className="h-10 w-10 bg-[#0040a5] text-2xl text-white absolute top-[500px] left-1/2 -translate-x-1/2 rounded-full">
              <TbMessageChatbot />
            </button>
          </Link>
        </div>
        <div className="bg-blue-100 w-full h-[458px] rounded-sm shadow-md mt-6"></div>
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