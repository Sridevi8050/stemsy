import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Home1 from "./components/Home/Home1"
import Courses from "./components/Courses/Courses"
import Whiteboard from "./components/Whiteboard/Whiteboard"
import Whiteboard1 from "./components/Whiteboard/Whiteboard1"
import Whiteboard2 from "./components/Whiteboard/Whiteboard2"
import Whiteboard3 from "./components/Whiteboard/Whiteboard3"
import Whiteboard4 from "./components/Whiteboard/Whiteboard4"
import Stemassessment from "./components/Stem assessment/Stemassessment"
import Stemassessment1 from "./components/Stem assessment/Stemassessment1"
import Stemassessment2 from "./components/Stem assessment/Stemassessment2"
import Library from "./components/Library/Library";
import Help from "./components/Help/Help"
import Settings from "./components/Setting/Settings"
import Profile from "./components/Profile/Profile"
import Allcoureses from "./components/Courses/Allcoureses"
import Aboutcourse from "./components/Courses/Aboutcourse"
import Video from "./components/Courses/Video";
import Home from "./components/Home/Home";
import Eventpage from "./components/Event/Eventpage";
import Event1 from "./components/Event/Event1"
import Ai1 from "./components/Ai/Ai1"

function App(){
return(
    <div>
        <BrowserRouter>
             <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/home" element={<Home1/>}/>
                <Route path="/homefirst" element={<Home1/>}/>
                <Route path="/homewithoutlogin" element={<Home/>}/>
                <Route path="/courses" element={<Courses/>}/>
                <Route path="/allcourses" element={<Allcoureses/>}/>
                <Route path="/aboutcourse" element={<Aboutcourse/>}/>
                <Route path="/video" element={<Video/>}/>
                <Route path="/event" element={<Eventpage/>}/>
                <Route path="/event1" element={<Event1/>}/>
                <Route path="/whiteboard" element={<Whiteboard/>}/>
                <Route path="/imgwhiteboard2" element={<Whiteboard1/>}/>
                <Route path="/Whiteboard2" element={<Whiteboard2/>}/>
                <Route path="/Whiteboard3" element={<Whiteboard3/>}/>
                <Route path="/whiteboard4" element={<Whiteboard4/>}/>
                <Route path="/Stemassessment" element={<Stemassessment/>}/>
                <Route path="/stemassessment1" element={<Stemassessment1/>}/>
                <Route path="/stemassessment2" element={<Stemassessment2/>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/Help" element={<Help/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/ai" element={<Ai1/>}/>
             </Routes>
        </BrowserRouter>
   

</div>
)
}
export default App


