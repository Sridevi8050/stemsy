// import React from "react";
// import Header from "../Header";
// import Aidropdown from "./Aidropdown";
// import { FaMicrophone } from "react-icons/fa";

// function Ai1(){
//     return(
//     <div>
//        <Header/>
//        <div className="h-30 w-full bg-amber-400 flex align-middle justify-center ">
//        <img className="h-10 w-10 inline relative top-8 left-80 " src="https://s3-alpha-sig.figma.com/img/2511/4533/1d374e9aa69897432e7c183fa842811c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DSNzjU2G0igadMwcX359oYYlrqKLtmxSOwgLz0Eoiehdd06bbedmHEqXkmyBvDKTNkLi4BIvthIz~sHzwa-d5BbcixxG6rvx3nD2N6snbJr~SxhZ~FIQI9wYFsOEPfs5uLP9genkDhgtKXZ5TE9Zzds8IKGLwyLadMEyI0JtslpkSaXHCbnqydTAxaVcBvIhB-0mVMF2vZp7gWU5j7Mh9uZovp3RDg-M8K~9bW7cx2UkYrGEux282pMsxeYpzQvFf7jS~XUzTQpaTcdaAXv9Rfz3OUgFYY8OvWv13OTJj-fLCJ5lsrVPSC627dOzVRiBSpoYYHUjwIfKfIgteM7pZQ__"></img>
//        <span className="font-bold relative top-8 left-80 text-3xl">AI Chatbot</span>
//         <p className="relative top-20 right-5">"Always On, Always Helpful: Your AI Companion for Instant Answers and Assistance."</p>
//         </div>
//        <div className="h-120 w-400 flex  relative left-10 space-x-10 space-y-10 ">
//        <div className="h-70 w-70 rounded-xl bg-amber-900 relative top-15 left-50 hover:top-10">
//         <img className="w-full h-full rounded-xl" src="https://s3-alpha-sig.figma.com/img/0238/da1c/b03969fbb1775427d66f12c0ee937908?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eHBSUnF9JPfIvikpJiIHDHyVvvlVBzQcY1ZZOFO9yBO-yJZi5~agwJtwSdxjcXysiUQ6QXL8tpwz5jif3GebYLD0ps4amCgUsp3dVJLpcVTMTR~~7Pe3aAzWgLgO9PCyZwf5UMtVnwkju7DSuCCq1qRFVXuzmq-XfcgdDWSdLrRzmB37X6y4yHCjB4tRGGfXXSFfUk4QDVSKnJnDjzb1PAPv0mNEIxi7KBAfcNwDKy97aMyuX0BeaWJ-PUh6SDSVPQBilXmhPyx562hLRajJrT4KiM7TuwUhjPNVaWv~se314tXKEpsH6dPj2PeRG0jfwENTqnm2Lncv4-ZBae3mWg__"></img>
//        </div>
//        <div className="h-70 w-70 rounded-xl bg-amber-900 relative top-15 left-50 hover:top-10">
//        <img className="w-full h-full rounded-xl" src="https://s3-alpha-sig.figma.com/img/7ae9/efa1/211af2eb3e5dfcb0aacc141483ce1ff1?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t1k4rqpQufeyl1VCAnU0Ov59X5bOePF0Gp-gjZsKYc0ZPsGqiNCBkM4r10YWBTDd819rMQJ3aUlbb5jvMXweMqqBnPaxcQKJHbn~sEqa5F9Q1PWXj1LS2udTgSni0eQnePBS9WeYWn49YVw4KPrcwxu0tNm-SkM42drnET1BmfEVy92Pc4iWflMlchstpNmVU8O~RDJLMHNfjvVqknUgTSiezTAPXi~nJZcvGSu5TLO84pabHc-KGIFC6F2Gni1e4U93eWiiMYo1dTZk2q86lGI~GeazHDIVfkF4vZBKbvFnWhr5Q8pcxsgzBy~XMQ~lDejxi~Mbq6~MrXXyeB-YAQ__"></img>
//        </div>
//        <div className="h-70 w-70 rounded-xl bg-amber-900 relative top-15 left-50 hover:top-10">
//        <img className="w-full h-full rounded-xl" src="https://s3-alpha-sig.figma.com/img/4069/fefb/80d0fe0eefb84e1f30e9c86ecd684d6b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dTCIjqHd5LfpFUmvQ6MC17piTkLw4-qADq~Yk5czWecywSw72GJglYCNnRzEIRvEl4BoKFQfb-NhHXDXBU61XDvSPm5IXpOzehP2ygq6TTfp5aCC44bv63eUw3jVBJsdwzxWdoEiszy7BFTko39PpqO06NWBC0jEI7Usk~w4SMk5Ffx~uXSjwlWhJxwbyurSMie6ocFcq7ARPNAWe4VGwYfN~3d-tt1jMuVW5km-mvdoLJROT1gWOMDh032wnBeLEYHp16USw9RkFM45~P~DHYBZVNn4nyKbY2Yp~91DZO8GYjssC6HulgxLIJ0zd63XWsVxITLLLKRDnS7oy0Liqw__"></img>
//        </div>
//        <div className="relative top-100 right-176">
//         <Aidropdown className="top-100 right-160"/>
//         <input className="px-5 py-2 relative left-50 bottom-10 w-150 bg-[#E4EEFF]" placeholder="Type the message Here.... "/>
//         <button className="relative bottom-9 left-40 p-2 rounded-sm text-[#3066BE]"><FaMicrophone /></button>
       
