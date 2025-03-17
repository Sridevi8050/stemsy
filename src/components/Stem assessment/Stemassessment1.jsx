// import React from "react";
// import Header from "../Header";
// import {Link} from "react-router-dom"

// function Stemassessment1(){
//     return(
// <div>
// <Header/>
//         <div className="bg-amber-400 h-10 flex justify-center">
//                 <span className="text-2xl">STEM Assessment</span>
//             </div>
//             <div className="h-15 shadow-sm flex align-middle justify-center">
//         <div className="h-10 flex justify-center space-x-10">
//         <button className="rounded-sm mt-2 px-2 py-1 text-[#3066BE] border border-[#3066BE] shadow-[#3066BE] hover:bg-[#3066BE] hover:text-white">
//   Information-Technology
// </button>
//             <button className="rounded-sm mt-2 px-2 py-1 text-[#3066BE] border border-[#3066BE] shadow-[#3066BE] hover:bg-[#3066BE] hover:text-white">Maths</button>
//             <button className="rounded-sm mt-2 px-2 py-1 text-[#3066BE] border border-[#3066BE] shadow-[#3066BE] hover:bg-[#3066BE] hover:text-white">Science</button>
//             <button className="rounded-sm mt-2 px-2 py-1 text-[#3066BE] border border-[#3066BE] shadow-[#3066BE] hover:bg-[#3066BE] hover:text-white">Artificial-Intelligence</button>
//             <button className="rounded-sm mt-2 px-2 py-1 text-[#3066BE] border border-[#3066BE] shadow-[#3066BE] hover:bg-[#3066BE] hover:text-white">Saved Challenges </button>
//         </div>
//         </div>
//     <div className="h-150 w-300 mb-100 rounded-xl shadow-sm bg-[#ffffff] relative top-12 left-10">
       
//       <Link to="/stemassessment2"> <div className="bg-[#3066BE] pt-2 h-75 rounded-lg relative top-5  w-140 pl-10">
//         <h1 className="text-4xl text-white h-25"><span className="text-[#FFCD5D] ">Invent </span>an automated tool
//         to grow food indoors</h1>
//             <h1 className="text-white text-2xl">About Assessment</h1>
//             <p className="text-white w-120 pt-1 " >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//           </div></Link> 
        
//           <div className="bg-[#29A098] pt-2 h-75 rounded-lg relative bottom-70 left-150 w-140 pl-10">
//         <h1 className="text-4xl text-white h-25"><span className="text-[#FFCD5D] ">Invent </span>an automated tool
//         to grow food indoors</h1>
//             <h1 className="text-white text-2xl">About Assessment</h1>
//             <p className="text-white w-120 pt-1 " >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//           </div>
//           <div className="bg-[#309CBE] pt-2 h-75 rounded-lg relative bottom-60  w-140 pl-10">
//         <h1 className="text-4xl text-white h-25"><span className="text-[#FFCD5D] ">Invent </span>an automated tool
//         to grow food indoors</h1>
//             <h1 className="text-white text-2xl">About Assessment</h1>
//             <p className="text-white w-120 pt-1" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//           </div>
//           <div className="bg-[#297CA0] py-2 h-75 rounded-lg relative bottom-135 left-150 w-140 pl-10">
//         <h1 className="text-4xl text-white h-25"><span className="text-[#FFCD5D] ">Invent </span>an automated tool
//         to grow food indoors</h1>
//             <h1 className="text-white text-2xl">About Assessment</h1>
//             <p className="text-white w-120 pt-1 " >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//           </div>
//     </div>
// </div>
//     )
// }
// export default Stemassessment1

import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

function Stemassessment1() {
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
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {/* Card 1 */}
        <Link to="/stemassessment2">
          <div className="bg-[#3066BE] text-white p-6 rounded-lg max-w-[600px] w-full">
            <h1 className="text-2xl md:text-3xl">
              <span className="text-[#FFCD5D]">Invent </span>an automated tool
              to grow food indoors
            </h1>
            <h2 className="text-xl mt-4">About Assessment</h2>
            <p className="mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <div className="bg-[#29A098] text-white p-6 rounded-lg max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl">
            <span className="text-[#FFCD5D]">Invent </span>an automated tool to
            grow food indoors
          </h1>
          <h2 className="text-xl mt-4">About Assessment</h2>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#309CBE] text-white p-6 rounded-lg max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl">
            <span className="text-[#FFCD5D]">Invent </span>an automated tool to
            grow food indoors
          </h1>
          <h2 className="text-xl mt-4">About Assessment</h2>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#297CA0] text-white p-6 rounded-lg max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl">
            <span className="text-[#FFCD5D]">Invent </span>an automated tool to
            grow food indoors
          </h1>
          <h2 className="text-xl mt-4">About Assessment</h2>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stemassessment1;
