import React from 'react';
import './_galHead.scss';

import Resid from '../../fullPages/archPort/img/port-img-13.jpg';
import Tour from '../../fullPages/archPort/img/port-img-9.jpg';
import Planning from '../../fullPages/archPort/img/port-img-8.jpg';
import Building from '../../fullPages/archPort/img/port-img-14.jpg';

export default () =>{
  return (
    <header className="galHead">
      <div className="galHead__container galHead__container--1">
        <img src={Planning} alt="plan" className="galHead__bg galHead__bg--1" />
        <span>planning</span>
        <p>Management & time planning process.</p>
      </div>

      <div className="galHead__container galHead__container--2">
        <img src={Building} alt="building" className="galHead__bg galHead__bg--2" />
        <span>buildings</span>
        <p>unique buildings design & architecture.</p>
      </div>

      <div className="galHead__container galHead__container--3">
        <img src={Tour} className="galHead__bg galHead__bg--3" alt="tour" />
        <span>Tours</span>
        <p>combination of art design and heigh architectural security measures.</p>
      </div>

      <div className="galHead__container galHead__container--4">
        <img src={Resid} className="galHead__bg galHead__bg--4" alt="residence" />
        <span>residential</span>
        <p>modern residential home.</p>
      </div>
    </header>
  );
}
