import React from "react";
import Header from "../Header";
import Aidropdown from "./Aidropdown";
import { FaMicrophone } from "react-icons/fa";

function Ai5(){
    return(
    <div>
       <Header/>
       <div className="h-30 w-full bg-[#3FA60040] flex align-middle justify-center ">
       <img className="h-10 w-10 inline relative top-8 left-80 " src="https://s3-alpha-sig.figma.com/img/2511/4533/1d374e9aa69897432e7c183fa842811c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DSNzjU2G0igadMwcX359oYYlrqKLtmxSOwgLz0Eoiehdd06bbedmHEqXkmyBvDKTNkLi4BIvthIz~sHzwa-d5BbcixxG6rvx3nD2N6snbJr~SxhZ~FIQI9wYFsOEPfs5uLP9genkDhgtKXZ5TE9Zzds8IKGLwyLadMEyI0JtslpkSaXHCbnqydTAxaVcBvIhB-0mVMF2vZp7gWU5j7Mh9uZovp3RDg-M8K~9bW7cx2UkYrGEux282pMsxeYpzQvFf7jS~XUzTQpaTcdaAXv9Rfz3OUgFYY8OvWv13OTJj-fLCJ5lsrVPSC627dOzVRiBSpoYYHUjwIfKfIgteM7pZQ__"></img>
       <span className="font-bold relative top-8 left-80 text-3xl">Story telling</span>
        <p className="relative top-20 right-5">"Always On, Always Helpful: Your AI Companion for Instant Answers and Assistance."</p>
        </div>
       <div className="h-120 w-400 flex  relative left-10 space-x-10 space-y-10 ">
       <div className="h-70 w-70 rounded-xl bg-amber-900 relative top-15 left-50 hover:top-10">
        <img className="w-full h-full rounded-xl" src="https://s3-alpha-sig.figma.com/img/ae06/027a/3371f767a5395099ea935e1af60f6efe?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gxWbuhxoXuL4-SFaInaB~qtkr54Ochtbgy9l4Q~5-mUSpwyrafZUsL-DvC7Yrg8TgRcDoVF-zyJgHQ4w5-q-dFRsMfcdTjDKj4ez6bmI8ZtI7MP8mpSX1Q5c9VM3o3Ol-0uygV6Xok1xUeeqCPrk0woUp40zEeo-EteZmC6VTijF-Y4Eu3UIup1PJBvTsXkCQYaxyrGLEYjvXrFECUV64~134WcTZH~w5gV5Xwqhmzrmi2xEc7kqBB6nnSn5y2k2Nqa05wZ3cT~8vP9-zs6Xej0Lw26VCuAfwGMl~zn8uh6ocMGKccWWYiQ~It9rWWDOSCjeZ1oFyX5ZDjZcVQn2kw__"></img>
       </div>
       <div className="h-70 w-70 rounded-xl bg-amber-900 relative top-15 left-50 hover:top-10">
       <img className="w-full h-full rounded-xl" src="https://s3-alpha-sig.figma.com/img/85d7/9bc4/31d257ba0912c4f5c096a02dde633d76?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D6mBqX5nYzLGtFpXM8Bf~U4gmwLmUGFLLf9ARFZ06xfI5vMfuurLfj8-ZvvyZlyWCaj~bt5fS-f3zBNq1xVBNEareipoSsyX9Zed45PrzAYhQVHQhzHdTRavEWrQhfQnlKME-juCJ9jCAp3qQvhaWBKHK1oWRm~7Zy4-V0IcWdguP~u8Goq54COVl-ztWwEKtWD-8FvEUHisZ4PMhCX1F2emGXMpN8t34tbsxNadxNhrmyj7Lb-GxowcViYJPAeplYN1JrVCp4sfQLxVWMTRpUauBKTsoHaNnr-drjZG6cmYXD~t71oM~d7PjJGMBxAoEnHQR0xBe2Tx5c39Q9Gp8g__"></img>
       </div>
       <div className="h-70 w-70 rounded-xl bg-amber-900 relative top-15 left-50 hover:top-10">
       <img className="w-full h-full rounded-xl" src="https://s3-alpha-sig.figma.com/img/df03/a03c/80ba907056c6ea0f691aa720fbd08665?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g27fjtHnRwvkUIHOLqSJ6z5pQfdEj-2sz9EUviFpQO2-jBMbo08OCB5aSvC1uPCd-DTI073SXaCwGaoGRTPPnxsyjrQ5jfCv7dPrPAKNCgR9P5LoZA1WEtY6o76efX~oRK95f7hAYW7no-ckVh75cn2YMpS6kG5i6LMfER7rWYPvH8Ng57eCy9qNSPicpjejNCvObM7ru4vNKpv7zSoeK5YBy47id-nupRZ0jzxKC1nZWOZhvPpA71l0-CiEqv0feOgpuQB0pm4oZQ-qPxvGtpwh50nl1OQgYhVWEolqmFA9zDEd0Ge5TdHgNdhiduRQKHlLkVVfhrca8sTJaGUFmw__"></img>
       </div>
       <div className="relative top-100 right-176">
        <Aidropdown className=" top-100 right-16 bg-[#3FA600]"/>
        <input className="px-5 py-2 relative left-50 bottom-10 w-150 bg-[#badca4] " placeholder="Type the message Here.... "/>
        <button className="relative bottom-9 left-40 p-2 rounded-sm text-[#8ad458]"><FaMicrophone /></button>
       
       </div>
       </div>
      
    </div>
    )
}

export default Ai5