import React from 'react';
import Mp4 from '../../img/video.mp4';
import Webm from '../../img/video.webm';


export default () =>{
  return (
    <header className="header">
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
        <p className="header__text"><strong>Youcef Bnm</strong> Front end web developer</p>
        <p className='header__text'>use the most important marketing tool, put your organisation on the map.</p>
        <a href="#contact" className="btn btn--anim btn--inline btn--red header__btn">contact now</a>
      </div>
    </header>
  );
}
