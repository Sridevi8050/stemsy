
// // import React, { useState } from "react";
// // import { AiFillAudio } from "react-icons/ai";
// // import { HiBars3 } from "react-icons/hi2";


// // function Header() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <div className="bg-[#3066BE] h-14 flex items-center justify-between px-4 relative">
// //       {/* Left side */}
// //       <div className="flex items-center space-x-4">
// //         <button onClick={() => setMenuOpen(!menuOpen)}>
// //           <HiBars3 className="size-6 text-white" />
// //         </button>
// //         <span className="text-white text-2xl font-semibold">Stemsy</span>
// //       </div>

// //       {/* Dropdown Menu */}
// //       {menuOpen && (
// //         <div className="absolute top-14 left-4 bg-white shadow-md rounded-md w-56 p-2 z-50">
// //           <ul className="space-y-2">
// //             {["Home", "Courses", "Event", "Whiteboard", "Assessment", "Library", "Help", "Setting"].map((item) => (
// //               <li key={item} className="p-2 hover:bg-gray-100 rounded-md cursor-pointer text-black">
// //                 {item}
// //               </li>
// //             ))}
// //           </ul>
// //           <hr />
// //           <button className="text-red-600 w-full text-left p-2 hover:bg-gray-100 rounded-md">
// //             Logout
// //           </button>
// //         </div>
// //       )}

// //       {/* Middle section */}
// //       <div className="flex items-center space-x-4">
// //         <button className="bg-white rounded-sm px-5 py-1">Explore</button>
// //         <input
// //           type="search"
// //           placeholder="Search..."
// //           className="bg-white rounded-sm py-1 px-2 w-64"
// //         />
// //         <button className="p-2 text-white rounded-full shadow-sm hover:text-[#3066BE] hover:bg-white">
// //           <AiFillAudio />
// //         </button>
// //       </div>

