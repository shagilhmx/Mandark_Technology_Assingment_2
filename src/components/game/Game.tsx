import React, { useEffect, useState } from "react";
import styles from "./Game.module.css";

interface GameProp {}

const Game: React.FC<GameProp> = () => {
  const {
    containerStyle,
    outerBoxStyle,
    innerBoxStyle,
    boxStyle,
    scoreBoard,
    timerBoard,
    displayBoard,
    startButton,
    buttonStyle,
    disabled,
  } = styles;
  const [arrayDivs, setArrayDivs] = useState<any>([]);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [gameRunning, setGameRunning] = useState<boolean>();
  const [timer, setTimer] = useState<number>(0);
  const rows = 3,
    cols = 3;

  // update function to update the state of matrix
  const updateMatrix = (show?: any) => {
    const matrixElements: any = [];
    const randomRow = Math.floor(Math.random() * rows);
    const randomCol = Math.floor(Math.random() * cols);

    for (let i = 0; i < rows; i++) {
      const rowElements = [];
      for (let j = 0; j < cols; j++) {
        const shouldDisplayWord = i === randomRow && j === randomCol;
        const word = shouldDisplayWord && !show ? "HIT" : null;
        const cell = React.createElement(
          "div",
          {
            key: `key_${i}_${j}`,
            id: `id_${i}_${j}`,
            className: boxStyle,
          },
          word,
        );
        rowElements.push(cell);
      }

      matrixElements.push(
        React.createElement(
          "div",
          {
            key: `key${i}`,
            id: `id_${i}`,
            className: innerBoxStyle,
          },
          rowElements,
        ),
      );
    }
    setArrayDivs(matrixElements);

    const timeoutId = setTimeout(() => {
      const updatedMatrix = matrixElements.map((row: any) =>
        React.cloneElement(
          row,
          {},
          row.props.children.map((cell: any) =>
            React.cloneElement(cell, {}, null),
          ),
        ),
      );
      setArrayDivs(updatedMatrix);
    }, 1000);
  };

  useEffect(() => {
    let gameInterval: any;
    // at first we pass true for the first render, as we don't need the hit message on first render till we start the game
    updateMatrix(true);
    if (gameRunning) {
      updateMatrix();
      gameInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 2);
        updateMatrix();
      }, 2000);

      const gameDuration = 60000;
      const endGameTimeout = setTimeout(() => {
        setGameRunning(false);
        clearInterval(gameInterval);
      }, gameDuration);

      return () => clearTimeout(endGameTimeout);
    }

    return () => clearInterval(gameInterval);
  }, [gameRunning]);

  //   calcalute score
  const handleClicked: any = (e: any) => {
    setTotalScore(totalScore + (e?.target?.innerHTML == "HIT" ? 5 : -2.5));
  };

  // function for starting the game
  const handleStartGame = () => {
    if (!gameRunning) setGameRunning(true);
  };

  return (
    <div className={containerStyle}>
      <div className={buttonStyle}>
        <button
          className={`${startButton} ${gameRunning ? disabled : ""}`}
          onClick={handleStartGame}
        >
          Start Game
        </button>
      </div>
      <div
        className={`${outerBoxStyle} ${gameRunning ? "" : disabled}`}
        onClick={handleClicked}
      >
        {arrayDivs}
      </div>
      <div className={displayBoard}>
        {/* {timer == 60 ? ( */}
        <div className={scoreBoard}>
          <label htmlFor="totalScore">Total Score : </label>
          <span id="totalScore">{totalScore}</span>
        </div>
        {/* ) : undefined} */}
        <div className={timerBoard}>
          <label htmlFor="timer">Timer : </label>
          <span id="timer">{timer}</span>
        </div>
      </div>
    </div>
  );
};

export default Game;
