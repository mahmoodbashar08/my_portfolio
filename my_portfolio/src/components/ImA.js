import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import state from "../data/imA.json";
import "./main.css";
function ImA() {
  state.state.map((statee) => {
    console.log(statee.name);
  });
  return (
    <div className="ImA">
      <Typewriter
        options={{
          strings: [state.state[0].name, state.state[1].name],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default ImA;
