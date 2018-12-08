import React from 'react';
import './_cardEx.scss';

export default () =>{
  return (
    <section className="cardsLay">
      <div className="exCard">
        <div className="exCard__side exCard__side-front">
          <div className="exCard__heading exCard__heading--1">
            <span className="exCard__heading-title exCard__heading-title--1">
              The Sea Explorer
            </span>
          </div>

          <div className="exCard__detail">
            <ul>
              <li>3 day tours</li>
              <li>up to 30 people</li>
              <li>sleep in cozy hotels</li>
              <li>2 tour guides</li>
              <li>difficulty: easy</li>
            </ul>
          </div>
        </div>

        <div className="exCard__side exCard__side-back exCard__side-back--1">
          <p className="exCard__price">only 385$</p>
          <a href="/#" className="btn btn--red exCard__btn">book now</a>
        </div>
      </div>

      <div className="exCard">
        <div className="exCard__side exCard__side-front">
          <div className="exCard__heading exCard__heading--2">
            <span className="exCard__heading-title exCard__heading-title--2">
              the forest hiker
            </span>
          </div>

          <div className="exCard__detail">
            <ul>
              <li>7 day tours</li>
              <li>up to 40 people</li>
              <li>sleep in provided tents</li>
              <li>6 tour guides</li>
              <li>difficulty: meduim</li>
            </ul>
          </div>
        </div>

        <div className="exCard__side exCard__side-back exCard__side-back--2">
          <p className="exCard__price">only 540$</p>
          <a href="/#" className="btn btn--green exCard__btn">book now</a>
        </div>
      </div>

      <div className="exCard">
        <div className="exCard__side exCard__side-front">
          <div className="exCard__heading exCard__heading--3">
            <span className="exCard__heading-title exCard__heading-title--3">
              The Snow Adventurer
            </span>
          </div>

          <div className="exCard__detail">
            <ul>
              <li>5 day tours</li>
              <li>Up to 15 people</li>
              <li>sleep in provided tents</li>
              <li>5 tour guides</li>
              <li>difficulty: hard</li>
            </ul>
          </div>
        </div>

        <div className="exCard__side exCard__side-back exCard__side-back--3">
          <p className="exCard__price">only 959$</p>
          <a href="/#" className="btn btn--blue exCard__btn">book now</a>
        </div>
      </div>
    </section>
  );
}
