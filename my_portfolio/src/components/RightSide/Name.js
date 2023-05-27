import React from "react";
import { UserAuth } from "../../UsePosition";

const Name = () => {
  const { position, setPosition } = UserAuth();

  const backgroundColor =
    position > 250 ? "rgba(229, 72, 73, 0.2)" : "rgba(229, 72, 73, 0.5)";

  const transitionValue = "background-color 0.3s ease";

  return (
    <div
      style={{
        height: "500px",
        backgroundColor,
        transition: transitionValue,
      }}>
      Name
    </div>
  );
};

export default Name;
