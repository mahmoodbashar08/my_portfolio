import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [offset, setOffset] = useState(0);
  const [color, setColor] = useState("red");
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (offset >= 0 && offset <= 100) {
    console.log("hello from 0");
  } else if (offset >= 101 && offset <= 200) {
    console.log("hello from 101");
  }
  return (
    <div
      className="App"
      style={{ height: "4121px", backgroundColor: `${color}` }}
    ></div>
  );
}

export default App;
