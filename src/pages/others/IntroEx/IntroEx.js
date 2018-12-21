import React from 'react';
import './_introEx.scss';

import BuildingOne from '../../fullPages/archPort/img/port-img-8.jpg';
import BuildingTwo from '../../fullPages/archPort/img/port-img-14.jpg';

export default () =>{
  return (
    <div className="introEx">
      <div className="introEx__intro">
        <h2 className="heading--1 introEx__heading">gigaris arch</h2>
        <span className="introEx__slogan">natural born experts</span>
        <ul className="introEx__details">
          <li>design buildings and public places that unite communities not separate them.</li>
          <li>strengthen our client's brand and identity, once it is done it will be straight to the next level.</li>
          <li>collaboration with our planners, consultants, engineers to create transformative urban environments.</li>
          <li>innovative ideas that make everything we work on unique in every sense of the word.</li>
          <li>at the end, we make cities building and people give them life.</li>
        </ul>
      </div>
      <div className="introEx__container">
        <img className="introEx__img introEx__img--1" src={BuildingOne} alt="builing" />
        <img className="introEx__img introEx__img--2" src={BuildingTwo} alt="builing" />
      </div>
    </div>
  );
}
