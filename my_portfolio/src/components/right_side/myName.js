import React from 'react'
import Typewriter from "typewriter-effect";
import state from "../data/imA.json";
import './MyName.css'
export const MyName = () => {
            let x = [];
            state.state.map((statee)=> {
              console.log(statee.title);
              x = [...x, statee.title];
            });
  return (
    <div>
      <div className="line"></div>
      <div className="name">{state.name[0].name}</div>
      <div className="IMA">I'M </div>
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
