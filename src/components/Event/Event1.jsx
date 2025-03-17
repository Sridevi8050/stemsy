// import React from "react";
// import Header from "../Header";
// import { LuCalendarDays } from "react-icons/lu";
// import { GoClock } from "react-icons/go";
// import { TbLanguage } from "react-icons/tb";


// function Event1(){
//     return(
//         <div>
//             <Header/>
//             <div className="bg-amber-400 h-10 flex justify-center">
//                 <span className="text-2xl">Events</span>
//             </div>
//             <div>
//         <img className="h-70 w-150 rounded-sm relative left-30 top-10 " src="https://s3-alpha-sig.figma.com/img/dbb2/a5be/03f259b82a0fb223d92ccbc5e0fc9f10?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l68vezHn0n6alPkTsFksEQctkxZbdIZIP9YSo0DOCilkCZNrzbnmTiY1-lxKoUf3m13ECvLQGCtwVycE~ACzf9ZRv6Ov~s2FaYfuKqELuHjIVIQZc1Won2Zqkzi~y2vssNtpE~53QyF29pl~AORA3Qjty-8Fv3i2IiBu21-l9WyzmZ-jpwkRxIC4MYjwUVKV8CC1mBkXLO~HstMUxPWCpUcHyoPqHJCu506F-lACMw0x4ohGg1S65sg0HYrhjjkbc1B2VTryCwciFS~2G-wP7sYAUdyavOKQNIFz3UuvCUs~siVaXDdnOxAHgcIwPLdBK2siOK7ibyJV-4ReYgTb7A__"></img>

//             <div className="bg-gray-300 h-120 w-100 relative bottom-60 left-190 rounded-sm">
//             <div className="bg-white h-80 left-8 w-85 rounded-sm relative top-18">
//                 <form className="pl-10 pt-10 space-y-5">
//                 <input type="text" placeholder="First Name" required className=" inset-shadow-gray-400  bg-gray-100 rounded-sm px-5 py-2"></input>
//                 <input type="text" placeholder="Last Name" required className=" inset-shadow-gray-400  bg-gray-100 rounded-sm px-5 py-2"></input>
//                 <input type="email" placeholder="Email" required className=" inset-shadow-gray-400  bg-gray-100 rounded-sm px-5 py-2"></input>
//                 <button className="bg-[#3066BE] text-white py-2 px-26 rounded-sm">Register</button>
//                 </form>
//             </div>
//             </div>

//             <div className="relative left-30 bottom-100">
//             <h1 className="inline text-2xl font-bold ">Science Fair</h1>
//              <div className="flex space-x-2 pt-4">
//              <LuCalendarDays className="text-[#3066BE]" /><span>     24/03/2024  </span>  
//              <GoClock className="text-[#3066BE]"/><span>     9:00 AM-10:00AM </span>
//              <TbLanguage className="text-[#3066BE]"/><span>    English </span>
//              </div>
//              <p className="w-150">Explore the fusion of creativity and technology in design. Discover how art and science work together to solve problems and improve lives. Get hands-on with activities and leave inspired with new insights to apply to your projects. </p>
//              <h1 className="font-bold pt-4">Organizer</h1>
//              <img className="h-13 w-13 rounded-xl" src="https://s3-alpha-sig.figma.com/img/c2f1/8f3d/dd749f93490322af43c8429383e1af64?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hiw9uP6czVDlPiFKG1NxOnmS1UuGCiO3IK4MBIgcOKbrl13N3EBTtbICfvbJBhdkgD9QRrkWGHGZZgCRwq53trObiEOqT6hSP5NxLSorU~JAqkQQR-iAf7XzewoEdjpbS3DaHihW7~q9m8MwEuJm8byeJ5vRNQfGUNnjEfwtPeV9wfvylF9gxseX7OFWighPgcAxM5gqwDXQ8bj758~nCB-vtKUc2kPGSKbt2~HmLaAlvd92fGvz6co85jbg3dw~ANUJYGFy1-ZFzrCKRJka~CvTD-OIQN1Bj5s3yb6e3WKvnxiNBmVHeYtkfFkwlcpwl7PneXQrXpPnyGyBNsCoUA__"></img>
//             <h1 className="text-sm">Miss Shweta</h1>
//             <p className="font-semibold text-lg pt-3">Why you should attend</p>
//             <p className="w-150 pt-2"><span className="font-bold">1.New Way of Thinking:</span> Learn how mixing art and science changes how we make things look and work.<br></br><br></br>
//               <span className="font-bold"> 2.Find What Makes You Say "Wow!":</span> See cool designs and get ideas for your own projects. </p>
//             </div>
//         </div>
//         </div>
//     )
// }
// export default Event1



