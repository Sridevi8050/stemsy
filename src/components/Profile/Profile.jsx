// import React from "react";
// import Header from "../Header";
// import { AiOutlineBook } from "react-icons/ai";
// import { PiCertificate } from "react-icons/pi";
// import { LiaNotesMedicalSolid } from "react-icons/lia";
// import { RxPencil1 } from "react-icons/rx";

// function Profile(){
//     const data = [
//         { rank: 1, name: 'kriti Das', course: 6, hours: 240, badge: 'gold' },
//         { rank: 2, name: 'Aditya Pawar', course: 5, hours: 210, badge: 'silver' },
//         { rank: 3, name: 'Raj Gupta', course: 4, hours: 190, badge: 'bronze' },
//         { rank: 9, name: 'You', course: 2, hours: 92, badge: null },
//       ];
    
//     return(
//     <div>
//             <Header />
//             <div className="bg-amber-400 h-10 flex justify-center">
//                 <span className="text-2xl">Profile</span>
//             </div>
//             <div className=" grid grid-cols-4 gap-2 w-250 relative top-10 place-self-center">
//                   <div className="shadow-sm h-60 rounded-lg col-span-4 ">
//                     <div className="h-30 bg-amber-400 ">
//                         <img className="h-35 w-35 rounded-full relative top-10 left-15 border border-black" src="https://s3-alpha-sig.figma.com/img/027c/5c82/5bf85922c6965220c96ac141f0374b7b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X~jMNLPhTwEg23x12kPm3saAQ4znk3a1eLxlm62ToKbti~VXPDzKAK9H1IaOFljnhYufRQkSqVYxePrce5C6yVG~NjVOofq95utIOVECxELEMyyZVSrpjfkjXR8wil7cdNlrR6L7nZtjOW~cKpfd8XE6wA7tQrU0dY2wgRH8GfCP6LeFEUUwfFkxGdmiNA6PJemjKC77rRNC-deHkltKHRPMTDqecYH0ntWC4xiZzpxjRB8k6k5jYgYGTMJc9DsD3iTrYVuslU1qFcIMWLCWx2H7D-KvcmPxGCQBM22uunkqjm-E3yQTbjP0H2EwMDadBpsoDG-gD2Z2ne7IM8CJVw__"></img>
//                         <RxPencil1 className="text-5xl relative left-220 bottom-28 bg-white rounded-full p-3"/>
//                         <div className=" h-15 w-70 relative left-15 bottom-3">
//                             <h1>Amrit Shiksha Vidyalaya</h1>
//                             <p className="text-xs">ID-ASV215487963<br></br>
//                             Email - amritshiksha@gmail.com</p>
//                         </div>
//                         <div className="h-10 border-l border-gray-500 relative bottom-16 left-70"></div>
//                         <div className="relative left-80 bottom-39 w-130">
//                             <h1 className="font-bold">About Us</h1>
//                             <p >At Amrit Siksha Vidhyalaya, we foster curiosity and excellence in a supportive environment, empowering students to become confident, compassionate global citizens.</p>
//                              <button className="bg-[#3066BE] py-2 px-3 rounded-lg text-white relative bottom-20 left-125">Share Profile</button>
//                         </div>
//                     </div>
//                   </div>
//                   <div className="shadow-sm h-60 rounded-lg col-span-2 flex space-x-5 ">
//                     <h1 className="text-2xl font-bold relative top-8 left-50">Overview</h1>
//                       <div className="bg-[#EBF2FF] h-30 w-40 relative top-20 right-25 rounded-lg" >
//                             <div className="w-full h-15 bg-[#C6DAFF] rounded-lg flex place-items-center pl-3">
//                             <AiOutlineBook  className="text-2xl"/>
//                             <span>Courses</span>
//                             </div>
//                             <div className="flex items-center justify-center space-x-4">
//                                 <div className="text-center">
//                                    <h1>3</h1>
//                                    <p className="text-xs">completed</p>
//                                 </div> 
//                                     <div className="h-10 border-l border-gray-500"></div>
//                                 <div className="text-center">
//                                     <h1>2</h1>
//                                     <p className="text-xs">ongoing</p>
//                                 </div>
//                             </div>
//                       </div>
//                       <div className="bg-[#EBF2FF] h-30 w-40 relative top-20 right-25 rounded-lg">
//                            <div className="w-full h-15 bg-[#C6DAFF] rounded-lg flex place-items-center pl-1">
//                            <PiCertificate className="text-2xl" />
//                             <span>Certificates</span>
//                             </div>
//                             <div className="flex items-center justify-center space-x-4">
//                                 <div className="text-center">
//                                    <h1>3</h1>
//                                    <p className="text-xs">completed</p>
//                                 </div> 
//                                     <div className="h-10 border-l border-gray-500"></div>
//                                 <div className="text-center">
//                                     <h1>2</h1>
//                                     <p className="text-xs">ongoing</p>
//                                 </div>
//                             </div>
//                       </div>
//                       <div className="bg-[#EBF2FF] h-30 w-40 relative top-20 right-25 rounded-lg">
//                             <div className="w-full h-15 bg-[#C6DAFF] rounded-lg flex place-items-center pl-3">
//                             <LiaNotesMedicalSolid className="text-2xl"/>
//                             <span>Projects</span>
//                             </div>
//                             <div className="flex items-center justify-center space-x-4">
//                                 <div className="text-center">
//                                    <h1>3</h1>
//                                    <p className="text-xs">completed</p>
//                                 </div> 
//                                     <div className="h-10 border-l border-gray-500"></div>
//                                 <div className="text-center">
//                                     <h1>2</h1>
//                                     <p className="text-xs">ongoing</p>
//                                 </div>
//                             </div>
//                       </div>
//                   </div>
//                   <div className="shadow-sm rounded-lg col-span-2 h-100">
//                      <div className="p-4">
//                                  <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
//                                  <table className="w-full border-none">
//                                   <thead className="border-none">
//                                     <tr className="bg-gray-100">
//                                     <th className="border p-2 text-left">Rank</th>
//                                     <th className="border p-2 text-left">Name</th>
//                                     <th className="border p-2 text-left">Course</th>
//                                     <th className="border p-2 text-left">Hours</th>
//                                     <th className="border p-2 text-left">Badge</th>
//                                     </tr>
//                                    </thead>
//                                 <tbody>
//                                   {data.map((item) => (
//                                      <tr key={item.rank}>
//                                         <td className="border p-2">{item.rank}</td>
//                                         <td className="border p-2">{item.name}</td>
//                                         <td className="border p-2">{item.course}</td>
//                                         <td className="border p-2">{item.hours}</td>
//                                         <td className="border p-2 flex items-center justify-center">
//                                         {item.badge === 'gold' && (
//                                         <div className="rounded-full w-8 h-8 bg-yellow-500"></div>
//                                            )}
//                                          {item.badge === 'silver' && (
//                                          <div className="rounded-full w-8 h-8 bg-gray-400"></div>
//                                            )}
//                                          {item.badge === 'bronze' && (
//                                          <div className="rounded-full w-8 h-8 bg-orange-700"></div>
//                                            )}
//                                        </td>
//                                       </tr>
//                                      ))}
//                                </tbody>
//                               </table>
//                                </div>
//                                 <div className=" bg-[#EBF2FF] w-full h-23 relative  rounded-sm">
                         
