import React, { useState } from 'react'
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Message from "./Components/Message";


function App() {
  const [mode, setMode] = useState(false)
  const handleMode = () => setMode(!mode)
  return (
    <div className={`${mode ? "transition ease-in delay-150  bg-[#ffffff] text-black" : " transition ease-out delay-150 bg-[#101426] text-white"}`} >
     {/* <Message /> */}
      <Navbar mode={mode} handleMode={handleMode} />
      <Home mode={mode} />
      <Education mode={mode} />
      <Skills />
      <Work mode={mode}/>
      <Contact mode={mode}  />
    </div>
  );
}

export default App;
