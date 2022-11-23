import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from "react-icons/fa";
import { MyContext } from "./context/context";
function SelectAddName() {
  const [youShoosScissor, setYouShoosScissor] = useState(false);
  const [youShoosRock, setYouShoosRock] = useState(false);
  const [youShoosPaper, setYouShoosPaper] = useState(false);
  const { yourSelection, setYourSelection } = useContext(MyContext);
  function changeBorderColor(e) {
    if (e.target.classList.contains("scissors")) {
      setYourSelection("Scissor");
      setYouShoosScissor(!youShoosScissor);
      setYouShoosPaper(false);
      setYouShoosRock(false);
    } else if (e.target.classList.contains("rock")) {
      setYourSelection("Rock");
      setYouShoosRock(!youShoosRock);
      setYouShoosPaper(false);
      setYouShoosScissor(false);
    } else if (e.target.classList.contains("paper")) {
      setYourSelection("Paper");
      setYouShoosPaper(!youShoosPaper);
      setYouShoosScissor(false);
      setYouShoosRock(false);
    }
  }
  useEffect(() => {
    if (!youShoosScissor && !youShoosRock && !youShoosPaper) {
      setYourSelection("");
    }
  }, [youShoosScissor, youShoosRock, youShoosPaper]);
  return (
    <div className="selectAddName">
      <div className="nickNameModal">
        <div className="NickNameInput">
          <h2> Nick Name</h2>
          <input type="text" name="playerName" />
        </div>
        <input type="button" value="Submit" />
      </div>
      {!yourSelection ? (
        <h1>Shoos One</h1>
      ) : (
        <h1>You Select {yourSelection}</h1>
      )}

      <div className="shoos">
        <FaRegHandScissors
          className={
            youShoosScissor
              ? "fa scissors youShoosScissor "
              : "fa scissors notShoos"
          }
          onClick={(e) => changeBorderColor(e)}
        />

        <FaRegHandRock
          className={youShoosRock ? "fa rock youShoosRock" : "fa rock notShoos"}
          onClick={(e) => changeBorderColor(e)}
        />

        <FaRegHandPaper
          className={
            youShoosPaper ? "fa paper youShoosPaper" : "fa paper notShoos"
          }
          onClick={(e) => changeBorderColor(e)}
        />
      </div>
    </div>
  );
}

export default SelectAddName;
