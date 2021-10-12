import React from "react";
import Board from "./Board";

export default function Game() {
  const currentPlayer = "Next Player is X";
  const moveHistory = (
    <li>
      <button>Begin Game</button>
    </li>
  );
  const tiles = Array(9).fill(null);

  return (
    <div>
      <div className="gameBoard">
        <Board tiles={tiles}></Board>
      </div>
      <div className="gameInfo">
        <div>{currentPlayer}</div>
        <ul>{moveHistory}</ul>
      </div>
    </div>
  );
}
