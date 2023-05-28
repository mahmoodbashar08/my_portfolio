import React from "react";
import { UserAuth } from "../../UsePosition";
import "./RightStyle.css";
const Work = () => {
  const { position, setPosition } = UserAuth();
  const paddingLeft = position > 1800 ? 60 : position > 1400 ? 20 : 60;

  const opacity = position > 1800 ? "0.5" : position > 1400 ? "1" : "0.5";

  const backgroundColor =
    position > 1400 ? "rgba(114, 153, 116, 0.5)" : "rgba(114, 153, 116, 0.3)";
  const transitionValue = "background-color 0.3s ease";
  return (
    <div
      style={{
        height: "700px",
        backgroundColor,
        transition: transitionValue,
        paddingLeft: `${paddingLeft}px`,
        transition: "padding-left 0.3s ease",
        opacity,
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Oswald, sans-serif",
        }}>
        <div style={{ marginTop: "15px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 250 250"
            className="section-icon"
            width="90px"
            height="90px">
            <path
              d="M111.1 171.8l27.3-94.3m11.9 16.8l51.7 30.6-51.7 30.2m-50-60.8l-51.7 30.6 51.7 30.2"
              className="stroke"
              style={{ stroke: "black", strokeWidth: 5 }}></path>
          </svg>
        </div>
        <div className="mainName2">work</div>
      </div>
    </div>
  );
};

export default Work;
