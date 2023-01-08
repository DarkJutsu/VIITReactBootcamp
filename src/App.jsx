import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Chistes } from "./Chistes";

function App() {
  return (
    <div className="App">
      <img
        width={300}
        src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
      />
      <h1 className="title">jokes</h1>
      <Chistes />
    </div>
  );
}

export default App;