//                                 </div>
//                               </div>
//                   <div className="shadow-sm h-80 rounded-lg col-span-2 relative bottom-38">
//                          <div className="bg-white rounded-lg shadow p-4">
//                                <h2 className="text-lg font-semibold mb-4">Ongoing Courses</h2>
//                                <div className="flex flex-col space-y-4">
//                                      <div className="flex items-center">
//                                        <div className="w-1/4">
//                                          <div className="bg-gray-200 h-full w-32 rounded">
//                                             <img src="https://s3-alpha-sig.figma.com/img/c269/fb99/73dd2f60946ff2cdba3d15894cfed467?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AC1ctdoUt0PvEHPftVjWog-POIfOyul87lqjwqMPvVl-mnGclJ5ddnfV0h3vCNzIaYxHV778xfSDAHq-tMsLyRZD30MOXpVYCRVz3vgOQMD54L39s9We3-hSpBOvFrB2U9L89pdq-cqrK8gWPPTT7UzzucoeEwfPrvD2XCTClP3Ed3GGPoQ0SqUA2LGJYlBX6W7sgxk3MryqEExWM3SFtlgQDd85EtowwP-IEcTQAH1ljZYwtL6iUHSrUQZyusSghRaWhjuTWITPGNuepNx9Hy-yQzg-O9p9kLUZ7px06-ixrYxmxonXLEkbineWZtBuZL6khluY0VF022ZjiFlkgw__"></img>
//                                         </div> 
//                                        </div>
//                                         <div className="w-3/4 pl-4">
//                                             <h3 className="font-medium">Developing Kids Website from Scratch</h3>
//                                             <p className="text-sm text-gray-500">Course By: Ravikant Rathore</p>
//                                               <div className="flex items-center mt-2">
//                                                 <div className="bg-gray-200 h-4 w-3/4 rounded-full mr-2">
//                                                     <div className="bg-[#FFC300] h-4 rounded-full w-[45%]" /> 
//                                                 </div>
//                                                  <span className="text-sm">45%</span>
//                                                  <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md text-sm">Resume </button>
//                                               </div>
//                                         </div>
//                                     </div>

