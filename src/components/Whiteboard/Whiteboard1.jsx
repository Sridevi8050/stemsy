// import React from "react";
// import Header from "../Header";
// import Whiteboard2line from "./Whiteboard2line";
// import {Link} from "react-router-dom"

// function Whiteboard1(){
// return(
//     <div>
//          <Header/>
//     <div className="bg-amber-400 h-10 flex justify-center">
//                 <span className="text-2xl">Whiteboard</span>
//     </div>
   
//    <Whiteboard2line/>
//    <Link to="/whiteboard2"><img className="h-70 w-100 relative top-10 left-15" src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dwk2nGxXBnatB12kvFPbN9lGYsIDOH49qxka3gAypciFUsOOXhXcsb3TAn2syCv9Ze86b7Ev1LILk7jnW6xnw7MLifiQBHL9d0ZyPbZ2GcW1c6zJc6IZTtHYsZCWLr3yK3mbrgChI9jpIcCEgRYuqmR8ducnVcxloGo7tSYu5SzloZB1sExo~bzZeaAsJHawiaRaqHZzH0vOWfZntIkQ9QUMXCPYJ7pVC95K3GdV7wgl8fl0~d91cufMK3X2aRpQPm3lAAjQIbGM5IFhEgqcps7~Ie~BAB9pq7p8hBr00YXu~vVOf4GjdU54U9o6WYlRvY3bmWkWerF9sHrl2mktQA__"></img>
//    </Link>
//     <img src="C:\Users\sride\Downloads\Tool bar - Hover state.png"></img>
//     </div>
// )
// }
// export default Whiteboard1
import React from "react";
import Header from "../Header";
import Whiteboard2line from "./Whiteboard2line";
import { Link } from "react-router-dom";

function Whiteboard1() {
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
        <Link to="/whiteboard2">
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
    </div>
  );
}

export default Whiteboard1;
