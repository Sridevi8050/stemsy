import React from "react";
import Header from "../Header";
import Aidropdown from "./Aidropdown";
import { FaMicrophone } from "react-icons/fa";

function Ai2(){
    return(
    <div>
       <Header/>
       
       <img className="h-10 w-10 inline relative top-19 left-130 " src="https://s3-alpha-sig.figma.com/img/2511/4533/1d374e9aa69897432e7c183fa842811c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DSNzjU2G0igadMwcX359oYYlrqKLtmxSOwgLz0Eoiehdd06bbedmHEqXkmyBvDKTNkLi4BIvthIz~sHzwa-d5BbcixxG6rvx3nD2N6snbJr~SxhZ~FIQI9wYFsOEPfs5uLP9genkDhgtKXZ5TE9Zzds8IKGLwyLadMEyI0JtslpkSaXHCbnqydTAxaVcBvIhB-0mVMF2vZp7gWU5j7Mh9uZovp3RDg-M8K~9bW7cx2UkYrGEux282pMsxeYpzQvFf7jS~XUzTQpaTcdaAXv9Rfz3OUgFYY8OvWv13OTJj-fLCJ5lsrVPSC627dOzVRiBSpoYYHUjwIfKfIgteM7pZQ__"></img>
       <span className="font-bold relative top-20 left-130 text-3xl">AI Chatbot</span>
       <div className="h-120 w-220 relative top-30 left-50 pt-19 shadow-sm border border-black place-content-between rounded-sm ">
          <div className="pl-10">
            <img className="h-10 w-10 rounded-full inline" src="https://s3-alpha-sig.figma.com/img/027c/5c82/5bf85922c6965220c96ac141f0374b7b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SLKWUUNrOzR60xknm4TB8aY9cmgdTiStnsd0kyrKrLR9niS1HAMFkVB16Fi6lnxol1oJ--eZ66QiPNf94Cx-XzutinOCNPyBNqZaiKszH4tvtU0IZQwwvWaw7j2avj0viBEqiG~~TlTm1dyJ5VmMyT2PuzdmNUr9vbAl3RJkK1RPjv7-7hUUNifNX52571diVfNxGUMfF6Sva1FzBP0xJRJ5h23hea983WyxBBLmi-S3Q7j9LdFKr7UxKG0pFBUNTxtvVQxll3tCO4uEGLLHSSG1NAmAa~i0Ap7YDl-trt3hCo4WLuM7FgYYsYb2JI9H65uqpyRSQ3t~jEmlX64v5Q__"></img>
            <div className="relative bottom-10 left-15">
            <h1 className="font-bold">You</h1>
            <p>I would like to know more about the courses</p>
            </div>
            </div>
            <div className="pl-10 w-160">
            <img className="h-10 w-10 rounded-full inline" src="https://s3-alpha-sig.figma.com/img/2511/4533/1d374e9aa69897432e7c183fa842811c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DSNzjU2G0igadMwcX359oYYlrqKLtmxSOwgLz0Eoiehdd06bbedmHEqXkmyBvDKTNkLi4BIvthIz~sHzwa-d5BbcixxG6rvx3nD2N6snbJr~SxhZ~FIQI9wYFsOEPfs5uLP9genkDhgtKXZ5TE9Zzds8IKGLwyLadMEyI0JtslpkSaXHCbnqydTAxaVcBvIhB-0mVMF2vZp7gWU5j7Mh9uZovp3RDg-M8K~9bW7cx2UkYrGEux282pMsxeYpzQvFf7jS~XUzTQpaTcdaAXv9Rfz3OUgFYY8OvWv13OTJj-fLCJ5lsrVPSC627dOzVRiBSpoYYHUjwIfKfIgteM7pZQ__"></img>
            <div className="relative bottom-10 left-15">
            <h1 className="font-bold">Chatbot</h1>
            <p>Absolutely! Are you interested in courses related to a specific area of STEM, such as mathematics, science, engineering, or technology?</p>
            </div>
            </div>
            <div className="pl-10"> 
            <img className="h-10 w-10 rounded-full inline" src="https://s3-alpha-sig.figma.com/img/027c/5c82/5bf85922c6965220c96ac141f0374b7b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SLKWUUNrOzR60xknm4TB8aY9cmgdTiStnsd0kyrKrLR9niS1HAMFkVB16Fi6lnxol1oJ--eZ66QiPNf94Cx-XzutinOCNPyBNqZaiKszH4tvtU0IZQwwvWaw7j2avj0viBEqiG~~TlTm1dyJ5VmMyT2PuzdmNUr9vbAl3RJkK1RPjv7-7hUUNifNX52571diVfNxGUMfF6Sva1FzBP0xJRJ5h23hea983WyxBBLmi-S3Q7j9LdFKr7UxKG0pFBUNTxtvVQxll3tCO4uEGLLHSSG1NAmAa~i0Ap7YDl-trt3hCo4WLuM7FgYYsYb2JI9H65uqpyRSQ3t~jEmlX64v5Q__"></img>
            <div className="relative bottom-10 left-15">
            <h1 className="font-bold">You</h1>
            <p>I would like to know more about the courses</p>
            </div>
            </div>
            <div className="pl-10 w-160">
            <img className="h-10 w-10 rounded-full inline" src="https://s3-alpha-sig.figma.com/img/2511/4533/1d374e9aa69897432e7c183fa842811c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DSNzjU2G0igadMwcX359oYYlrqKLtmxSOwgLz0Eoiehdd06bbedmHEqXkmyBvDKTNkLi4BIvthIz~sHzwa-d5BbcixxG6rvx3nD2N6snbJr~SxhZ~FIQI9wYFsOEPfs5uLP9genkDhgtKXZ5TE9Zzds8IKGLwyLadMEyI0JtslpkSaXHCbnqydTAxaVcBvIhB-0mVMF2vZp7gWU5j7Mh9uZovp3RDg-M8K~9bW7cx2UkYrGEux282pMsxeYpzQvFf7jS~XUzTQpaTcdaAXv9Rfz3OUgFYY8OvWv13OTJj-fLCJ5lsrVPSC627dOzVRiBSpoYYHUjwIfKfIgteM7pZQ__"></img>
            <div className="relative bottom-10 left-15">
            <h1 className="font-bold">You</h1>
            <p>Absolutely! Are you interested in courses related to a specific area of STEM, such as mathematics, science, engineering, or technology?</p>
            </div>
            </div>
         </div>
      
       <div className="relative flex items-center justify-center gap-4 mt-5 top-50 pb-30">
  <Aidropdown />
  <input
    className="px-5 py-2 w-[300px] bg-[#E4EEFF] border border-gray-300 rounded-md"
    placeholder="Type the message Here...."
  />
  <button className="p-2 rounded-md text-[#3066BE] bg-gray-100 hover:bg-gray-200 relative right-15 ">
    <FaMicrophone />
  </button>
</div>

        
    </div>
       
     

    )
}

