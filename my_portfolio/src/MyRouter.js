import React from "react";
import Main from "./components/main";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyRouter() {
  return (
    <Row>
      <Col md={6} lg={6} sm={0} xs={0} className="d-none d-lg-block d-md-block">
        1 of 2
      </Col>
      <Col md={6} lg={6} sm={12} xs={12}>
        <Main />
      </Col>
    </Row>
  );
}

export default MyRouter;
