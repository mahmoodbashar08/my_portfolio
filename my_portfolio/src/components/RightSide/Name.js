import React from "react";
import { UserAuth } from "../../UsePosition";
import Typewriter from "typewriter-effect";
import "./RightStyle.css";
const Name = () => {
  const { position, setPosition } = UserAuth();

  const backgroundColor =
    position > 250 ? "rgba(229, 72, 73, 0.2)" : "rgba(229, 72, 73, 0.5)";
  const opacity = position > 250 ? ".5" : "1";
  const transitionValue = "background-color 0.3s ease";
  const paddingRight = position > 245 ? 0 : 35;
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundColor,
        transition: transitionValue,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div
        style={{
          paddingRight: `${paddingRight}px`,
          transition: "padding-right 0.3s ease",
        }}>
        <h1
          className="mainName"
          style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 500,
            opacity,
          }}>
          Mahmood Bashar
        </h1>
        {/* <br /> */}
        <h3
          className="Discripe"
          style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 500,
            opacity,
          }}>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Front-end developer")
                .pauseFor(1500)
                .deleteAll()
                .typeString("UI/UX designer")
                .pauseFor(1500)
                .changeDeleteSpeed(20) // Adjust delete speed for UI/UX designer
                .deleteChars(13) // Delete "UI/UX designer" characters one by one
                .start();
            }}
          />
        </h3>
      </div>
    </div>
  );
};

export default Name;