import React from "react";
import Header from "../Header";
import { LuCalendarDays } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { TbLanguage } from "react-icons/tb";

function Event1() {
  return (
    <div>
      <Header />

      
      <div className="bg-amber-400 h-10 flex justify-center items-center">
        <span className="text-lg sm:text-xl md:text-2xl">Events</span>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 px-6 py-8">
        
       
        <img
          className="w-600 h-100 max-w-md rounded-sm"
          src="https://s3-alpha-sig.figma.com/img/dbb2/a5be/03f259b82a0fb223d92ccbc5e0fc9f10?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hd6Npsl4bh7yJNq8LXBRNK6f11o0qXVGjqW-0Gm5nKJt-hizqqTFNzuUvmBZl7ME39RKepA7bt3MJGmfoqc5d8StE1oFNkQlj0q8-w8QKnHpn-m5kANge7wPu90ap~zL92iuazNZjfh8Dbq2xbR4DmEK-dSAiL9JtoBOJ0y-PON-v9fbrqYqaFwOAdb9nZotYZYnzMyJzQTozoZCY6icwkN3RwesR-7bzS6BNSZrpN0bVd-pkBtuwqxNIGINcVmDte-af8EQdrrRuencRBqezEMcPHaAZh7vHvw~LR1PK~H61yHM0OA0WgBzpkzy6i87S-nPgmX8lJ8NfPn05TlAkw__"
          alt="Event"
        />

        
        <div className="w-full max-w-lg ">
          <h1 className="text-xl sm:text-2xl font-bold">Science Fair</h1>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <span className="flex items-center gap-1 text-sm sm:text-base">
              <LuCalendarDays className="text-[#3066BE]" /> 24/03/2024
            </span>
            <span className="flex items-center gap-1 text-sm sm:text-base">
              <GoClock className="text-[#3066BE]" /> 9:00 AM - 10:00 AM
            </span>
            <span className="flex items-center gap-1 text-sm sm:text-base">
              <TbLanguage className="text-[#3066BE]" /> English
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base">
            Explore the fusion of creativity and technology in design. Discover how art and science work together to solve problems and improve lives. Get hands-on with activities and leave inspired with new insights to apply to your projects.
          </p>

          {/* Organizer Section */}
          <div className="mt-6">
            <h1 className="font-bold text-lg">Organizer</h1>
            <div className="flex items-center gap-3 mt-2">
              <img
                className="h-12 w-12 rounded-full"
                src="https://s3-alpha-sig.figma.com/img/c2f1/8f3d/dd749f93490322af43c8429383e1af64?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s2Az1uM92t4nU5-KqiIP-7Rx73TMHCTfoPt3~H23ygRsojmX-uBC38ui~5aNRaw2Satg6E48CB8X0QtzehlLvczDQ3cDy3t1CzPvobcZC5Ei79k~lAM31wbYVORZiT6tAgsk1dEVQHEg6m1Ttd6JMklboFpSVYJHdw5CXC2pmqaFJELOlYP3kczOvvmpwlli0~N2AMA8cu8SXrP15qrF6LByYmyQxRmrROygbQKLI5agbmtlWnZRo76mGqVqgdpJ4U85rZel7YmBkeHNtGOlt3u8TMFNq9LG9aMcjyGMljvCGSB8Vpk8NLAzdgC0ttgqS-F2PgCmBkO-MTdS55fslw__"
                alt="Organizer"
              />
              <h1 className="text-sm">Miss Shweta</h1>
            </div>
          </div>

          
          <p className="font-semibold text-lg mt-6">Why you should attend</p>
          <p className="text-sm sm:text-base mt-2">
            <span className="font-bold">1. New Way of Thinking:</span> Learn how mixing art and science changes how we make things look and work. <br />
            <br />
            <span className="font-bold">2. Find What Makes You Say "Wow!":</span> See cool designs and get ideas for your own projects.
          </p>
        </div>

       
        <div className="w-full max-w-md bg-gray-300 p-6 rounded-md">
          <div className="bg-white p-6 rounded-md shadow-md">
            <form className="space-y-4">
              <input type="text" placeholder="First Name" required className="w-full bg-gray-100 rounded-sm px-4 py-2" />
              <input type="text" placeholder="Last Name" required className="w-full bg-gray-100 rounded-sm px-4 py-2" />
              <input type="email" placeholder="Email" required className="w-full bg-gray-100 rounded-sm px-4 py-2" />
              <button className="w-full bg-[#3066BE] text-white py-2 rounded-sm">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event1;
