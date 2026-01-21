import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Scenery from "./components/Scenery";
import Badge from "./components/Badge";
import Journey from "./components/Journey";
import Aspiration from "./components/Aspiration";
import Posts from "./components/Posts";

function App() {

  return (
    <div className="border-x-8 border-[#ffdede] z-[9999]">
      <Navbar />
      <Home />
      <Badge />
      {/* <Work /> */}
      <Posts />

      <Scenery />
      <About />
      {/* <Skills /> */}
      
      {/* <Journey /> */}
      {/* <Aspiration /> */}
      <Contact />
      
      <div className="flex justify-center self-center py-8 bg-white">©️ 2026 Rafael Pang. All Rights Reserved</div>
    </div>
  );
}

export default App;
