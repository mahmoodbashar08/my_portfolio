import React from "react";
import { UserAuth } from "../../UsePosition";

const Skills = () => {
  const { position, setPosition } = UserAuth();
  const backgroundColor =
    position > 800 ? "rgba(222, 157, 54, 0.3)" : "rgba(222, 157, 54, 0.5)";

  const transitionValue =
    position > 800 ? "background-color 0.3s ease" : "background-color 0.3s";

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