//                               <div className="flex items-center">
//                                    <div className="w-1/4">
//                                      <div className="bg-gray-200 h-full w-32 rounded">
//                                         <img src="https://s3-alpha-sig.figma.com/img/6e49/c50d/3d7d595e7200861bb9e48026c6716f3c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fRYup6fKFvQxaNcB27vIZOfa2m~X0tMdSTbVHVIU3WlNBT~tLRnhmi3P58HGD9JhDON7Ko6vkeMxmvR5GHSDrv0TL91RyZ5I2Yr-MShpic~SDFFXN5wCchArnXH0C~iQygH1KtI0kqEFmvCyzL4cV8p8oS-KTq99VZydcf3psegogzFyhA7RcJkKoD0-BNGjcLZdLIaoDywgis-yQQDuFQzwejm4G4hkwurCveVbYlqt44lRiLwQUgcnDW9hAMc325BaMXylRnFQcVdR4pTl8mk87EEdJnDQrLm5GQZKZNYvPiHC8qYd~zKmbCFwu4Z9~PewDIKl~8FecigUlEVwtQ__"></img>
//                                      </div> 
//                                    </div>
//                                    <div className="w-3/4 pl-4">
//                                      <h3 className="font-medium">Developing Kids Website from Scratch</h3>
//                                      <p className="text-sm text-gray-500">Course By: Ravikant Rathore</p>
//                                     <div className="flex items-center mt-2">
//                                        <div className="bg-gray-200 h-4 w-3/4 rounded-full mr-2">
//                                            <div className="bg-[#FFC300] h-4 rounded-full w-[45%]" /> 
//                                         </div>
//                                       <span className="text-sm">45%</span>
//                                     <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md text-sm">Resume</button>
//                                     </div>
//                                     </div>
//                                 </div>
//                                 <div className="text-right mt-4 place-self-center">
//                                    <button className="bg-gray-100 text-white px-4 py-1 rounded-sm"><a href="#" className="text-blue-500 text-sm">See all</a></button>
//                                 </div>
//                            </div>
//                          </div>
//                         </div>
//                    <div className="bg-[#EEEEEE] h-43 rounded-lg col-span-2 "></div>
//                    </div>
    
    
    
    
//     </div>
//     )
// }
// export default Profile


import React from "react";
import Header from "../Header";
import { AiOutlineBook } from "react-icons/ai";
import { PiCertificate } from "react-icons/pi";
import { LiaNotesMedicalSolid } from "react-icons/lia";


