// import React from "react";
// import Header from "../Header";
// import Whiteboard2line from "./Whiteboard2line";
// import {Link} from "react-router-dom"

// function Whiteboard2(){
// return(
// <div>
//          <Header/>
//     <div className="bg-amber-400 h-10 flex justify-center">
//                 <span className="text-2xl">Whiteboard</span>
//     </div>
   
//    <Whiteboard2line/>
//    <Link to="/whiteboard3"><img className="h-70 w-100 relative top-10 left-15" src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dwk2nGxXBnatB12kvFPbN9lGYsIDOH49qxka3gAypciFUsOOXhXcsb3TAn2syCv9Ze86b7Ev1LILk7jnW6xnw7MLifiQBHL9d0ZyPbZ2GcW1c6zJc6IZTtHYsZCWLr3yK3mbrgChI9jpIcCEgRYuqmR8ducnVcxloGo7tSYu5SzloZB1sExo~bzZeaAsJHawiaRaqHZzH0vOWfZntIkQ9QUMXCPYJ7pVC95K3GdV7wgl8fl0~d91cufMK3X2aRpQPm3lAAjQIbGM5IFhEgqcps7~Ie~BAB9pq7p8hBr00YXu~vVOf4GjdU54U9o6WYlRvY3bmWkWerF9sHrl2mktQA__"></img>
//    </Link>
//     <img src="C:\Users\sride\Downloads\Tool bar - Hover state.png"></img>
//     <div className="h-65 w-65 bg-amber-100 relative left-150 bottom-50 p-2">
//         <h1 className="font-bold pl-1">About Website </h1>
//         <p className="pt-1 pl-1">A website (also written as a web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.</p>
//         <div className="pt-3">
//         <img className="h-10 w-10 inline rounded-xl" src="https://s3-alpha-sig.figma.com/img/85f7/7acc/12645994af09b20859e102041c2169e7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i~rxk-AqNxaQbGsutOhjUrw8HUvcMYdTnVvl7Ob9zyn1Quk-MAIGOwI-UtPk83vkz6UWU1TSIwetWvs9-pGAAeSfwzB1Z8B53MrWnGlV3~NVzS4K2dVJoDapfljex88BJNWwNkMIpSCTXuaSchhq6dCMn-QoJW0ETbkH79ZGojgQfUZWYFZsxwbtsriPScSO0zAc1ukGULV24oVHpVhcP66xzhKSMZqj1lBKKDKe2Aq917SUzgoQi6dywBUSfZQphWy824A~VVZTmrkHsD-tLZ4CmdStuAkJz6jCBqDth~6euwQ96OGDT3ITYmJD9dfXW1hDle1V0R4~VAw8pYf45A__"></img>
//      <a className="underline pl-1" href="">What is Website?</a>
//      </div>
//     </div>
    
// </div>
// )
// }
// export default Whiteboard2
import React from "react";
import Header from "../Header";
import Whiteboard2line from "./Whiteboard2line";
import { Link } from "react-router-dom";

function Whiteboard2() {
  return (
    <div>
      <Header />

      {/* Whiteboard Title */}
      <div className="bg-amber-400 h-10 flex justify-center items-center">
        <span className="text-2xl">Whiteboard</span>
      </div>

      {/* Whiteboard Content */}
      <Whiteboard2line />

      {/* Clickable Image */}
      <div className="flex justify-center mt-6">
        <Link to="/whiteboard3">
          <img
            className="w-full max-w-[500px] h-auto object-cover"
            src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dwk2nGxXBnatB12kvFPbN9lGYsIDOH49qxka3gAypciFUsOOXhXcsb3TAn2syCv9Ze86b7Ev1LILk7jnW6xnw7MLifiQBHL9d0ZyPbZ2GcW1c6zJc6IZTtHYsZCWLr3yK3mbrgChI9jpIcCEgRYuqmR8ducnVcxloGo7tSYu5SzloZB1sExo~bzZeaAsJHawiaRaqHZzH0vOWfZntIkQ9QUMXCPYJ7pVC95K3GdV7wgl8fl0~d91cufMK3X2aRpQPm3lAAjQIbGM5IFhEgqcps7~Ie~BAB9pq7p8hBr00YXu~vVOf4GjdU54U9o6WYlRvY3bmWkWerF9sHrl2mktQA__"
            alt="Whiteboard Preview"
          />
        </Link>
      </div>

      {/* Additional Image */}
      <div className="flex justify-center mt-4">
        <img
          className="w-full max-w-[500px] h-auto object-cover"
          src="/path/to/image.png" // Replace with actual image path
          alt=""
        />
      </div>

      {/* About Website Section */}
      <div className="max-w-md bg-amber-100 rounded-lg p-4 mx-auto mt-8 shadow-lg">
        <h1 className="font-bold text-lg">About Website</h1>
        <p className="mt-2 text-sm">
          A website (also written as a web site) is a collection of web pages and related content
          that is identified by a common domain name and published on at least one web server.
        </p>

        {/* Info with Image */}
        <div className="flex items-center mt-3 space-x-2">
          <img
            className="h-10 w-10 rounded-xl object-cover"
            src="https://s3-alpha-sig.figma.com/img/85f7/7acc/12645994af09b20859e102041c2169e7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i~rxk-AqNxaQbGsutOhjUrw8HUvcMYdTnVvl7Ob9zyn1Quk-MAIGOwI-UtPk83vkz6UWU1TSIwetWvs9-pGAAeSfwzB1Z8B53MrWnGlV3~NVzS4K2dVJoDapfljex88BJNWwNkMIpSCTXuaSchhq6dCMn-QoJW0ETbkH79ZGojgQfUZWYFZsxwbtsriPScSO0zAc1ukGULV24oVHpVhcP66xzhKSMZqj1lBKKDKe2Aq917SUzgoQi6dywBUSfZQphWy824A~VVZTmrkHsD-tLZ4CmdStuAkJz6jCBqDth~6euwQ96OGDT3ITYmJD9dfXW1hDle1V0R4~VAw8pYf45A__"
            alt="Website Info"
          />
          <a className="underline text-blue-600 text-sm" href="#">
            What is Website?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Whiteboard2;
