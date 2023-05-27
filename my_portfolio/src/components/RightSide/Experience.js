import React from "react";
import { UserAuth } from "../../UsePosition";

const Experience = () => {
  const { position, setPosition } = UserAuth();
  const backgroundColor =
    position > 1400 ? "rgba(114, 153, 116, 0.5)" : "rgba(114, 153, 116, 0.3)";
  const transitionValue = "background-color 0.3s ease";
  return (
    <div
      style={{
        height: "700px",
        backgroundColor,
        transition: transitionValue,
      }}>
      Experience
    </div>
  );
};

export default Experience;
