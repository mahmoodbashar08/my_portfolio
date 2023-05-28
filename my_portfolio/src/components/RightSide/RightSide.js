import React from "react";
import { UserAuth } from "../../UsePosition";
import Contact from "./Contact";
import Work from "./Work";
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
      <Work />
      <Project />
      <Contact />
    </div>
  );
};

export default RightSide;
