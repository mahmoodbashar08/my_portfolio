import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MyName } from "./components/right_side/myName";
function MyRouter() {
  return (
    <Row>
      <Col md={6} lg={6} sm={0} xs={0} className="d-none d-lg-block d-md-block">
        <p>Left_main </p>
      </Col>
      <Col md={6} lg={6} sm={12} xs={12}>
        <p>Right_main </p>
        <MyName />
      </Col>
    </Row>
  );
}

export default MyRouter;
