import React, { useContext } from "react";
import { BsArrowDown } from "react-icons/bs";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { MyContext } from "./context/context";
function LandingPage() {
  const { isUserExit, setIsUserExit } = useContext(MyContext);
  return (
    <div className="rules">
      <h1>Rules</h1>
      <BsArrowDown size="4em" style={{ marginBottom: "30px" }} color="red" />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/1200px-Rock-paper-scissors.svg.png"
        alt="img"
        width="600px"
        height="600px"
      />
      <Link
        onClick={() => setIsUserExit(false)}
        to="/selectAddName"
        className="StartBtn"
      >
        Get Started
      </Link>
    </div>
  );
}

export default LandingPage;
