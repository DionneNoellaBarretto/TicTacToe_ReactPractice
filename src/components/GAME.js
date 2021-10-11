import React from 'react';
import Board from '/.Board';

export default function GAME() {
    const status ="X is the next player!";
    const moves = <li><button> Start Game </button></li>;
    return <div>
                <div className="board">
                <Board></Board>
                </div>
                <div className="info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>
        </div>
}
