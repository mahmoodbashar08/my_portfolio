import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import state from "../data/imA.json";
import "./main.css";
function ImA() {
  //   console.log(state.state[0]);
  let x = [];
  state.state.map((statee) => {
    console.log(statee.title);
    x = [...x, statee.title];
  });
  console.log(x);
  return (
    <div className="ImA">
      <Typewriter
        options={{
          strings: x,
          autoStart: true,
          pauseFor: "300",
          loop: true,
        }}
      />
    </div>
  );
}

export default ImA;
