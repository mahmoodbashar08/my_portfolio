import React from "react";
import { UserAuth } from "../../UsePosition";

const LeftSide = () => {
  const { position, setPosition } = UserAuth();
  let backgroundColor;
  let transition = "background-color 0.3s ease-in-out";

  if (position < 250) {
    backgroundColor = "#E54849";
  } else if (position >= 250 && position < 800) {
    backgroundColor = "#DE9D36";
  } else if (position >= 800) {
    backgroundColor = "#729974";
  }

  return (
    <div
      style={{
        top: 0,
        width: "50%",
        height: "100vh",
        backgroundColor,
        overflow: "auto",
        transition,
      }}>
      LeftSide content
    </div>
  );
};

export default LeftSide;
