import React from "react";

export default function UpgradeImage(props) {

  return (
    <div className='UpgradeImage'>
      <div className={props.upgrade.name}>
        <img src={props.upgrade.image} alt={props.upgrade.name}/>
        <div className="UpgradeImage__separatorBottom"></div>
      </div>
    </div>
  )
}