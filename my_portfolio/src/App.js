// App.js
import React, { useEffect } from "react";
import { Col, Row } from "antd";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import { ProviderContext } from "./UsePosition";

function App() {
  return (
    <ProviderContext>
      <div className="App" style={{ width: "100%" }}>
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
              <LeftSide />
            </div>
          </Col>
          <Col span={12} lg={12} md={12} sm={12} xs={24}>
            <RightSide />
          </Col>
        </Row>
      </div>
    </ProviderContext>
  );
}

export default App;
