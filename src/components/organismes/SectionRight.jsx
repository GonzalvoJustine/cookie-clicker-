import React from 'react';
import Button from '../atoms/Button';
import Upgrade from '../molecules/Upgrade';

export default function SectionRight(props) {
  return (
    <div className='App__section_right'>
      <h2 className='App__subtitle'>Store</h2>
      <div className='App__store App__store_upgrades'></div>
      <div className='App__store App__store_products'></div>
      <div className='App__storeBuy'>
        <div className='App__BuyOrSell'>
          <p className='App_storeBuy_selected'>Buy</p>
          <p className="">Sell</p>
        </div>
        <p className='App_storeBuy_selected'>1</p>
        <p className="">10</p>
        <p className="">100</p>
        <p className='App_storeBuy_max'>Max</p>
      </div>
      {props.upgrades.map((upgrade, index) => (
        <Upgrade
          key={index}
          upgrade={upgrade}
          onClick={props.recruit(index)}
          counter={props.counterAmount}
        />
      ))}
    </div>
  );

}