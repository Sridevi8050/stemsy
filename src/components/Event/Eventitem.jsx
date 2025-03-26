import React from "react";
import {Link} from "react-router-dom"

 function Eventitem ({ date, month, title, author, time, image })  {
  return (
    <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-32 object-cover" />
      <div className="p-4 ">
        <div className="text-gray-600 text-sm w-10 pt-5">
          <span className="font-bold">{month}</span> {date}
        </div>
        <div className="w-45 relative left-15 bottom-25 pt-10">
        <h3 className="font-semibold text-lg ">{title}</h3>
        <p className="text-gray-500 text-sm ">By: {author}</p>
        <p className="text-gray-500 text-sm ">{time}</p>
        </div>
        <Link to="/event1"><button className=" w-full bg-[#3066BE] text-white py-2 rounded-md relative bottom-15">
          Register Now →
        </button></Link>
       
      </div>
    </div>
  );
};

export default Eventitem;