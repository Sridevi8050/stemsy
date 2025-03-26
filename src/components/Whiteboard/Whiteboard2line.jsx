import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx"

function Whiteboard2line(){
    return(
        <div>
<div className="flex items-center justify-between p-4 bg-white shadow-md">
 
  <div className="flex items-center gap-4">
    <button className="text-xl"><FaArrowLeft /></button>
    <div>
      <h1 className="text-lg font-semibold">Developing Kids Website from Scratch</h1>
      <h6 className="text-sm text-gray-500">Module 3</h6>
    </div>
  </div>

  
  <div className="flex items-center gap-3">
    <button className="p-2 bg-[#4774D5] text-white rounded">Share</button>
    <button className="p-2 bg-red-500 text-white rounded"><RxCross1 /></button>
  </div>

    </div>
        </div>
    )
}

export default Whiteboard2line