import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <div className="flex justify-center self-center">Designed by Raphael Pang.</div>
    </div>
  );
}

export default App;
