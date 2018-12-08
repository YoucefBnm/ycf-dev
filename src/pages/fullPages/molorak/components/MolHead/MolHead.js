import React from 'react';
import Logo from '../../img/molorak-logo.png';

export default () =>{
  return (
    <header className='molHead'>
      <img className="molHead__logo" src={Logo} alt="logo" />
      <div className="molHead__content">
        <h1 className="heading--1 molHead__heading">molorak travel agency</h1>
        <span>They told you there is seven wonders!! nope with us you'll discover a lot more, they divide the year in four seasons!! we divide the day in four seasons.</span>
      </div>
    </header>
  );
}
