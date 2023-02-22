import logo from "./logo.svg";
import "./App.css";
import Blob from "./Blob";
import { useState } from "react";

function App() {
  const [mouseEvent, setMouseEvent] = useState([]);
  return (
    <div
      className="App"
      onMouseMove={(e) => {
        setMouseEvent([e.clientX, e.clientY]);
      }}
    >
      <Blob mouse={mouseEvent} />
    </div>
  );
}

export default App;