function Profile() {
  const data = [
    { rank: 1, name: "kriti Das", course: 6, hours: 240, badge: "gold" },
    { rank: 2, name: "Aditya Pawar", course: 5, hours: 210, badge: "silver" },
    { rank: 3, name: "Raj Gupta", course: 4, hours: 190, badge: "bronze" },
    { rank: 9, name: "You", course: 2, hours: 92, badge: null },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* Profile Header */}
      <div className="bg-[#FFCD5D] h-12 flex justify-center items-center text-xl font-semibold">
        Profile
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Profile Info */}
          <div className="shadow-lg rounded-lg bg-white col-span-4 p-6">
            <div className="bg-[#FFCD5D] rounded-lg p-6 flex flex-col md:flex-row items-center">
              <img
                className="h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-white object-cover"
                src="https://s3-alpha-sig.figma.com/img/027c/5c82/5bf85922c6965220c96ac141f0374b7b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X~jMNLPhTwEg23x12kPm3saAQ4znk3a1eLxlm62ToKbti~VXPDzKAK9H1IaOFljnhYufRQkSqVYxePrce5C6yVG~NjVOofq95utIOVECxELEMyyZVSrpjfkjXR8wil7cdNlrR6L7nZtjOW~cKpfd8XE6wA7tQrU0dY2wgRH8GfCP6LeFEUUwfFkxGdmiNA6PJemjKC77rRNC-deHkltKHRPMTDqecYH0ntWC4xiZzpxjRB8k6k5jYgYGTMJc9DsD3iTrYVuslU1qFcIMWLCWx2H7D-KvcmPxGCQBM22uunkqjm-E3yQTbjP0H2EwMDadBpsoDG-gD2Z2ne7IM8CJVw__"
                alt="Profile"
              />
             
              <div className="text-center md:text-left md:ml-6 mt-4 md:mt-0">
                <h1 className="text-lg font-semibold">Amrit Shiksha Vidyalaya</h1>
                <p className="text-sm text-gray-700">
                  ID-ASV215487963 <br />
                  Email - amritshiksha@gmail.com
                </p>
                
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="shadow-lg rounded-lg bg-white col-span-4 md:col-span-2 p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Overview Cards */}
              {[
                { title: "Courses", icon: <AiOutlineBook />, completed: 3, ongoing: 2 },
                { title: "Certificates", icon: <PiCertificate />, completed: 3, ongoing: 2 },
                { title: "Projects", icon: <LiaNotesMedicalSolid />, completed: 3, ongoing: 2 },
              ].map((item, index) => (
                <div key={index} className="bg-[#EBF2FF] rounded-lg p-4">
                  <div className="bg-[#C6DAFF] rounded-lg flex items-center p-2">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="text-center">
                      <h1 className="text-xl">{item.completed}</h1>
                      <p className="text-xs">Completed</p>
                    </div>
                    <div className="border-l border-gray-500"></div>
                    <div className="text-center">
                      <h1 className="text-xl">{item.ongoing}</h1>
                      <p className="text-xs">Ongoing</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="shadow-lg rounded-lg bg-white col-span-4 md:col-span-2 p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Leaderboard</h1>
            <table className="w-full border-none">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Rank</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Course</th>
                  <th className="p-2">Hours</th>
                  <th className="p-2">Badge</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.rank} className="text-center">
                    <td className="p-2">{item.rank}</td>
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">{item.course}</td>
                    <td className="p-2">{item.hours}</td>
                    <td className="p-2">
                      {item.badge && (
                        <div
                          className={`rounded-full w-6 h-6 ${
                            item.badge === "gold"
                              ? "bg-yellow-500"
                              : item.badge === "silver"
                              ? "bg-gray-400"
                              : "bg-orange-700"
                          }`}
                        ></div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Ongoing Courses */}
          <div className="shadow-lg rounded-lg bg-white col-span-4 md:col-span-2 p-6">
            <h2 className="text-lg font-semibold mb-4">Ongoing Courses</h2>
            <div className="space-y-4">
              {/* Courses */}
              {[1, 2].map((_, index) => (
                <div key={index} className="flex items-center">
                  <img className="w-24 h-24 rounded-md object-cover" src="https://s3-alpha-sig.figma.com/img/c269/fb99/73dd2f60946ff2cdba3d15894cfed467?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AC1ctdoUt0PvEHPftVjWog-POIfOyul87lqjwqMPvVl-mnGclJ5ddnfV0h3vCNzIaYxHV778xfSDAHq-tMsLyRZD30MOXpVYCRVz3vgOQMD54L39s9We3-hSpBOvFrB2U9L89pdq-cqrK8gWPPTT7UzzucoeEwfPrvD2XCTClP3Ed3GGPoQ0SqUA2LGJYlBX6W7sgxk3MryqEExWM3SFtlgQDd85EtowwP-IEcTQAH1ljZYwtL6iUHSrUQZyusSghRaWhjuTWITPGNuepNx9Hy-yQzg-O9p9kLUZ7px06-ixrYxmxonXLEkbineWZtBuZL6khluY0VF022ZjiFlkgw__" alt="Course" />
                  <div className="ml-4">
                    <h3 className="font-medium">Developing Kids Website</h3>
                    <p className="text-sm text-gray-500">By: Instructor</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