// //       {/* Right side */}
// //       <div className="flex items-center space-x-4">
// //         <select className="text-white bg-transparent hover:bg-white hover:text-[#3066BE] p-1 rounded-sm">
// //           <option>English</option>
// //         </select>
// //         <button className="bg-white h-8 w-8 rounded-full">
// //           <img
// //             className="rounded-full"
// //             src="https://s3-alpha-sig.figma.com/img/027c/5c82/5bf85922c6965220c96ac141f0374b7b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SLKWUUNrOzR60xknm4TB8aY9cmgdTiStnsd0kyrKrLR9niS1HAMFkVB16Fi6lnxol1oJ--eZ66QiPNf94Cx-XzutinOCNPyBNqZaiKszH4tvtU0IZQwwvWaw7j2avj0viBEqiG~~TlTm1dyJ5VmMyT2PuzdmNUr9vbAl3RJkK1RPjv7-7hUUNifNX52571diVfNxGUMfF6Sva1FzBP0xJRJ5h23hea983WyxBBLmi-S3Q7j9LdFKr7UxKG0pFBUNTxtvVQxll3tCO4uEGLLHSSG1NAmAa~i0Ap7YDl-trt3hCo4WLuM7FgYYsYb2JI9H65uqpyRSQ3t~jEmlX64v5Q__"
// //             alt="User"
// //           />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Header;
// import React, { useState } from "react";
// import { AiFillAudio } from "react-icons/ai";
// import { HiBars3 } from "react-icons/hi2";
// import { Link } from "react-router-dom"; // Import Link for navigation

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   return (
//     <div className="bg-[#3066BE] h-14 flex items-center justify-between px-4 relative">
//       {/* Left side */}
//       <div className="flex items-center space-x-4">
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           <HiBars3 className="size-6 text-white" />
//         </button>
//         <span className="text-white text-2xl font-semibold">Stemsy</span>
//       </div>

//       {/* Dropdown Menu */}
//       {menuOpen && (
//         <div className="absolute top-14 left-4 bg-white shadow-md rounded-md w-56 p-2 z-50">
//           <ul className="space-y-2">
//             {[
//               { name: "Home", path: "/homefirst" },
//               { name: "Courses", path: "/courses" },
//               { name: "Event", path: "/event" },
//               { name: "Whiteboard", path: "/whiteboard" },
//               { name: "Assessment", path: "/stemassessment" },
//               { name: "Library", path: "/library" },
//               { name: "Help", path: "/help" },
//               { name: "Setting", path: "/settings" },
//             ].map((item) => (
//               <li key={item.name} className="p-2 text-black hover:bg-[#3066BE] rounded-md cursor-pointer hover:text-white">
//                 <Link className="w-full" to={item.path}>{item.name}</Link>
//               </li>
//             ))}
//           </ul>
//           <hr />
//         <Link to="/logout"><button className="text-red-600 w-full text-left p-2 hover:bg-gray-100 rounded-md">
//             Logout
//           </button></Link>
//         </div>
//       )}

//       {/* Middle section */}
//       <div className="flex items-center space-x-4">
//         <button className="bg-white rounded-sm px-5 py-1">Explore</button>
//         <input type="search" placeholder="Search..." className="bg-white rounded-sm py-1 px-2 w-64" />
//         <button className="p-2 text-white rounded-full shadow-sm hover:text-[#3066BE] hover:bg-white">
//           <AiFillAudio />
//         </button>
//       </div>

//       {/* Right side */}
//       <div className="flex items-center space-x-4">
//         <select className="text-white bg-transparent hover:bg-white hover:text-[#3066BE] p-1 rounded-sm">
//           <option>English</option>
//         </select>
//         <div className="relative">
//       <button
//         className="bg-white h-10 w-10 rounded-full flex items-center justify-center"
//         onClick={() => setDropdownOpen(!dropdownOpen)}
//       >
//         <img
//           className="rounded-full w-full h-full"
//           src="https://s3-alpha-sig.figma.com/img/027c/5c82/5bf85922c6965220c96ac141f0374b7b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X~jMNLPhTwEg23x12kPm3saAQ4znk3a1eLxlm62ToKbti~VXPDzKAK9H1IaOFljnhYufRQkSqVYxePrce5C6yVG~NjVOofq95utIOVECxELEMyyZVSrpjfkjXR8wil7cdNlrR6L7nZtjOW~cKpfd8XE6wA7tQrU0dY2wgRH8GfCP6LeFEUUwfFkxGdmiNA6PJemjKC77rRNC-deHkltKHRPMTDqecYH0ntWC4xiZzpxjRB8k6k5jYgYGTMJc9DsD3iTrYVuslU1qFcIMWLCWx2H7D-KvcmPxGCQBM22uunkqjm-E3yQTbjP0H2EwMDadBpsoDG-gD2Z2ne7IM8CJVw__"
//           alt="User"
//         />
//       </button>

//       {dropdownOpen && (
//         <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
//           <Link
//             to="/profile"
//             className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
//           >
//             Profile
//           </Link>
//           <Link to="/homewithoutlogin"><button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
//             Logout
//           </button></Link>
//         </div>
//       )}
//     </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


// import React, { useState } from "react";
// import { AiFillAudio } from "react-icons/ai";
// import { HiBars3 } from "react-icons/hi2";
// import { Link } from "react-router-dom";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div className="bg-[#3066BE] h-14 flex items-center justify-between px-4 relative">
//       {/* Left side */}
//       <div className="flex items-center space-x-4">
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           <HiBars3 className="size-6 text-white" />
//         </button>
//         <span className="text-white text-2xl font-semibold">Stemsy</span>
//       </div>

//       {/* Dropdown Menu */}
//       {menuOpen && (
//         <div className="absolute top-14 left-4 bg-white shadow-md rounded-md w-56 p-2 z-50">
//           <ul className="space-y-2">
//             {[
//               { name: "Home", path: "/homefirst" },
//               { name: "Courses", path: "/courses" },
//               { name: "Event", path: "/event" },
//               { name: "Whiteboard", path: "/whiteboard" },
//               { name: "Assessment", path: "/stemassessment" },
//               { name: "Library", path: "/library" },
//               { name: "Help", path: "/help" },
//               { name: "Setting", path: "/settings" },
//             ].map((item) => (
//               <li key={item.name} className="p-2 text-black hover:bg-[#3066BE] rounded-md cursor-pointer hover:text-white">
//                 <Link className="w-full" to={item.path}>
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <hr />
//           <Link to="/logout">
//             <button className="text-red-600 w-full text-left p-2 hover:bg-gray-100 rounded-md">
//               Logout
//             </button>
//           </Link>
//         </div>
//       )}

//       {/* Middle section */}
//       <div className="flex flex-wrap items-center space-x-4">
//         <button className="bg-white rounded-sm px-5 py-1">Explore</button>
//         <input
//           type="search"
//           placeholder="Search..."
//           className="bg-white rounded-sm py-1 px-2 w-full sm:w-64"
//         />
//         <button className="p-2 text-white rounded-full shadow-sm hover:text-[#3066BE] hover:bg-white">
//           <AiFillAudio />
//         </button>
//       </div>

//       {/* Right side */}
//       <div className="flex items-center space-x-4">
//         <select className="text-white bg-transparent hover:bg-white hover:text-[#3066BE] p-1 rounded-sm">
//           <option>English</option>
//         </select>
//         <div className="relative">
//           <button
//             className="bg-white h-10 w-10 rounded-full flex items-center justify-center"
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           >
//             <img
//               className="rounded-full w-full h-full"
//               src="https://s3-alpha-sig.figma.com/img/027c/5c82/5bf85922c6965220c96ac141f0374b7b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X~jMNLPhTwEg23x12kPm3saAQ4znk3a1eLxlm62ToKbti~VXPDzKAK9H1IaOFljnhYufRQkSqVYxePrce5C6yVG~NjVOofq95utIOVECxELEMyyZVSrpjfkjXR8wil7cdNlrR6L7nZtjOW~cKpfd8XE6wA7tQrU0dY2wgRH8GfCP6LeFEUUwfFkxGdmiNA6PJemjKC77rRNC-deHkltKHRPMTDqecYH0ntWC4xiZzpxjRB8k6k5jYgYGTMJc9DsD3iTrYVuslU1qFcIMWLCWx2H7D-KvcmPxGCQBM22uunkqjm-E3yQTbjP0H2EwMDadBpsoDG-gD2Z2ne7IM8CJVw__"
//               alt="User"
//             />
//           </button>

//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
//               <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
//                 Profile
//               </Link>
//               <Link to="/homewithoutlogin">
//                 <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
//                   Logout
//                 </button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { AiFillAudio } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-[#3066BE] h-14 flex items-center justify-between px-4 relative">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <HiBars3 className="size-6 text-white" />
        </button>
        <span className="text-white text-2xl font-semibold">Stemsy</span>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-4 bg-white shadow-md rounded-md w-56 p-2 z-50">
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
              <li
                key={item.name}
                className="p-2 text-black hover:bg-[#3066BE] rounded-md cursor-pointer hover:text-white"
              >
                <Link className="w-full" to={item.path}>
                  {item.name}
                </Link>
              </li>
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

      {/* Middle section */}
      <div className="hidden sm:flex flex-wrap items-center space-x-4">
        <button className="bg-white rounded-sm px-5 py-1">Explore</button>
        <input
          type="search"
          placeholder="Search..."
          className="bg-white rounded-sm py-1 px-2 w-32 sm:w-48 md:w-64"
        />
        <button className="p-2 text-white rounded-full shadow-sm hover:text-[#3066BE] hover:bg-white">
          <AiFillAudio />
        </button>
      </div>

      {/* Middle section visible on mobile */}
      <div className="flex sm:hidden items-center space-x-2">
        <input
          type="search"
          placeholder="Search..."
          className="bg-white rounded-sm py-1 px-2 w-28"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <select className="text-white bg-transparent hover:bg-white hover:text-[#3066BE] p-1 rounded-sm">
          <option>English</option>
        </select>
        <div className="relative">
          <button
            className="bg-white h-10 w-10 rounded-full flex items-center justify-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
  className="rounded-full w-full h-full object-cover object-center"
  src="https://s3-alpha-sig.figma.com/img/027c/5c82/5bf85922c6965220c96ac141f0374b7b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X~jMNLPhTwEg23x12kPm3saAQ4znk3a1eLxlm62ToKbti~VXPDzKAK9H1IaOFljnhYufRQkSqVYxePrce5C6yVG~NjVOofq95utIOVECxELEMyyZVSrpjfkjXR8wil7cdNlrR6L7nZtjOW~cKpfd8XE6wA7tQrU0dY2wgRH8GfCP6LeFEUUwfFkxGdmiNA6PJemjKC77rRNC-deHkltKHRPMTDqecYH0ntWC4xiZzpxjRB8k6k5jYgYGTMJc9DsD3iTrYVuslU1qFcIMWLCWx2H7D-KvcmPxGCQBM22uunkqjm-E3yQTbjP0H2EwMDadBpsoDG-gD2Z2ne7IM8CJVw__"
  alt="User"
/>

          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
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
    </div>
  );
}

export default Header;
