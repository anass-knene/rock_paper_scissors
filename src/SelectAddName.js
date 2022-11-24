import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyContext } from "./context/context";
function SelectAddName() {
  const [youShoosScissor, setYouShoosScissor] = useState(false);
  const [youShoosRock, setYouShoosRock] = useState(false);
  const [youShoosPaper, setYouShoosPaper] = useState(false);
  const [modalBoolean, setModalBoolean] = useState(false);
  const { yourSelection, setYourSelection, setUserName } =
    useContext(MyContext);
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
  const submitNickNameFun = (e) => {
    e.preventDefault();
    let form = document.querySelector("form");
    console.log(form.classList);
    form.classList.remove("animate__bounceInDown");
    form.classList.add("animate__bounceOut");
    setUserName(e.target.playerName.value);
    setTimeout(() => {
      setModalBoolean(true);
      form.classList.remove("animate__bounceOut");
    }, 2000);
  };
  useEffect(() => {
    if (!youShoosScissor && !youShoosRock && !youShoosPaper) {
      setYourSelection("");
    }
  }, [youShoosScissor, youShoosRock, youShoosPaper, modalBoolean]);
  return (
    <div className="selectAddName">
      {!modalBoolean && (
        <>
          <div className="fullScreenModal"></div>
          <form
            className="nickNameModal animate__animated animate__bounceInDown"
            onSubmit={submitNickNameFun}
          >
            <div className="NickNameInput">
              <h2> Nick Name</h2>
              <input type="text" name="playerName" required />
            </div>
            <input type="submit" value="Submit" className="submitInput" />
          </form>
        </>
      )}

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
      {yourSelection && (
        <Link className="submitInput" to="/play">
          Start
        </Link>
      )}
    </div>
  );
}

export default SelectAddName;
