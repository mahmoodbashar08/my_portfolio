import { Col, Row } from "antd";
import React from "react";
import Typewriter from "typewriter-effect";
import state from "../data/imA.json";
import "./MyName.css";
export const MyName = () => {
  let x = [];
  state.state.map((statee) => {
    console.log(statee.title);
    x = [...x, statee.title];
  });
  return (
    <div className="main_container">
      <ul>
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li> <li>hello</li>{" "}
        <li>hello</li> <li>hello</li> <li>hello</li>
      </ul>
    </div>
    // <Row>
    //   <Row justify="center" gutter={16}>
    //     <Col span={24}>
    //       <div className="name">{state.name[0].name}</div>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col span={24}>
    //       <div className="IMA">
    //         <div>I'M </div>
    //         <Typewriter
    //           options={{
    //             strings: x,
    //             autoStart: true,
    //             pauseFor: "300",
    //             loop: true,
    //           }}
    //         />
    //       </div>
    //     </Col>
    //   </Row>
    // </Row>
  );
};
