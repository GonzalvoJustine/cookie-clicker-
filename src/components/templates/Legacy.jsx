import React from 'react';
import Button from '../atoms/Button';
import {NavLink} from "react-router-dom";

export default function Legacy() {

  return (
    <div>
      <h2>Ascend</h2>
      <section>
        <p>Do you REALLY want to ascend?</p>
        <div className='line'></div>
        <p>You will lose your progress and start over from scratch.</p>
        <div className='line'></div>
        <p>All your cookies will be converted into prestige and heavenly chips.</p>
        <div className='line'></div>
        <p>You will keep your achievements.</p>
      </section>
      <Button
        text="Yes!"
      />
      <Button
        text="No"
      />
      <NavLink to="/" className='close' onClick={() => window.close()}>x</NavLink>

    </div>
  );

}
