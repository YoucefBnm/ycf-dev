import React from 'react';
import Youcef from '../../img/youcef.jpg';

export default () =>{
  return (
    <section className="about">
      <div className="about__container responsive-grid responsive-grid--32">
        <img className="about__img" src={Youcef} alt="youcef" />

        <div className="about__content">
          <h3 className="about__heading">Youcef BNM front end developer</h3>
          <p className="about__text">
            Lives in Oran <a href="#contact">Algeria</a>.
            Youcef or Josef, spend most of his time coding and developing
            his skills in web development he is more than ready to go to the next level
             as a professional web developer, very passionate about
             computer science in general and specifically web development.
             having also a bachelor degree in "management" so he is familiar
              with leadership managing tasks finance accounting.
          </p>
        </div>
      </div>
    </section>
  );
}
