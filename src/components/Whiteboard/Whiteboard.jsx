// import React from "react";
// import { Link } from "react-router-dom";
// import Header from "../Header";
// import Whiteboarditem from "./Whiteboarditem";

// const whiteboardData = [
//   {
//     image: "",
//     title: "Create New File",
//     link: "/imgwhiteboard1",
//   },
//   {
//     image: "https://s3-alpha-sig.figma.com/img/1104/64b6/a84e9d4c44fb2d6e5eb643d4d8da1196?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MnGdFESQ4c5GKRfstq8bXAl3dMNfXRXsD1HUx-9Zjt5EFCpKGVzNnS8m9nhR40y~L9tIE4Td4T0XNmoGxd0Y10RL03ndYZomwEGB3JtP99P97p7bGoc-W7KF-coqjU8nnN4Jt8-7350dRVWmEg93oIIsuRIE2MHGmockXhdrpiIz8wDbSuHIg0yK~FHmE8psVTzvNtoPi0Y~q~vPhCe2Id5sNCovh7UiBEVIN6Bx-t81X1QZ9izTdJWDtzO5UTx2hoQEG~jKicl78YqnRf32jT7GA5rLHHm3rofgglNUKXAV1b~hRMHRAUjuGcoJJRfuTqouI8SPeb9q49bt0-PkUA__",
//     title: "Developing Kids Website from Scratch",
//     link: "/imgwhiteboard2",
//   },
//   // Add more items as needed
// ];

// function Whiteboard() {
//   return (
//     <div>
//       <Header />
//       <div className="bg-amber-400 h-10 flex justify-center">
//         <span className="text-2xl">Whiteboard</span>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-100 h-full pl-40">
//         {whiteboardData.map((item, index) => (
//           <Link key={index} to={item.link}>
//             <Whiteboarditem image={item.image} title={item.title} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Whiteboard;
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Whiteboarditem from "./Whiteboarditem";

const whiteboardData = [
  {
    image: "",
    title: "Create New File",
    link: "/imgwhiteboard1",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/1104/64b6/a84e9d4c44fb2d6e5eb643d4d8da1196?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MnGdFESQ4c5GKRfstq8bXAl3dMNfXRXsD1HUx-9Zjt5EFCpKGVzNnS8m9nhR40y~L9tIE4Td4T0XNmoGxd0Y10RL03ndYZomwEGB3JtP99P97p7bGoc-W7KF-coqjU8nnN4Jt8-7350dRVWmEg93oIIsuRIE2MHGmockXhdrpiIz8wDbSuHIg0yK~FHmE8psVTzvNtoPi0Y~q~vPhCe2Id5sNCovh7UiBEVIN6Bx-t81X1QZ9izTdJWDtzO5UTx2hoQEG~jKicl78YqnRf32jT7GA5rLHHm3rofgglNUKXAV1b~hRMHRAUjuGcoJJRfuTqouI8SPeb9q49bt0-PkUA__",
    title: "Developing Kids Website from Scratch",
    link: "/imgwhiteboard2",
  },
];

function Whiteboard() {
  return (
    <div>
      <Header />

      {/* Whiteboard Title */}
      <div className="bg-amber-400 h-10 flex justify-center items-center">
        <span className="text-2xl">Whiteboard</span>
      </div>

      {/* Whiteboard Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-10 bg-gray-100">
        {whiteboardData.map((item, index) => (
          <Link key={index} to={item.link}>
            <Whiteboarditem image={item.image} title={item.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Whiteboard;
