
import React from "react";
import Header from "../Header";
import { AiOutlineBook } from "react-icons/ai";
import { PiCertificate } from "react-icons/pi";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import Profileimg from "../../assets/profileimage.png"
import Badges from "../../assets/badges.png"
import Profilestreaks from "../../assets/profilestreaks.png"
import Ongoingcourseprofile from "../../assets/ongoingcourseprof.png"


function Profile() {
  const data = [
    { rank: 1, name: "kriti Das", course: 6, hours: 240, badge: "gold" },
    { rank: 2, name: "Aditya Pawar", course: 5, hours: 210, badge: "silver" },
    { rank: 3, name: "Raj Gupta", course: 4, hours: 190, badge: "bronze" },
    { rank: 9, name: "You", course: 2, hours: 92, badge: null },
  ];

  return (
    <div className="min-h-screen ">
      <Header />
      {/* Profile Header */}
      <div className="bg-[#FFCD5D] h-12 flex justify-center items-center text-xl font-semibold">
        Profile
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="gap-4">
          {/* Profile Info */}
          <div className=" rounded-lg bg-white col-span-4 p-6">
            <div>
              <img
                src={Profileimg}
                alt="Profile"
              />
             
            </div>
          </div>

          {/* Overview Section */}
          <div className="shadow-lg w-[700px] rounded-lg bg-white p-6 mt-1">
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

            <div className="shadow-lg rounded-lg bg-white w-[700px] h-[400px] col-span-4 md:col-span-2 p-6 mt-5">
            <img src={Ongoingcourseprofile} className="h-full w-full"></img>
          </div>
          
          <div className=" shadow-lg w-[500px] h-[300px] space-y-8 rounded-lg relative left-180 bottom-160 bg-white col-span-4 md:col-span-2 p-6">
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
            <div className="w-[500px] relative right-6 space-y-12 ">
            <img src={Badges} className=""></img>
            
            <img src={Profilestreaks}></img>
            </div>
          </div>  
           

         
        </div>
      </div>
    </div>
  );
}

export default Profile;
