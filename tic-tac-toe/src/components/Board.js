import React from "react";
import Tile from "./Tile";

export default function Board(props) {
  return (
    <div className="board">
      <div>
        {/* set value of tiles to the tile index (repeat 3 times since starting from 0 for each set meaning each row for a 3x3 grid) */}
        <Tile
          value={props.tiles[0]}
          onClick={() => {
            props.onClick(0);
          }}
        />
        <Tile
          value={props.tiles[1]}
          onClick={() => {
            props.onClick(1);
          }}
        />
        <Tile
          value={props.tiles[2]}
          onClick={() => {
            props.onClick(2);
          }}
        />
        <div>
          <Tile
            value={props.tiles[3]}
            onClick={() => {
              props.onClick(3);
            }}
          />

          <Tile
            value={props.tiles[4]}
            onClick={() => {
              props.onClick(4);
            }}
          />

          <Tile
            value={props.tiles[5]}
            onClick={() => {
              props.onClick(5);
            }}
          />
        </div>
        <div>
          <Tile
            value={props.tiles[6]}
            onClick={() => {
              props.onClick(6);
            }}
          />

          <Tile
            value={props.tiles[7]}
            onClick={() => {
              props.onClick(7);
            }}
          />

          <Tile
            value={props.tiles[8]}
            onClick={() => {
              props.onClick(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}
