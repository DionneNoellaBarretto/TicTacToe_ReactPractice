import React from "react";

export default function Tile(props) {
  return <button class=".btn" onClick={props.onClick}>{props.value}</button>;
}
