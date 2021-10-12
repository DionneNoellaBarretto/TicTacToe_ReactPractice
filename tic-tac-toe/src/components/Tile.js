import React from "react";

export default function Tile(props) {
  return <button onClick={props.onClick}>{props.value}</button>;
}
