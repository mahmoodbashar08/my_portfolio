import { Col, Row } from "antd";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
function App() {
  return (
    <div className="App">
      <Row>
        <Col xs={0} sm={13} md={13} xl={13}>
          <LeftSide />
        </Col>
        <Col xs={24} sm={11} md={11} xl={11}>
          <RightSide />
        </Col>
      </Row>
    </div>
  );
}

export default App;
