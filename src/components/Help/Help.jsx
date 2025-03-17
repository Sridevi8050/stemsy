// import React from "react";
// import Header from "./Header";
// import { CiFlag1 } from "react-icons/ci";
// import { PiCertificateLight } from "react-icons/pi";
// import { FiBook } from "react-icons/fi";

// function Help(){
    
//     return(
//     <div>
            
//             <Header/>
//             <div className="bg-amber-400 h-10 flex justify-center">
//                 <span className="text-2xl">Help</span>
//             </div> 
//             <div className="bg-[#EBF2FF] h-[471px] w-full">
//                  <h1 className="font-bold text-5xl relative left-90 top-10">Hello, How can we help you?</h1>
//                  <input type="text" placeholder="Search here" className="bg-[#FBFBFB] h-10 w-100 relative top-25 left-100 rounded-sm"/>
//                    <button className="bg-[#3066BE] text-white px-5 py-2 rounded-sm relative top-25 left-78">Search</button>
//                   <p className="relative top-30 left-100">or choose a category to quickly find the help you need</p>
//                  <div className=" h-35 w-150 relative top-40 left-45 flex align-middle justify-items-center place-content-center space-x-9">
//                     <div className="bg-white h-20 w-20 rounded-sm relative top-7 left-28">
//                     <CiFlag1 className="text-3xl bg-gray-200 relative top-1 left-6" />
//                       <h1 className="text-sm relative top-1 left-4">Getting Started</h1>
//                     </div>
//                     <div className="bg-white h-20 w-20 rounded-sm relative top-7 left-28">
//                     <PiCertificateLight className="text-3xl bg-gray-200 relative top-1 left-6"/>
//                     <h1 className="text-sm relative top-1 ">Certification</h1>
//                     </div>
//                     <div className="bg-white h-20 w-20 rounded-sm relative top-7 left-28">
//                     <FiBook className="text-3xl bg-gray-200 relative top-1 left-6"/>
//                     <h1 className="text-sm relative top-1 left-3">Tutorials</h1>
//                     </div>
//                  </div>
//             </div>
//             <div>
//                 <h1 className="text-3xl">Frequently Asked Question</h1>
//                 <div>
//                    <div>

//                    </div>
//                    <div>
                       
//                    </div>
//                 </div>
//             </div>
//     </div>
//     )
// }
// export default Help


// import React, { useState } from "react";
// import Header from "../Header";
// import { CiFlag1 } from "react-icons/ci";
// import { PiCertificateLight } from "react-icons/pi";
// import { FiBook } from "react-icons/fi";
// import { MdOutlineWifiCalling3 } from "react-icons/md";;
// import { MdOutlineEmail } from "react-icons/md";


// const faqs = [
//   {
//     question: "Process to get started on the website?",
//     answer: "To start, create an account and log in. Navigate through the dashboard to access features.",
//   },
//   {
//     question: "How to use the whiteboard?",
//     answer: "To access the whiteboard, go to the home screen and find the Whiteboard option on the left-hand side.",
//   },
//   {
//     question: "How to get notifications?",
//     answer: "Enable notifications in your account settings to receive updates.",
//   },
//   {
//     question: "How to navigate the settings?",
//     answer: "Go to the settings menu where you can manage your preferences and account details.",
//   },
//   {
//     question: "Process to get started on the website?",
//     answer: "To start, create an account and log in. Navigate through the dashboard to access features.",
//   },
//   {
//     question: "How to use the whiteboard?",
//     answer: "To access the whiteboard, go to the home screen and find the Whiteboard option on the left-hand side.",
//   },
//   {
//     question: "How to get notifications?",
//     answer: "Enable notifications in your account settings to receive updates.",
//   },
//   {
//     question: "How to navigate the settings?",
//     answer: "Go to the settings menu where you can manage your preferences and account details.",
//   },
// ];

// function Help() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="bg-amber-400 h-10 flex justify-center">
//         <span className="text-2xl">Help</span>
//       </div> 
//       <div className="bg-[#EBF2FF] h-[471px] w-full">
//         <h1 className="font-bold text-5xl relative left-90 top-10">
//           Hello, How can we help you?
//         </h1>
//         <input 
//           type="text" 
//           placeholder="Search here" 
//           className="bg-[#FBFBFB] h-10 w-100 relative top-25 left-120 rounded-sm"
//         />
//         <button className="bg-[#3066BE] text-white px-5 py-2 rounded-sm relative top-25 left-90">
//           Search
//         </button>
//         <p className="relative top-30 left-120">
//           or choose a category to quickly find the help you need
//         </p>
//         <div className="h-35 w-150 relative top-40 left-60 flex align-middle justify-items-center place-content-center space-x-9">
//           <div className="bg-white h-20 w-20 rounded-sm relative top-7 left-28">
//             <CiFlag1 className="text-3xl bg-gray-200 relative top-1 left-6" />
//             <h1 className="text-sm relative top-1 left-4">Getting Started</h1>
//           </div>
//           <div className="bg-white h-20 w-20 rounded-sm relative top-7 left-28">
//             <PiCertificateLight className="text-3xl bg-gray-200 relative top-1 left-6"/>
//             <h1 className="text-sm relative top-1">Certification</h1>
//           </div>
//           <div className="bg-white h-20 w-20 rounded-sm relative top-7 left-28">
//             <FiBook className="text-3xl bg-gray-200 relative top-1 left-6"/>
//             <h1 className="text-sm relative top-1 left-3">Tutorials</h1>
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="max-w-2xl mx-50 mt-10">
//         <h1 className="text-3xl font-bold mb-4 relative left-46">Frequently Asked Questions</h1>
//         <div className="space-y-2 space-x-7 w-100 grid grid-rows-2 grid-cols-2 gap-x-120">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border rounded-lg">
//               <button
//                 className="w-100 text-left p-3 flex justify-between items-center bg-gray-100"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <span>{faq.question}</span>
//                 <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
//               </button>
//               {openIndex === index && (
//                 <div className="p-3 bg-white border-t w-100">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-[#3066BE] h-[358px] w-[1000px] relative top-20 left-35 rounded-sm ">
        
