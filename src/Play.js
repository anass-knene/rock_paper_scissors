import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MyContext } from "./context/context";
import {
  FaRegHandScissors,
  FaRegHandRock,
  FaRegHandPaper,
} from "react-icons/fa";

function Play() {
  const { yourSelection, userName, setYourSelection } = useContext(MyContext);
  const [playerSelection, setPlayerSelection] = useState("");
  const [resultUser, setResultUser] = useState(0);
  const [resultPl2, setResultPl2] = useState(0);
  const [yourResult, setYourResult] = useState("");
  const [playerResult, setPlayerResult] = useState("");

  let gameArray = ["Scissor", "Rock", "Paper"];
  let findPlayer2Match;
  function playAgainFun() {
    if (
      (yourSelection === "Scissor" && playerSelection === "Paper") |
      (yourSelection === "Rock" && playerSelection === "Scissor") |
      (yourSelection === "Paper" && playerSelection === "Rock")
    ) {
      // console.log("you win");
      setYourResult("You Win");
      setPlayerResult("You Lose");
      setResultUser(resultUser + 1);
      return;
    } else if (
      (yourSelection === "Scissor" && playerSelection === "Rock") |
      (yourSelection === "Rock" && playerSelection === "Paper") |
      (yourSelection === "Paper" && playerSelection === "Scissor")
    ) {
      // console.log("Player win");
      setPlayerResult("You Win");
      setYourResult("You Lose");
      setResultPl2(resultPl2 + 1);
      return;
    } else if (
      (playerSelection === "Scissor" && yourSelection === "Paper") |
      (playerSelection === "Rock" && yourSelection === "Scissor") |
      (playerSelection === "Paper" && yourSelection === "Rock")
    ) {
      // console.log("Player win");
      setPlayerResult("You Win");
      setYourResult("You Lose");
      setResultPl2(resultPl2 + 1);
      return;
    } else if (
      (playerSelection === "Scissor" && yourSelection === "Rock") |
      (playerSelection === "Rock" && yourSelection === "Paper") |
      (playerSelection === "Paper" && yourSelection === "Scissor")
    ) {
      // console.log("you win");
      setYourResult("You Win");
      setPlayerResult("You Lose");
      setResultUser(resultUser + 1);
      return;
    } else {
      // console.log("no one win");
      setYourResult("Draw");
      setPlayerResult("Draw");
    }

    let randomStringPl2 = Math.floor(Math.random() * gameArray.length);

    findPlayer2Match = gameArray.find(
      (item, index) => index === randomStringPl2
    );
    if (findPlayer2Match) {
      setPlayerSelection(findPlayer2Match);
    }
  }
  function iconShoosAgain(e) {
    e.preventDefault();

    let playAgain = [...document.getElementsByClassName("fa_playAgain")];
    for (const item of playAgain) {
      if (item.className.baseVal === e.target.className.baseVal) {
        if (item.classList.contains("scissors_playAgain")) {
          setYourSelection("Scissor");
        } else if (item.classList.contains("rock_playAgain")) {
          setYourSelection("Rock");
        } else {
          setYourSelection("Paper");
        }
        item.classList.toggle("selectAgain");
      } else {
        item.classList.remove("selectAgain");
      }
    }
  }
  if ((resultUser >= 10) | (resultPl2 >= 10)) {
    setResultUser(0);
    setResultPl2(0);
  }

  useEffect(() => {
    // playAgainFun();
  }, [yourSelection, playerSelection]);

  return (
    <div className="play">
      <div className="player1 pl">
        <form className="shoosAgain">
          <div className="userPlayAgainDiv">
            <h1 style={{ textTransform: "uppercase" }}>{userName}</h1>
            {/* <input
              type="button"
              value="Play"
              className="playAgainInput"
              onClick={playAgainFun}
            /> */}
          </div>
          <div className="divShoosAgain">
            <div className="scissorShoosAgain">
              <FaRegHandScissors
                className="fa_playAgain  scissors_playAgain"
                onClick={(e) => iconShoosAgain(e)}
              />
            </div>
            <div className="rockShoosAgain">
              <FaRegHandRock
                className="fa_playAgain rock_playAgain"
                onClick={(e) => iconShoosAgain(e)}
              />
            </div>
            <div className="paperShoosAgain">
              <FaRegHandPaper
                className="fa_playAgain paper_playAgain"
                onClick={(e) => iconShoosAgain(e)}
              />
            </div>
          </div>
        </form>
        <div className="result">
          <p>{yourResult}</p>
          <div className="score">
            <h2>{resultUser}</h2>
          </div>
        </div>
        {yourSelection === "Scissor" ? (
          <FaRegHandScissors className="fa_play  scissors_play" />
        ) : yourSelection === "Rock" ? (
          <FaRegHandRock className="fa_play rock_play" />
        ) : (
          <FaRegHandPaper className="fa_play paper_play" />
        )}
      </div>
      <div className="player2 pl">
        <h1>Player </h1>
        <div className="result">
          <p>{playerResult}</p>
          <div className="score">
            <h2>{resultPl2}</h2>
          </div>
        </div>
        {playerSelection === "Scissor" ? (
          <FaRegHandScissors className="fa_play  scissors_play" />
        ) : playerSelection === "Rock" ? (
          <FaRegHandRock className="fa_play rock_play" />
        ) : (
          <FaRegHandPaper className="fa_play paper_play" />
        )}
      </div>
    </div>
  );
}

export default Play;
