import React from 'react';

import Profile from '../../img/profile.jpg';

export default () =>{
  return (
    <header className="archHead">
      <img src={Profile} alt="profile" className="archHead__img" />
      <h1 className="heading--1 archHead__heading">STEPHAN STEPANSON</h1>
      <span>Archtect Designer</span>
    </header>
  );
}
