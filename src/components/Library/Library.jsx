
import React from "react";
import Header from "../Header";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi";
import Yellowvideoline from "../../assets/yellowvideoline.png"
import Yellowcourses from "../../assets/yellowcourses.png"
function Library() {
    return (
        <div className="min-h-screen">
            <Header />
            
            {/* Library Header */}
            <div className="bg-amber-400 h-10 flex justify-center items-center">
                <span className="text-lg sm:text-2xl">Library</span>
            </div>
            
            {/* My Learning Section */}
            <div className="pt-10 px-6 sm:px-12">
                <h1 className="text-xl sm:text-3xl">My Learning</h1>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <button className="rounded-sm px-3 py-1 border border-blue-700 text-blue-500 hover:text-white hover:bg-blue-700">
                        In Process
                    </button>
                    <button className="rounded-sm px-3 py-1 border border-blue-700 text-blue-500 hover:text-white hover:bg-blue-700">
                        Completed
                    </button>
                </div>

                {/* Share Button */}
                <button className="mt-4 sm:mt-0 sm:absolute sm:right-12 sm:bottom-100 rounded-sm px-3 py-2 border border-blue-700 text-blue-500 hover:text-white hover:bg-blue-700">
                    Share Library
                </button>
            </div>

            {/* Course Cards */}
            <div className="flex justify-center gap-6 pt-10 px-6">
                {[1, 2].map((item, index) => (
                    <div key={index} className="bg-white shadow-lg p-6 flex flex-col rounded-lg w-full sm:w-[600px]">
                        
                        <div className="flex gap-11">
                        <div>
                         
                         <img src={Yellowvideoline} className="z-50 relative top-40"/>  
                        <img className="w-[250px] h-40 object-cover rounded-md" src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dwk2nGxXBnatB12kvFPbN9lGYsIDOH49qxka3gAypciFUsOOXhXcsb3TAn2syCv9Ze86b7Ev1LILk7jnW6xnw7MLifiQBHL9d0ZyPbZ2GcW1c6zJc6IZTtHYsZCWLr3yK3mbrgChI9jpIcCEgRYuqmR8ducnVcxloGo7tSYu5SzloZB1sExo~bzZeaAsJHawiaRaqHZzH0vOWfZntIkQ9QUMXCPYJ7pVC95K3GdV7wgl8fl0~d91cufMK3X2aRpQPm3lAAjQIbGM5IFhEgqcps7~Ie~BAB9pq7p8hBr00YXu~vVOf4GjdU54U9o6WYlRvY3bmWkWerF9sHrl2mktQA__" alt="Course Thumbnail" />
                        </div>
                        <div>
                        <h1 className="text-lg font-semibold mt-4">Developing Kids Website from Scratch</h1>
                        
                        {/* Time & Modules */}
                        <div className="flex justify-between items-center pt-3 text-sm text-gray-700">
                            <span><HiOutlineClock className="inline text-blue-600" /> 7 hrs</span><span className="opacity-50">Remaining</span>
                            <span><CiCalendar className="inline text-blue-600" />4 Modules</span><span className="opacity-50" >Remaining</span>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex  gap-4 pt-4">
                            <button className="rounded-sm px-3 py-1 border border-[#DD4545] text-black hover:text-white hover:bg-[#3066BE]">
                                Go to Course
                            </button>
                            <button className="rounded-sm px-3 py-1 border border-[#DD4545] text-black hover:text-white hover:bg-[#3066BE]">
                                Remove from Progress
                            </button>
                        </div>
                    </div>
                    </div>
                    </div>
                ))}
            </div>

            {/* Created Playlist */}
            <div className="px-6 sm:px-12 pt-10">
                <h1 className="text-xl sm:text-3xl mb-4">Created Playlist</h1>
                
                {/* Playlist Grid */}
                <div className="flex gap-7 mb-10">
                    {[
                        {
                            title: "Basic Coding",
                            img: "https://s3-alpha-sig.figma.com/img/76d2/40e2/08010fe17e2caba0404fd9cc8d2819af?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dJRJahH5BbjpQ92kebr-GjuVmWKjN57U1~N68Rvx6Bxs18o6uoJY0CxlF5t2nwgAmykUicAeHdlNMT9r02c9hbIYtSwBKKtTOXMywnCr0pK0oP5KpzWrcmpyYk4Ygxth~Rj7Izsxr7kAeU-J6CB0BQl-M-3oW6PihSi6ha8hEegrF~2hxx14yv-9PtrJy~y8kJj9de--NuEhvg1QhWharSKzrjPc0z9v2QFpKAdsY-gbUSOVlWg--j1OAXbDKoMXiRzF40aJj9u8kku0hldxto19Ned7e8fZTpwtT~60TuMvd39xq5xPO55p0nTa9YsOukJzMjnUmzTdceT9SzFxmw__"
                        },
                        {
                            title: "Fundamental of Coding",
                            img: "https://s3-alpha-sig.figma.com/img/c269/fb99/73dd2f60946ff2cdba3d15894cfed467?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XODALYqRyuUNcc~XLUSBeGs1rDmYLF7Hb2K~Uk3f6TFiO-5Cu9km0g0SLJ8AXbkwW~hKFVBMSn3pQo8S1uXHclyG7bJ6rvsnTI3n8SQonI7WqL3OQ2vZvNi0Sq69vVyTILkri9Vvd~BRXBf9tWbY3NLaZmaZ6e0~sRlmcg32bIOVbKxoKSxpwaUWdSg19m-TSl7QzesiJxpyhipdnQ1yHVXo3IL4EUWPofRneCwnDC1fdCDYCDsTaGoWSOrSP54yHBQHaMT2Ts-m31BruyT5C74rLjvowFFNdyccTTmmI3xiOPUVWgf8sUP2inQkCo-Wf0dAp6ppL83vWnmI~sTDuw__"
                        }
                    ].map((playlist, index) => (
                        <div key={index} className="w-full sm:w-64">
                            <img src={Yellowcourses} className="z-50 relative top-35 left-30"/> 
                            <img src={playlist.img} alt={playlist.title} className="rounded-lg w-full object-cover" />
                            <p className="mt-2 text-lg font-semibold">{playlist.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Library;
