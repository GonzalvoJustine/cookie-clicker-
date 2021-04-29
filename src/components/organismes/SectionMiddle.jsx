import React from 'react';
import Router from './Router';
import UpgradeImage from "../molecules/UpgradeImage";

export default function SectionMiddle(props) {

  return (
    <div className='App__section_middle'>
      <div className="App__middle_separatorLeft"></div>
      <Router />
      <div className="App__middle_separatorRight"></div>
      {props.upgrades.map((upgrade, index) => (
        <UpgradeImage
          key={index}
          upgrade={upgrade}
          onPurchase={() => props.recruit(index)}
        />
      ))}
    </div>
  );

}