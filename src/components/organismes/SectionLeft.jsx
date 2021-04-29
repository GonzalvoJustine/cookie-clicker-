import React from "react";
import PerfectCookie from "../../images/PerfectCookie.png";

export default function SectionLeft(props) {
  return (
    <div className="App__section_left">
      <h1 className="App__title">Pirate Spaghetti's bakery</h1>
      <h2 className="App__subtitle">
        {Math.round(props.counterAmount)} cookies
        <span className="App__span">per second : {props.counterPerSeconds}</span>
      </h2>
      <div className="App__cookie">
        <img className="App__img_bigcookie" onClick={props.onClick} src={PerfectCookie} alt="Big click cookie"/>
        <div className="App__effectCookie">
        </div>
        <div className="App__effectCookieOne">
        </div>
      </div>
    </div>
  );
}