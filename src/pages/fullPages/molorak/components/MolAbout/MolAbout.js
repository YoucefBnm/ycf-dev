import React from 'react';

import AboutOne from '../../img/about-img-1.jpg'
import AboutTwo from '../../img/about-img-2.jpg'
import AboutThree from '../../img/about-img-3.jpg'

export default () =>{
  return (
    <section className="molAbout">
      <h2 className="heading--2 molAbout__heading">who are we</h2>

      <div className="molAbout__container">
        <div className="molAbout__imgs">
          <img src={AboutOne} alt="mountain" className="molAbout__img molAbout__img--1" />
          <img src={AboutTwo} alt="italy" className="molAbout__img molAbout__img--2" />
          <img src={AboutThree} alt="desert" className="molAbout__img molAbout__img--3" />
        </div>

        <div className="molAbout__detail">
          <p className="molAbout__text">
            <strong>MOLORAK </strong>Travel agency is not just for booking hotels and flights.
              we make sure that the places you visit is at the best core of what we do.
              we'll make you connect with people you meet even after the trip.
              from hooking you up with the best travel guides to make a memorable experience. planning a trip through us is unique, it's all about you.
          </p>

          <h3 className="molAbout__title">Start your awesome adventure now</h3>
          <a href="/#" className="btn btn--link molAbout__btn">
            book now <em className="arrow">&rarr;</em>
          </a>
        </div>
      </div>
    </section>
  );
}
