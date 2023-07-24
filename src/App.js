import React, { useState } from 'react'
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Work from "./Components/Work";

function App() {
  const [mode, setMode] = useState(false)
  const handleMode = () => setMode(!mode)
  return (
    <div className={`${mode ? "transition ease-in delay-150  bg-[#ffffff] text-black" : " transition ease-out delay-150 bg-[#000000] text-white"}`} >
      <Navbar mode={mode} handleMode={handleMode} />
      <Home mode={mode} />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
