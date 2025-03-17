import React from "react";
import { RiAddBoxFill } from "react-icons/ri";

function Whiteboarditem ({ image, title }){
    return (
        <div>
        

      <div className="bg-white shadow-lg rounded-lg p-4 w-64 flex flex-col items-center hover:shadow-xl transition">
        {image ? (
          <img src={image} className="w-full h-32 object-cover rounded-md" />
        ) : (
          <RiAddBoxFill className="text-gray-500 h-32 text-6xl" /> // Large + icon if no image
        )}
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
      </div>
    </div>

      
  
)
}
export default Whiteboarditem


{/* <img src={image} alt={title} className="w-full h-32 object-cover rounded-md" />
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <p className="text-sm text-gray-500 text-center mt-1">{description}</p> */}