//        </div>
//        </div>
      
//     </div>
//     )
// }

// export default Ai1
import React from "react";
import Header from "../Header";
import Aidropdown from "./Aidropdown";
import { FaMicrophone } from "react-icons/fa";

function Ai1() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="h-30 w-full bg-amber-400 flex flex-col md:flex-row items-center justify-center p-4">
        <img
          className="h-10 w-10 md:h-14 md:w-14 md:mr-4"
          src="https://s3-alpha-sig.figma.com/img/2511/4533/1d374e9aa69897432e7c183fa842811c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DSNzjU2G0igadMwcX359oYYlrqKLtmxSOwgLz0Eoiehdd06bbedmHEqXkmyBvDKTNkLi4BIvthIz~sHzwa-d5BbcixxG6rvx3nD2N6snbJr~SxhZ~FIQI9wYFsOEPfs5uLP9genkDhgtKXZ5TE9Zzds8IKGLwyLadMEyI0JtslpkSaXHCbnqydTAxaVcBvIhB-0mVMF2vZp7gWU5j7Mh9uZovp3RDg-M8K~9bW7cx2UkYrGEux282pMsxeYpzQvFf7jS~XUzTQpaTcdaAXv9Rfz3OUgFYY8OvWv13OTJj-fLCJ5lsrVPSC627dOzVRiBSpoYYHUjwIfKfIgteM7pZQ__"
          alt="AI Chatbot"
        />
        <span className="font-bold text-2xl md:text-3xl">AI Chatbot</span>
        <br></br>
        <p className="mt-4 text-center md:text-left ">
          "Always On, Always Helpful: Your AI Companion for Instant Answers and Assistance."
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {[
          "https://s3-alpha-sig.figma.com/img/0238/da1c/b03969fbb1775427d66f12c0ee937908?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eHBSUnF9JPfIvikpJiIHDHyVvvlVBzQcY1ZZOFO9yBO-yJZi5~agwJtwSdxjcXysiUQ6QXL8tpwz5jif3GebYLD0ps4amCgUsp3dVJLpcVTMTR~~7Pe3aAzWgLgO9PCyZwf5UMtVnwkju7DSuCCq1qRFVXuzmq-XfcgdDWSdLrRzmB37X6y4yHCjB4tRGGfXXSFfUk4QDVSKnJnDjzb1PAPv0mNEIxi7KBAfcNwDKy97aMyuX0BeaWJ-PUh6SDSVPQBilXmhPyx562hLRajJrT4KiM7TuwUhjPNVaWv~se314tXKEpsH6dPj2PeRG0jfwENTqnm2Lncv4-ZBae3mWg__",
          "https://s3-alpha-sig.figma.com/img/7ae9/efa1/211af2eb3e5dfcb0aacc141483ce1ff1?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t1k4rqpQufeyl1VCAnU0Ov59X5bOePF0Gp-gjZsKYc0ZPsGqiNCBkM4r10YWBTDd819rMQJ3aUlbb5jvMXweMqqBnPaxcQKJHbn~sEqa5F9Q1PWXj1LS2udTgSni0eQnePBS9WeYWn49YVw4KPrcwxu0tNm-SkM42drnET1BmfEVy92Pc4iWflMlchstpNmVU8O~RDJLMHNfjvVqknUgTSiezTAPXi~nJZcvGSu5TLO84pabHc-KGIFC6F2Gni1e4U93eWiiMYo1dTZk2q86lGI~GeazHDIVfkF4vZBKbvFnWhr5Q8pcxsgzBy~XMQ~lDejxi~Mbq6~MrXXyeB-YAQ__",
          "https://s3-alpha-sig.figma.com/img/4069/fefb/80d0fe0eefb84e1f30e9c86ecd684d6b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dTCIjqHd5LfpFUmvQ6MC17piTkLw4-qADq~Yk5czWecywSw72GJglYCNnRzEIRvEl4BoKFQfb-NhHXDXBU61XDvSPm5IXpOzehP2ygq6TTfp5aCC44bv63eUw3jVBJsdwzxWdoEiszy7BFTko39PpqO06NWBC0jEI7Usk~w4SMk5Ffx~uXSjwlWhJxwbyurSMie6ocFcq7ARPNAWe4VGwYfN~3d-tt1jMuVW5km-mvdoLJROT1gWOMDh032wnBeLEYHp16USw9RkFM45~P~DHYBZVNn4nyKbY2Yp~91DZO8GYjssC6HulgxLIJ0zd63XWsVxITLLLKRDnS7oy0Liqw__"
        ].map((src, index) => (
          <div key={index} className="h-40 w-40 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            <img className="w-full h-full object-cover" src={src} alt={`Chatbot ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-10 p-4">
        <Aidropdown className="mb-4" />
        <div className="flex items-center space-x-3 w-full max-w-md">
          <input
            className="px-4 py-2 w-full border rounded-md bg-[#E4EEFF] outline-none"
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

export default Ai1;
