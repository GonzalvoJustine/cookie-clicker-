import React from "react";

export default function Button(props) {

  const { isDisabled, onClick, icon, text_alt, text, money, money_alt, cost } = props; // Décompose les props

  return (
    <button
      className="Button"
      disabled={isDisabled}
      onClick={onClick}
    >
      <img className="icon" src={icon} alt={text_alt}/>
      <div className="Button__content">
        <div className="text">{text}</div>
        <span>
          <img src={money} alt={money_alt}/>
          {cost}
        </span>
      </div>
    </button>
  )
}