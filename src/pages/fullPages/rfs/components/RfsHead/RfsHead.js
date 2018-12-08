import React from 'react';
import Logo from '../../img/rfs-logo.png';

const RandomRobot = () =>{
  return <img src={`https://robohash.org/${Math.random()}?150x150`} alt="robot" />
}

export default () =>{
  return (
    <header className="rfsHead">
      <div className="rfsHead__row rfsHead__row--1">
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
      </div>

      <div className="rfsHead__row rfsHead__row--2">
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
      </div>

      <div className="rfsHead__row rfsHead__row--3">
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
        <RandomRobot />
      </div>

      <div className="rfsHead__content">
        <div className="rfsHead__logo-box">
          <img src={Logo} alt="logo" />
          <h2 className="heading--1">robots for sale</h2>
        </div>
        <span>Discover our very sophisticated robots with high AI system, which makes them recognize and learn.</span>
      </div>    </header>
  );
}
