import React from "react";
import { UserAuth } from "../../UsePosition";

const Skills = () => {
  const { position, setPosition } = UserAuth();
  let backgroundColor;
  let transitionValue;

  if (position < 250) {
    backgroundColor = "rgba(222, 157, 54, 0.3)";
    transitionValue = "background-color 0.3s";
  } else if (position >= 250 && position <= 800) {
    backgroundColor = "rgba(222, 157, 54, 0.5)";
    transitionValue = "background-color 0.3s";
  } else {
    backgroundColor = "rgba(222, 157, 54, 0.3)";
    transitionValue = "background-color 0.3s ease";
  }

  return (
    <div
      style={{
        height: "700px",
        backgroundColor,
        transition: transitionValue,
      }}>
      Skills
    </div>
  );
};

export default Skills;
