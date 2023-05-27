import React from "react";
import { UserAuth } from "../../UsePosition";
import Contact from "./Contact";
import Experience from "./Experience";
import Name from "./Name";
import Project from "./Project";
import Skills from "./Skills";

const RightSide = () => {
  const { position, setPosition } = UserAuth(0);

  window.onscroll = () => {
    console.log("Current scroll position: ", window.pageYOffset);
    setPosition(window.pageYOffset);
  };
  return (
    <div>
      <Name />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};

export default RightSide;
