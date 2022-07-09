import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyRouter from "./MyRouter";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MyRouter />} />
          <Route path="/*" element={<p>404 error</p>} />
        </Routes>
      </Router>
      {/* <MyRouter /> */}
    </div>
  );
}

export default App;
