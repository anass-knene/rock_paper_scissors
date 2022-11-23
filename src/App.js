import React from "react";
import SelectAddName from "./SelectAddName";
import LandingPage from "./LandingPage";
import { Link, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./context/context";
import Play from "./Play";
import "./styles/App.scss";
import "animate.css";
function App() {
  const { isUserExit, setIsUserExit, userName, setUserName } =
    useContext(MyContext);
  return (
    <div className="App">
      {!isUserExit && (
        <div className="nameExit">
          <div className="headerName">
            <h1>Nick Name : </h1>
            <h1>{userName}</h1>
          </div>
          <Link
            onClick={() => {
              setIsUserExit(true);
              setUserName(false);
            }}
            to="/"
          >
            <h2>Exit</h2>
          </Link>
        </div>
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/selectAddName" element={<SelectAddName />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </div>
  );
}

export default App;
