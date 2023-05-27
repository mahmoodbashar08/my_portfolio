import React from "react";
import { UserAuth } from "../../UsePosition";

const Project = () => {
  const { position, setPosition } = UserAuth();
  let backgroundColor;

  if (position > 1700) {
    backgroundColor = "rgba(171, 88, 164, 0.5)";
  } else if (position > 800) {
    backgroundColor = "rgba(171, 88, 164, 0.3)";
  } else {
    backgroundColor = "rgba(171, 88, 164, 0.5)";
  }

  const transitionValue =
    position > 800 ? "background-color 0.3s ease" : "background-color 0.3s";

  return (
    <div
      style={{
        height: "700px",
        backgroundColor,
        transition: transitionValue,
      }}>
      Project
    </div>
  );
};

export default Project;
