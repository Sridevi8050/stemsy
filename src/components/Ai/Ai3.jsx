import React from "react";
import Header from "../Header";
import Aidropdown from "./Aidropdown";
import { FaMicrophone } from "react-icons/fa";

function Ai3(){
    return(
    <div>
       <Header/>
       <div className="h-30 w-full bg-amber-400 flex align-middle justify-center ">
       <img className="h-10 w-10 inline relative top-8 left-80 " src="https://s3-alpha-sig.figma.com/img/2511/4533/1d374e9aa69897432e7c183fa842811c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DSNzjU2G0igadMwcX359oYYlrqKLtmxSOwgLz0Eoiehdd06bbedmHEqXkmyBvDKTNkLi4BIvthIz~sHzwa-d5BbcixxG6rvx3nD2N6snbJr~SxhZ~FIQI9wYFsOEPfs5uLP9genkDhgtKXZ5TE9Zzds8IKGLwyLadMEyI0JtslpkSaXHCbnqydTAxaVcBvIhB-0mVMF2vZp7gWU5j7Mh9uZovp3RDg-M8K~9bW7cx2UkYrGEux282pMsxeYpzQvFf7jS~XUzTQpaTcdaAXv9Rfz3OUgFYY8OvWv13OTJj-fLCJ5lsrVPSC627dOzVRiBSpoYYHUjwIfKfIgteM7pZQ__"></img>
       <span className="font-bold relative top-8 left-80 text-3xl">Story telling</span>
        <p className="relative top-20 right-5">"Always On, Always Helpful: Your AI Companion for Instant Answers and Assistance."</p>
        </div>
       <div className="h-120 w-400 flex  relative left-10 space-x-10 space-y-10 ">
       <div className="h-70 w-70 rounded-xl bg-amber-900 relative top-15 left-50 hover:top-10">
        <img className="w-full h-full rounded-xl" src="https://s3-alpha-sig.figma.com/img/775e/2753/d96b0261787f86d8544b6ee201b636a0?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fR0eyhVrfPgVOxVoNJCipeBMHLItxl7zz4ABjpTxvD5vREkMiEZN3DzLPCMLZmaqrn6ST9yObcqn5OXV6pym2XA5s1kofauE90Wr3Z1x2pALRGHXZV3FdLxqnmU2kIO~tOqGnnNcxTly2MSGISHbBJrkQb7Bfpw5WIiKuNCRWMjH3bDxYF8VhznhI8Je6pROfKbza9j-aM2l2CJyluMjNF7f7C4tEq2~9BP6piL2aBB-oAtgHnlWeOeeBIHwUzp5pj2q6VwMvkIsGE5bBi5wrOwIQ7cR3peBMRi0UqPsZDpzI09-hckRzFRP7~rYL0EPOZIaiyrZK2FGLsu35h6jyA__"></img>
       </div>
       <div className="h-70 w-70 rounded-xl bg-amber-900 relative top-15 left-50 hover:top-10">
       <img className="w-full h-full rounded-xl" src="https://s3-alpha-sig.figma.com/img/52f9/d9ac/0a9200e8dbe7d990683a7d94ebe832ed?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KEC7WJifDaIC4KXdfZms1HoyxxCdXniPOYxC6Vuv5q0aORLxVkYLsIPVKQ1qTmDXDbrHJcRoB2jD5v7kVlZfalnwrQwtAQymIjYPufrPTxQmqAn8KTFvkywVALr590zOQjdAh0VhTqIDhHzxRWRSB-agX5qj4GSfnlvfWm1OZQiwUISxVE3T1mMja1A1CuW3bZobH5IjZSg7g3N2zIY2GTm28-iGbH17KZGESg8CpWkS-aJjcFt0WLEhgKjZCzyt8Y1D0Xq6RJmDP-MYPFj1mGeIdYTmmsjDsXfI6jOxKR3QvdNyCoX7wqdX83Sgr1ZhITByHFFcJ8LBkeVLlTlCtw__"></img>
       </div>
       <div className="h-70 w-70 rounded-xl bg-amber-900 relative top-15 left-50 hover:top-10">
       <img className="w-full h-full rounded-xl" src="https://s3-alpha-sig.figma.com/img/5902/fa4b/7e0e5a2cdf1adf0a71b23af5c859cf13?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s~EdXr4~WXTzfE1ymjvKDxHnlROCrpMOi5ySu90Oel82XKkXm2EH7wTkxUduo6hFx902MyYR-hV-GP7tuiGFb9EfVN8KBTSH06FcbupVFAYolkl56zc1nx3jk1K6VT9p6vgD22ERucwoo8ND1pdYoyBivmtwDUkLt30SIJ0KmtwpGJgQUYJfmJpB2qx9j2DQLDIEygFLPXaLzt1bZR~UIF-RcM10jFZfheFNHeLpJTLwrBW6HoLwcFRu-TEc-fahruEK-79LmZJlh4H78yV6mrUdTK94tTVUNvzoe0M0vNQ6uAYKcgOe4DHrcnfC8rDKtDrW58trHSf2z6TPDa8ucQ__"></img>
       </div>
       <div className="relative top-100 right-176">
        <Aidropdown className="top-100 right-160"/>
        <input className="px-5 py-2 relative left-50 bottom-10 w-150 bg-[#E4EEFF]" placeholder="Type the message Here.... "/>
        <button className="relative bottom-9 left-40 p-2 rounded-sm text-[#3066BE]"><FaMicrophone /></button>
       
       </div>
       </div>
      
    </div>
    )
}

export default Ai3