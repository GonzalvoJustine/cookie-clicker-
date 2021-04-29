import React from "react";
import Button from "../atoms/Button";

import money from '../../images/money.png';

export default function Upgrade(props) {

  return (
    <div>
      <Button
        icon={props.upgrade.icon}
        text_alt={props.upgrade.name}
        text={props.upgrade.name}
        money={money}
        money_alt={props.upgrade.name}
        cost={props.upgrade.cost}
        onClick={props.onPurchase}
        isDisabled={props.counter < props.upgrade.cost}
      />
    </div>
  )
}