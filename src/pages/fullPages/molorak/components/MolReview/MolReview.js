import React from 'react';

const Icon = () =>{
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="molReviews__icon">
      <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z" />
    </svg>
  );
}

const RandomRobot = () =>{
  return <img src={`https://robohash.org/${Math.random()}?150x150`} alt="robot" />
}

export default () =>{
  return (
    <section className="molReviews">
      <div className="molReviews__container">
        <figure className="molReviews__review">
          <div className="molReviews__review-header">
            <RandomRobot />
            <p className="molReviews__name">Stephan Stephanson</p>
          </div>
          <blockquote className="molReviews__quote">
            what can I say? I'm not programmed to describe such an experience and the perfect service, everything was too perfect, I made lots of new friends, even though I'm programmed to be unsociable, I highly recommend MOLORAK, finally someone who can make the service fit the ad.
          </blockquote>
          <div className="molReviews__rating">
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
          </div>
        </figure>

        <figure className="molReviews__review">
          <div className="molReviews__review-header">
            <RandomRobot />
            <p className="molReviews__name">elian zabalez</p>
          </div>
          <blockquote className="molReviews__quote">
            this thing was different from any other experience I had before, from the beginning to the end, the places were imaginable, the guides were very humble even when I yell at them for no reason, and hotel workers were very kind they didn't even charge me for breaking the door I was a little..., briefly it was amazing.
          </blockquote>
          <div className="molReviews__rating">
            <Icon />
            <Icon />
            <Icon />
            <Icon />
          </div>
        </figure>
      </div>

      <div className="molReviews__recommend">
        <p className="molReviews__text">
          Yolanda and 3 other robots recommend MOLORAK.
        </p>
          <RandomRobot />
          <RandomRobot />
          <RandomRobot />
          <RandomRobot />
      </div>

    </section>
  );
}
