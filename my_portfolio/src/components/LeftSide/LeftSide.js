import React from "react";
import { UserAuth } from "../../UsePosition";
import Image from "./Image";
import "./LeftStyle.css";
const LeftSide = () => {
  const { position, setPosition } = UserAuth();
  let backgroundColor = "#E54849";
  let transition = "background-color 0.3s ease-in-out";

  if (position < 250) {
    backgroundColor = "#E54849";
  } else if (position >= 250 && position < 800) {
    backgroundColor = "#DE9D36";
  } else if (position >= 800 && position < 1800) {
    backgroundColor = "#729974";
  } else if (position >= 1800) {
    backgroundColor = "#AB58A4";
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
      <Image />
    </div>
  );
};

export default LeftSide;
