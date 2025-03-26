
import React, { useState } from "react";
import Aidropdown from "./Aidropdown";
import { FaMicrophone } from "react-icons/fa";
import Aiimg1 from "../../assets/aiimg1.png";
import Aiimg2 from "../../assets/aiimg2.png";
import Aiimg3 from "../../assets/aiimg3.png";
import Aiimg4 from "../../assets/aiimg4.jpeg";
import Aiimg5 from "../../assets/aiimg5.jpeg";
import Aiimg6 from "../../assets/aiimg6.jpeg";
import Aiimg7 from "../../assets/aiimg7.png";
import Aiimg8 from "../../assets/aiimg8.jpeg";
import Aiimg9 from "../../assets/aiimg9.jpeg";
import Ellipse from "../../assets/Ellipse.png";
import Ellipse2 from "../../assets/Ellipse2.png";
import Ellipse3 from "../../assets/Ellipse3.png";
import Tutor from "../../assets/tutor.png";
import Header from "../Header"

function AISection() {
  const [selected, setSelected] = useState("AI chatbot");

  // Dynamic colors based on selection
  const styleMap = {
    "AI chatbot": { inputBg: "bg-[#E4EEFF]" },
    "Story telling": {  inputBg: "bg-[#5250B50D]" },
    "Tutor": {  inputBg: "bg-[#3FA6000D]" },
  };

  const contentMap = {
    "AI chatbot": {
      title: "AI Chatbot",
      description: "Always On, Always Helpful: Your AI Companion for Instant Answers and Assistance.",
      images: [Aiimg1, Aiimg2, Aiimg3],
      img1:[Ellipse],
      img: "https://s3-alpha-sig.figma.com/img/2511/4533/1d374e9aa69897432e7c183fa842811c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NrRYZffndFUFhmqIr88ZdxyFIco-7Xrx6F9VOvXT4u~VlqVjDsB~~irN0Z0-NH9jTEtsl8bm47tch9HPqV50n3U66IaF4Ks7JTQwmn8SaBiB400yOUqt6NQUoTryCtZogIQNkQZ97RHLQ08Wf332sCfQQt09Ni9gnG4jM-L00WXHq1SR~vs3VNeC4O5QL8kZ5HQBnO2n9KnHr-p~40GM0oVd4MbPTlzj5wms7WUq5q2~~pN4X8dPA7Ox0JEbquX5A5bCf7a18PpbdluopWjOV-6NUW6XXFR0tWtpBa7Glzu3UubGSQjaENJ39QcVKskYuX1unfj0~C2ILAsUG1A-sA__",
    },
    "Story telling": {
      title: "Story Telling",
      description: "Let the AI weave magical tales just for you.",
      images: [Aiimg4, Aiimg5, Aiimg6],
      img1:[Ellipse2],
      img: "https://s3-alpha-sig.figma.com/img/2511/4533/1d374e9aa69897432e7c183fa842811c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NrRYZffndFUFhmqIr88ZdxyFIco-7Xrx6F9VOvXT4u~VlqVjDsB~~irN0Z0-NH9jTEtsl8bm47tch9HPqV50n3U66IaF4Ks7JTQwmn8SaBiB400yOUqt6NQUoTryCtZogIQNkQZ97RHLQ08Wf332sCfQQt09Ni9gnG4jM-L00WXHq1SR~vs3VNeC4O5QL8kZ5HQBnO2n9KnHr-p~40GM0oVd4MbPTlzj5wms7WUq5q2~~pN4X8dPA7Ox0JEbquX5A5bCf7a18PpbdluopWjOV-6NUW6XXFR0tWtpBa7Glzu3UubGSQjaENJ39QcVKskYuX1unfj0~C2ILAsUG1A-sA__",
    },
    Tutor: {
      title: "Tutor",
      description: "Your Personal AI Tutor, simplifying complex topics.",
      images: [Aiimg7, Aiimg8, Aiimg9],
      img1:[Ellipse3],
      img: Tutor,
    },
  };

  const content = contentMap[selected];
  const colors = styleMap[selected];

  return (
    <div>
       <Header/>
      {/* Top Section */}
      <div>
        <img src={content.img1} className="h-[220px] w-full mt-[-20px]" />
        <div className="z-50 relative bottom-35 ">
          <div className="flex flex-row justify-center items-center">
            <img className="h-10 w-10 md:h-14 md:w-14 md:mr-4" src={content.img} alt={content.title} />
            <span className="font-bold text-2xl md:text-3xl">{content.title}</span>
          </div>
          <br />
          <p className="text-center md:text-left flex justify-center items-center">
            "{content.description}"
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="flex justify-center gap-6 px-6 ">
        {content.images.map((src, index) => (
          <div
            key={index}
            className="h-70 w-60 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <img className="w-full h-full object-cover" src={src} alt={`${content.title} ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Dropdown + Input */}
      <div className="flex flex-row justify-center items-center space-x-10 mt-10 p-4">
        <Aidropdown onSelect={setSelected} />
        <div className="flex items-center space-x-3 w-full max-w-md">
          <input
            className={`px-4 py-2 w-full border rounded-md outline-none ${colors.inputBg}`}
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

export default AISection;
