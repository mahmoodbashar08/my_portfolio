import React from "react";
import Typewriter from "typewriter-effect";
import { UserAuth } from "../../UseAuth";
import state from "../data/imA.json";
import "./MyName.css";

export const MyName = () => {
  const { position, setPosition } = UserAuth();
  let x = [];
  state.state.map((statee) => {
    console.log(statee.title);
    x = [...x, statee.title];
  });
  return (
    <div
      style={
        position > 100
          ? {
              background: "#aaa",
              opacity: ".2",
              fontSize: "20pt",
              transition: "background-color  .5s ,font-size .5s",
            }
          : {
              backgroundColor: "rgba(229, 72, 73, 0.5)",
              fontSize: "25pt",
              transition: "background .5s,font-size .5s",
            }
      }>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
          fontFamily: "Quattrocento,serif",
          minHeight: "80vh",

          padding: "5px",
          // backgroundColor: "rgba(229, 72, 73, 0.5)",
        }}>
        <div>
          <div style={{ marginRight: "10px" }}>
            {state.name[0].name} &emsp; &emsp;
          </div>
          <div
            style={{
              marginTop: "5px",
              marginBottom: "5px",
            }}>
            I'M
          </div>
          <Typewriter
            options={{
              strings: x,
              autoStart: true,
              pauseFor: "300",
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};
