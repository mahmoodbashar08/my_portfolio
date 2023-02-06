import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";

import MyRouter from "./MyRouter";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyRouter />} />
        <Route path="/*" element={<p>404 error</p>} />
      </Routes>
    </Router>
  );
}

export default App;
