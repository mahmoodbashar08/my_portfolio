import React from "react";
import { MyName } from "./components/right_side/myName";
import Image from "./components/left_side/Image";
import { Button, Col, Row } from "antd";
import Skills from "./components/right_side/Skills";

function MyRouter() {
  return (
    <Row style={{ height: "100vh" }}>
      <Col span={12} lg={12} md={12} sm={12} xs={0}>
        <div
          style={{
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}>
          <Image />
        </div>
      </Col>
      <Col span={12} lg={12} md={12} sm={12} xs={24}>
        <MyName />
        <Skills />
      </Col>
    </Row>
  );
}

export default MyRouter;
