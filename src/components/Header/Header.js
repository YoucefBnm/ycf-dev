import React from 'react';
import Particles from 'react-particles-js';

import Mp4 from '../../img/video.mp4';
import Webm from '../../img/video.webm';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density:{
        enable: true,
        value_area: 400
      }
    }
  }
}

export default () =>{
  return (
    <header className="header">
      <Particles className='particles' params={particlesOptions} />

      <div className="video">
        <div className="video__bg">
          <video autoPlay muted loop className="video__content">
            <source src={Mp4} type="video/mp4" />
            <source src={Webm} type="video/webm" />
          </video>
        </div>
      </div>

      <div className="header__content">
        <h1 className="heading--1 header__heading">ycf dev</h1>
        <p className="header__text"><span>Youcef Bnm</span> Front end web developer</p>
        <p className='header__text'>use the most important marketing tool, put your organisation on the map.</p>
      </div>
    </header>
  );
}
