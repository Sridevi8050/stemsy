import React from "react";
import Header from "../Header";

import FilterDropdown from "../FilterDropdown";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi";
import {Link} from "react-router-dom"


function Course(){
    return(
<div>
    <Header/>
    <div className="bg-amber-400 h-10 flex justify-center">
        <span className="text-2xl">Course</span>
        
    </div>
    <div className="h-15 shadow-sm flex align-middle justify-center">
        <div className="h-10 flex justify-center space-x-10">
        <button className="rounded-sm mt-2 px-2 py-1 text-blue-600 border border-blue-600 shadow-blue-600 hover:bg-blue-600 hover:text-white">
  Information-Technology
</button>
            <button className="rounded-sm mt-2 px-2 py-1 text-blue-600 border border-blue-600 shadow-blue-600 hover:bg-blue-600 hover:text-white">Maths</button>
            <button className="rounded-sm mt-2 px-2 py-1 text-blue-600 border border-blue-600 shadow-blue-600 hover:bg-blue-600 hover:text-white">Science</button>
            <button className="rounded-sm mt-2 px-2 py-1 text-blue-600 border border-blue-600 shadow-blue-600 hover:bg-blue-600 hover:text-white">Artificial-Intelligence</button>
        </div>
        </div>
        <div className="h-15 shadow-sm flex align-middle justify-center">
         <div className="h-10 flex justify-center space-x-10">
          <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">WebDevelopment</button>
          <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">Java</button>
          <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">C++</button>
          <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">Design</button>
          <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">Python</button>
          <button className="px-2 mt-2 opacity-40 hover:text-lg hover:opacity-85  hover:underline">Datascience</button>
          <div className="mt-2 inline">
          <FilterDropdown  />
          </div>
        </div>
        </div>
        <div className=" grid grid-cols-3 pl-10 pt-10 gap-0">
        <Link to="/aboutcourse">  <div className=" bg-white h-75 w-65 shadow-sm">
                       <img className="rounded-lg  w-60 h-40 place-self-center pt-5" src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dwk2nGxXBnatB12kvFPbN9lGYsIDOH49qxka3gAypciFUsOOXhXcsb3TAn2syCv9Ze86b7Ev1LILk7jnW6xnw7MLifiQBHL9d0ZyPbZ2GcW1c6zJc6IZTtHYsZCWLr3yK3mbrgChI9jpIcCEgRYuqmR8ducnVcxloGo7tSYu5SzloZB1sExo~bzZeaAsJHawiaRaqHZzH0vOWfZntIkQ9QUMXCPYJ7pVC95K3GdV7wgl8fl0~d91cufMK3X2aRpQPm3lAAjQIbGM5IFhEgqcps7~Ie~BAB9pq7p8hBr00YXu~vVOf4GjdU54U9o6WYlRvY3bmWkWerF9sHrl2mktQA__"></img>
                       <div className="pl-3">
                       <h1>Developing kids website from scratch</h1>
                       <p className=""><span className="opacity-40">Course by:</span>Ravikanth Ratore</p>
                      
                      <div className="flex align-middle justify-between pt-3">
                      <ul className="flex align-middle justify-between space-x-20">
                      <li><HiOutlineClock className="inline  text-blue-600"/><span>7 hrs</span></li>
                       <li><CiCalendar className="inline  text-blue-600"/> <span>modules</span></li>
                       
                       </ul>
                      
                       </div> 
                       </div>
                         
                       </div>
                       </Link> 
                      
                      <div className=" bg-white h-75 w-65 shadow-sm">
                       <img className="rounded-sm  w-60 h-40 place-self-center pt-5" src="https://s3-alpha-sig.figma.com/img/6e49/c50d/3d7d595e7200861bb9e48026c6716f3c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MBHCt3saznCBH-HMT8KDeFDbc-zvTOMwLiKy9p7M6ZBBxAhBy58~unVOkBaKghXSdsTy8xaArKirDhjW1FhmVzMCMDowiPDDXv00csTFdwhYyj~Lxro9IyIK3wrTKJGBRmMeHX7vzAfIXDGnvBMpDbd-mZBXvYCZpwkv5JV7yypsjwA5xCkeYbv2FRuFD013QuuPnbH0-5n4kgS6DdtybfGxnUy4vrNmhWPTwJhBM09FPYy1eiGJ7uTvxhcNA9~GgJp0sA2sdUVoGf8juJ9b6nPQN1Sk6Q3Y3xYUY0VHv5vt7~fwCqyEdj~Uw03IGEDVPIcQx-xboxLQ0MuUB6dzfA__"></img>
                      <div className="pl-3">
                       <h1>Developing kids website from scratch</h1>
                       <p className=""><span className="opacity-40">Course by:</span>Ravikanth Ratore</p></div>
                       <div className="flex align-middle justify-between pt-3">
                      <ul className="flex align-middle justify-between space-x-20 pl-3">
                      <li><HiOutlineClock className="inline text-blue-600"/><span>7 hrs</span></li>
                       <li><CiCalendar className="inline  text-blue-600"/> <span>modules</span></li>
                       
                       </ul>
                      
                       </div> 
                       </div>
                      <div className="bg-white h-75 w-65 shadow-sm">
                       <img className="rounded-sm  w-60 h-40 place-self-center pt-5" src="https://s3-alpha-sig.figma.com/img/c269/fb99/73dd2f60946ff2cdba3d15894cfed467?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XODALYqRyuUNcc~XLUSBeGs1rDmYLF7Hb2K~Uk3f6TFiO-5Cu9km0g0SLJ8AXbkwW~hKFVBMSn3pQo8S1uXHclyG7bJ6rvsnTI3n8SQonI7WqL3OQ2vZvNi0Sq69vVyTILkri9Vvd~BRXBf9tWbY3NLaZmaZ6e0~sRlmcg32bIOVbKxoKSxpwaUWdSg19m-TSl7QzesiJxpyhipdnQ1yHVXo3IL4EUWPofRneCwnDC1fdCDYCDsTaGoWSOrSP54yHBQHaMT2Ts-m31BruyT5C74rLjvowFFNdyccTTmmI3xiOPUVWgf8sUP2inQkCo-Wf0dAp6ppL83vWnmI~sTDuw__"></img>
                       <div className="pl-3">
                       <h1>Developing kids website from scratch</h1>
                       <p className=""><span className="opacity-40">Course by:</span>Ravikanth Ratore</p></div>
                       <div className="flex align-middle justify-between pt-3">
                      <ul className="flex align-middle justify-between space-x-20 pl-3">
                      <li><HiOutlineClock className="inline  text-blue-600"/><span>7 hrs</span></li>
                       <li><CiCalendar className="inline  text-blue-600"/> <span>modules</span></li>
                       
                       </ul>
                      
                       </div> 
                       </div>
               </div>
               <div className=" grid grid-cols-3 pl-10 pt-10 gap-0">
                      <div className=" bg-white h-75 w-65 shadow-sm">
                       <img className="rounded-lg  w-60 h-40 place-self-center pt-5" src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dwk2nGxXBnatB12kvFPbN9lGYsIDOH49qxka3gAypciFUsOOXhXcsb3TAn2syCv9Ze86b7Ev1LILk7jnW6xnw7MLifiQBHL9d0ZyPbZ2GcW1c6zJc6IZTtHYsZCWLr3yK3mbrgChI9jpIcCEgRYuqmR8ducnVcxloGo7tSYu5SzloZB1sExo~bzZeaAsJHawiaRaqHZzH0vOWfZntIkQ9QUMXCPYJ7pVC95K3GdV7wgl8fl0~d91cufMK3X2aRpQPm3lAAjQIbGM5IFhEgqcps7~Ie~BAB9pq7p8hBr00YXu~vVOf4GjdU54U9o6WYlRvY3bmWkWerF9sHrl2mktQA__"></img>
                       <div className="pl-3">
                       <h1>Developing kids website from scratch</h1>
                       <p className=""><span className="opacity-40">Course by:</span>Ravikanth Ratore</p>
                      
                      <div className="flex align-middle justify-between pt-3">
                      <ul className="flex align-middle justify-between space-x-20">
                      <li><HiOutlineClock className="inline  text-blue-600"/><span>7 hrs</span></li>
                       <li><CiCalendar className="inline  text-blue-600"/> <span>modules</span></li>
                       
                       </ul>
                      
                       </div> 
                       </div>
                         
                       </div>
                      
                      <div className=" bg-white h-75 w-65 shadow-sm">
                       <img className="rounded-sm  w-60 h-40 place-self-center pt-5" src="https://s3-alpha-sig.figma.com/img/6e49/c50d/3d7d595e7200861bb9e48026c6716f3c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MBHCt3saznCBH-HMT8KDeFDbc-zvTOMwLiKy9p7M6ZBBxAhBy58~unVOkBaKghXSdsTy8xaArKirDhjW1FhmVzMCMDowiPDDXv00csTFdwhYyj~Lxro9IyIK3wrTKJGBRmMeHX7vzAfIXDGnvBMpDbd-mZBXvYCZpwkv5JV7yypsjwA5xCkeYbv2FRuFD013QuuPnbH0-5n4kgS6DdtybfGxnUy4vrNmhWPTwJhBM09FPYy1eiGJ7uTvxhcNA9~GgJp0sA2sdUVoGf8juJ9b6nPQN1Sk6Q3Y3xYUY0VHv5vt7~fwCqyEdj~Uw03IGEDVPIcQx-xboxLQ0MuUB6dzfA__"></img>
                      <div className="pl-3">
                       <h1>Developing kids website from scratch</h1>
                       <p className=""><span className="opacity-40">Course by:</span>Ravikanth Ratore</p></div>
                       <div className="flex align-middle justify-between pt-3">
                      <ul className="flex align-middle justify-between space-x-20 pl-3">
                      <li><HiOutlineClock className="inline text-blue-600"/><span>7 hrs</span></li>
                       <li><CiCalendar className="inline  text-blue-600"/> <span>modules</span></li>
                       
                       </ul>
                      
                       </div> 
                       </div>
                      <div className="bg-white h-75 w-65 shadow-sm">
                       <img className="rounded-sm  w-60 h-40 place-self-center pt-5" src="https://s3-alpha-sig.figma.com/img/c269/fb99/73dd2f60946ff2cdba3d15894cfed467?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XODALYqRyuUNcc~XLUSBeGs1rDmYLF7Hb2K~Uk3f6TFiO-5Cu9km0g0SLJ8AXbkwW~hKFVBMSn3pQo8S1uXHclyG7bJ6rvsnTI3n8SQonI7WqL3OQ2vZvNi0Sq69vVyTILkri9Vvd~BRXBf9tWbY3NLaZmaZ6e0~sRlmcg32bIOVbKxoKSxpwaUWdSg19m-TSl7QzesiJxpyhipdnQ1yHVXo3IL4EUWPofRneCwnDC1fdCDYCDsTaGoWSOrSP54yHBQHaMT2Ts-m31BruyT5C74rLjvowFFNdyccTTmmI3xiOPUVWgf8sUP2inQkCo-Wf0dAp6ppL83vWnmI~sTDuw__"></img>
                       <div className="pl-3">
                       <h1>Developing kids website from scratch</h1>
                       <p className=""><span className="opacity-40">Course by:</span>Ravikanth Ratore</p></div>
                       <div className="flex align-middle justify-between pt-3">
                      <ul className="flex align-middle justify-between space-x-20 pl-3">
                      <li><HiOutlineClock className="inline  text-blue-600"/><span>7 hrs</span></li>
                       <li><CiCalendar className="inline  text-blue-600"/> <span>modules</span></li>
                       
                       </ul>
                      
                       </div> 
                       </div>
               </div>
               
            </div>


    )
}
export default Course
