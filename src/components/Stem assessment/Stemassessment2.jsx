// import React from "react";
// import Header from "../Header";


// function Stemassessment2(){
// return(
//     <div>
//         <Header/>
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

//          <div className="h-150 w-250 mb-100 rounded-xl bg-[#3066BE] relative top-12 left-35">
//         {/* buttons div */}
//         <div className="space-x-5 relative left-10 top-7">
//             <button className="rounded-sm  shadow-sm mt-2 px-2 py-1 border border-white text-white  hover:bg-[#5183D5] hover:text-white">Maths</button>
//             <button className="rounded-sm shadow-sm mt-2 px-2 py-1 text-white border border-white  hover:bg-[#5183D5] hover:text-white">Science</button>

//             <button className="rounded-sm shadow-sm mt-2 px-2 py-1 text-white border border-white hover:bg-[#5183D5] hover:text-white">Artificial-Intelligence</button>

//         </div>
//         <div className="relative top-10 left-10 w-130">
//          <h1 className="text-4xl text-white h-30"><span className="text-[#FFCD5D] ">Create </span> and architecture model
//          <span className="text-[#FFCD5D] "> of </span>a Library</h1>
//           </div>
//           <div className="space-x-5 relative left-10 top-7">
//             <button className="rounded-sm  shadow-sm mt-2 px-2 py-1 border border-white text-white  hover:bg-white hover:text-[#5183D5] ">New Challenge</button>
//             <button className="rounded-sm shadow-sm mt-2 px-2 py-1 text-white border border-white  hover:bg-white hover:text-[#5183D5] ">Save Challenge</button>
//             </div>
//             <div className="relative top-25 left-10">
//             <h1 className="text-white text-2xl">About Assessment</h1>
//             <p className="text-white w-150 pt-10 " >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//           </div>
        
//           </div>
          
//     </div>
// )
// }
// export default Stemassessment2

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
