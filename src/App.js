import React from "react";
import "./styles/App.scss";
import { BsArrowDown } from "react-icons/bs";
function App() {
  return (
    <div className="App">
      <div className="rules">
        <h1>Rules</h1>
        <BsArrowDown size="4em" style={{ marginBottom: "30px" }} color="red" />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/1200px-Rock-paper-scissors.svg.png"
          alt="img"
          width="600px"
          height="600px"
        />
        <input type="button" value="Get Started" className="StartBtn" />
      </div>
    </div>
  );
}

export default App;