export default Ai2




{/* <div>
       <Header/>
       <div className="h-30 w-full bg-amber-400 flex align-middle justify-center ">
       <img className="h-10 w-10 inline relative top-8 left-80 " src="https://s3-alpha-sig.figma.com/img/2511/4533/1d374e9aa69897432e7c183fa842811c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DSNzjU2G0igadMwcX359oYYlrqKLtmxSOwgLz0Eoiehdd06bbedmHEqXkmyBvDKTNkLi4BIvthIz~sHzwa-d5BbcixxG6rvx3nD2N6snbJr~SxhZ~FIQI9wYFsOEPfs5uLP9genkDhgtKXZ5TE9Zzds8IKGLwyLadMEyI0JtslpkSaXHCbnqydTAxaVcBvIhB-0mVMF2vZp7gWU5j7Mh9uZovp3RDg-M8K~9bW7cx2UkYrGEux282pMsxeYpzQvFf7jS~XUzTQpaTcdaAXv9Rfz3OUgFYY8OvWv13OTJj-fLCJ5lsrVPSC627dOzVRiBSpoYYHUjwIfKfIgteM7pZQ__"></img>
       <span className="font-bold relative top-8 left-80 text-3xl">AI Chatbot</span>
        <p className="relative top-20 right-5">"Always On, Always Helpful: Your AI Companion for Instant Answers and Assistance."</p>
        </div>
       <div className="h-120 w-400 bg-amber-700 flex  relative left-10 space-x-10 space-y-10 ">
       
       </div>
      
    </div> */}