//         <h1 className="text-2xl text-white place-self-center pt-10">You Still have a question?</h1>
//         <p className=" place-self-center  text-white pt-2">If you can’t find answer to your question. fill your query & submit it, or can alwqys contact us. We answer to you shortly.</p>
//            <div className="flex space-x-10 pl-45 pt-20">
//            <div className="bg-white h-40  w-80 rounded-xl space-y-7 pl-10">
//            <MdOutlineWifiCalling3  className="text-4xl text-[#3066BE] relative top-7 left-30"/>
//            <h1>+(91)123 456 789</h1>
//            <p>We are always happy to help.</p>
//            </div>
//            <div  className="bg-white h-40  w-80 rounded-xl space-y-7 pl-10">
//            <MdOutlineEmail className="text-4xl text-[#3066BE] relative top-7 left-30"/>
//            <h1>support@helpcentre.com</h1>
//            <p>The best way to get answer faster.</p>
//            </div>
//            </div>
//       </div>
//     </div>
//   );
// }

// export default Help;

import React, { useState } from "react";
import Header from "../Header";
import { CiFlag1 } from "react-icons/ci";
import { PiCertificateLight } from "react-icons/pi";
import { FiBook } from "react-icons/fi";
import { MdOutlineWifiCalling3, MdOutlineEmail } from "react-icons/md";

const faqs = [
  { question: "Process to get started on the website?", answer: "To start, create an account and log in. Navigate through the dashboard to access features." },
  { question: "How to use the whiteboard?", answer: "To access the whiteboard, go to the home screen and find the Whiteboard option on the left-hand side." },
  { question: "How to get notifications?", answer: "Enable notifications in your account settings to receive updates." },
  { question: "How to navigate the settings?", answer: "Go to the settings menu where you can manage your preferences and account details." },
];

function Help() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div>
      <Header />
      <div className="bg-amber-400 h-10 flex justify-center">
        <span className="text-lg sm:text-2xl">Help</span>
      </div>

      {/* Search Section */}
      <div className="bg-[#EBF2FF] py-10 px-4 text-center">
        <h1 className="font-bold text-2xl sm:text-4xl">Hello, How can we help you?</h1>
        <div className="mt-5 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <input type="text" placeholder="Search here" className="bg-[#FBFBFB] h-10 w-full sm:w-96 px-4 rounded-sm border" />
          <button className="bg-[#3066BE] text-white px-5 py-2 rounded-sm w-full sm:w-auto">Search</button>
        </div>
        <p className="mt-4 text-sm sm:text-base">or choose a category to quickly find the help you need</p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            { icon: <CiFlag1 className="text-3xl bg-gray-200 p-2 rounded-full" />, label: "Getting Started" },
            { icon: <PiCertificateLight className="text-3xl bg-gray-200 p-2 rounded-full" />, label: "Certification" },
            { icon: <FiBook className="text-3xl bg-gray-200 p-2 rounded-full" />, label: "Tutorials" },
          ].map((item, index) => (
            <div key={index} className="bg-white flex flex-col items-center p-4 rounded-lg shadow-md w-24 sm:w-32">
              {item.icon}
              <h1 className="text-xs sm:text-sm mt-2">{item.label}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-10 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button className="w-full text-left p-3 flex justify-between items-center bg-gray-100" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <div className="p-3 bg-white border-t">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#3066BE] text-white text-center py-10 px-4 mt-16">
        <h1 className="text-xl sm:text-2xl">You Still Have a Question?</h1>
        <p className="mt-2 text-sm sm:text-base">If you can’t find the answer to your question, fill out your query & submit it, or contact us. We will respond shortly.</p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            { icon: <MdOutlineWifiCalling3 className="text-4xl text-[#3066BE]" />, title: "+(91)123 456 789", desc: "We are always happy to help." },
            { icon: <MdOutlineEmail className="text-4xl text-[#3066BE]" />, title: "support@helpcentre.com", desc: "The best way to get answers faster." },
          ].map((item, index) => (
            <div key={index} className="bg-white text-gray-700 p-6 rounded-lg w-64 shadow-lg flex flex-col items-center">
              {item.icon}
              <h1 className="mt-2 font-semibold">{item.title}</h1>
              <p className="text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Help;
