import React from 'react';
import './_videoHead.scss';

import Mp4 from '../../../img/video-head.mp4';
import Webm from '../../../img/video-head.webm';




export default () =>{
  return (
    <header className="videoHead">
      <div className="video videoHead__video">
        <div className="video__bg videoHead__video--bg">
          <video autoPlay muted loop className="video__content videoHead__video--content">
            <source src={Mp4} type='video/mp4' />
            <source src={Webm} type='video/webm' />
          </video>
        </div>
      </div>

      <div className="videoHead__content">
        <h1 className="heading--1 videoHead__heading">winter is coming</h1>
        <p className="videoHead__text">now go home and get your snow skis</p>
      </div>
    </header>
  );
}
