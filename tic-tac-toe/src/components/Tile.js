import React from "react";
// import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

export default function Tile(props) {
  return <button className="btn" onClick={props.onClick}>{props.value}</button>;
}
