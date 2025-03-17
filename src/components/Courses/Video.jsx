
// import React from "react";
// import Header from "../Header";
// import { GoPlay } from "react-icons/go";


// function Video() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />
      
     
//       <div className="bg-amber-400 h-10"></div>

//       <div className="flex justify-center gap-8 p-8">
       
//         <div className="w-[350px]">
//           <h1 className="text-2xl mb-4">Lessons In This Class</h1>

//           {Array(4).fill(null).map((_, index) => (
//             <div key={index} className="bg-white shadow-md h-[40px] w-full rounded-sm flex items-center px-4 mb-3">
//               <GoPlay />
//               <div className="flex justify-between w-full px-4">
//                 <h1>Introduction</h1>
//                 <h2>7:34</h2>
//               </div>
//             </div>
//           ))}
//         </div>

        
//         <div className="w-[600px]">
//           <h1 className="text-lg font-semibold mb-2">Developing Kids Website from Scratch .. Introduction</h1>
//           <img
//             className="h-auto w-full rounded-lg shadow-lg"
//             src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dwk2nGxXBnatB12kvFPbN9lGYsIDOH49qxka3gAypciFUsOOXhXcsb3TAn2syCv9Ze86b7Ev1LILk7jnW6xnw7MLifiQBHL9d0ZyPbZ2GcW1c6zJc6IZTtHYsZCWLr3yK3mbrgChI9jpIcCEgRYuqmR8ducnVcxloGo7tSYu5SzloZB1sExo~bzZeaAsJHawiaRaqHZzH0vOWfZntIkQ9QUMXCPYJ7pVC95K3GdV7wgl8fl0~d91cufMK3X2aRpQPm3lAAjQIbGM5IFhEgqcps7~Ie~BAB9pq7p8hBr00YXu~vVOf4GjdU54U9o6WYlRvY3bmWkWerF9sHrl2mktQA__"
//             alt="Video Thumbnail"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Video;
import React from "react";
import Header from "../Header";
import { GoPlay } from "react-icons/go";

function Video() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="bg-amber-400 h-10"></div>

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-8 p-6 sm:p-8">
        
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
        <div className="w-full max-w-lg">
          <h1 className="text-lg sm:text-xl font-semibold mb-2 text-center lg:text-left">
            Developing Kids Website from Scratch .. Introduction
          </h1>
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMLeuz~RWy8arG9Evv9tB43CemXrFWsTcCYDjhmCT7oGXe2OX0KdO3gwPfcBNJCKaKKFX2f172ryEqK1NoiorVOUUKFBWCf4cQBpQHagg6dYpQhPUXVKKAln3PLQXtiytWbaeEMg-Q0s50-iF93ji7zrKp5oc230KP-QO5C3Umab78sWyqt4Z7mNvrEKT9k7Gn~fAR7SSFsg4FZfDTR8WhQR4J~Ud~Msmpta3OqJbB3JtH5d3nlbcmYBiVr04kyVCkfGnekY0ceCdX-6DXWIeemvkkQTYIy5uQ7byMMfHGBuxognVnJrw8qc54vnp1R~aHnRqloSID5SH2vm8QoHsA__"
            alt="Video Thumbnail"
          />
        </div>
      </div>
    </div>
  );
}

export default Video;
