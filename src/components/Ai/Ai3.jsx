
import React from "react";
import Header from "../Header";
import Aidropdown from "./Aidropdown";
import { FaMicrophone } from "react-icons/fa";
import Ellipse from "../../assets/Ellipse.png"
import Aiimg7 from "../../assets/aiimg7.png"
import Aiimg8 from "../../assets/aiimg8.png"
import Aiimg9 from "../../assets/aiimg9.png"
function Ai3() {
  return (
    <div className="min-h-screen">
      <Header />
      <div >
        <div className="">
          <img src={Ellipse} className="h-[170px] text-[#3FA60040] w-full mt-[-15px]"/>
          <div className="z-50 relative bottom-35 ">
          <div className="flex flex-row justify-center items-center">
          <img
          className="h-10 w-10 md:h-14 md:w-14 md:mr-4"
          src="https://s3-alpha-sig.figma.com/img/2511/4533/1d374e9aa69897432e7c183fa842811c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NrRYZffndFUFhmqIr88ZdxyFIco-7Xrx6F9VOvXT4u~VlqVjDsB~~irN0Z0-NH9jTEtsl8bm47tch9HPqV50n3U66IaF4Ks7JTQwmn8SaBiB400yOUqt6NQUoTryCtZogIQNkQZ97RHLQ08Wf332sCfQQt09Ni9gnG4jM-L00WXHq1SR~vs3VNeC4O5QL8kZ5HQBnO2n9KnHr-p~40GM0oVd4MbPTlzj5wms7WUq5q2~~pN4X8dPA7Ox0JEbquX5A5bCf7a18PpbdluopWjOV-6NUW6XXFR0tWtpBa7Glzu3UubGSQjaENJ39QcVKskYuX1unfj0~C2ILAsUG1A-sA__"
          alt="AI Chatbot"
        />
        <span className="font-bold text-2xl md:text-3xl">AI Chatbot</span>
        </div>
        <br></br>
        <p className="text-center md:text-left flex justify-center items-center">
          "Always On, Always Helpful: Your AI Companion for Instant Answers and Assistance."
        </p>
          </div>
          </div>
     
      </div>
      <div className="flex justify-center gap-6 p-6">
        {[
          Aiimg7,
          Aiimg8,
          Aiimg9,
        ].map((src, index) => (
          <div key={index} className="h-70 w-60 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            <img className="w-full h-full object-cover" src={src} alt={`Chatbot ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center items-center space-x-10 mt-10 p-4">
        <Aidropdown className="mb-4" />
        <div className="flex items-center space-x-3 w-full max-w-md">
          <input
            className="px-4 py-2 w-full border rounded-md bg-[#3FA6000D] outline-none"
            placeholder="Type the message Here...."
          />
          <button className="p-2 rounded-md text-[#3066BE] bg-white border">
            <FaMicrophone />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ai3;
